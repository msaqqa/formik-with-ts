import Select from "react-select";
import {FieldAttributes} from "formik";

const colourOptions=[
    {
        label:"palestine",
        value:'palestine'
    },
    {
        label:"egypt",
        value:'egypt'
    }
]

function ReactSelectJobLocation({value, setFieldValue, errors, touched}: FieldAttributes<any>) {
    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={null}
                isSearchable={true}
                name="jobLocation"
                options={colourOptions}
                inputValue={value.value}
                onChange={(value: any)=>setFieldValue('jobLocation', value.value)}
                placeholder={'Job Location'}
                defaultInputValue={value.jobLocation}

            />
            {errors.jobLocation && touched.jobLocation ? <div className="error">{errors.jobLocation}</div> : null}
        </>
    );
}

export default ReactSelectJobLocation;