import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Badge } from "@mui/material";
import "../index.css";

const Navbar = () => {
  return (
    <>
      <div className="h-16 w-screen">
        <div className="flex justify-between py-5 px-12 ">
          <div className="flex-1 ">
            <div className="">SEGS SHOP</div>
          </div>
          <div className=" flex-1">
            <div className="flex items-center justify-center">
              <img className="w-12" src={require("../assets/main.png")} />
            </div>
          </div>
          <div className="flex flex-1 justify-end gap-4">
            <div className="hidden lg:flex gap-4">
              <AccountCircleOutlinedIcon />
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className="">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
