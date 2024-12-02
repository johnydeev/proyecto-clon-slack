import { useContext, useState } from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { RiMenu5Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { BsChatText } from "react-icons/bs";
import { MdOutlineHeadphones } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { MdArrowRight } from "react-icons/md";
import { WorkspaceContext } from '../../Context/WorkspaceContext';
import './Channels.css'
import { Link, useParams } from 'react-router-dom';

const Channels = () => {

  const [activeItem,setActiveItem] = useState(null)
  const [activeDropdown, setActiveDropdown] = useState(null);
  const {workspace_id} = useParams()
  const { getWorkspaceById, workspaceState } = useContext(WorkspaceContext);
  console.log("Get",getWorkspaceById)
  const workspace_selected = getWorkspaceById(1)
  
  console.log('WorkspaceSelected:',workspace_selected)
  console.log("workspaceState>>", workspaceState);
  console.log("WORKSPACE_ID", workspace_id)
  
  const { channels } = workspaceState[0];
  console.log('Channels>>',channels)

  const handleActiveItem = (index) => {
    console.log('index>>',index)
    setActiveItem(index);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  return (
    <>
      <div className="channels-header">
        <button>
          <Link to={"/workspace/1"}>
            UTN_MAR_JUE_PWI_TN <RiArrowDownSLine />
          </Link>
        </button>
        <div className="channels-header-menu-btn">
          <button className="channels-header-btn">
            <RiMenu5Line />
          </button>
          <button className="channels-header-btn">
            <BiEdit />
          </button>
        </div>
      </div>

      <div className="channels-list">
        <div className="channels-list-sections">
          {[
            { icon: <BsChatText />, label: "Hilos de conversaciones" },
            { icon: <MdOutlineHeadphones />, label: "Juntas" },
            { icon: <VscSend />, label: "Borradores y enviados" },
          ].map((item, index) => (
            <div
              key={index}
              className={activeItem === index ? "active-item" : ""}
              onClick={() => handleActiveItem(index)}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="channels-list-dropdown">
          {["Canales", "Mensajes Directos", "Aplicaciones"].map(
            (label, index) => (
              <div
                className={`${
                  activeDropdown === index
                    ? "active channels-list-dropdown-items "
                    : ""
                }`}
                key={index}
              >
                <div>
                  <button onClick={() => toggleDropdown(index)}>
                    <i className={activeDropdown === index ? "rotate" : ""}>
                      <MdArrowRight />
                    </i>
                  </button>
                  <button>
                    <span>{label}</span>
                    <RiArrowDownSLine />
                  </button>
                </div>

                {console.log("index>>", index)}
                {/* Renderizar canales solo si el dropdown actual es "Canales" */}
                {label === "Canales" && activeDropdown === index && (
                  <div className="channels-list-dropdown-1">
                    {channels && channels.length > 0 ? (
                      <ul>
                        {channels.map((item, idx) => (
                          <li key={idx}>
                            #<span>{`${item.name}`}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No hay canales disponibles</p>
                    )}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Channels

