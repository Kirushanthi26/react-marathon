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

    const { fields,
        append, //Append input/inputs to the end of your fields and focus. 
        remove,
        update

    } = useFieldArray<UserDetails>({ name: "foodItems" })

    const handleAddRow = () => {
        append({ name: "food append test", quantity: 8 }, {
            focusName: "foodItems.0.quantity"
        })
    }

    return (
        <table>
            <tr>
                <th>Food</th>
                <th>Quantity</th>
                <th>
                    <button onClick={handleAddRow} className="bg-pink-500 p-1"
                        type="button"
                    >
                        Add
                    </button>
                </th>
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
                    <td>
                        <button type="button"
                            onClick={() => remove(index)}
                            className="bg-red-300 p-1"
                        >
                            delete
                        </button>
                    </td>
                </tr>
            )}

            <button type="button"
                className="bg-yellow-200"
                onClick={() => update(2, { name: "food update", quantity: 4 })}
            >
                update
            </button>
        </table>
    )
}

export default FoodItems
