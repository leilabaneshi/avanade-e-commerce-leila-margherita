export interface User {
  id: number,
  name: string,
  surname: string,
  shippingAddres: {
    city: string,
    street: string
  }
}
