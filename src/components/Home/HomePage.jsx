import { Box, Container, CircularProgress } from "@mui/material";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useRandomImage } from "../../hooks/useRandomImage.jsx";
import { useToogleSearchInfo } from "../../hooks/useToogleSearchInfo.jsx";
import { ShowSearchFilters } from "../Header/ShowSearchFilters.jsx";
import { SearchProvider } from "../../context/SearchContext.jsx";
import { MovieCard } from "../Card/MovieCard.jsx";

export default function HomePage() {
  const { imgUrl, isloaded } = useRandomImage();
  const { showSearchDetails } = useToogleSearchInfo();

  if (!isloaded) {
    return (
      <div className="flex items-center justify-center h-full w-full mt-8">
        <CircularProgress />
      </div>
    );
  }

  return (
    <SearchProvider>
      <div className="relative">
        <div
          className="fixed top-0 left-0 w-full h-screen -z-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(7,7,7,0.65), rgba(0,0,0,1)), url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(16px)",
          }}
        />

        <Header />
        <ShowSearchFilters showSearchDetails={showSearchDetails} />

        <Box className="w-full h-full pt-[70px] ">
          <Container
            className="flex flex-col items-center justify-start text-white pt-16"
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
          >
            <h1 className="text-[38px] font-bold text-[white]">
              Download YTS YIFY movies: HD smallest size
            </h1>
            <p className="text-[#ccc] font-light mt-4 max-w-[680px] mx-auto text-center">
              Welcome to the official <b>YTS.MX</b> website. Here you can browse
              and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D
              quality, all at the smallest file size. YTS Movies Torrents.
            </p>
            <Link
              to={"/important"}
              className="no-underline text-[#428BCA] hover:text-[#2a6496] focus:text-[#2a6496] mt-4"
            >
              IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
            </Link>
          </Container>
        </Box>
      </div>
      <MovieCard />
    </SearchProvider>
  );
}
