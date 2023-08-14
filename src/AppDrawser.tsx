import { Add, Inbox, Mail, Settings } from '@mui/icons-material';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Drawer,
  Divider,
  ListItem,
} from '@mui/material';

const headersHeight = 28;

export interface DrawerProps {
  open: boolean;
  drawerWidth: number;
}

export default function AppDrawer({ open, drawerWidth }: DrawerProps) {

  const list = (
    <Box
      
      role="presentation"
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );



  return (
    <Drawer
      variant="persistent"
      data-tauri-drag-region
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'transparent',
        },
        '& .MuiToolbar-root': {
          height: `${headersHeight}px`,
          minHeight: `${headersHeight}px`,
          backgroundColor: 'transparent',
        },
        backgroundColor: 'transparent',
      }}
      open={open}
    >
      <Toolbar data-tauri-drag-region />
      <Box sx={{ overflow: 'auto' }}>
        {list}
        <Divider />
        <List>
          <ListItemButton>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="Add" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
