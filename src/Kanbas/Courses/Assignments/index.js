import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import {AiOutlinePlus} from "react-icons/ai";
import "./index.css"
import {BiDotsVerticalRounded} from "react-icons/bi";
import { PiDotsSixVerticalBold} from "react-icons/pi";

function Assignments() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );
    return (
        <div>
            <Breadcrumb style={{size: 20}}>
                <Breadcrumb.Item> {course.name}</Breadcrumb.Item>
                <Breadcrumb.Item active>{"Assignments"}</Breadcrumb.Item>
            </Breadcrumb>
            {/*<h2>Assignments for {courseId}: </h2>*/}

            <div className="list-group col-8">

                <div>
                    <input className="form-control assign-text" placeholder="Search Assignments"  />

                    <Button className = "btn-custom2"> <BiDotsVerticalRounded/> </Button>
                    <Button className = "btn-custom3"> <AiOutlinePlus/> Assignment </Button>
                    <Button className = "btn-custom2"> <AiOutlinePlus/> Group  </Button>
                    <br/>
                </div>
                <br/>

                <ListGroup>
                    <ListGroup.Item variant = "secondary"> ASSIGNMENTS</ListGroup.Item>

                    {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item">
                        <PiDotsSixVerticalBold className = "end-icon"/> <br/>
                        <div className='fw-bold'>{assignment.title}</div>
                        Multiple Modules | Due Sep 18 at 11:59pm | 100 points
                    </Link>

                ))}
                </ListGroup>
            </div>

        </div>
    );
}
export default Assignments;
