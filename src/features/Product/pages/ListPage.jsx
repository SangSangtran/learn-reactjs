import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper } from '@mui/material';
import productApi from '../../../api/productApi';

const ListPage = () => {
  useEffect(() => {
    (async () => {
      const response = await productApi.getAll({ _page: 1, _limit: 10 });
      console.log({ response });
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item sx={{ width: '250px' }}>
            <Paper elevation={0}>Left column</Paper>
          </Grid>
          <Grid item sx={{ flex: '1 1 auto' }}>
            <Paper elevation={0}>Right column</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

ListPage.propTypes = {};

export default ListPage;
