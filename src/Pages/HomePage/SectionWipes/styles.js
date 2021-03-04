import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    sectionDiv: {
        overflow: "hidden !important"
    },

    panel: {
        height: "100vh",
        width: "100vw",
        maxWidth: "100%",
        textAlign: "center",

        "& span": {
            position: "relative",
            display: "block",
            overflow: "hidden",
            top: "50%",
            fontSize: "80px",
        }
    }
}));