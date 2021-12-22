import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyFormValues } from '../../@types/validations';

interface IProps {
    activeModal: string,
    closeModal(): void,
    handleSubmitDelete(): void
}

function DeleteModal({activeModal, closeModal, handleSubmitDelete}: IProps) {
    return (
        <Modal show={activeModal === 'delete'} onHide={closeModal} centered>
            <Modal.Body className="text-center">
            <div className="form-content p-2">
                <h4 className="modal-title">Delete</h4>
                <p className="mb-4">Are you sure want to delete?</p>
                <button type="button" className="btn btn-success mr-2"
                    onClick={handleSubmitDelete}>OK</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={closeModal}>Cancel</button>
            </div>
            </Modal.Body>
        </Modal>
    )
}

export default DeleteModal