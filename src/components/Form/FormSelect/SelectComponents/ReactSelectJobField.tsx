import Select from 'react-select';
import {FormikProps, FieldConfig, FieldAttributes} from "formik";

const jobFieldOptions = [
    {
        label:"Communications",
        value:'Communications'
    },
    {
        label:"Business",
        value:'Business'
    },
    {
        label:"Education",
        value:'Education'
    },
    {
        label:"Science and technology",
        value:'Science and technology'
    },
    {
        label:"Health and medicine",
        value:'Health and medicine'
    }
]



function ReactSelectJobField({value, setFieldValue, errors, touched}: FieldAttributes<any>) {
    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                isSearchable={true}
                name="jobField"
                options={jobFieldOptions}
                inputValue={value.value}
                onChange={(value: any)=>setFieldValue('jobField', value.value)}
                placeholder={'Job Field'}
                defaultInputValue={value.jobField}
            />
            {errors.jobField && touched.jobField ? <div className="error">{errors.jobField}</div> : null}
        </>

    );
}

export default ReactSelectJobField;