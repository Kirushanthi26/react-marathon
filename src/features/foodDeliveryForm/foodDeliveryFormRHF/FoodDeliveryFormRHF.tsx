import { FormProvider, useForm, type UseFormReturn } from "react-hook-form"
import CheckOutForm from "./components/CheckOutForm"
import type { UserDetails } from "../types"
import AddressForm from "./components/AddressForm"
import FoodDeliveryMasterFrom from "./components/FoodDeliveryMasterFrom"
import SubmitButton from "../controller/SubmitButton"

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

    const { handleSubmit, control } = methods

    const handleSubmitForm = async (data: UserDetails) => {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        console.log(data)

    }

    console.log("main form")
    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} noValidate className="space-y-5 w-full">
            <FormProvider {...methods}>
                <div className="grid grid-cols-2 gap-5">
                    <FoodDeliveryMasterFrom />
                    <CheckOutForm />
                    <AddressForm />
                </div>
            </FormProvider>
            <SubmitButton control={control} />
        </form>
    )
}
