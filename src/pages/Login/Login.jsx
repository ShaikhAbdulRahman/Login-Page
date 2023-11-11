import React, { useState } from "react";
import loginImg from "../../assets/login_img.png";
import logo from "../../assets/materiologo.jpg";
import "./Login.css";
import {
  Button,
  Divider,
  Grid,
  TextField,
  IconButton,
  Checkbox,
} from "@mui/material";
import { Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("email must be a valid email")
      .required("email is a required field"),
    password: Yup.string()
      .min(5)
      .required("password must be at least 5 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="login_main_container">
      <Grid container spacing={2}>
        <Grid item lg={8} md={6}  xs={12}>
          <div className="left_side_container">
          <div className="logo_text">
              <img className="logo" width={35} src={logo} />
              <h2 style={{ marginLeft: -30, marginTop: 6, fontWeight: 550,color:"#534f5a" }}>
                MATERIO
              </h2>
            </div>
            <img className="login_img" src={loginImg} alt="login_pic" />
          </div>
        </Grid>
        <Grid lg={4} md={6} xs={12}>
          <div className="right_side_container">
            <div className="form">
              <form onSubmit={formik.handleSubmit}>
                <div className="heading_container">
                  <Typography className="heading">
                    Welcome to Materio! 👋🏻
                  </Typography>
                  <Typography
                    sx={{ fontSize: 15, opacity: "80%", color: "gray" }}
                  >
                    Please sign-in to your account and start the adventure
                  </Typography>
                </div>
                <div className="id_container">
                  <Typography
                    sx={{
                      fontSize: 13,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginBottom:-2
                    }}
                  >
                    Admin:
                    <p style={{ fontSize: 13, fontWeight: 600,marginLeft:5,marginRight:5 }}>
                      admin@materio.com{" "}
                    </p>{" "}
                    / Pass:{" "}
                    <p style={{ fontSize: 13, fontWeight: 600,marginLeft:5 }}> admin</p>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    Client:
                    <p style={{ fontSize: 13, fontWeight: 600,marginLeft:5,marginRight:5  }}>
                      client@materio.com
                    </p>
                    / Pass:{" "}
                    <p style={{ fontSize: 13, fontWeight: 600,marginLeft:5 }}>client</p>
                  </Typography>
                </div>
                <div className="input_container">
                  <TextField
                    sx={{ marginBottom: 2,marginTop:1 }}
                    placeholder="admin@matero.com"
                    fullWidth
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <div>
                    <TextField
                      type={showPassword ? "text" : "password"}
                      variant="outlined"
                      fullWidth
                      label="Password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
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
                <div className="checkbox_container">
                  <div className="check_icon_container">
                    <Checkbox
                      sx={{ paddingLeft: 0 }}
                      style={{ color: "#9155fd" }}
                    />
                    <Typography sx={{ color: "gray", opacity: "80%" }}>
                      Remember Me
                    </Typography>
                  </div>
                  <Link to="/forget" style={{textDecoration:"none"}}>
                  <Typography sx={{ color: "#9155fd",cursor:'pointer' }}>
                    Forgot Password?
                  </Typography>
                  </Link>
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
                  Login
                </Button>
              </form>
              <div className="link_container">
                <Typography
                  sx={{ fontSize: 15, color: "gray", opacity: "80%" }}
                >
                  New on our platform?{" "}
                </Typography>
                <Link to={"/signup"} style={{textDecoration:"none"}}>
                <Typography
                  sx={{
                    marginLeft: 1,
                    fontSize: 15,
                    color: "#9155fd",
                    opacity: "80%",
                  }}
                  >
                  Create an account
                </Typography>
                  </Link>
              </div>
              <Divider sx={{ fontSize: 19 }}>or</Divider>
              <div className="icons_container">
                <div className="icons_list">
                  <IconButton>
                    <FacebookOutlinedIcon color="primary"/>
                  </IconButton>
                  <IconButton>
                    <TwitterIcon color="primary"/>
                  </IconButton>
                  <IconButton>
                    <GitHubIcon sx={{color:"black"}} color="action" />
                  </IconButton>
                  <IconButton>
                    <GoogleIcon color="error"/>
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

export default Login;
