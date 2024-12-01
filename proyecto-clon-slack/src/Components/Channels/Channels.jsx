import React, { useContext } from 'react'
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

  const {workspace_id} = useParams()
  const { getWorkspaceById } = useContext(WorkspaceContext)
  console.log("Get",getWorkspaceById)
  const workspace_selected = getWorkspaceById(1)
  
  console.log('WorkspaceSelected:',workspace_selected)

  console.log("WORKSPACE_ID", workspace_id)

  return (
    <>
      <div className="channels-header">
        <Link to={"/workspace/1"}>
          UTN_MAR_JUE_PWI_TN <RiArrowDownSLine />
        </Link>
        <div>
          <button className="channels-header-btn">
            <RiMenu5Line />
          </button>
          <button className="channels-header-btn">
            <BiEdit />
          </button>
        </div>
      </div>
      <div className="channels-list">
        <div>
          <button>
            <BsChatText />
            <span>Hilos de conversaciones</span>
          </button>
        </div>
        <div>
          <button>
            <MdOutlineHeadphones />
            <span>Juntas</span>
          </button>
        </div>
        <div>
          <button>
            <VscSend />
            <span>Borradores y enviados</span>
          </button>
        </div>
        <br />
        <div>
          <button>
            <MdArrowRight />
          </button>
          <button>
            <span>Canales</span>
          </button>
        </div>
        <div>
          <button>
            <MdArrowRight />
          </button>
          <button>
            <span>Mensajes Directos</span>
          </button>
        </div>
        <div>
          <button>
            <MdArrowRight />
          </button>
          <button>
            <span>Aplicaciones</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Channels