import ModuleList from "./ModuleList";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import db from "../../Database";
import {useParams} from "react-router-dom";

function Modules() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div>
            <Breadcrumb style={{size: 20}}>
                <Breadcrumb.Item> {course.name}</Breadcrumb.Item>
                <Breadcrumb.Item active> {"Modules"}</Breadcrumb.Item>
            </Breadcrumb>

            <h2>Modules</h2>
            <ModuleList />
        </div>
    );
}
export default Modules;
