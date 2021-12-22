import Select from "react-select";
import { FieldAttributes } from 'formik';

const selectCurrencyOptions=[
    {
        label:"US Dollar",
        value:'US Dollar'
    },
    {
        label:"UK Pound",
        value:'UK Pound'
    },
    {
        label:"Euro",
        value:'Euro'
    },
]

function SelectCurrency({setFieldTouched, value, setFieldValue, errors, touched}: FieldAttributes<any>) {
    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={null}
                isSearchable={true}
                name="currency"
                options={selectCurrencyOptions}
                inputValue={value.value}
                onChange={(value: any)=>{
                    setFieldValue('currency', value.value);
                }}
                placeholder={'Select Currency'}
                defaultInputValue={value.currency}
            />
            {errors.currency && touched.currency ? <div className="error">{errors.currency}</div> : null}
        </>

    );
}

export default SelectCurrency;