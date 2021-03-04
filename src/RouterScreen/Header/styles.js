import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    routingLink: {
        fontSize: "18px"
    },

    routingDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        width: "50%",
        margin: "0 20px",
        [theme.breakpoints.down('xs')]: {
            width: "90%",

        }
        
    },

    tntLogo: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '35px',
        marginLeft: "35px",
        [theme.breakpoints.down('xs')]: {
            marginLeft: "0",
            fontSize: "55px",
        }
    },
    
    headerDiv: {
        padding: "20px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#222222",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            height: "95px"
        }
    },

    link: {
        textDecoration: "none",
    },

}));