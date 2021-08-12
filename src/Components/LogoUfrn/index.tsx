import React from 'react';
import { Box, Grid } from '@material-ui/core';
import logoUfrn from '../../assets/ufrn.png';

const LogoUfrn: React.FC = () => (
  <Grid
    container
    direction="row"
    className="Grid-LogoUfrn"
    justifyContent="flex-end"
    alignItems="flex-end"
  >
    <Box maxWidth={140} minWidth={80} clone>
      <img src={logoUfrn} alt="logo ufrn" />
    </Box>
  </Grid>
);

export default LogoUfrn;
