// TabsBlock.jsx
import React from 'react';
import '../Style/TabsBlock.css';

const TabsBlock = ({ children, title }) => {
    return (
        <div className="tabs-block">
            {title && <h2 className="tabs-title">{title}</h2>}
            <div className="tabs-content">
                {children}
            </div>
        </div>
    );
};

export default TabsBlock;
