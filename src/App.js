import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import "bootstrap/dist/css/bootstrap.min.css";
import Stats from "./components/Stats/Stats";
import Shortcuts from "./components/Shortcuts/Shortcuts";
import Chart from "./components/Chart/Chart";
import Calender from "./components/Calendar/Calender";
import TeamMember from "./components/TeamMembers/TeamMembers";
import Documents from "./components/Documents/Documents";
import {
  stats,
  issues,
  documents,
  calenderEvents,
  teamMembers,
} from "./mockData";

const App = () => {
  return (
    <div className="mx-5 my-5">
      <Greeting firstName="Jennifer" /> 
      <div className="row my-5">
        <div className="col-sm-9">
          <Stats stats={stats} />
          <Shortcuts />
          <label>Current Issues</label>
          <Chart issues={issues} />
          <label id="recentDocHeading">Recent Documents</label>
          <Documents documents={documents} />
        </div>
        <div className="col-sm-2 rightCol">
          <Calender events={calenderEvents} />
          <TeamMember members={teamMembers} />
        </div>
      </div>
    </div>
  );
};

export default App;
