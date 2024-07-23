'use client'
import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { DrawerProvider, useDrawerContext } from '../context-store/drawer-context';
import { v4 as uuidv4 } from 'uuid';
import { ModalClose } from '@mui/joy';

export function DrawerMenu() {

    const { open, toggleDrawer, openDrawer, closeDrawer } = useDrawerContext()


    const list = (size = 'md') => (
        <Box
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                    <ListItem key={uuidv4()}>
                        <ListItemButton>{text}</ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text) => (
                    <ListItem key={text}>
                        <ListItemButton>{text}</ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (


        <Drawer
            size='md'
            open={open}
            onClose={closeDrawer}
        >
            <ModalClose />
            <nav className='h-full w-full dark:bg-neutral-800 bg-slate-200 dark:text-slate-200 text-neutral-900 a:'>
                {list('md')}
            </nav>
        </Drawer>


    );
}