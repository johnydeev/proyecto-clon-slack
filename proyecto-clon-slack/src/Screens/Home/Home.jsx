import BoxMessages from "../../Components/BoxMessages/BoxMessages";
import Channels from "../../Components/Channels/Channels";
import HeaderMessages from "../../Components/HeaderMessages/HeaderMessages";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/SideBar/SideBar";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="navbar"> <Navbar/></div>
      <div className="body">
        <aside className="sidebar"><SideBar/></aside>
        <div className="workspace">
          <div className="channels"> <Channels/> </div>
          <div className="messages">
            <div className="header-messages"><HeaderMessages/></div>
            <div className="box-messages"><BoxMessages/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home