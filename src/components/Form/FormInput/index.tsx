import {Field, FieldAttributes} from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';

interface OtherProps extends FieldAttributes<any> {
    label?: string,
    divClass: string,
    inputClass: string,
}

function FormInput ({
        type,
        name,
        placeholder,
        errors,
        touched,
        divClass,
        inputClass,
        label,
        component="input",
        onFocus,
        ref,
    }: OtherProps)
    {
    return (
        <div className={divClass}>
            <Field
                type={type}
                name={name}
                placeholder={placeholder}
                autoComplete={'off'}
                className={inputClass}
                component={component}
                onFocus={onFocus}
                ref={ref}
            />
            {label && <label className="form-check-label" id={name}>{label}</label>}
            {errors[name] && touched[name] ? <div className="error">{errors[name]}</div> : null}
        </div>
    );
}

export default FormInput;