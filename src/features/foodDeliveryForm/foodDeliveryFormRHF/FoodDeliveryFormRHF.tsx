import { useForm } from "react-hook-form"

type UserDetails = {
    customerName: string
    mobileNo: string
    orderNo: number
    email: string
}

export default function FoodDeliveryFormRHF() {
    const { register, handleSubmit, formState: { errors } } = useForm<UserDetails>({
        mode: "onSubmit",
        defaultValues: {
            customerName: "",
            mobileNo: "",
            orderNo: new Date().valueOf(),
            email: ""
        }
    })

    const handleSubmitForm = (data: UserDetails) => {
        console.log(data)

    }

    const onError = (error: any) => {
        console.log(error)
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitForm, onError)} noValidate className="space-y-5 w-full">
            <div className="grid grid-cols-2  gap-5">
                <div>
                    <input type="text" placeholder="Order number" className="border border-gray-500 p-2" {...register('orderNo')} disabled />
                </div>
                <div>
                    <input type="number" placeholder="Mobile Number" className="border border-gray-500 p-2" {...register('mobileNo', {
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
                    })} />
                    {errors.mobileNo && <p className="text-red-500">{errors.mobileNo.message}</p>}
                </div>
                <div>
                    <input type="text" placeholder="Customer Name" className="border border-gray-500 p-2" {...register('customerName', {
                        required: "customer name is require"
                    })} />
                    {errors.customerName && <p className="text-red-500">{errors.customerName.message}</p>}
                </div>
                <div>
                    <input type="email" placeholder="email" className="border border-gray-500 p-2" {...register('email', {
                        required: "email is require",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "please enter valid email"
                        }
                    })} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
            </div>
            <button type="submit" className="bg-amber-200 p-2">submit</button>
        </form>
    )
}
