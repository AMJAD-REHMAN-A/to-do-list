import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import { PostAdd } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch('https://randomuser.me/api');
        const {results} = await res.json();
        setUser(results);
        
      };
      fetchData();
  }, [])
  console.log("user", user);
  return (
    <AppBar position="static" style={{ backgroundColor: "#015881"}}>
      <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }} component={Link} to="/" id="wrapper">
          <div className="background" />
          <img src="/win-logo-blue.svg" alt="Logo" style={{ height: 40 }} className="content" />
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton color="inherit" component={Link} to="/create">
          <PostAdd />
        </IconButton>
        <Avatar alt="User Profile" src={user?.[0]?.picture?.thumbnail} />
        <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
            {`${user?.[0]?.name?.title || ""}
             ${user?.[0]?.name?.first || ""}
             ${user?.[0]?.name?.last || ""}`}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
