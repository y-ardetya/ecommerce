import { Badge } from "@mui/material";
import "../index.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <>
      <div className="h-16 w-screen bg-black items-center justify-center text-center pb-20">
        <div className="flex justify-between py-5 px-12">
          <div className="flex flex-1 gap-10 items-start">
            <img
              className="w-20 relative bottom-3"
              src={require("../assets/logo.png")}
            />
          </div>
          <div className="flex-1 flex gap-4 justify-center">
            <div className="hidden lg:flex items-center justify-center border-white w-[50em] bg-white h-[30px] rounded-sm">
              <SearchIcon sx={{ color: "black" }} />
              <input className="hidden lg:flex w-[50em] !outline-none rounded-md" />
            </div>
            <Badge className="cursor-pointer" badgeContent={99} color="error">
              <ShoppingCartIcon sx={{ color: "white" }} fontSize="large" />
            </Badge>
          </div>
          <div className="hidden lg:flex flex-1 justify-end gap-2">
            <Button
              variant="contained"
              sx={{
                height: "30px",
                width: "80px",
                backgroundColor: "black",
                color: "white",
                border: "2px solid white",
                borderRadius: "5px",
                fontSize: "10px",
                ":hover": { backgroundColor: "white", color: "black" },
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{
                height: "30px",
                width: "80px",
                backgroundColor: "white",
                color: "black",
                border: "2px solid black",
                borderRadius: "5px",
                fontSize: "10px",
                ":hover": {
                  backgroundColor: "black",
                  color: "white",
                  border: "2px solid white",
                },
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white h-[2px]"></div>
      <div className="bg-black h-[2px]"></div>
      <div className="bg-white h-[20px] flex justify-center items-center text-center">
        <img
          className="w-screen h-4 object-cover"
          src={require("../assets/kekw.png")}
        />
      </div>
    </>
  );
};

export default Navbar;
