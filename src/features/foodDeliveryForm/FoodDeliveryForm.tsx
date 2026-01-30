import { useState, type ChangeEvent, type FormEvent } from "react"

type UserDetails = {
    customerName: string
    mobileNo: string
}

export default function FoodDeliveryForm() {
    const [userDetails, setUserDetails] = useState<UserDetails>({
        customerName: "",
        mobileNo: ""
    })

    const handleCustomerName = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setUserDetails({ ...userDetails, [name]: value })

    }

    const handleMobileNo = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setUserDetails({ ...userDetails, [name]: +value })

    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(userDetails)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <input type="text" name="customerName" placeholder="Customer Name" value={userDetails?.customerName} onChange={handleCustomerName} className="border border-gray-500 p-2" />
            </div>
            <div>
                <input type="number" name="mobileNo" placeholder="Mobile Number" value={userDetails?.mobileNo} onChange={handleMobileNo} className="border border-gray-500 p-2" />
            </div>
            <button type="submit" className="bg-amber-200 p-2">submit</button>
        </form>
    )
}

