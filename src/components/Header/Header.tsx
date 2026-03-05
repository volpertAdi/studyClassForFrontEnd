import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeaderStyle'

//mui
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

//consts
import { menuItems } from '../../consts/headerConsts';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <S.HeaderTitle variant="h6">
            האפליקציה שלי
          </S.HeaderTitle>
          
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <S.DrawerBox 
          role="presentation" 
          onClick={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <S.itemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </S.DrawerBox >
      </Drawer>
    </>
  );
};

export default Header;