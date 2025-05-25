import './Style/App.css';
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import TabsBlock from "./components/tabs";

const tabs = [
    "Query",
    "Columns",
    "Filters"
]

function App() {
  return (
      <div className="App">
          <Navbar/>
          <SideBar/>

      </div>
  );
}

export default App;
