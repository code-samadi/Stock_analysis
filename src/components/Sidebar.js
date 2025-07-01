import React from 'react';
import { Box, Checkbox, Typography } from '@mui/material';
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import '../Style/Sidebar.css';

const Sidebar = ({ selectedItems, setSelectedItems }) => {
    const handleToggle = (id) => {
        setSelectedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const renderCheckboxLabel = (label, id) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Checkbox
                size="small"
                checked={!!selectedItems[id]}
                onChange={() => handleToggle(id)}
                sx={{ color: 'white', padding: 0 }}
            />
            <Typography variant="body2" sx={{ color: 'white' }}>
                {label}
            </Typography>
        </Box>
    );


    return (
        <Box className="sidebar">
            <SimpleTreeView>
                <TreeItem itemId="Column" label="Columns">
                    <TreeItem itemId="users" label={renderCheckboxLabel("User ID", "users.id")}/>

                    <TreeItem itemId="orders" label={renderCheckboxLabel("Orders","orders.id")}/>

                    <TreeItem itemId="products" label={renderCheckboxLabel("Products", "products.id")}/>
                </TreeItem>
            </SimpleTreeView>
        </Box>
    );
};

export default Sidebar;
