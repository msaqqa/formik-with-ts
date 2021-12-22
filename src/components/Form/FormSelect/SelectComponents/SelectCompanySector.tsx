import Select from "react-select";
import { FieldAttributes } from 'formik';

const companySectorOptions=[
    {
        label:"Energy",
        value:'Energy'
    },
    {
        label:"Materials",
        value:'Materials'
    },
    {
        label:"Health",
        value:'Health'
    },
    {
        label:"Financials",
        value:'Financials'
    },
    {
        label:"Information Technology",
        value:'Information Technology'
    }
]

function SelectCompanySector({value, setFieldValue, setFieldTouched, errors, touched}: FieldAttributes<any>) {
    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={null}
                isSearchable={true}
                name="companySector"
                options={companySectorOptions}
                inputValue={value.value}
                onChange={(value: any)=>{
                    setFieldValue('companySector', value.value);
                }}
                placeholder={'Company Sector'}
                defaultInputValue={value.companySector}
            />
            {errors.companySector && touched.companySector ? <div className="error">{errors.companySector}</div> : null}
        </>

    );
}

export default SelectCompanySector;