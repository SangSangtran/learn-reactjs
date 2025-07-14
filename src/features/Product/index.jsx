import React from 'react';
import PropTypes from 'prop-types';

import { Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import { Box } from '@mui/material';

const ProductFeature = () => {
  return (
    <Box pt={4}>
      <Routes>
        <Route path="" element={<ListPage />} />
      </Routes>
    </Box>
  );
};

ProductFeature.propTypes = {};

export default ProductFeature;
