import { getCustomer } from './checkin/customer'
import { reserveInventory } from './checkin/product'
import { createOrder, updateOrder } from './checkout/order'
import { processPayment } from './financial/payment'

export interface SagaService<Params, Result> {
    execute: (params: Params) => Promise<Result>
    compensation: (params: Params) => Promise<Result>
}

export const saga: {
    [name: string]: SagaService<any, any>
} = {
    ['getCustomer']: getCustomer,
    ['updateOrder']: updateOrder,
    ['reserveInventory']: reserveInventory,
    ['createOrder']: createOrder,
    ['processPayment']: processPayment,
}
