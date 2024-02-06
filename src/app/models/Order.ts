import { Client } from "./Client"

export interface Order {
    id: Number
    name: String
    orderNo: Number
    quantity: Number
    status: String
    creationDate: Date
    client: Client
}