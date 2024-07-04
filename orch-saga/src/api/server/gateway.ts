
import { Request, Response, Router } from 'express'
import { saga } from '../../ms/saga-service'

const gateway = Router()

interface IRequest {
  customerId: string,
  products: Array<{
    id: string,
    quantity: number,
    price: number
  }>
}

gateway.post('/checkout', async (req: Request, res: Response) => {
  const compensationActions = []
  const compensationValues = {}

  try {
    const body = req.body as IRequest
    Object.assign(compensationValues, { body: req.body })

    const customer = await saga['getCustomer'].execute({
      customerId: body.customerId
    })
    if(!customer) throw new Error('Get Customer Error')   
    compensationActions.push('getCustomer')
    Object.assign(compensationValues, { getCustomer: customer })

    const inventory = await saga['reserveInventory'].execute({
      products: body.products
    })
    if(!inventory) throw new Error('Reserve Inventory Error')    
    compensationActions.push('reserveInventory')
    Object.assign(compensationValues, { reserveInventory: inventory })

    const order = await saga['createOrder'].execute(compensationValues)
    if(!order) throw new Error('Create Order Error')    
    compensationActions.push('createOrder')
    Object.assign(compensationValues, { createOrder: order })

    const payment = await saga['processPayment'].execute({})
    if(!payment) throw new Error('Process Payment Error')    
    compensationActions.push('processPayment')
    Object.assign(compensationValues, { processPayment: payment })

    // send message to payment.changed <- order.update      
    const orderUpdated = await saga['updateOrder'].execute({})
    // if(!orderUpdated) throw new Error('Update Order Error')   
    compensationActions.push('updateOrder')
    Object.assign(compensationValues, { updateOrder: orderUpdated })

    return res.status(200).json({
      success: true,
      executions: compensationActions,
      data: compensationValues
    })
  } catch (err: any) {
      await Promise.all(
        compensationActions.map(async (action) => {
          await saga[action].compensation(compensationValues)
        })
      )

      return res.status(400).json({
        success: false,
        message: err.message,
        compensationActions,
        compensationValues,
      })
  }
})

export { gateway }
