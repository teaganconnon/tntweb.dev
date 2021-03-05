import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    
    parallax: {
        height: "80vh",
        width: "100%",
        display: "flex",
        [theme.breakpoints.down('xs')]: {
            height: "50vh",
        }
    }


}));