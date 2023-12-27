import { useState } from "react";
import {
    Box,
    Button,
    Image,
    Input,
    VStack,
    Flex,
    Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmpassword: "",
    });

    const SignUpLoginChangeHandler = () => {
        setIsLogin(!isLogin);
    };

    const AuthenticationHandler = () => {
        if (!inputs.email || !inputs.password){
            alert("Please fill out the fields")
            return
        }
        navigate("/")
    };

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
                    <Input
                        placeholder="Email"
                        fontSize={14}
                        type="email"
                        value={inputs.email}
                        onChange={(e) =>
                            setInputs({ ...inputs, email: e.target.value })
                        }
                    />
                    <Input
                        placeholder="Password"
                        fontSize={14}
                        type="password"
                        value={inputs.password}
                        onChange={(e) =>
                            setInputs({ ...inputs, password: e.target.value })
                        }
                    />
                    {!isLogin ? (
                        <Input
                            placeholder="Confirm Password"
                            fontSize={14}
                            type="password"
                            value={inputs.confirmpassword}
                            onChange={(e) =>
                                setInputs({
                                    ...inputs,
                                    confirmpassword: e.target.value,
                                })
                            }
                        />
                    ) : null}

                    <Button
                        w={"full"}
                        colorScheme="blue"
                        size={"sm"}
                        fontSize={"14"}
                        onClick={AuthenticationHandler}
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </Button>

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

                    <Flex alignItems={"center"} justifyContent={"center"}>
                        <Image w={5} src="/google.png" alt="Google Logo" />
                        <Text mx={2} cursor={"pointer"} fontSize={14}>
                            {isLogin
                                ? "Log In with Google"
                                : "Sign Up with Google"}
                        </Text>
                    </Flex>
                </VStack>
            </Box>

            <Box border={"1px solid gray"} padding={5} borderRadius={4}>
                <Flex>
                    <Box fontSize={14}>
                        {!isLogin
                            ? "Already have an account"
                            : "Don't have an account"}
                    </Box>
                    <Box
                        fontSize={14}
                        cursor={"pointer"}
                        mx={2}
                        color={"blue"}
                        onClick={SignUpLoginChangeHandler}
                    >
                        {!isLogin ? "Login" : "Sign Up"}
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default AuthForm;
