import React from 'react';
import CryptoGridCard from './Cards/CryptoGridCard';
import { Grid, useMediaQuery, useTheme, createTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 750, // Added custom breakpoint for 750px
      lg: 960,
      xl: 1280,
    },
  },
});

const CoinGrid = ({ filteredCoins, setFilteredCoins, page }) => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));

  return (
    <div className='m-3'>
      <Grid container spacing={2}>
        {filteredCoins
          .slice((page - 1) * 10, page * 10)
          .map((each,i) => (
            <Grid
              item
              key={each.id}
              xs={isMobile ? 12 : isTablet ? 6 : 4}
              sm={isMobile ? 12 : isTablet ? 6 : 4}
              md={isTablet ? 12 : 4}
            >
              <Link to={`/coins/${each.id}`}>
              <CryptoGridCard data={each} delay={(i%3)*0.33} />
              </Link>
            
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