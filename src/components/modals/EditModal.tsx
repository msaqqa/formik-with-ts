import { Modal } from 'react-bootstrap';
import {Formik} from 'formik'
import {validationSchema} from "../../utils/validations";
import CustomForm from "../Form";
import { MyFormValues } from '../../@types/validations';

interface Iworks extends MyFormValues{
    id:string
}

interface IProps {
    workEdit: Iworks,
    activeModal: string,
    closeModal(): void,
    handleSubmitEdit:(values:MyFormValues)=>void
}

function EditModal({workEdit, activeModal, closeModal, handleSubmitEdit}: IProps) {

    const initialValues: MyFormValues = {
        ...workEdit
    };

  return (
    <Modal size="lg" show={activeModal === 'edit'} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <h5 className="modal-title">Edit Work</h5>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          onSubmit={(values: MyFormValues) => handleSubmitEdit(values)}
          validationSchema={validationSchema}
          children={CustomForm}
        />
      </Modal.Body>
    </Modal>
  )
}

export default EditModal