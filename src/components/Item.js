import { Button, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    paper: {
        background: "transparent",   
        display: 'flex',        
        flexDirection: "column"    , 
        marginTop: "40px"
        // justifyContent: "center",
    },

    coinImage:{
        width: "15%",
        // marginLeft: "150px"
        alignSelf: "center",
        borderRadius: "50%"
    },
    name:{
        alignSelf: "center"
    },
    
}))

function Item(props) {   
  const {coin_id, name, large, price_btc} = props.coin;
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <h2 className={classes.name}>{name}</h2>
      <img className={classes.coinImage}  src={large} alt="bitcoin"/>
      <h1 className={classes.name}>{price_btc}</h1>
    </Paper>
  );
}

export default Item;
