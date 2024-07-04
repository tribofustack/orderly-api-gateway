import { SagaService } from '../saga-service'

interface ReserveInventoryParams {
    products: Array<{
        id: string,
        quantity: number,
        price: number
    }>
}
interface ReserveInventoryResult {}

const reserveInventory: SagaService<ReserveInventoryParams, ReserveInventoryResult> = {
    execute: async (params: ReserveInventoryParams) => {
        console.log('execute reserveInventory for products: ', params.products.map(p => p.id))
        return true
    },
    compensation: async () => {
        console.log('compensation reserveInventory')
        return true
    }
}

export {
    reserveInventory
}