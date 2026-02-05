export type checkoutForm = {
    paymentMethod: string
    deliveryIn: number
}

export type AddressType = {
    streetAddress: string
    landMark: string
    city: string
    countryState: string
}

export type FoodDeliveryMasterFromType = {
    customerName: string
    mobileNo: string
    orderNo: number
    email: string
}


export type UserDetails = {

    address: AddressType
} & checkoutForm & FoodDeliveryMasterFromType


export type SelectOptionType = {
    label: string,
    value: string
} | {
    label: string,
    value: number
}