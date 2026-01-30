import { useForm } from "react-hook-form"

type UserDetails = {
    customerName: string
    mobileNo: string
}

export default function FoodDeliveryFormRHF() {
    const { register, handleSubmit, formState: { errors } } = useForm<UserDetails>()

    const handleSubmitForm = (data: UserDetails) => {
        console.log(data)

    }

    const onError = (error: any) => {
        console.log(error)
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitForm, onError)} className="space-y-5">
            <div>
                <input type="text" placeholder="Customer Name" className="border border-gray-500 p-2" {...register('customerName', {
                    required: "customer name is require"
                })} />
                {errors.customerName && <p className="text-red-500">{errors.customerName.message}</p>}
            </div>
            <div>
                <input type="number" placeholder="Mobile Number" className="border border-gray-500 p-2" {...register('mobileNo', {
                    required: "mobile is require"
                })} />
                {errors.mobileNo && <p className="text-red-500">{errors.mobileNo.message}</p>}
            </div>
            <button type="submit" className="bg-amber-200 p-2">submit</button>
        </form>
    )
}
