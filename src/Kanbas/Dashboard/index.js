import db from "../Database";
import "./dashboard.css"
import { React, useState } from "react";
import { Link } from "react-router-dom";
import {PiNotePencil} from "react-icons/pi";
import Button from "react-bootstrap/Button";
import {FaEllipsisV} from "react-icons/fa";
import {AiOutlineDelete} from "react-icons/ai";

function Dashboard({courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse } )
{
    return (
        <div>
            <h1  style={{ paddingLeft: '7px' }}> Dashboard</h1>
            <hr/>
            <h2 style={{ paddingLeft: '7px' }}> Published Courses ({courses.length})</h2>
            <div className="row" style={{ paddingLeft: '20px' }}>
                <br/>

                <div className = "row">
                    <h5>Course</h5>
                    <input
                        value={course.name}
                        className="form-control dash-input"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <input
                        value={course.number}
                        className="form-control dash-input"
                        onChange={(e) => setCourse({ ...course, number: e.target.value })}/>
                    <input
                        value={course.startDate}
                        type = "date"
                        className="form-control dash-input"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}/>
                    <input
                        value={course.endDate}
                        type = "date"
                        className="form-control dash-input"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}/>

                    <Button className ="btn-custom2 col-1 text-center" onClick={updateCourse}>Update</Button>
                    <Button className ="btn-custom2 col-1 text-center" onClick={addNewCourse}>Add</Button>
                </div>


                {courses.map((course, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                        <div className="card">
                            <div className="wd-card-header">
                                <FaEllipsisV  className = "wd-dash-ellipse" size = {30}/>
                            </div>
                            <div className="card-body">
                                <Link to={`/Kanbas/Courses/${course._id}`} className="card-title">
                                    {course.number} {course.name}
                                </Link>
                                <p>{course.startDate} to {course.endDate}</p>
                                <div>

                                    <Button className="btn-edit-dash"
                                            onClick={(event) => {event.preventDefault(); setCourse(course);}}>
                                        Edit <PiNotePencil /> </Button>
                                    <Button className ="btn-delete-dash"
                                            onClick={(event) => {event.preventDefault(); deleteCourse(course._id);}}>
                                        Delete <AiOutlineDelete/> </Button>

                                </div>

                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Dashboard;