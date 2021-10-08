import React, { ImgHTMLAttributes } from 'react';
import { Box, Grid } from '@material-ui/core';

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}
const App: React.FC<ImgProps> = ({ src, alt }) => (
  <Grid container direction="row" justifyContent="center" alignItems="center">
    <Box width="100%" maxWidth={1200} minWidth={360} clone>
      <img src={src} alt={alt} />
    </Box>
  </Grid>
);
export default App;
