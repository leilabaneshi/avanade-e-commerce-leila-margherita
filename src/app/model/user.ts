export interface User {
  id: number,
  name: string,
  surname: string,
  shippingAddress: {
    city: string,
    street: string
  }
}
