import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Header() {
  const [icons, setIcons] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#1d1d1d] text-[#919191] border-b border-[#2f2f2f] text-[12px]">
      {" "}
      <div className="ml-[1rem] mr-[1rem]">
        <Box className="flex justify-around items-center px-4">
          <Box className="flex items-center">
            <Link to={"/"} className="no-underline">
              <img
                src="https://yts.mx/assets/images/website/logo-YTS.svg"
                alt="YTS Logo"
                className="h-[38px]"
              />
            </Link>
            <Typography
              variant="body2"
              ml="20px"
              sx={{
                display: { xs: "none", lg: "inline" },
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              HD movies at the smallest file size.
            </Typography>
          </Box>
          <Box
            component="nav"
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: 2,
              justifyContent: "end",
              alignItems: "center",
              width: "100%",
            }}
          >
            {" "}
            <div className="flex items-center rounded-full border-[2px] border-[#333] bg-[#1d1d1d] p-[5px] px-[20px] ">
              <SearchIcon fontSize="xx-small" />
              <input
                type="search"
                placeholder="Quick Search"
                className="height-[40px] text-[#919191] bg-[#1d1d1d] border-[0px] border-[#333] focus:outline-none"
              />
            </div>
            <HeaderLink
              location={"/"}
              text={"Home"}
              color={"inherit"}
              hoverColor={"white"}
            />
            <HeaderLink
              text={"4K"}
              location={"4K"}
              color={"#6AC045"}
              hoverColor={"#6AC045"}
            />
            <HeaderLink
              text={"Trending"}
              location={"Trending"}
              color={"inherit"}
              hoverColor={"white"}
            />
            <HeaderLink
              text={"Browse Movies"}
              location={"BrowseMovies"}
              color={"inherit"}
              hoverColor={"white"}
            />
            <HeaderLink
              text={"Login"}
              location={"login"}
              color={"#ffffff"}
              hoverColor={"inherit"}
            />
            <div className="w-[1px] h-full bg-[#919191]"> &nbsp; </div>
            <HeaderLink
              text={"Register"}
              location={"signup"}
              color={"#ffffff"}
              hoverColor={"inherit"}
            />
          </Box>
        </Box>
      </div>
    </div>
  );
}
