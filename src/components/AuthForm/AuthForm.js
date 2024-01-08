import { useState } from "react";
import { Box, Image, VStack, Flex, Text } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image
                        src="/logo.png"
                        h={24}
                        cursor={"pointer"}
                        alt="Instagram logo"
                    />
                    {isLogin ? <Login /> : <Signup />}

                    <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        my={4}
                        w={"full"}
                        gap={1}
                    >
                        <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                        <Text fontSize={14} mx={1}>
                            OR
                        </Text>

                        <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                    </Flex>
                    <GoogleAuth prefix={isLogin?"Log In":"Sign Up"}/>
                </VStack>
            </Box>

            <Box border={"1px solid gray"} padding={5} borderRadius={4}>
                <Flex>
                    <Box fontSize={14}>
                        {!isLogin
                            ? "Already have an account"
                            : "Don't have an account"}
                    </Box>
                    <Box fontSize={14} cursor={"pointer"} mx={2} color={"blue"} onClick={() => {setIsLogin(!isLogin)}}>
                        {!isLogin ? "Login" : "Sign Up"}
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default AuthForm;
