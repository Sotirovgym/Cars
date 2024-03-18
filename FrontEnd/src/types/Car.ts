import { User } from "./User"

export interface Car{
  _id: string,
  likes: string[],
  owner: User,
  createdOn: Date,
  title: string,
  brand: string,
  model: string,
  year: number,
  mileage: number,
  engine: string,
  region: string,
  image: string,
  description: string,
  price: number,
  __v: number
}
