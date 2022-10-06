import { loadFilesSync, mergeTypeDefs } from 'graphql-tools'
import path from 'path'

const mergePath = loadFilesSync(path.join(__dirname, '../../../**/endpoint_graphql/*.gql'))

const typeDefs = mergeTypeDefs(mergePath)

export default typeDefs