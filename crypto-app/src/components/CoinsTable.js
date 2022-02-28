import axios from "axios";
import React, { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Pagination from "@material-ui/lab/Pagination";

import {
  Container,
  LinearProgress,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { numberWithCommas } from "./Carousel";
import { cryptoState } from "./CryptoContext";
// import Pagination from "./Pagination";

const useStyles = makeStyles(() => ({
  row: {
    backgroundColor: "#16171a",
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#7b7b7b",
    },
    borderBottom: "2px solid #EEBC1D",
  },
  header_text: {
    color: "white",
    fontSize: "40px",
    fontWeight: "bold",
    marginTop: "25px",
    textAlign: "center",
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "gold",
    },
    display: "flex",
    justifyContent: "center",
    margin: "30px",
    // width: "100%"
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();
  const { selectedValue } = cryptoState();

  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexofFirstCoin = indexOfLastCoin - coinsPerPage;

  const fetchCoinsList = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedValue}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    const data = await response.data;
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoinsList();
  }, [selectedValue]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchText) ||
        coin.symbol.toLowerCase().includes(searchText)
    );
  };

  const navigate = useNavigate();
  // console.log(coins);
  if(loading) {
    return <LinearProgress />
  }
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Typography className={classes.header_text}>
            Cryptocurrency Prices
          </Typography>
          <TextField
            label="Search crypto here"
            varinat="outlined"
            onChange={(e) => setSearchText(e.target.value)}
            style={{ marginBottom: 40, width: "100%", fontSize: "35px" }}
            value={searchText}
          ></TextField>

          {/* Table */}
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                <TableRow>
                  {["Coin", "Price", "24h %Change", "Market Cap"].map(
                    (item, index) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "700",
                        }}
                        key={index}
                      >
                        {item}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice(indexofFirstCoin, indexOfLastCoin)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h >= 0;

                    return (
                      <TableRow
                        className={classes.row}
                        onClick={() => navigate(`/coins/${row.id}`)}
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <img
                            src={row.image}
                            alt={row.name}
                            height="50"
                            style={{ marginBottom: 10 }}
                          />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              paddingLeft: "10px",
                            }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                                color: "white",
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span
                              style={{
                                color: "darkgrey",
                                fontSize: "15px",
                              }}
                            >
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {selectedValue.toUpperCase()}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell style={{ color: profit ? "green" : "red" }}>
                          {profit && "+"}{" "}
                          {row?.price_change_percentage_24h?.toFixed(2)}%
                        </TableCell>
                        <TableCell>
                          {selectedValue.toUpperCase()}{" "}
                          {numberWithCommas(
                            row.market_cap.toString().slice(0, -6)
                          )}{" "}
                          M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </ThemeProvider>
      <Container>
        <Pagination
          classes={{ ul: classes.pagination }}
          count={coins.length / coinsPerPage}
          onChange={(_, value) => {
            // console.log(value)
            setCurrentPage(value);
            window.scroll(0, 0);
          }}
        />
        {/* <Pagination coins={coins} managePosts={setCoins}/> */}
      </Container>
    </div>
  );
}

export default CoinsTable;
