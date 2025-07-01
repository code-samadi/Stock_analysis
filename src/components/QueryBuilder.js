// noinspection JSValidateTypes

import React, { useState } from 'react';
import { Box, Select, MenuItem, TextField, Button } from '@mui/material';

const QueryBuilder = ({ selectedColumns }) => {
    const [conditions, setConditions] = useState([
        { logic:'', field: '', operator: '', value: '' }
    ]);

    const addCondition = () => {
        setConditions([...conditions, {logic:'', field: '', operator: '', value: '' }]);
    };

    const removeCondition = (index) => {
        const newConditions = conditions.filter((_, i) => i !== index);
        setConditions(newConditions);
    };

    const updateCondition = (index, key, value) => {
        const newConditions = [...conditions];
        newConditions[index][key] = value;
        setConditions(newConditions);
    };

    // noinspection JSValidateTypes
    return (
        <Box mt={2}>
            {conditions.map((cond, index) => (
                <Box key={index} display="flex" gap={1} alignItems="center" mb={1}>
                    {/* Logic selector, hidden for the first row */}
                    {index !== 0 && (
                        <Select
                            value={cond.logic}
                            onChange={(e) => updateCondition(index, 'logic', e.target.value)}
                            size="small"
                            variant="outlined"
                            sx={{ minWidth: 80 }}
                        >
                            <MenuItem value="AND">AND</MenuItem>
                            <MenuItem value="OR">OR</MenuItem>
                        </Select>
                    )}

                    <Select
                        value={cond.field}
                        onChange={(e) => updateCondition(index, 'field', e.target.value)}
                        size="small"
                        variant="outlined"
                        sx={{ minWidth: 120 }}
                    >
                        {selectedColumns.length > 0 ? (
                            selectedColumns.map((col, i) => (
                                <MenuItem key={i} value={col}>
                                    {col}
                                </MenuItem>
                            ))
                        ) : (
                            <MenuItem disabled>No Columns</MenuItem>
                        )}
                    </Select>

                    <Select
                        value={cond.operator}
                        onChange={(e) => updateCondition(index, 'operator', e.target.value)}
                        size="small"
                        variant="outlined"
                        sx={{ minWidth: 100 }}
                    >
                        <MenuItem value="=">=</MenuItem>
                        <MenuItem value=">">&gt;</MenuItem>
                        <MenuItem value="<">&lt;</MenuItem>
                        <MenuItem value=">=">{">="}</MenuItem>
                        <MenuItem value="<=">{"<="}</MenuItem>
                        <MenuItem value="contains">contains</MenuItem>
                    </Select>

                    <TextField
                        value={cond.value}
                        onChange={(e) => updateCondition(index, 'value', e.target.value)}
                        size="small"
                        placeholder="Value"
                        sx={{ minWidth: 120 }}
                    />

                    <Button
                        onClick={() => removeCondition(index)}
                        color="error"
                        variant="outlined"
                        size="small"
                    >
                        Delete
                    </Button>
                </Box>
            ))}

            <Button onClick={addCondition} variant="outlined" size="small">
                Add Condition
            </Button>
        </Box>
    );
};

export default QueryBuilder;
