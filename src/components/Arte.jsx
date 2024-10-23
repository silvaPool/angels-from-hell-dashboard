import { Box, Grid, Typography } from "@mui/material";
import Ghost from "../assets/images/ghost.png";
import Abo from "../assets/images/abo.png";
import cards from "../services/data";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function Arte({ item }) {

  const navigate = useNavigate();

  const handleCardClick = (nomeArtista) => {
    const path = nomeArtista.toLowerCase().replace(/ /g, "-");
    navigate(`/home/usuario/autores/${path}`);
  }

  return (
    <Box sx={{ padding: "30px" }}>
      <Grid container spacing={1} gap={"15px"}>
        {cards && cards.length > 0 ? (
          cards.map((item, index) => (
            <Fragment key={index}>
              <div class="book" style={{ marginBottom: "10px", cursor: "pointer" }}
                onClick={() => handleCardClick(item.nomeArtista)}
              >
                <p>Explore</p>
                <div class="cover">
                  {/* <img src={Ghost} alt="icon ghost" className="icon-1" /> */}
                  <p>{item.nomeArtista}</p>
                  {/* <img src={Abo} alt="icon ghost" className="icon-2" /> */}
                </div>
              </div>
            </Fragment>
          ))
        ) : (
          <Grid item sx={{ color: "black", fontSize: "2rem" }}>
            <p>Nada</p>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default Arte;
