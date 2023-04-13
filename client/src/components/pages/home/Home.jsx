import Topbar from '../../topbar/Topbar.jsx';
import Sidebar from '../../sidebar/Sidebar.jsx';
import Rightbar from '../../rightbar/Rightbar.jsx';
import Feed from '../../feed/Feed.jsx';
import './Home.css';

export default function Home() {
  return (
    <div>
        <Topbar/>
        <div className="homeContainer">
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>
    </div>
  )
}
