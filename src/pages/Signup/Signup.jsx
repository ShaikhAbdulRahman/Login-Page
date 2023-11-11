import {
  Button,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import SignUpImg from "../../assets/signup_img.png";
import logo from "../../assets/materiologo.jpg";
import Tree from "../../assets/tree.png";
import React, { useState } from "react";
import "./Signup.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="signup_main_container">
      <Grid container spacing={1}>
        <Grid item lg={8.1} md={6} xs={12}>
          <div className="left_side_container">
            <div className="logo_text">
              <img className="logo" width={35} src={logo} />
              <h2 style={{ marginLeft: -30, marginTop: 6, fontWeight: 550,color:"#534f5a" }}>
                MATERIO
              </h2>
            </div>
            <img className="signup_img" src={SignUpImg} alt="signup_pic" />
            <img className="tree_img" src={Tree} alt="tree_img" width={"35%"} />
          </div>
        </Grid>
        <Grid item lg={3.9} md={6} xs={12}>
          <div className="right_side_container">
            <div className="form1">
              <div className="heading_container">
                <Typography className="heading1">
                  Adventure starts here 🚀
                </Typography>
                <Typography
                  sx={{ fontSize: 15, opacity: "70%", color: "gray" }}
                >
                  Make your app management easy and fun!
                </Typography>
              </div>
              <div className="input_textfeild">
                <TextField
                  sx={{ marginBottom: 2 }}
                  placeholder="johndoe"
                  fullWidth
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                />
                <div>
                  <TextField
                    sx={{ marginBottom: 2 }}
                    placeholder="user@email.com"
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="email"
                  />
                  <TextField
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    fullWidth
                    label="Password"
                    name="password"
                    sx={{ color: "#9155fd" }}
                  />
                  <IconButton
                    sx={{ marginLeft: "-40px" }}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <Visibility sx={{ marginTop: 1 }} />
                    ) : (
                      <VisibilityOff sx={{ marginTop: 1 }} />
                    )}
                  </IconButton>
                </div>
              </div>
              <div className="checkbox_container1">
                <div className="check_icon_container1">
                  <Checkbox
                    sx={{ paddingLeft: 0 }}
                    style={{ color: "#9155fd" }}
                  />
                  <Typography
                    sx={{ color: "gray", opacity: "80%", fontSize: 15 }}
                  >
                    I agree to{" "}
                  </Typography>
                </div>
                <Typography
                  sx={{
                    color: "#9155fd",
                    cursor: "pointer",
                    fontSize: 15,
                    marginLeft: "5px",
                  }}
                >
                  {" "}
                  privacy policy & terms
                </Typography>
              </div>
              <Button
                type="submit"
                style={{
                  fontSize: 16,
                  padding: 8,
                  backgroundColor: "#9155fd",
                }}
                fullWidth
                variant="contained"
              >
                Sign Up
              </Button>
              <div className="link_container1">
                <div className="link_2">
                  <Typography
                    sx={{ fontSize: 15, color: "gray", opacity: "80%" }}
                  >
                    Already have an account?{" "}
                  </Typography>
                </div>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      marginLeft: 1,
                      fontSize: 15,
                      color: "#9155fd",
                      opacity: "80%",
                    }}
                  >
                    Sign in instead
                  </Typography>
                </Link>
              </div>
              <Divider sx={{ fontSize: 18, fontWeight: "500" }}>or</Divider>
              <div className="icons_container1">
                <div className="icons_list1">
                  <IconButton>
                    <FacebookOutlinedIcon color="primary" />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon color="primary" />
                  </IconButton>
                  <IconButton>
                    <GitHubIcon sx={{ color: "black" }} color="action" />
                  </IconButton>
                  <IconButton>
                    <GoogleIcon color="error" />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
