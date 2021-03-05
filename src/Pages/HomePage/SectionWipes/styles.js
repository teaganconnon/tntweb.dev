import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    sectionDiv: {
        overflow: "hidden !important",
        margin: "0 !important"
    },

    panel: {
        height: "100vh",
        width: "100%",
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