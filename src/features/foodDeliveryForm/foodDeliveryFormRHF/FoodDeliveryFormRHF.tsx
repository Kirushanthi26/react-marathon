import { FormProvider, useForm, type UseFormReturn } from "react-hook-form"
import CheckOutForm from "./components/CheckOutForm"
import type { UserDetails } from "../types"
import AddressForm from "./components/AddressForm"
import FoodDeliveryMasterFrom from "./components/FoodDeliveryMasterFrom"

export default function FoodDeliveryFormRHF() {
    const methods: UseFormReturn<UserDetails> = useForm<UserDetails>({
        mode: "onSubmit",
        defaultValues: {
            customerName: "",
            mobileNo: "",
            orderNo: new Date().valueOf(),
            email: "",
            paymentMethod: "",
            deliveryIn: 0,
            address: {
                streetAddress: "",
                landMark: "",
                city: "",
                countryState: "",
            }
        }
    })

    const { handleSubmit } = methods

    const handleSubmitForm = (data: UserDetails) => {
        console.log(data)

    }


    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} noValidate className="space-y-5 w-full">
            <div className="grid grid-cols-2 gap-5">

                <FormProvider {...methods}>
                    <FoodDeliveryMasterFrom />
                    <CheckOutForm />
                    <AddressForm />
                </FormProvider>

            </div>
            <button type="submit" className="bg-amber-200 p-2">submit</button>
        </form>
    )
}
