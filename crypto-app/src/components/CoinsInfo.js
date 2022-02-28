x��mkA�}�O1�Ul�R�EP*�5�
����M�m�vϝ�4���;���6���Br7��y��̥ڦ�j���'�	�;����h�-=��OsZ(CsgKr�~F��:ϻ0>;#�j�J�x~� ֨+: �*]=?��A+��-������h�Ά��0V����%
bƥȎ��w�m�����n����'��E�jW�R�مV|�����W|I�Z�Lb@â\0Զ�K4��6I���2,�,��f�w�G�,�r��ӕb���e!,W�A���a����S!�����Ǵ�ԟI˳x�)!�!/Ig9Y5�	4Y���S��(� +�\y_�fiꜧ��r�������Zؒ�mO��缙;\w�|��e4�
�N���t�?�랊I/58��e�4�|�ړ�T�8mz���xّ�u ��i A��,�Ċe��t�`E�@��QAs�(��������g�倦.�� �`C*L��Jkh;uЏ]�^2���Қ<DPD󡧺8�i��V�i�Ͻ{ƚ�&G�oףG�/a"��,�����WN|]��w+x\�a��������~��l!�� F�TtBS���������V.��Xcq����o��̮����H��]<(À��P��T[8b2r�<�o�4Dt3Ԛۑ'�Ef�4�XNJ�<�4LzM<`�>.��6������#�M[~h,=m�1�t�R���ΐ.�d�FObU:d�2�e��~X^�GJ@8��u� :i:@ �j��^�ð����_���f���?�r���|ꎆ}��k�l&�U.&mO�
(e������:E��~��M�S�bGa�d���Fqtu׫M�:s��$�                                                                                                                                                                             useEffect(() => {
    fetchHistoricalData();
  }, [days, selectedValue]);

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));
  const classes = useStyles();
  // console.log(historicalData);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
        contrastText: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={classes.container}>
        {!historicalData ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            {/* Line Chart */}
            <Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
                      : `${date.getHours()} : ${date.getMinutes()} AM`;
                  // console.log(date, time);
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicalData.map((coin) => coin[1]),
                    label: `Price (Past ${days} Days) in ${selectedValue}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />

            {/* Time chagne buttons */}
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => setDays(day.value)}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default CoinsInfo;
