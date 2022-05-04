import React, { useRef, useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useToast } from '@chakra-ui/react';
import {
  FormControl,
  Input,
  Box,
  Button,
  Textarea,
  Text,
  Flex,
} from '@chakra-ui/react';
import { GrSend } from 'react-icons/gr';
import validator from "validator";

const Contact = () => {
  const form = useRef();
  const toast = useToast();

  const [EmailId, setEmailId] = useState('');
  const [FullName, setFullName] = useState('');
  const [MessageContent, setMessageContent] = useState('');
  const [sendButtonText, setSendButtonText] = useState('Send Message');

  const clearMessage = () => {
    setFullName('');
    setEmailId('');
    setMessageContent('');
    setSendButtonText('Send Message');
  };

  // Send Email using emailJs
  const sendEmailFunction = (e) => {
    e.preventDefault();
    if(validator.isEmpty(FullName)) {
      toast({
          title: 'Please enter your full name.',
          status: 'warning',
          duration: 7000,
          isClosable: true,
        });
    }
    if(validator.isEmpty(EmailId)) {
      toast({
          title: 'Please enter your email.',
          status: 'warning',
          duration: 5000,
          isClosable: true,
        });
    }
    if(!validator.isEmail(EmailId)) {
      toast({
          title: 'Please enter correct email',
          status: 'warning',
          duration: 5000,
          isClosable: true,
        });
        return;
    }
    if(validator.isEmpty(MessageContent)) {
      toast({
          title: 'Message field is empty.',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
    }
    else {
      setSendButtonText('Sending...');

      emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(result => {
        toast({
          title: 'Message sent successfully.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        clearMessage();
      })
      .catch(error => {
        toast({
          title: 'Try again later',
          description: 'Failed to send your message.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        clearMessage();
      });
    }
  };

  // On change function FORM
  const setEmail = e => {
    setEmailId(e.target.value);
  };

  const setName = e => {
    setFullName(e.target.value);
  };

  const setMessage = e => {
    setMessageContent(e.target.value);
  };

  return (
    <>
      <Box color="white" height="100vh">
        <Text
          fontSize={['1xl', '2xl', '4xl']}
          textAlign="center"
          fontWeight="semibold"
          mt={['2', '4', '8']}
        >
          Contact
        </Text>
        <form m="2" ref={form} onSubmit={sendEmailFunction} noValidate>
          <FormControl isRequired mb="2">
            <Input
              id="name"
              placeholder="Name"
              autoComplete="off"
              w={['74vw', '70vw', '60vw', '50vw']}
              name="from_name"
              value={FullName}
              onChange={setName}
            />
          </FormControl>
          <FormControl isRequired mb="2">
            <Input
              id="email"
              type="email"
              placeholder="Email"
              name="sender_email"
              autoComplete="off"
              w={['74vw', '70vw', '60vw', '50vw']}
              value={EmailId}
              onChange={setEmail}
            />
          </FormControl>
          <FormControl isRequired mb="2">
            <Textarea
              id="message"
              placeholder="Message"
              autoComplete="off"
              w={['74vw', '70vw', '60vw', '50vw']}
              h={['40vmin', '44vmin', '48vmin', '48vmin']}
              name="message"
              value={MessageContent}
              onChange={setMessage}
            />
          </FormControl>

          <Flex justifyContent="right">
            <Button
              leftIcon={<GrSend />}
              colorScheme="pink"
              variant="solid"
              type="submit"
              loadingText="Sending..."
            >
              {sendButtonText}
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default Contact;
