import { Box, Typography } from "@mui/material";
import StyledWelcome from "./StyledWelcome";

function Welcome() {
    return (
        <StyledWelcome>
            <Typography sx={{fontSize: '20px', letterSpacing: '0.5px'}}>
                Bem Vindo! Usuário
            </Typography>
        </StyledWelcome>
    )
}

export default Welcome;