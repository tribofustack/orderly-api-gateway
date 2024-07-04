import { SagaService } from '../saga-service'

interface CreateOrderParams {
    customerId: string,
    products: Array<{
      id: string,
      quantity: number,
      price: number
    }>
  }

const createOrder: SagaService<CreateOrderParams, any> = {
    execute: async (params: CreateOrderParams) => {
        console.log('execute createOrder', params)
        return true
    },
    compensation: async () => {
        console.log('compensation createOrder')
        return true
    }
}

const updateOrder: SagaService<any, any> = {
    execute: async () => {
        console.log('execute updateOrder')
        return true
    },
    compensation: async () => {
        console.log('compensation updateOrder')
        return true
    }
}

export {
    createOrder,
    updateOrder
}