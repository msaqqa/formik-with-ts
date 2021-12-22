import { Modal } from 'react-bootstrap';
import {Formik} from "formik";
import {validationSchema} from "../../utils/validations";
import CustomForm from "../Form";
import { MyFormValues } from '../../@types/validations';

interface IProps {
    activeModal: string,
    closeModal(): void,
    handleSubmitAdd:(values:MyFormValues)=>void
}

function AddModal({activeModal, closeModal, handleSubmitAdd}: IProps) {
    const initialValues: MyFormValues = {
        jobTitle: '',
        jobField: '',
        jobLocation: '',
        startDate: new Date(),
        endDate: new Date(),
        currentlyWork: false,
        jobDescription: '',
        companyName: '',
        companyAddress: '',
        companyIndustry: '',
        companySize: '',
        companySector: '',
        supervisorName: '',
        employeesNum: '',
        reasonLeaving: '',
        startSalary: '',
        endSalary: '',
        currency: ''
    };



    
    return (
        <Modal size="lg" show={activeModal === 'add'} onHide={closeModal} centered>
            <Modal.Header closeButton>
            <h5 className="modal-title">Add Education</h5>
            </Modal.Header>
            <Modal.Body>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values: MyFormValues) => handleSubmitAdd(values)}
                    validationSchema={validationSchema}
                    children={CustomForm}
                />
            </Modal.Body>
        </Modal>
    )
}

export default AddModal