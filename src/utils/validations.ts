import * as yup from "yup";
import { MyFormValues } from "../@types/validations";

export const validationSchema = (): yup.SchemaOf<MyFormValues> => {
  return yup.object().shape({
    jobTitle:yup.string()
      .required("Please select job title"),
    jobField:yup.string()
      .required("Please select job field"),
    jobLocation:yup.string()
      .required("Please select job location"),
    startDate:yup.date()
      .required("Please Enter Start Date"),
    endDate:yup.date()
      .when("currentlyWork", {
        is: (currentlyWork: boolean)=>{
          return !currentlyWork? true : false;
        }, then: yup.date()
          .min(yup.ref('startDate'), "End date can't be before start date")
          .required("Please Enter End Date")
      }),
    currentlyWork:yup.bool(),
    jobDescription:yup.string()
      .max(200,"Min 200 Char"),
    companyName:yup.string()
      .required("Company name is required"),
    companyAddress:yup.string()
      .required("Company address is required"),
    companyIndustry:yup.string()
      .required("Please select company industry"),
    companySize:yup.string()
      .required("Please select company size"),
    companySector:yup.string()
      .required("Please select company sector"),
    supervisorName:yup.string()
      .required("Please enter supervisor name"),
    employeesNum:yup.number().integer().positive()
      .required("Please enter employees number"),
    reasonLeaving:yup.string()
    .when("currentlyWork", {
      is: (currentlyWork: boolean) => {
        return !currentlyWork? true : false;
      }, then: yup.string()
        .required("Please enter reason leaving")
    }),
    startSalary:yup.number().positive()
      .required("Please Enter Start Salary"),
    endSalary:yup.number().positive()
      .required("Please Enter End Salary"),
    currency:yup.string()
      .required("Please Select Currency"),
  })
}

export default validationSchema;