import Select from "react-select";
import {FieldAttributes} from "formik";

const jobTitleOptions=[
    {
        label:"Software Engineer",
        value:'Software Engineer'
    },
    {
        label:"Sales Manager",
        value:'Sales Manager'
    },
    {
        label:"Nurse",
        value:'Nurse'
    }
]

function ReactSelectJobTitle({value, setFieldValue, errors, touched}: FieldAttributes<any>) {
    // console.log("test",value, errors, touched);
    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={null}
                isSearchable={true}
                name="jobTitle"
                options={jobTitleOptions}
                inputValue={value.value}
                onChange={(value: any)=>{
                    setFieldValue('jobTitle', value.value);
                }}
                placeholder={'Job Title'}
                defaultInputValue={value.jobTitle}

            />
            {errors.jobTitle && touched.jobTitle ? <div className="error">{errors.jobTitle}</div> : null}
        </>
    );
}

export default ReactSelectJobTitle;