import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    
    content: {
        minHeight: "90vh",
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            minHeight: "50vh",
        }
    }


}));