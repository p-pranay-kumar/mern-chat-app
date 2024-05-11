import { Box, FormControl, FormLabel, Input, VStack, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const[show, setShow] = useState(false);
    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[confirmpassword, setConfirmpassword] = useState();
    const[password, setPassword] = useState();
    const[pic, setPic] = useState();

    const handleClick = ()=> setShow(!show)

    const postDetails = (pics) => {}

    const submitHandler =()=>{}
  return (
    <VStack spacing='5px'>
        <FormControl id='first-name' isRequired>
            <FormLabel> Name  </FormLabel>  
                <Input placeholder='Enter Your name' 
                onChange={(e)=>setName(e.target.value)}
                />
            
        </FormControl>

        <FormControl id='email' isRequired>
            <FormLabel> Email </FormLabel>   
                <Input placeholder='Enter Your Email' 
                onChange={(e)=>setEmail(e.target.value)}
                />
        </FormControl>

        <FormControl id='passwowrd' isRequired>
            <FormLabel> password </FormLabel>   
                <InputGroup>
                    <Input type={ show ? "text" : "password"}
                    placeholder='Enter Your name' 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <InputRightElement>
                        <Button h="1.75rem" size="5m" onClick={handleClick}>
                            {show ? "Hide" : "Show"}  
                        </Button>
                    </InputRightElement>

                </InputGroup>
        </FormControl>



        <FormControl id='passwowrd' isRequired>
            <FormLabel> Confirm password </FormLabel>   
                <InputGroup>
                    <Input type={ show ? "text" : "password"}
                    placeholder='Enter Your name' 
                    onChange={(e)=>setConfirmpassword(e.target.value)}
                    />
                    <InputRightElement>
                        <Button h="1.75rem" size="5m" onClick={handleClick}>
                            {show ? "Hide" : "Show"}  
                        </Button>
                    </InputRightElement>

                </InputGroup>
        </FormControl>

        <FormControl id="pic">
            <FormLabel>Upload your picture</FormLabel>
            <Input
                type='file'
                p={1.5}
                accept ="image/*"
                onChange={(e)=> postDetails(e.target.files[0])}
            />
        </FormControl>

        <Button
            colorScheme='blue'
            width= "100%"
            style={{matginTop : 15}}
            onClick={submitHandler}
        > Sign Up
        </Button>

        
    </VStack>
  )
}

export default Signup

