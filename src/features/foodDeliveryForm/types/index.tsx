export type checkoutForm = {
    paymentMethod: string
    deliveryIn: number
}


export type UserDetails = {
    customerName: string
    mobileNo: string
    orderNo: number
    email: string
    address: {
        streetAddress: string
        landMark: string
        city: string
        countryState: string
    }
} & checkoutForm


export type SelectOptionType = {
    label: string,
    value: string
} | {
    label: string,
    value: number
}