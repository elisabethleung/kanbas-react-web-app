import ModuleList from "../Modules/ModuleList";
import db from "../../Database";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {CiBullhorn} from "react-icons/ci";
import "./index.css"
import {SiGoogleanalytics} from "react-icons/si";
import {AiOutlineBell} from "react-icons/ai";
import {FaFileImport} from "react-icons/fa6";
import {GiTargeted} from "react-icons/gi";
import {TbDatabaseImport} from "react-icons/tb";

function Home() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);

    return (
    <div>

        <div className="row">
            <div className="col-8">
                <h2>Home</h2>
                <ModuleList/>
            </div>
            <div className="col-4">
                <Button className = "btn-custom" > <FaFileImport/> Import Existing Content </Button><br/>
                <Button className = "btn-custom" > <TbDatabaseImport/> Import From Commons</Button> <br/>
                <Button className = "btn-custom"> <GiTargeted/> Choose Home Page </Button> <br/>
                <Button className = "btn-custom"> <SiGoogleanalytics/> View Course Stream</Button> <br/>
                <Button className = "btn-custom"> <CiBullhorn/> New Announcement</Button> <br/>
                <Button className = "btn-custom"> <SiGoogleanalytics/> New Analytics</Button> <br/>
                <Button className = "btn-custom"> <AiOutlineBell/> View Course Notifications</Button> <br/>
                <br/>
                <b>To Do:</b>
                <div style={{ borderTop: "1px solid black ", marginRight: 20, width:250 }}></div>



            </div>
        </div>
        </div>
    );
}
export default Home;
