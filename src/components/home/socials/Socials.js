import React from 'react'
import { HStack, IconButton } from '@chakra-ui/react'
import {FaGithub, FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <HStack mt="8" ml="-12">
        <IconButton icon={<FaLinkedinIn/>} isRound="true" background="black" color="white"></IconButton>
        <IconButton icon={<FaInstagram/>} isRound="true" background="black" color="white"></IconButton>
        <IconButton icon={<FaTwitter/>} isRound="true" background="black" color="white"></IconButton>
        <IconButton icon={<FaGithub/>} isRound="true" background="black" color="white"></IconButton>
      </HStack>
    </>
  )
}

export default Socials