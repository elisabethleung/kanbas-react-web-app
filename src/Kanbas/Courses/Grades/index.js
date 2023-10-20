import db from "../../Database";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import React from "react";
import {FaFileImport} from "react-icons/fa6";
import {TbFileExport} from "react-icons/tb";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div className = "col-10">
            <Breadcrumb style={{size: 20}}>
                <Breadcrumb.Item> {course.name}</Breadcrumb.Item>
                <Breadcrumb.Item active>{"Grades"}</Breadcrumb.Item>
            </Breadcrumb>

            <Button className = "btn-custom2"> <TbFileExport/> Export </Button>
            <Button className = "btn-custom2"> <FaFileImport/> Import </Button>

            <br/><br/>

            <div className="row" style = {{height: 50}}>
                <div className="col float-left">
                    <input className="form-control" placeholder = "Search Students"  /> </div>
                <div className="col float-left">
                    <input className="form-control" placeholder = "Search Assignments"  /> </div>
            </div>

            <div className="\table-responsive">
                <Table striped bordered hover>
                    <thead>
                    <th>Student Name</th>
                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <td>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return (<td>{grade?.grade || ""}</td>);})}
                            </tr>);
                    })}
                    </tbody>
                </Table>
            </div>
        </div>
    )}
export default Grades;
