import cards from "../services/data";
import { Box, Grid, Typography } from "@mui/material";
import cardsLivros from "../services/data";
import { Fragment } from "react";

function Livros() {
  const livros = cardsLivros.filter((item) => item.type === "livro");

  return (
    <Box sx={{ padding: "30px" }}>
      <Grid container spacing={1} gap={"15px"}>
        {livros && livros.length > 0 ? (
          livros.map((item, index) => (
            <Fragment key={index}>
              {/* <div>
                    {item.nomeLivro}
                    {item.nomeArtista}
                </div> */}
              <div class="card">
                <div class="image"></div>
                <div class="content">
                  <a href="#">
                    <span class="title">{item.nomeLivro}</span>
                  </a>

                  <p class="desc">{item.nomeArtista}</p>

                  <a class="action" href="#">
                    Find out more
                    <span aria-hidden="true">→</span>
                  </a>
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

export default Livros;
