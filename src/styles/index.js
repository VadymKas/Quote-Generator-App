import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary: "#00adb5",
    secondary: "#00c7c0",
    success: "#4caf50",
    info: "#00d5ff",
    danger: "#FF5722",
    warning: "#FFC107",
    white: "#fff",
    violet: "#4a3be7"
};

const overrides = {
    palette: {
        primary: {
            main: Colors.white,
        }
    },

    components: {
        MuiDivider: {
            styleOverrides: {
                root: {                   
                    height: "1.5px",
                    width: "100%",
                    background: Colors.white,
                    borderRadius: "10px",
                    marginBottom: "1vw"                   
                },
            },
        }
    },
};

const theme = createTheme(overrides);

export default theme;