import { Avatar, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/AuthStore";
import { Link } from "react-router-dom";

const SuggestedUsersHeader = () => {
    const { HandleLogout, isLoggingOut } = useLogout();
    const authUser = useAuthStore((state) => state.user);
    console.log(authUser);
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Link to={`${authUser?.username}`}>
                <Avatar src={authUser?.profilePicUrl} size={"lg"} />
            </Link>
            <Link to={`${authUser?.username}`}>
                <Text fontSize={12} fontWeight={400}>
                    {authUser?.username}
                </Text>
            </Link>
            <Button
                size={"xs"}
                background={"transparent"}
                _hover={{ bg: "transparent" }}
                onClick={HandleLogout}
                fontSize={14}
                fontWeight={"medium"}
                cursor={"pointer"}
                color={"blue.500"}
                isLoading={isLoggingOut}
            >
                Logout
            </Button>
        </Flex>
    );
};

export default SuggestedUsersHeader;
