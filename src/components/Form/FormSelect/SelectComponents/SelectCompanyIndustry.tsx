import { FieldAttributes } from 'formik';
import Select from "react-select";

const companyIndustryOptions=[
    {
        label:"Aerospace",
        value:'Aerospace'
    },
    {
        label:"Transport",
        value:'Transport'
    },
    {
        label:"Computer",
        value:'Computer'
    },
    {
        label:"Telecommunication",
        value:'Telecommunication'
    },
    {
        label:"Agriculture",
        value:'Agriculture'
    },   
]

function SelectCompanyIndustry({value, setFieldValue, errors, touched}: FieldAttributes<any>) {
    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={null}
                isSearchable={true}
                name="companyIndustry"
                options={companyIndustryOptions}
                inputValue={value.value}
                onChange={(value: any)=>{
                    setFieldValue('companyIndustry', value.value);
                }}
                placeholder={'Company Industry'}
                defaultInputValue={value.companyIndustry}
            />
            {errors.companyIndustry && touched.companyIndustry ? <div className="error">{errors.companyIndustry}</div> : null}
        </>

    );
}

export default SelectCompanyIndustry;