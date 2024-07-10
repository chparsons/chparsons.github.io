import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DividerMui from '@mui/material/Divider';

import ItemLink from './components/ItemLink';
import { sidebar_thumbs } from './config/sidebar';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          font-family: "Helvetica","Arial",sans-serif;
          background-color: hsl(0deg 0% 98%);
        }
        a {
          text-decoration: none;
          color: darkcyan;
        }
      `,
    },
  },
});

const Sidebar = () =>
  <List sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
  }}>
    {sidebar_thumbs.map((d,i) => d.divider 
      ? <Divider key={i} />
      : <Item
          key={d.title}
          title={d.title}
          link={d.link}
          Icon={d.icon}
        />
    )}
  </List>

const Item = ({ title, link, Icon }) =>
  <ListItem key={title} disablePadding>
    <ItemLink link={link}>
      <ListItemButton sx={{
        paddingLeft: { xs: '8px', sm: '16px' },
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
      }}>
        <ListItemIcon>
          <Tooltip title={title} placement="right" enterDelay={1000} enterNextDelay={1000}>
            <Icon sx={{ color: 'white' }} />
          </Tooltip>
        </ListItemIcon>
      </ListItemButton>
    </ItemLink>
  </ListItem>

const Divider = () =>
  <DividerMui sx={{
    borderColor: 'rgba(255, 255, 255, 0.2)',
    width: '80%',
    margin: '10px 0',
  }} />

const sidebar_width = {
  xs: '40px',
  sm: '60px',
};

export default () => <ThemeProvider theme={theme}>
  <ScrollRestoration />
  <CssBaseline />
  <Box sx={{
    display: 'flex',
    margin: '30px',
  }}>
    <Drawer
      open={true}
      variant="permanent"
      anchor="left"
      sx={{
        width: sidebar_width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sidebar_width,
          boxSizing: 'border-box',
          backgroundColor: '#222',
        },
      }}
    >
      <Sidebar />
    </Drawer>
    <Box sx={{
      flexGrow: 1,
      width: {
        xs: `calc(100% - ${sidebar_width.xs})`,
        sm: `calc(100% - ${sidebar_width.sm})`,
      },
    }}>
      <Outlet />
    </Box>
  </Box>
</ThemeProvider>
