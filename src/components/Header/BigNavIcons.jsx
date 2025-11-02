import { Box } from "@mui/material";
import HeaderLink from "./HeaderLink";
import SearchIcon from "@mui/icons-material/Search";

export function BigNavIcons() {
  return (
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
      <div className="flex items-center rounded-full border-2 border-[#333] bg-[#1d1d1d] p-1  ">
        <SearchIcon fontSize="small" className="text-[#919191] ml-2" />
        <input
          type="search"
          placeholder="Quick Search"
          className="h-10px text-sm font-bold text-[#919191] bg-[#1d1d1d] border-0 focus:outline-none px-2"
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
      <div className="w-px h-full bg-[#919191]"> &nbsp; </div>
      <HeaderLink
        text={"Register"}
        location={"signup"}
        color={"#ffffff"}
        hoverColor={"inherit"}
      />
    </Box>
  );
}
