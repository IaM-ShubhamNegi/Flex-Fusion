import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import LogoW from '../assets/images/logoW.png';
import { Link } from 'react-router-dom';

const Footer = () => (
  <Stack direction='row' sx={{ alignItems: 'center',justifyContent: 'space-between' }} mt="40px" bgcolor="#f04f16" p="40px 20px 40px 20px" width='1920px'>
    <Link to='/'>
      <Box style={{cursor: 'pointer'}}>
        <img src={LogoW} alt="logo" style={{ width: '171px', height: '96px' }} />
      </Box>
    </Link>
    <Stack direction='column' gap="10px" sx={{ alignItems: 'end' }}>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" color='white'>
        @2023
      </Typography>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" color='white'>
        A Project by Shubham Negi
      </Typography>
    </Stack>
  </Stack>
);

export default Footer;
