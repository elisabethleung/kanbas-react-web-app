import db from "../../Kanbas/Database";
import {useLocation, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home/Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {FaBars} from "react-icons/fa";
import "./courses.css"


function Courses({courses}) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();

    return (
        <div>
            <h2>
                <Breadcrumb style={{size: 40}}>
                    <Breadcrumb.Item className="breadc" style={{color:"#d80215"}}> {course.name}</Breadcrumb.Item>
                    <Breadcrumb.Item active>  {decodeURI(pathname.split("/")[4])}</Breadcrumb.Item>
                </Breadcrumb>
            </h2>

            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Grades" element={<Grades/>} />
                    </Routes>


                </div>
            </div>
        </div>

    );
}
export default Courses;