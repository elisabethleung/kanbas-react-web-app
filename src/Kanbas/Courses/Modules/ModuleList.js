import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules
} from "./modulesReducer"
import {createModule, findModulesForCourse} from "./client";
import 'bootstrap/dist/css/bootstrap.css';
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

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

                    <Button className= "btn-update"onClick={() => handleUpdateModule()}> Update </Button>

                    <Button onClick={handleAddModule} className="btn-add"> Add </Button>

                    <br/>
                </div>
            </li>
            <br/>
            {modules.
            filter((module) => module.course === courseId)
                .map((module, index) => (
                    <ListGroup className= "group">
                        <ListGroup.Item variant = "secondary">{module.name}
                            <Button className= "btn-delete" onClick={() => handleDeleteModule(module._id)}> Delete </Button>
                            <Button className= "btn-edit" onClick={() => dispatch(setModule(module))}> Edit </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>{module.description}</ListGroup.Item>
                    </ListGroup>
                ))}
        </ul>
    );
}

export default ModuleList;
