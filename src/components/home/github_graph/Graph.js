import React, { useEffect } from 'react';
import GithubCalendar from 'github-calendar';
import 'github-calendar/dist/github-calendar-responsive.css';
import 'github-calendar/dist/github-calendar.min.js';
import { Text } from '@chakra-ui/react';
import './Graph.css';


const Graph = () => {
  useEffect(() => {
    GithubCalendar('.calendar', 'rwiteshbera', {
      tooltips: true,
      responsive: true,
    });
  }, []);
  return (
    <>
      <div className="contribution-graph" id='github-graph'>
        <Text
          textAlign="center"
          fontSize={['1.2rem', '1.4rem', '1.6rem', '2rem']}
          fontWeight="semibold"
          color="white"
          mt="5"
        >
          GitHub Contributions Calendar{' '}
        </Text>
        <div className="calendar" w="100vw"></div>
      </div>
    </>
  );
};

export default Graph;
