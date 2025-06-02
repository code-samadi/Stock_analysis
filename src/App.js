import './Style/App.css';
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import MainTabs from "./components/tabs";
import React, { useState } from 'react';

function App() {
    const [selectedItems, setSelectedItems] = useState({});
    return (
        <div className="App">
            <Navbar />
            <SideBar selectedItems={selectedItems} setSelectedItems={setSelectedItems}/>
            <MainTabs selectedItems={selectedItems} setSelectedItems={setSelectedItems} />

        </div>
    );
}

export default App;
