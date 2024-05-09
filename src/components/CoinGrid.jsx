import React from 'react';
import CryptoGridCard from './Cards/CryptoGridCard';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

const CoinGrid = ({ filteredCoins, setFilteredCoins, page }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className='m-3'>
    <Grid container spacing={2} >
      {filteredCoins
        .slice((page - 1) * 10, page * 10)
        .map((each) => (
          <Grid
            item
            key={each.id}
            xs={isMobile ? 12 : 4}
            sm={isMobile ? 12 : 4}
            md={4}
          >
            <CryptoGridCard data={each} />
          </Grid>
        ))}
    </Grid>
    </div>
  );
};

export default CoinGrid;

// Here's what's happening:

// We import the Grid, useMediaQuery, and useTheme from the @mui/material package.
// We use the useTheme hook to access the theme object and the useMediaQuery hook to check if the current screen width matches the "sm" (small) breakpoint or below.
// We render the Grid component from MUI and set the container prop to create a grid container.
// We map over the filteredCoins array and render a Grid item for each coin.
// For the Grid item, we set the xs, sm, and md props to control the grid layout based on the screen size:

// xs={isMobile ? 12 : 4}: For extra-small screens (mobile), if isMobile is true, the Grid item will take up the full width (12 columns). If isMobile is false, it will take up 4 columns.
// sm={isMobile ? 12 : 4}: For small screens, if isMobile is true, the Grid item will take up the full width (12 columns). If isMobile is false, it will take up 4 columns.
// md={4}: For medium and larger screens, the Grid item will take up 4 columns.


// Inside each Grid item, we render the CryptoGridCard component and pass the data prop.