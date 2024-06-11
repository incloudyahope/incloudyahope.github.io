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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Icon from "@mui/material/Icon";
// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
// import post1 from "assets/images/examples/testimonial-6-2.jpg";
// import post2 from "assets/images/examples/testimonial-6-3.jpg";
// import post3 from "assets/images/examples/blog-9-4.jpg";
// import post4 from "assets/images/examples/blog2.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Proyek Saya
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://meprasetyo.github.io/project/images/a.PNG"
              title="King Fruit (E-commerce)"
              action={{
                type: "internal",
                route: "https://meprasetyo.github.io/project/images/a.PNG",
                color: "info",
                label: "Lihat Gambar",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://meprasetyo.github.io/project/images/example/devco.PNG"
              title="DEVCO (E-commerce)"
              action={{
                type: "internal",
                route: "https://meprasetyo.github.io/project/images/example/devco.PNG",
                color: "info",
                label: "Lihat Gambar",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://raw.githubusercontent.com/meprasetyo/meprasetyo.github.io/master/project/images/modchan.PNG"
              title="Modern Channel Telkomsel"
              action={{
                type: "internal",
                route: "/images/modchan.png",
                color: "info",
                label: "Lihat Gambar",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://meprasetyo.github.io/project/images/pos.PNG"
              title="Devond POS"
              action={{
                type: "internal",
                route: "https://meprasetyo.github.io/project/images/pos.PNG",
                color: "info",
                label: "Lihat Gambar",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://meprasetyo.github.io/project/images/b.PNG"
              title="Barugasikola (Media Sosial, Management Siswa, E-book)"
              action={{
                type: "internal",
                route: "https://meprasetyo.github.io/project/images/b.PNG",
                color: "info",
                label: "Lihat Gambar",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://meprasetyo.github.io/damia.PNG"
              title="Web-Damia"
              action={{
                type: "internal",
                route: "https://meprasetyo.github.io/damia.PNG",
                color: "info",
                label: "Lihat Gambar",
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://meprasetyo.github.io/project/images/example/16.jpg"
              title="SI-Perawatan Genset"
              action={{
                type: "internal",
                route: "https://meprasetyo.github.io/project/images/example/16.jpg",
                color: "info",
                label: "Lihat Gambar",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image="https://meprasetyo.github.io/project/images/example/11.jpg"
              title="Best Advertising"
              action={{
                type: "internal",
                route: "https://meprasetyo.github.io/project/images/example/11.jpg",
                color: "info",
                label: "Lihat Gambar",
              }}
            />
          </Grid>
          <MKTypography
            component="a"
            target="_blank"
            href="https://meprasetyo.github.io/project/"
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
            More project <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
          {/* <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Flexible work hours"
              description="Rather than worrying about switching offices every couple years, you stay in the same place."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                label: "read more",
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
