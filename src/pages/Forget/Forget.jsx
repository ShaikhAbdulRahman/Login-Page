import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./Forget.css";
import logo from "../../assets/materiologo.jpg";
import ForgetImg from "../../assets/forget_img.png";
import Tree from "../../assets/tree2.png"
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Forget = () => {
  return (
    <div className="forget_main_container">
      <Grid container spacing={1}>
        <Grid item lg={9} md={6} xs={12}>
          <div className="left_side_cont-forget">
            {/* <img className="logo" width={170} src={logo} alt="logo" /> */}
            <div className="logo_text">
              <img className="logo" width={35} src={logo} />
              <h2 style={{ marginLeft: -30, marginTop: 6, fontWeight: 550,color:"#534f5a" }}>
                MATERIO
              </h2>
            </div>
            <img className="forgetimg" src={ForgetImg} alt="forget_pic" />
            <img className="tree_logo" src={Tree} alt="tree-img" width={"35%"} />
          </div>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <div className="right_side_cont-forget">
            <div className="form2">
              <div className="heading_container1">
                <Typography className="heading2">
                  Forgot Password? 🔒
                </Typography>
                <Typography
                  sx={{ fontSize: 15, opacity: "70%", color: "gray" }}
                >
                  Enter your email and we′ll send you instructions to reset your
                  password
                </Typography>
              </div>
              <div className="input_text">
                <TextField
                  sx={{ marginTop: 3, marginBottom: 2 }}
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
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
                Send Reset Link
              </Button>
              <div className="link_container2">
                  <Link to={"/"} style={{ textDecoration: "none" }}>     
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "#9155fd",
                        opacity: "90%",
                      }}
                    >
                      <ChevronLeftIcon style={{marginBottom:-7.5}} />
                      Back to Login
                    </Typography>
                  </Link>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Forget;
