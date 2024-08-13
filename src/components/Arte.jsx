import { Box } from "@mui/material";
import Ghost from "../assets/images/ghost.png";
import Abo from "../assets/images/abo.png";

function Arte() {
  return (
    <Box sx={{ padding: "30px" }}>
      <div class="book">
        <p>Explore</p>
        <div class="cover">
          <img src={Ghost} alt="icon ghost" className="icon-1" />
          <p>Edgar A. Poe</p>
          <img src={Abo} alt="icon ghost" className="icon-2" />
        </div>
      </div>
    </Box>
  );
}

export default Arte;
