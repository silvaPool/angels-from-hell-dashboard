import { Box } from "@mui/material";
import { styled } from "styled-components";

const StyledWelcome = styled(Box)`
  && {
    background: #ff512f; 
    background: -webkit-linear-gradient(
      to right,
      #f09819,
      #ff512f
    ); 
    background: linear-gradient(
      to right,
      #f09819,
      #ff512f
    ); 
    color: white;
    width: 50vw;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    gap: 5px;
  }
`;

export default StyledWelcome;
