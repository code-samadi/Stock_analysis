// QueryTab.js
import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import QueryBuilder from '../components/QueryBuilder';

const QueryTab = ({ selectedItems }) => {
    const selectedKeys = Object.keys(selectedItems).filter(key => selectedItems[key]);

    return (
        <Box>
            <Typography variant="h6">Selected Columns:</Typography>
            <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedKeys.length > 0 ? (
                    selectedKeys.map((item, index) => (
                        <Chip key={index} label={item} />
                    ))
                ) : (
                    <Typography variant="body2" color="text.secondary">No columns selected.</Typography>
                )}
                <QueryBuilder selectedColumns={selectedKeys}/>
            </Box>
        </Box>
    );
};

export default QueryTab;
