
import React, { useState } from 'react';
import QueryBuilder from '../components/QueryTab'
import { Box, Tabs, Tab, Typography } from '@mui/material';

function TabPanel({ children, value, index }) {
    return (
        <div hidden={value !== index} style={{ height: '100%' }}>
            {value === index && (
                <Box sx={{ height: '100%', p: 2 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const MainTabs = ({selectedItems,setSelectedItems}) => {
    const [value, setValue] = useState(0);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                height: 'calc(100vh - 50px)', // remove navbar height
                marginLeft: '200px',          // remove sidebar width
                mt: '50px',                   // position below navbar
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Tabs Header */}
            <Tabs value={value} onChange={handleChange} aria-label="Query and Result Tabs">
                <Tab label="Query" />
                <Tab label="Result" />
            </Tabs>

            {/* Tabs Content */}
            <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                <TabPanel value={value} index={0}>
                    <QueryBuilder selectedItems={selectedItems}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Typography variant="h6">Result Section</Typography>
                    <Typography>Put your result/output content here.</Typography>
                </TabPanel>
            </Box>
        </Box>
    );
};

export default MainTabs;
