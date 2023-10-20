import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import ListGroup from 'react-bootstrap/ListGroup';


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <ul className="list-group">
            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <ListGroup className= "group">
                        <ListGroup.Item variant = "secondary">{module.name}</ListGroup.Item>
                        <ListGroup.Item>{module.description}</ListGroup.Item>
                    </ListGroup>
                ))}
        </ul>

    );
}
export default ModuleList;
