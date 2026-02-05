import { FormProvider, useForm, type UseFormReturn } from "react-hook-form"
import { TextField } from "../controller/TextField"
import CheckOutForm from "./CheckOutForm"
import type { UserDetails } from "../types"

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

    const { register, handleSubmit, formState: { errors } } = methods

    const handleSubmitForm = (data: UserDetails) => {
        console.log(data)

    }


    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} noValidate className="space-y-5 w-full">
            <div className="grid grid-cols-2 gap-5">

                <TextField label="Order number" {...register('orderNo')} disabled />

                <TextField
                    type="number"
                    label="Mobile Number"
                    {...register('mobileNo', {
                        required: {
                            value: true,
                            message: "mobile is require"
                        },
                        minLength: {
                            value: 10,
                            message: "mobile number must be 10"
                        },
                        maxLength: {
                            value: 10,
                            message: "mobile number must be 10"
                        }
                    })}
                    error={errors.mobileNo}
                />

                <TextField
                    {...register('customerName', {
                        required: "customer name is require"
                    })}
                    label="Customer Name"
                    error={errors.customerName}
                />

                <TextField {...register('email', {
                    required: "email is require",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "please enter valid email"
                    },
                    validate: {
                        notFake: (value) => {
                            return value !== "email@gmail.com" || "this email Blocked"
                        }
                    }
                })}
                    type="email"
                    label="email"
                    error={errors.email} />


                <FormProvider {...methods}>
                    <CheckOutForm />
                </FormProvider>

                <TextField
                    {...register('address.streetAddress', {
                        required: "streetAddress is require"
                    })}
                    label="Street Address"
                    error={errors.address?.streetAddress}
                />
                <TextField
                    {...register('address.landMark', {
                        required: "land Mark is require"
                    })}
                    label="Land Mark"
                    error={errors.address?.landMark}
                />
                <TextField
                    {...register('address.city', {
                        required: "city is require"
                    })}
                    label="City"
                    error={errors.address?.city}
                />
                <TextField
                    {...register('address.countryState', {
                        required: "State is require"
                    })}
                    label="State"
                    error={errors.address?.countryState}
                />

            </div>
            <button type="submit" className="bg-amber-200 p-2">submit</button>
        </form>
    )
}
