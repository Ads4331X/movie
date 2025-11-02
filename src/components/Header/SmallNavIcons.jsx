import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HeaderLink from "./HeaderLink";
import BarChartIcon from "@mui/icons-material/BarChart";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import { useSearchContext } from "../../context/SearchContext"; // Use context!

export function SmallNavIcons() {
  const { showSearchDetails, Toogle } = useSearchContext(); // Get from context

  return (
    <Box
      sx={{
        display: "grid",
      }}
    >
      <Box
        component="nav"
        sx={{
          display: { xs: "flex", lg: "none" },
          gap: 2,
          justifyContent: "end",
          alignItems: "center",
          width: "100%",
        }}
      >
        <IconButton
          disableRipple
          disableFocusRipple
          aria-label="Search"
          sx={{
            color: "white",
            padding: 0,
          }}
          onClick={() => {
            Toogle();
            console.log(showSearchDetails);
          }}
        >
          <SearchIcon fontSize="xx-small" />
        </IconButton>

        <HeaderLink
          sx={{ fontSize: "19px" }}
          text="4K"
          location="4K"
          color="#6AC045"
          hoverColor="#6AC045"
        />

        <HeaderLink text={<BarChartIcon />} location="Trending" color="white" />

        <HeaderLink
          text={<FeaturedPlayListIcon />}
          location="BrowseMovies"
          color="white"
        />

        <HeaderLink
          text={<PersonIcon />}
          location="BrowseMovies"
          color="white"
        />
      </Box>
    </Box>
  );
}
