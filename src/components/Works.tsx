import { useState } from 'react';
import { number } from 'yup';
import { array } from 'yup/lib/locale';
import { MyFormValues } from '../@types/validations';
import AddModal from './modals/AddModal';
import EditModal from './modals/EditModal';
import DeleteModal from './modals/DeleteModal';

interface Iworks extends MyFormValues{
    id:string
}

function WorkExperience () {
  // state values
  const [activeModal, setActiveModal] = useState('');
  const [works, setWorks] = useState<Array<Iworks>>([]);
  const [workEdit, setWorkEdit] = useState({});
  const [itemId, setItemId] = useState<string>(String(Math.random()));

  const openModal = (type: string) => {
	  setActiveModal(type);
  }

	const closeModal = ():void => {
		setActiveModal('false');
  };

  const handleSubmitAdd = (values: MyFormValues): void => {
    console.log("enter   this  section");
    let  newWork={
        id: String(Math.random()*100),
        ...values
    } as  Iworks
    setWorks(works.concat(newWork));
    closeModal();
  }

  const handleEditButton = (id: string) => {
    const values = works.filter(item => item.id===id)
    setItemId(id);
    setWorkEdit({...values});
    openModal('edit');
  }

  const handleSubmitEdit = (values: Iworks):void => {
    console.log(values)
    const elementsIndex = works.findIndex(element => element.id===itemId );
    works[elementsIndex] = {...values};
    setWorks([...works]);
    closeModal();
  }

  const handleDeleteButton = (id: string) => {
    setItemId(id);
    openModal("delete");
  }

    const handleSubmitDelete =()=>{
        const elementsIndex = works.findIndex(element => element.id===itemId );
        works.splice(elementsIndex, 1);
        setWorkEdit(works);
        closeModal();
    }

  
  return (
    <div className="content">
      <div className="container">

        <div className="card">
          <div className="card-body">
            <button className="btn btn-success" onClick={()=>openModal('add')}>Add Work</button>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Work Experience</h4>
            <div className="card card-table mb-0">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Field</th>
                        <th>Location</th>
                        <th className="text-center">start</th>
                        <th className="text-center">End || Currently</th>
                      </tr>
                    </thead>
                    <tbody>
                      {works.map(item=>{
                        return(
                          <tr key={String(item.id)}>
                            <td>{item.jobTitle}</td>
                            <td>{item.jobField}</td>
                            <td>{item.jobLocation}</td>
                            <td className="text-center">{item.startDate}</td>
                            {
                              item.currentlyWork? <td className="text-center">currently work</td>:
                              <td className="text-center">{item.endDate}</td>
                            }
                            <td className="text-right">
                              <div className="table-action">
                                {/* <button className="btn btn-primary btn-sm" onClick={()=>handleEditButton(item.id)}>edit</button> */}
                                <button className="btn btn-danger btn-sm" onClick={()=>handleDeleteButton(item.id)}>delete</button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AddModal activeModal={activeModal} closeModal={closeModal} handleSubmitAdd={handleSubmitAdd} />
        {/* <EditModal workEdit={workEdit} activeModal={activeModal} closeModal={closeModal} handleSubmitEdit={handleSubmitEdit} /> */}
        <DeleteModal activeModal={activeModal} closeModal={closeModal} handleSubmitDelete={handleSubmitDelete}  />
        
      </div>
    </div>
  );
}

export default WorkExperience;
