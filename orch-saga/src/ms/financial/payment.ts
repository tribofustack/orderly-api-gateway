import { SagaService } from '../saga-service'

const processPayment: SagaService<any, any> = {
    execute: async () => {
        console.log('execute processPayment')
        return true
    },
    compensation: async () => {
        console.log('compensation processPayment')
        return true
    }
}

export {
    processPayment
}