x�VmO#7������tyѲ�������R���~@��ٝ�[���� :��;c{7�r���x</�<3��2+���o����X|��+kkj��
Ua�e��=�ZW����8<�O��,���ߛ�_ZC�^�;3������z�d
����G�#�ߣ.v{����hC�ς�N��cz͟��
��?��u�.����N�L:b�'$�����H����C�s�4 (��<��FI�������F�s��ˢYx��gx8��6G) ���I=��x܈���nw6NziH��R��-���s6����\ò�N�^F��Ok�>/S��S� o�f�������$��*����M�|a��Yݣ��.A: �le�U2�]���9��G�XR�6���],.�:],�E g�6�A��
��u�KX{̄tX\OBI��Yy/UeQG�J%�C�;\���P�j��N�O
dԨD� IB������uIs~t�u�Zb�%��&mS��y3�,�O�!ڰ��{cI����������q��s��x<���0�x���$��p`�P����l%�����ƽf�/#Kl�q+T�3���`'��v�ʺA�B016d�f�8��s�g$"*��C,�wQ�.�޼(oO#8�K��v�I�	1s��)��|��X:!,�鏸R�s9�m~�������o�f>�!�TM��~�ϙXq>�spJ�`
74��ڃY�QX�Ƀ
������P�ME]A��4���Ek���X�k*�K���}������~�|�q��tn��POCm,R�����ڏ*vJ.���H��~���N��]bm��6��4��F�R�Ѿ
qu��ш��)�3j[A�����!}:�rs~���H��b/�Vԋ(��a��Vn��7\� 9�9ť�������=mo\���r����P�� �K���O+C���� ��ԛ�ÃT�jӡ���5�Ç�X�j�q�<�Ŗ����!�%��ĿRq��2t�22���P
�B������#�6K�k���.�%���7_w	BSi�H��%��B�'X�p����W��wì<��FVp����p-ŕh9�c��1��@�7���h\��:9�8nh�                                                                                                                                                                                                                                                                                                                                                                                                                             "black"}}> 
        <Container>
          <Toolbar>
            <Typography onClick={() => navigate("/")} className={classes.title}>
              Crypto Tracker
            </Typography>

            <InputLabel
              color="secondary"
              id="demo-simple-select-outlined-label"
            >
              Currency
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={selectedValue.length === 0 ? "" : selectedValue}
              onChange={handleChange}
              label="Currency"
              color="secondary"
              style={{ width: 100, height: 40, marginLeft: 15,  }}
              defaultValue = "inr"
            >
              {currency &&
                currency.map((curr, index) => (
                  <MenuItem  key={index} value={curr} style={{color: "white"}}>
                    {curr.toUpperCase()}
                  </MenuItem>
                ))}
            </Select>

            {user ? <Logout /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
