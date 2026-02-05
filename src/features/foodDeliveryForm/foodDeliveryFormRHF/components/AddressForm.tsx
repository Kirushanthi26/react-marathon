import { useFormContext } from "react-hook-form"
import { TextField } from "../../controller/TextField"
import type { AddressType } from "../../types"

const AddressForm = () => {
    const { register, formState: { errors } } = useFormContext<{ address: AddressType }>()
    return (
        <>
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
        </>
    )
}

export default AddressForm
