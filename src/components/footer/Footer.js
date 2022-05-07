import { Box, Center } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [pageVisited, setPageVisited] = useState(0);

  const getCounter = async () => {
    await axios
      .get(
        `https://api.countapi.xyz/hit/rwiteshbera.com/${process.env.COUNTAPI_KEY}`
      )
      .then(res => {
        setPageVisited(res.data.value);
      });
  };

  useEffect(() => {
    getCounter();
  }, []);

  return (
    <div className="footer">
      <Center pt={['2', '2', '3', '3']}>&copy; Rwitesh Bera | 2022 | Page Visited : {pageVisited}</Center>
    </div>
  );
};

export default Footer;
