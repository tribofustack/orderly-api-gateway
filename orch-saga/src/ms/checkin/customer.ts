import { SagaService } from '../saga-service'

interface GetCustomerParams {
    customerId: string
}
interface GetCustomerResult {
    
}

const getCustomer: SagaService<GetCustomerParams, GetCustomerResult> = {
    execute: async (params: GetCustomerParams): Promise<GetCustomerResult> => {
        console.log('execute get customer with id:', params.customerId)
        return true
    },
    compensation: async () => {
        console.log('compensation get customer')
        return true
    }
}

export {
    getCustomer
}