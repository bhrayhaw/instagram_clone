import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [isPassword, setIsPassword] = useState(false);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmpassword: "",
    });

    const {login, loading, error} = useLogin();
    return (
        <>
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
                    type={!isPassword ? "password" : "text"}
                    value={inputs.password}
                    onChange={(e) =>
                        setInputs({ ...inputs, password: e.target.value })
                    }
                />
                <InputRightElement
                    cursor={"pointer"}
                    onClick={() => setIsPassword(!isPassword)}
                >
                    {!isPassword ? <ViewIcon /> : <ViewOffIcon />}
                </InputRightElement>
            </InputGroup>
            {error && (
                <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12} />
                    {error.message}
                </Alert>
            )}
            <Button
                w={"full"}
                colorScheme="blue"
                size={"sm"}
                fontSize={"14"}
                isLoading={loading}
                onClick={() => login(inputs)}
            >
                Login
            </Button>
        </>
    );
};

export default Login;
