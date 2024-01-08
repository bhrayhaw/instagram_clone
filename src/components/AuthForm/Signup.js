import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
    Alert,
    AlertIcon,
    Button,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const Signup = () => {
    const [isPassword, setIsPassword] = useState(false);
    const [inputs, setInputs] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const { loading, error, signup } = useSignUpWithEmailAndPassword();
    return (
        <>
            <Input
                placeholder="Fullname"
                fontSize={14}
                type="text"
                value={inputs.fullname}
                onChange={(e) =>
                    setInputs({ ...inputs, fullname: e.target.value })
                }
            />
            <Input
                placeholder="Username"
                fontSize={14}
                type="text"
                value={inputs.username}
                onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                }
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
            <InputGroup>
                <Input
                    placeholder="Password"
                    fontSize={14}
                    type={isPassword ? "text" : "password"}
                    value={inputs.password}
                    onChange={(e) =>
                        setInputs({ ...inputs, password: e.target.value })
                    }
                />
                <InputRightElement
                    cursor={"pointer"}
                    onClick={() => setIsPassword(!isPassword)}
                >
                    {isPassword ? <ViewIcon /> : <ViewOffIcon />}
                </InputRightElement>
            </InputGroup>

            {error && (
                <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12}/>
                    {error.message}
                </Alert>
            )}
            <Button
                w={"full"}
                colorScheme="blue"
                size={"sm"}
                fontSize={"14"}
                onClick={() => signup(inputs)}
                isLoading={loading}
            >
                Sign Up
            </Button>
        </>
    );
};

export default Signup;
