import react from 'react';
import '../Style/Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <h3>Columns</h3>
            <ul>
                <li>Col1</li>
                <li>Col2</li>
                <li>Col3</li>
                <li>Col4</li>
            </ul>
        </div>
    );
}

export default Sidebar;