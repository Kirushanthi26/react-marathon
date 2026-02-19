import { forwardRef, type ForwardedRef } from "react"
import type { FieldError } from "react-hook-form"

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    error?: FieldError
}

export const TextField = forwardRef((props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type = "text", label, className = "", error, ...other } = props
    return (
        <div>
            {label && <label>{label}</label>}
            <br />
            <input
                type={type}
                className={`border border-gray-500 p-2 my-2 ${className}`}
                ref={ref}
                {...other}
            />
            <p className="text-red-500">{error?.message}</p>
        </div>
    )
})
