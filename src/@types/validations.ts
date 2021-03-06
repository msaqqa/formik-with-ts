export interface MyFormValues {
  jobTitle: string,
  jobField: string,
  jobLocation: string,
  startDate: Date,
  endDate?: Date,
  currentlyWork?: boolean,
  jobDescription?: string,
  companyName: string,
  companyAddress: string,
  companyIndustry: string,
  companySize: string,
  companySector: string,
  supervisorName: string,
  employeesNum: number | '',
  reasonLeaving?: string,
  startSalary: number | '',
  endSalary: number | '',
  currency: string
}