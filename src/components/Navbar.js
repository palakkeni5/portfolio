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
import personalPhoto from "../assets/images/photo-1.jpg";
import { HashLink } from "react-router-hash-link";

const pages = [
  { name: "HOME", link: "#section-home" },
  { name: "SKILLS", link: "#section-skills" },
  { name: "EDUCATION", link: "#section-education" },
  { name: "EXPERIENCE", link: "#section-experience" },
  { name: "PROJECTS", link: "#section-projects" },
];
const resumeLink =
  "https://docs.google.com/document/d/1S2XgfLiGQAn-Qmim3Llk0yi8TJLcDoZ0/edit?usp=sharing&ouid=112109212249568874081&rtpof=true&sd=true";

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    let newMode = !isDarkMode;

    setIsDarkMode(newMode);
    window.sessionStorage.setItem("isDarkMode", newMode);
    props.setThemeCallBack(newMode);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    try {
      var localMode = window.sessionStorage.getItem("isDarkMode");
      if (localMode == null) {
        localMode = true;
      }
      if (JSON.parse(localMode)) {
        setIsDarkMode(true);
        props.setThemeCallBack(true);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <AppBar position="fixed">
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
                <MenuItem key={page.name}>
                  <HashLink to={page.link}>{page.name}</HashLink>
                </MenuItem>
              ))}
              <MenuItem onClick={() => window.open(resumeLink, "_blank")}>
                RESUME
              </MenuItem>
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
                key={page.name}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <HashLink to={page.link}>{page.name}</HashLink>
              </Button>
            ))}
            <Button
              sx={{ my: 2, color: "white", display: "block" }}
              onClick={() => window.open(resumeLink, "_blank")}
            >
              RESUME
            </Button>
          </Box>

          <Tooltip title="Change Theme">
            <Box sx={{ flexGrow: 0 }}>
              <DarkModeSwitch
                style={{ margin: "1rem" }}
                checked={!isDarkMode}
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
