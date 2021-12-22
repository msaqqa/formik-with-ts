import {Form, FormikProps} from "formik";
import FormInput from "./FormInput";
import {MyFormValues} from "../../@types/validations";
import ReactSelect from "./FormSelect";
import ReactSelectJobTitle from "./FormSelect/SelectComponents/ReactSelectJobTitle";
import ReactSelectJobField from "./FormSelect/SelectComponents/ReactSelectJobField";
import ReactSelectJobLocation from "./FormSelect/SelectComponents/ReactSelectJobLocation";
import SelectCompanyIndustry from "./FormSelect/SelectComponents/SelectCompanyIndustry";
import SelectCompanySector from "./FormSelect/SelectComponents/SelectCompanySector";
import SelectCompanySize from "./FormSelect/SelectComponents/SelectCompanySize";
import FormCompensation from "./FormCompensation";

function CustomForm (props: FormikProps<MyFormValues>) {
    const {errors, touched, values} = props;
    return (
        <Form>
            <h4>Job Details</h4>
            <ReactSelect as={ReactSelectJobTitle} />
            <ReactSelect as={ReactSelectJobField}/>
            <ReactSelect as={ReactSelectJobLocation}/>
            {/* <FormDatePicker as={StartDate} /> */}
            <FormInput
                type="date"
                name={"startDate"}
                touched={touched}
                errors={errors}
                divClass={"mb-3"}
                inputClass={"form-control"}
            />
            {/* {!(values.currentlyWork)&&<FormDatePicker as={EndDate} />} */}
            {
                !(values.currentlyWork)&&
                <FormInput
                    type="date"
                    name={"endDate"}
                    touched={touched}
                    errors={errors}
                    divClass={"mb-3"}
                    inputClass={"form-control"}
                />
            }
            <FormInput
                label={'Currently Work There'}
                type={'checkbox'}
                name={"currentlyWork"}
                placeholder={"Currently Work"}
                touched={touched}
                errors={errors}
                divClass={"mb-3 form-check"}
                inputClass={"form-check-input"}
            />
            <FormInput
                component={"textarea"}
                name={"jobDescription"}
                placeholder={"Job Description"}
                touched={touched}
                errors={errors}
                divClass={"mb-3"}
                inputClass={"form-control"}
            />
            <h4>Company Details</h4>
            <FormInput
                type="text"
                name={"companyName"}
                placeholder={"Company Name"}
                touched={touched}
                errors={errors}
                divClass={"mb-3"}
                inputClass={"form-control"}
            />
            <FormInput
                type="text"
                name={"companyAddress"}
                placeholder={"Company Address"}
                touched={touched}
                errors={errors}
                divClass={"mb-3"}
                inputClass={"form-control"}
            />
            <ReactSelect as={SelectCompanyIndustry}/>
            <ReactSelect as={SelectCompanySize}/>
            <ReactSelect as={SelectCompanySector}/>
            <FormInput
                type="text"
                name={"supervisorName"}
                placeholder={"Supervisor Name"}
                touched={touched}
                errors={errors}
                divClass={"mb-3"}
                inputClass={"form-control"}
            />
            <FormInput
                type="number"
                name={"employeesNum"}
                placeholder={"# of Employees Supervisor by You"}
                touched={touched}
                errors={errors}
                divClass={"mb-3"}
                inputClass={"form-control"}
            />
            { !(values.currentlyWork)&&
                <FormInput
                    type="text"
                    name={"reasonLeaving"}
                    placeholder={"Eeason of Leaving"}
                    touched={touched}
                    errors={errors}
                    divClass={"mb-3"}
                    inputClass={"form-control"}
                />
            }
            <FormCompensation
                errors={errors}
                touched={touched}
            />

            <button type="submit" className="btn btn-primary">submit</button>
        </Form>
    )
}

export default CustomForm