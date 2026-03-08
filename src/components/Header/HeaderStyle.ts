import { AppBar, Box, ListItemText, Typography, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: '#2b3cd5', 
});

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