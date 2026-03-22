import {Box, ListItemText, Switch, Typography, styled } from "@mui/material";

export const DrawerBox = styled(Box)(({ theme }) => ({
  width: 250,
  height: '100%',
  backgroundColor: theme.palette.background.default,
}));

export const HeaderTitle = styled(Typography)({
  flexGrow: 1,
  fontWeight: 'bold',
  letterSpacing: '1px',
});

export const itemText = styled(ListItemText)({
  textAlign: 'right',
  '& .MuiTypography-root': {
    fontWeight: 500,
  },
});

export const ThemeToggleContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const StyledThemeSwitch = styled(Switch)({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#fff',
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#fff',
    opacity: 0.7,
  },
  '& .MuiSwitch-track': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});