import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeaderStyle'

//mui
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

//consts
import { HEADER_TITLE, MENU_ITEMS } from '../../consts/headerConsts';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <S.StyledAppBar position="static">
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
            {HEADER_TITLE}
          </S.HeaderTitle>
          
        </Toolbar>
      </S.StyledAppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <S.DrawerBox 
          role="presentation" 
          onClick={toggleDrawer(false)}
        >
          <List>
            {MENU_ITEMS.map((item) => (
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