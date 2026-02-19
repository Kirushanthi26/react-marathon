import { useFieldArray, useFormContext, useFormState } from "react-hook-form"
import type {
    // FoodItemType, 
    UserDetails
} from "../../types"
import { TextField } from "../../controller/TextField"


const FoodItems = () => {
    //const { register } = useFormContext<{foodItems: FoodItemType[]}>()
    const { register } = useFormContext<UserDetails>()
    const { errors } = useFormState<UserDetails>({ name: "foodItems" })

    const { fields } = useFieldArray<UserDetails>({ name: "foodItems" })

    return (
        <table>
            <tr>
                <th>Food</th>
                <th>Quantity</th>
            </tr>
            {fields.map((field, index) =>
                <tr key={field.id}>
                    <td>
                        <TextField
                            {...register(`foodItems.${index}.name`, {
                                required: "Food details is require"
                            })}
                            placeholder={`Food ${index + 1}`}
                            error={errors.foodItems && errors.foodItems[index]?.name}
                        />
                    </td>
                    <td>
                        <TextField
                            {...register(`foodItems.${index}.quantity`, {
                                required: "quantity details is require"
                            })}
                            placeholder="quantity"
                            type="number"
                            min={0}
                            error={errors.foodItems && errors.foodItems[index]?.quantity}
                        />
                    </td>
                </tr>
            )}
        </table>
    )
}

export default FoodItems
