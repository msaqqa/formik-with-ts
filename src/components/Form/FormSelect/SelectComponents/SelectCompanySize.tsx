import Select from "react-select";
import { FieldAttributes } from 'formik';

const companySizeOptions=[
    {
        label:"Small ",
        value:'Small '
    },
    {
        label:"Medium",
        value:'Medium'
    },
    {
        label:"Large ",
        value:'Large '
    },
]

function SelectCompanySize({setFieldTouched, value, setFieldValue, errors, touched}: FieldAttributes<any>) {
    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={null}
                isSearchable={true}
                name="companySize"
                options={companySizeOptions}
                inputValue={value.value}
                onChange={(value: any)=>{
                    setFieldValue('companySize', value.value);
                }}
                placeholder={'Company Size'}
                defaultInputValue={value.companySize}
            />
            {errors.companySize && touched.companySize ? <div className="error">{errors.companySize}</div> : null}
        </>

    );
}

export default SelectCompanySize;