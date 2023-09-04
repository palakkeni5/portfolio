import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useNavigate } from "react-router-dom";

import personalPhoto from "../assets/images/photo-1.jpg";

const pages = [
  "HOME",
  "SKILLS",
  "EDUCATION",
  "EXPERIENCE",
  "PROJECTS",
  "RESUME",
];
const resumeLink =
  "https://docs.google.com/document/d/1S2XgfLiGQAn-Qmim3Llk0yi8TJLcDoZ0/edit?usp=sharing&ouid=112109212249568874081&rtpof=true&sd=true";

const Navbar = (props) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isDarkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    let prevIsDarkMode = isDarkMode;
    setDarkMode(!prevIsDarkMode);
    props.setThemeCallBack(!prevIsDarkMode);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleNavMenuClick = (e, navMenu) => {
    console.log(navMenu);
    setAnchorElNav(null);
    if (navMenu === "HOME") {
      navigate("/portfolio");
    } else if (navMenu === "SKILLS") {
      navigate("/portfolio/skills");
    } else if (navMenu === "EDUCATION") {
      navigate("/portfolio/education");
    } else if (navMenu === "EXPERIENCE") {
      navigate("/portfolio/experience");
    } else if (navMenu === "PROJECTS") {
      navigate("/portfolio");
    } else if (navMenu === "RESUME") {
      window.open(resumeLink, "_blank");
    } else {
      navigate("/portfolio");
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ p: 0, display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Avatar alt="Palak Pramod Keni" src={personalPhoto} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            href="/"
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PORTFOLIO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={(e) => handleNavMenuClick(e, page)}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PORTFOLIO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(e) => handleNavMenuClick(e, page)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Tooltip title="Change Theme">
            <Box sx={{ flexGrow: 0 }}>
              <DarkModeSwitch
                style={{ margin: "1rem" }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={50}
              />
            </Box>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
