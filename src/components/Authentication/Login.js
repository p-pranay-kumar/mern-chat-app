import { Box, FormControl, FormLabel, Input, VStack, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    const[show, setShow] = useState(false);
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const handleClick = ()=> setShow(!show)


    const submitHandler =()=>{}
  return (
    <VStack spacing='5px'>
        
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


        <Button
            colorScheme='blue'
            width= "100%"
            style={{matginTop : 15}}
            onClick={submitHandler}
        > Login
        </Button>

        <Button
            variant="solid"
            colorScheme='red'
            width= "100%"
            style={{matginTop : 15}}
            onClick={()=>{
                setEmail("guest@example.com");
                setPassword("12456");
            }}
        > Get Guest User Credentials
        </Button>

        
    </VStack>
  )
}

export default Login
