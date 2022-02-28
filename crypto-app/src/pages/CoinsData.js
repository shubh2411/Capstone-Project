import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinsInfo from "../components/CoinsInfo";
import axios from "axios";

import { numberWithCommas } from "../components/Carousel";
import { cryptoState } from "../components/CryptoContext";

function CoinsData() {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { selectedValue } = cryptoState();

  const fetchCoins = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedValue}&ids=${id}`
    );
    const data = await response.data;
    setCoin(data);
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
    marketHighLow: {
      display: "flex",
      justifyContent: "space-evenly",
    },
  }));

  const classes = useStyles();

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className={classes.container}>
      {coin.map((coin) => (
        <div className={classes.sidebar} key={coin.name}>
          {/* sidebar */}
          <img
            src={coin.image}
            alt={coin.name}
            height="200"
            style={{ marginBottom: 20 }}
          />
          <Typography variant="h3" className={classes.heading}>
            {coin.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.marketHighLow}>
            <span>{`24 Hours HIGH = ${coin.high_24h}`}</span>
            <span>{`24 Hours LOW = ${coin.low_24h}`}</span>
          </Typography>

          {/* Market data  */}
          <div className={classes.marketData}>
            <span stye={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Rank:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="h5">{coin.market_cap_rank}</Typography>
            </span>

            <span stye={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Current Price:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="h5">
                {selectedValue.toUpperCase()}{" "}
                {numberWithCommas(coin.current_price)}
              </Typography>
            </span>

            <span stye={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Market Cap:
              </Typography>
              &nbsp; &nbsp;
              <Typography variant="h5">
                {selectedValue.toUpperCase()}{" "}
                {numberWithCommas(coin.market_cap.toString().slice(0, -6))}M
              </Typography>
            </span>
          </div>
        </div>
      ))}

      {/* Chart */}
      <CoinsInfo coin={coin} id={id} />
    </div>
  );
}

export default CoinsData;
