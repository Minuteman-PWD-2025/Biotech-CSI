'use client';


import React from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { useMemo } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function Data() {
    const data = [
        {
            logs: "Mr. Llama took out Dangerous Chemical, Chemical X, Chemical ??? just now"
        },
        {
            logs: "Ms. Eagle took out Dog Cells 30 minutes ago"
        },
        {
            logs: "John took out Kryptonite 52 minutes ago"
        },
        {
            logs: "Mr. Steven took out Growing Tissue, Cells of Mr. Pig 3 hours ago"
        },
        {
            logs: "X took out Material #13, Material #58 Y weeks ago"
        },
        {
            logs: "X took out Material #65 1 Month ago"
        },
        {
            logs: "X took out Material #34, Material #98 1 year ago"
        },
        {
            logs: "X took out Material #89 Y Years ago"
        },

    ]


    const columns = useMemo(
        () => [
            {
                accessorKey: 'logs',
                header: 'Logs',

            },

        ],
        [],
    );


    const table = useMaterialReactTable({
        columns,
        data,
        enablePagination: false, //disable a default feature
        enableBottomToolbar: false,
        enableSorting: true,
        columnFilterModeOptions: null,
        enableFullScreenToggle: false,
        muiTablePaperProps: {
            elevation: 0,
        },
    });


    const style = {
        width: '100%',
        maxWidth: 300,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 526,
        '& ul': { padding: 0 },
      };

 
    return (
        <div className="tab">
            <div className='wrapper' style={{display: 'flex'}}>
                <div className='box' style={{float: 'left', paddingRight: '10px'}}>
                    <List sx={style}>
                        <ListItem divider>
                            <ListItemText primary="Mr. Llama took out Dangerous Chemical, Chemical X, Chemical ??? 2 hours ago" />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary="Ms. Eagle took out Dog Cells 2 days ago" />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary="John took out Kryptonite 1 week ago" />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary="Mr. Steven took out Growing Tissue, Cells of Mr. Pig 1 week ago" />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary="X took out Material #13, Material #58 Y weeks ago" />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary="X took out Material #65 1 Month ago" />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary="X took out Material #23 Y Months ago" />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary="X took out Material #34, Material #98 1 year ago" />
                        </ListItem>
                        <ListItem divider>
                            <ListItemText primary="X took out Material #65 1 Month ago" />
                        </ListItem>
                    </List>
                </div>
                <div className='grid-item' style ={{float: 'right', width: '85vw', paddingRight: '10px'}}>
                    <MaterialReactTable table={table}/>
                </div>
            </div>
        </div>
    );
}
