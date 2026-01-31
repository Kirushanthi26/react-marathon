import type { FieldError } from "react-hook-form"

import { forwardRef, type ForwardedRef } from "react"
import type { SelectOptionType } from "../types"


type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string
    options: SelectOptionType[]
    error?: FieldError
}

export const SelectField = forwardRef((props: SelectFieldProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { label, options, error, ...other
    } = props
    return (
        <div>
            <label>{label}</label>
            <br />
            <select className="border border-gray-500 p-2" ref={ref} {...other}>

                {options.map((item, index) => <option key={index} value={item.value}>{item.label}</option>)}
            </select>
            <p className="text-red-500">{error?.message}</p>
        </div>
    )
})


