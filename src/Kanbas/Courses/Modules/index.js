import ModuleList from "./ModuleList"
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai"
import { FaEllipsisV } from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './index.css'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";


function Modules ({course}) {
    return (
        <div className="col-11">

            <h2>Modules</h2>
            <div className= "row">
                <Button className='btn-menu col-2'>Collapse All</Button>
                <Button className='btn-menu col-2'>View Progress</Button>
                <Button className='btn-menu col-2'><AiOutlineCheckCircle style={{ color: "#90EE90" }} />Publish All </Button>
                <Button className="btn-menu col-2"><AiOutlinePlus />Module</Button>
                <Button className='btn-menu col-1'><FaEllipsisV /></Button>
                <hr />
            </div>

            <div>
                <ModuleList />
            </div>
        </div>
    )
}
export default Modules