import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer"

function ModuleList() {
    const {courseId} = useParams()
    const modules = useSelector((state) => state.modulesReducer.modules)
    const module = useSelector((state) => state.modulesReducer.module)
    const dispatch = useDispatch()

    return (
        <ul className="list-group">
            <li className="edit_inputs">
                <div className= "row col-6">
                    <input className= "text-entry"
                           value={module.name}
                           onChange={(e) => dispatch(setModule({ ...module, name: e.target.value })) }/>
                    <textarea className = "text-entry"
                              value={module.description}
                              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}/>

                    <Button className= "btn-add" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                    Add </Button>
                    <Button className= "btn-update"onClick={() => dispatch(updateModule(module))}> Update </Button>
                    <br/>
                </div>
            </li>
            <br/>
            {modules.
            filter((module) => module.course === courseId)
                .map((module, index) => (
                    <ListGroup className= "group">
                        <ListGroup.Item variant = "secondary">{module.name}
                            <Button className= "btn-delete" onClick={() => dispatch(deleteModule(module._id))}> Delete </Button>
                            <Button className= "btn-edit" onClick={() => dispatch(setModule(module))}> Edit </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>{module.description}</ListGroup.Item>
                    </ListGroup>
                ))}
        </ul>
    );
}

    export default ModuleList;
