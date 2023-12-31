import React from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import './index.css'
import { useSelector, useDispatch } from "react-redux"
import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
} from "../assignmentReducer"

function AssignmentEditor () {
    const { assignmentId } = useParams()

    const { courseId } = useParams()
    const navigate = useNavigate()
    const handleSave = () => {
        navigate(`/Kanbas/Courses/${courseId}/Assignments`)}

    const assignments = useSelector((state) => state.assignmentReducer.assignments)
    const assignment = useSelector((state) => state.assignmentReducer.assignment)
    const dispatch = useDispatch()

    return (
        <div className="col-9">
            <hr />
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                   className="form-control mb-2" onChange={(e) =>
                dispatch(setAssignment({ ...assignment, title: e.target.value }))
            } />
            <h3>Assignment Description</h3>
            <textarea
                value={assignment.description}
                onChange={(e) =>
                    dispatch(setAssignment({ ...assignment, description: e.target.value }))
                } style={{ width: 500, height: 200 }} />
            <h4>Assignment Due Date</h4>
            <input value={assignment.startDate} className="form-control mb-2" type="date"
                   onChange={(e) => setAssignment({ ...assignment, startDate: e.target.value })} />
            <h4>Assignment Available From</h4>
            <input value={assignment.endDate} className="form-control mb-2" type="date"
                   onChange={(e) => setAssignment({ ...assignment, endDate: e.target.value })} />
            <h4>Assignment Available Until</h4>
            <input value={assignment.endDate} className="form-control mb-2" type="date"
                   onChange={(e) => setAssignment({ ...assignment, endDate: e.target.value })} />


            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-custom2">
                Cancel
            </Link>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                <button onClick={() => dispatch(updateAssignment({ ...assignment, course: courseId }))}
                        className="btn btn-custom3">
                    Save
                </button>
            </Link>
        </div>
    )
}


export default AssignmentEditor