import { styled } from "@mui/material/styles";
import { Colors } from "../../styles";
import { Typography, Box, Grid } from '@mui/material';

export const QuoteTypography = styled(Typography)(({theme}) => ({
    maxHeight: "75vh",    
    display: "flex",
    alignItems: "center",
    flexGrow: "1",
    flexWrap: "wrap",
    fontSize: "32px",
    fontWeight: "600",
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "scroll",
    "::-webkit-scrollbar": { display: "none"},
    py: "1.5vw",
    [theme.breakpoints.down("md")]: {
        fontSize: "24px"
    }
}));

export const AuthorTypography = styled(Typography)(({theme}) => ({
    width: "40vw",
    fontSize: "24px",
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
        fontSize: "18px"
    }
}));

export const FooterBox = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
}));

export const QuoteCard = styled(Grid)(({theme, p}) => ({
    minHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.violet,
    color: Colors.white,
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
        padding: p === "1.5vw" ? "3vw" : p,
    }
}));