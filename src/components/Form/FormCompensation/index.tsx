
import FormInput from "../FormInput"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactSelect from "../FormSelect"
import SelectCurrency from "../FormSelect/SelectComponents/SelectCurrency";
import {FieldAttributes} from "formik";

function FormCompensation({
        errors,
        touched,
    }:FieldAttributes<any>) 
{
    return (
        <>
            <h4>Compensation</h4>
            <div className="row">
                <div className="col">
                <FormInput
                        type="text"
                        name={"startSalary"}
                        placeholder={"Enter Start Salary"}
                        touched={touched}
                        errors={errors}
                        divClass={"mb-3"}
                        inputClass={"form-control"}
                    />
                </div>
                <div className="col">
                    <FormInput
                        type="text"
                        name={"endSalary"}
                        placeholder={"Enter End Salary"}
                        touched={touched}
                        errors={errors}
                        divClass={"mb-3"}
                        inputClass={"form-control"}
                    />
                </div>
                <div className="col">
                    <ReactSelect as={SelectCurrency}/>
                </div>
            </div>
        </>
    );
}

export default FormCompensation;