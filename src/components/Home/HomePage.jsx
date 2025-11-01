import { Box, Container } from "@mui/material";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { fetch } from "../../api/randomimg.jsx";

export default function HomePage() {
  let fe = fetch;
  console.log(fe);
  return (
    <>
      <Header />

      <div className="bg-[url('https://img.yts.mx/assets/images/movies/anemone_2025/background.jpg')] bg-cover bg-right bg-no-repeat w-full">
        <Box className="[background:linear-gradient(to_bottom,rgba(29,29,29,0.65),rgba(29,29,29,1))] h-64 w-full hidden-sm">
          {" "}
          <Container className="flex flex-col items-center h-screen justify-start text-white hidden-sm">
            <div className="text-center mt-[60px]">
              <h1 className="text-[38px] font-bold text-[white]">
                Download YTS YIFY movies: HD smallest size
              </h1>
              <p className="text-[#ccc] font-light mt-4 max-w-[680px] mx-[auto]">
                Welcome to the official <b>YTS.MX</b> website. Here you can
                browse and download YIFY movies in excellent 720p, 1080p, 2160p
                4K and 3D quality, all at the smallest file size. YTS Movies
                Torrents.
              </p>
              <Link
                to={"/important"}
                className="no-underline text-[#428BCA] hover:text-[#2a6496] focus:text-[#2a6496] "
              >
                IMPORTANT - YTS.MX is the only new official domain for YIFY
                Movies
              </Link>
            </div>
            <br />
            <hr className="w-full h-[1px] bg-[#919191] border-0" />
          </Container>
        </Box>
      </div>
    </>
  );
}
