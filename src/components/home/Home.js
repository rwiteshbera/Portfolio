import { Box, Container, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import profilePic from "../images/profile-pic.png"
import Socials from '../socials/Socials'
import About from './About/About'

const Home = () => {
  return (
    <>
        <Flex w="100%">
            <Container>
             <Box boxSize='sm'm="16">
             <Image src={profilePic} alt='Rwitesh Bera'/>
             </Box>
            </Container>
            <Container>
              <About/>
              <Socials/>
            </Container>
        </Flex>
    </>
  )
}

export default Home