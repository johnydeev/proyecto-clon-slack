import React, { useContext } from 'react'
import { WorkspaceContext } from '../../Context/WorkspaceContext'
import { AiFillHome } from "react-icons/ai";
import { PiChatsCircleBold } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { BsPlusLg } from "react-icons/bs";
import './Sidebar.css'
const SideBar = () => {
    console.log(useContext(WorkspaceContext))
    
    return (
      <>
        <div className="sidebar-header">
          <div>
            <button>U</button>
          </div>
          <div>
            <button>
              <AiFillHome />
            </button>
            <span>Inicio</span>
          </div>
          <div>
            <button>
              <PiChatsCircleBold />
            </button>
            <span>Mensajes directos</span>
          </div>
          <div>
            <button>
              <GoBell />
            </button>
            <span>Actividad</span>
          </div>
          <div>
            <button>
              <TfiLayoutMenuSeparated />
            </button>
            <span>Mas</span>
          </div>
        </div>
        <div className="sidebar-btn">            
          <button>
            <BsPlusLg />
          </button>    
          
          <img
            width={40}
            height={40}
            src="https://ca.slack-edge.com/T07EJ2FLZ2R-U07ELA3CFQW-999ac5bd03d4-48"
            alt="avatar castro jonathan"
          />
          
        </div>
      </>
    );
}

export default SideBar