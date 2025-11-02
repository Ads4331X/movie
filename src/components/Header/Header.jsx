import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import { BigNavIcons } from "./BigNavIcons";
import { SmallNavIcons } from "./SmallNavIcons";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full h-auto z-50 bg-[#1d1d1d] text-[#919191] border-b border-[#2f2f2f] text-[15px] items-center">
      {" "}
      <div className="ml-6 mr-6 mt-1">
        <Box className="flex justify-between items-center px-4">
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
          <BigNavIcons />
          <SmallNavIcons />
        </Box>
      </div>
    </div>
  );
}
