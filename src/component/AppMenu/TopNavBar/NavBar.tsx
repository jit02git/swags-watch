
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Drawer from '@mui/material/Drawer';
import RecipeReviewCard from "../../../container/Products/Card";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import logo from "../../../img/logo.png";
import PersonIcon from '@mui/icons-material/Person';
import "./Navbar.css";



interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Navbar(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Cart</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={1} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box >
        <AppBar position="static" sx={{ backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', width: '100%' }} >
          <Toolbar >
            <div style={{ width: '33.33%' }}>
              <IconButton
                size="large"
                edge="start"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ fontSize: '2.3rem' }} />
              </IconButton>
            </div>
            <div style={{ width: '33.33%', display: 'flex', justifyContent: 'center' }}>
              <Box >
                <img src={logo} alt="" style={{ width: 'auto', height: '55px' }} />
              </Box>
            </div>
            <div style={{ width: '33.33%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              {searchOpen ? (
                <input type="text" aria-placeholder='search' placeholder='SEARCH' className='search'></input>
              ) : (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="search"
                  onClick={() => setSearchOpen(true)}
                >
                  <SearchIcon />
                </IconButton>
              )}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
              >
                <PersonIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
              >
                <ShoppingBasketIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      <RecipeReviewCard />

      {/* <Box >
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
          <Toolbar sx={{ md: 'flex', justifyContent: 'space-between' }}>
            <div>
              <IconButton
                size="large"
                edge="start"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={handleDrawerToggle} // Add onClick event to open sidebar
              >
                <MenuIcon sx={{ fontSize: '2.3rem' }} />
              </IconButton>
            </div>
            <div>
              <Box >
                <img src={logo} alt="" style={{ width: 'auto', height: '55px' }} />
              </Box>
            </div>
            <div>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {searchOpen ? (
                  <input type="text" aria-placeholder='search' placeholder='SEARCH' className='search'></input>

                ) : (
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="search"
                    onClick={() => setSearchOpen(true)}
                  >
                    <SearchIcon />
                  </IconButton>
                )}
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true">
                  <PersonIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                >
                  <ShoppingBasketIcon />
                </IconButton>
              </Box>
            </div>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}>
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      <RecipeReviewCard /> */}
    </>
  );
}

