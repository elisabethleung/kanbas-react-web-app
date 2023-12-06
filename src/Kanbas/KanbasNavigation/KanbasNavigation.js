import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import { AiOutlineClockCircle} from "react-icons/ai";
import {BsPersonVideo3} from "react-icons/bs";
import {AiOutlineInbox} from "react-icons/ai";
import {BsFillArrowRightSquareFill} from "react-icons/bs";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {CiLogin, CiLogout} from "react-icons/ci";
import { FaRegIdCard } from "react-icons/fa";


function KanbasNavigation() {
  const links = ["Account", "Signin" , "Signup", "Signout","Dashboard", "Courses", "Calendar", "Inbox", "History", "Commons", "Help"];
  const linksToIconsMap = {
    Account: <MdOutlineAccountCircle className="fs-1 text kanbas-menu" />,
    Signin:  <CiLogin className="fs-1 text kanbas-menu" />,
    Signup:  <FaRegIdCard className="fs-1 text kanbas-menu" />,
    Signout:  <CiLogout className="fs-1 text kanbas-menu" />,
    Dashboard: <RiDashboard3Line className="fs-1 text kanbas-menu" />,
    Courses: <FaBook className="fs-1 text kanbas-menu" />,
    Calendar: <BsCalendar2Week className="fs-1 text kanbas-menu" />,
    Inbox: <AiOutlineInbox className = "fs-1 text kanbas-menu"/>,
    History: <AiOutlineClockCircle className = "fs-1 text kanbas-menu" />,
    Studio: <BsPersonVideo3 className = "fs-1 text kanbas-menu"/>,
    Commons: <BsFillArrowRightSquareFill className = "fs-1 text kanbas-menu"/>,
    Help: <AiOutlineQuestionCircle className = "fs-1 text kanbas-menu"/> ,
  };

  const { pathname } = useLocation();
  return (
      <div className="wd-kanbas-navigation list-group" style={{width: 110}}>
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item text-center p-4 ${
                    pathname.includes(link) && "active"
                }`}
            >
              {linksToIconsMap[link]}
               {link}
            </Link>
        ))}
      </div>
  );
}
export default KanbasNavigation;