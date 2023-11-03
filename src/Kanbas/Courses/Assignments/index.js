import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom"
import db from "../../Database"
import Button from "react-bootstrap/Button";
import { FaEllipsisV } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
import "./index.css"
import { useSelector, useDispatch } from "react-redux"
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
} from "./assignmentReducer"
import {PiDotsSixVerticalBold} from "react-icons/pi";


function Assignments () {
    const { courseId } = useParams()
    const assignments = useSelector((state) => state.assignmentReducer.assignments.filter(
        (assignment) => assignment.course === courseId))
    const assignment = useSelector((state) => state.assignmentReducer.assignment)
    const dispatch = useDispatch()
    const handleDelete = (assignmentId) => {
        const isConfirmed = window.confirm(
            "Are you sure you want to remove the assignment?"
        )
        if (isConfirmed) {
            dispatch(deleteAssignment(assignmentId))
        }
    }

    return (
        <div className= "col-8">
            <div className = "row">
                <div className = "search">
                    <input className="form-control assign-text" placeholder="Search Assignments"  />
                </div>

                <div className="top_buttons">
                    <button className="btn btn-custom2 top_buttons"><AiOutlinePlus/>Group</button>

                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/addAssignment`} ><button
                        className="btn btn-custom3">
                        <AiOutlinePlus/> Assignment
                    </button></Link>
                    <button className='btn btn-custom2 top_buttons'><FaEllipsisV/></button>

                </div>
            </div>

            <div className="list-group">
                <h2 className="list-group-item assign-head">{courseId} Assignments:</h2>

                {assignments.map((assignment) => (
                    <div className = "list-group-item">
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        <div className='fw-bold'>{assignment.title}</div>
                    </Link>
                        Multiple Modules | 100 points

                        <Link
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} ><button
                            className="btn btn-custom2">
                             Edit
                        </button></Link>

                        <button
                            onClick={() => handleDelete(assignment._id)}
                            className="float-end btn btn-custom3" style={{ marginRight: 10 }}>
                            Delete
                        </button>


                    </div>
                    ))}
            </div>
        </div>
    )
}
export default Assignments