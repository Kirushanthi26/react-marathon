import { useForm } from "react-hook-form"
import { TextField } from "../controller/TextField"
import { SelectField } from "../controller/SelectField"
import type { SelectOptionType } from "../types"


type UserDetails = {
    customerName: string
    mobileNo: string
    orderNo: number
    email: string
    paymentMethod: string
    deliveryIn: number
}


const paymentMethods: SelectOptionType[] = [
    { label: "Select", value: "" },
    { label: "Bank Transfer", value: "bankTransfer" },
    { label: "Card", value: "card" },
    { label: "Cash on delivery", value: "COD" },
]

const deliveryInTimes: SelectOptionType[] = [
    { label: "Select", value: 0 },
    { label: "Half an Hour", value: 30 },
    { label: "1 hour", value: 60 },
    { label: "2 hour", value: 120 },
]

export default function FoodDeliveryFormRHF() {
    const { register, handleSubmit, formState: { errors } } = useForm<UserDetails>({
        mode: "onSubmit",
        defaultValues: {
            customerName: "",
            mobileNo: "",
            orderNo: new Date().valueOf(),
            email: "",
            paymentMethod: "",
            deliveryIn: 0
        }
    })

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


                <div>list of delivery food items </div>
                <div></div>
                {/* drop down for payment method  */}
                <SelectField
                    label="Payment method"
                    options={paymentMethods}
                    {...register('paymentMethod', {
                        required: "please select one payment method"
                    })}
                    error={errors.paymentMethod}
                />

                {/* drop down for delivery time */}
                <SelectField
                    label="Delivery Time"
                    options={deliveryInTimes}
                    {...register('deliveryIn', {
                        required: "please select delivery time"
                    })}
                    error={errors.deliveryIn}
                />


                <div>delivery address</div>
            </div>
            <button type="submit" className="bg-amber-200 p-2">submit</button>
        </form>
    )
}
