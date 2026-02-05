import { useFormContext } from "react-hook-form"
import { SelectField } from "../controller/SelectField"
import type { checkoutForm, SelectOptionType } from "../types"

const paymentMethods: SelectOptionType[] = [
    { label: "Select", value: "" },
    { label: "Bank Transfer", value: "bankTransfer" },
    { label: "Card", value: "card" },
    { label: "Cash on delivery", value: "COD" },
]

const deliveryInTimes: SelectOptionType[] = [
    { label: "Select", value: "" },
    { label: "Half an Hour", value: 30 },
    { label: "1 hour", value: 60 },
    { label: "2 hour", value: 120 },
]

const CheckOutForm = () => {
    const { register, formState: { errors } } = useFormContext<checkoutForm>()
    return (
        <>
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
                    required: "please select delivery time",
                    valueAsNumber: true,
                })}
                error={errors.deliveryIn}
            />
        </>
    )
}

export default CheckOutForm
