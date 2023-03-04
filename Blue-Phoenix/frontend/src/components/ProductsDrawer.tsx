import { Drawer, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductsDrawer = ({ setIsDrawerOpen, isDrawerOpen }) => {
  return (
    <>
      <div className="mt-[calc(20px + 4rem)] flex">
        <Drawer
          PaperProps={{
            elevation: 24,
            sx: { width: "250px", backgroundColor: "black ", color: "white" },
          }}
          transitionDuration={500}
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <img className="w-screen" src={require("../assets/kekw.png")} />
          <Box p={2} width="250px" textAlign="left" role="presentation">
            <Link to="/product">
              <Typography variant="h4">Products</Typography>
            </Link>
            <Typography variant="h6">Coffee</Typography>
            <Typography variant="h6">Noddles</Typography>
            <Typography variant="h6">Tea</Typography>
            <Typography variant="h6">Coffee</Typography>
            <Typography variant="h6">Noddles</Typography>
            <Typography variant="h6">Tea</Typography>
            <Typography variant="h6">Coffee</Typography>
            <Typography variant="h6">Noddles</Typography>
            <Typography variant="h6">Tea</Typography>
            <Typography variant="h6">Coffee</Typography>
            <Typography variant="h6">Noddles</Typography>
            <Typography variant="h6">Tea</Typography>
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default ProductsDrawer;
