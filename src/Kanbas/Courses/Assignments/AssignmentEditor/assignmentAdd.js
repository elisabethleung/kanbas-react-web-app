import React from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import db from "../../../Database"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { FaEllipsisV } from 'react-icons/fa'
import './index.css'
import { useSelector, useDispatch } from "react-redux"
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
} from "../assignmentReducer"



function AssignmentAdd () {
    const { assignmentId } = useParams()
    // const assignment = db.assignments.find(
    //   (assignment) => assignment._id === assignmentId)


    const { courseId } = useParams()
    const navigate = useNavigate()
    // const handleSave = () => {
    //   console.log("Actually saving assignment TBD in later assignments")
    //   navigate(`/Kanbas/Courses/${courseId}/Assignments`)
    // }


    const assignments = useSelector((state) => state.assignmentReducer.assignments)
    const assignment = useSelector((state) => state.assignmentReducer.assignment)
    const dispatch = useDispatch()


    return (
        <div className="assign-edit">

            <div class="top-sec">

                <div class="right-side">
                    <AiOutlineCheckCircle style={{ color: "green" }} /><span class="text-success">Published</span>
                    <button class='btn ms-4' style={{ backgroundColor: "	#F0F0F0" }}><FaEllipsisV /></button>
                </div>

            </div>
            <hr />
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                   onChange={(e) =>
                       dispatch(setAssignment({ ...assignment, title: e.target.value }))
                   } style={{ width: 300 }} />
            <h2>Assignment Description</h2>
            <textarea
                value={assignment.description}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, description: e.target.value }))
                } style={{ width: 500, height: 200 }} />
            <h2>Assignment Due Date</h2>
            <input value={assignment.startDate} className="form-control mb-2" type="date"
                   onChange={(e) => setAssignment({ ...assignment, startDate: e.target.value })} />
            <h2>Assignment Available From</h2>
            <input value={assignment.endDate} className="form-control mb-2" type="date"
                   onChange={(e) => setAssignment({ ...assignment, endDate: e.target.value })} />
            <h2>Assignment Available Until</h2>
            <input value={assignment.endDate} className="form-control mb-2" type="date"
                   onChange={(e) => setAssignment({ ...assignment, endDate: e.target.value })} />


            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-secondary">
                Cancel
            </Link>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                <button onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))} className="btn btn-danger me-2 ms-4">
                    Save
                </button>
            </Link>
        </div>
    )
}


export default AssignmentAdd