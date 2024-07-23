/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import "./style.css";
// Images
// import profilePicture from "assets/images/bruce-mars.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src="/images/user.jpg" alt="Mohamad Eko Prasetyo" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h4">Mohamad Eko Prasetyo, S.Kom.</MKTypography>
                <a href="https://dev.to/meprasetyo">
                  <MKButton className="dev" variant="outlined" color="info" size="small">
                    DEV
                  </MKButton>
                </a>
              </MKBox>
              {/* <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    323&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
              </Grid> */}
              <MKTypography variant="body1" fontWeight="light" color="text">
                {/* Introduce myself, I am Mohamad Eko Prasetyo, S.Kom. <br /> */}
                <hr style={{ marginTop: "20px", marginBottom: "10px" }} />
                <div className="font14">
                  <b>Profile</b>
                </div>
                <div className="font14">Name: Mohamad Eko Prasetyo</div>
                <div className="font14">Hometown: Purwokerto</div>
                <div className="font14">Age: 31</div>
                <div className="font14">Hobby: Singing</div>
                <div className="font14">Religion: Islam</div>
                <div className="font14">Marital Status: Married</div>
                {/* <br /> */}
                <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
                {/* <br /> */}
                <div className="font14">
                  <b>Latest Education</b>
                </div>
                <div className="font14">STIKOM Yos Sudarso Purwokerto</div>
                <div className="font14">Major: Bachelor of Science in Information Systems</div>
                <div className="font14">GPA: 3.64</div>
                <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
                <MKTypography
                  component="a"
                  target="_blank"
                  href="https://meprasetyo666.github.io/cv/"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
