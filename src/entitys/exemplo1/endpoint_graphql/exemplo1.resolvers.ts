import { exemplo1Inicio } from '@src/entitys/exemplo1/endpoint_graphql/handlers/exemplo1'
import { createExemplo1 } from '@src/entitys/exemplo1/endpoint_graphql/handlers/create_exemplo1'

export default {
    Query: {
        exemplo1Inicio,
    },

    Mutation: {
        createExemplo1,
    }
}