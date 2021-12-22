import React from 'react';
import {Field, FieldProps} from "formik";


interface IProps{
    as: React.FC<any>
}

function ReactSelect(props:IProps){
    return (
        <div className={"mb-3"}>
            <Field>
                {
                    ({field: {value},
                        form: {
                            setFieldValue,
                            setFieldTouched,
                            errors,
                            touched,
                        }
                        
                    }:FieldProps)=>props.as({value, setFieldValue, setFieldTouched, errors, touched})
                }
            </Field>
        </div>
        
    );
}

export default ReactSelect;