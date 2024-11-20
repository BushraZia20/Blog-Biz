import React, { useState } from "react";
import {
  Menu as MenuIcon,
  NotificationsNone as BellIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  InputBase,
} from "@mui/material";
import { Link } from "react-router-dom";
import BasicMenu from "../MyProfile/MyProfile";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Functions to handle drawer
  const toggleDrawer = (open) => setDrawerOpen(open);

  return (
    <nav className="w-full bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg px-4 md:px-8">
      <div className="flex justify-between items-center h-16 md:h-20">
        {/* Logo Section */}
        <div className="flex flex-col">
          <div className="text-2xl font-bold font-lora text-gray-800 cursor-pointer">
            BLOG-BIZ
          </div>
          <span className="text-xs text-gray-500 font-medium">
            Your daily blog destination
          </span>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600 items-center">
          <Link
            to="/homepage"
            className="cursor-pointer hover:text-black transition-all"
          >
            HOME
          </Link>
          <Link
            to="/user-dashboard"
            className="cursor-pointer hover:text-black transition-all"
          >
            ABOUT
          </Link>
          <Link
            to="/my-posts"
            className="cursor-pointer hover:text-black transition-all"
          >
            MY POSTS
          </Link>
          {/* Search Bar */}
          <div className="flex items-center bg-gray-200 rounded-full px-2">
            <SearchIcon className="text-gray-500" fontSize="small" />
            <InputBase
              placeholder="Search blogs..."
              className="ml-2 text-sm"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </div>

        {/* Avatar, Bell Icon, and Menu Icon */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <IconButton>
            <BellIcon className="text-gray-600 hover:text-black transition-all" />
          </IconButton>

          {/* Avatar Dropdown */}
          <BasicMenu />

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <IconButton onClick={() => toggleDrawer(true)}>
              <MenuIcon className="text-gray-600" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Drawer for Mobile View */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <div className="w-64">
          <List>
            <ListItem button component={Link} to="/homepage">
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem button component={Link} to="/user-dashboard">
              <ListItemText primary="ABOUT" />
            </ListItem>
            <ListItem button component={Link} to="/my-posts">
              <ListItemText primary="MY POSTS" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
