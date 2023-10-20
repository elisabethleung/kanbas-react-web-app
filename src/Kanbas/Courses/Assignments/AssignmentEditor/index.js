import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div class = "col-9">
            <h2>Assignment Name</h2>
            <input value={assignment.title}
                   className="form-control mb-2" />
            <button onClick={handleSave} className="btn btn-success btn-custom3">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-custom2">
                Cancel
            </Link>
        </div>
    );
}
export default AssignmentEditor;
