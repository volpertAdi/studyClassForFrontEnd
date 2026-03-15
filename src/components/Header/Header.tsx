import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeaderStyle';

// mui
import { Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, Box, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// context & consts
import { useAppTheme } from '../../context/ThemeContext/ThemeContext';
import { HEADER_TITLE, MENU_ITEMS } from '../../consts/headerConsts';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { isPink, toggleTheme, mainColor } = useAppTheme();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: mainColor }}>
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

          <Box sx={{ flexGrow: 1 }} />

          <S.ThemeToggleContainer>
            <S.StyledThemeSwitch 
              checked={isPink} 
              onChange={toggleTheme} 
              color="default" 
            />
          </S.ThemeToggleContainer>
        </Toolbar>
      </AppBar>

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
        </S.DrawerBox>
      </Drawer>
    </>
  );
};

export default Header;