import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    routingLink: {
        margin: "0 50px",
        fontSize: "17px"
    },

    routingDiv: {
        display: 'flex',
        justifyContent: 'center'
    },

    tntLogo: {
        display: 'flex',
        justifyContent: 'center',
        width: '100px',
        fontSize: '35px',
        marginLeft: "35px"
    },
    
    headerDiv: {
        padding: "20px 10px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#222222"
    },

    link: {
        textDecoration: "none",
    },

}));