import { useFormContext } from "react-hook-form"
import { TextField } from "../../controller/TextField"
import type { FoodDeliveryMasterFromType } from "../../types"


const FoodDeliveryMasterFrom = () => {
    const { register, formState: { errors } } = useFormContext<FoodDeliveryMasterFromType>()
    return (
        <>
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
        </>
    )
}

export default FoodDeliveryMasterFrom
