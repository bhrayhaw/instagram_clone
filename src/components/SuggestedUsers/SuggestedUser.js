import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SuggestedUser = ({ followers, name, avatar }) => {
    const [isFollowed, setIsFollowed] = useState(false);
    const [numberOfFollowers, setNumberOfFollowers] = useState(0);

    const HandleFollow = () => {
        if (isFollowed) {
            setIsFollowed(false);
            setNumberOfFollowers(numberOfFollowers - 1);
            return;
        }
        setIsFollowed(true);
        setNumberOfFollowers(numberOfFollowers + 1);
    };
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={avatar} size={"md"} name={name} />
                <VStack spacing={2} alignItems={"flex-start"}>
                    <Box fontSize={12} fontWeight={"bold"}>
                        {name}
                    </Box>
                    <Box fontSize={11} color={"gray.500"}>
                        {followers + numberOfFollowers} followers
                    </Box>
                </VStack>
            </Flex>
            <Button
                onClick={HandleFollow}
                bg={"transparent"}
                fontSize={13}
                p={0}
                h={"max-content"}
                fontWeight={"medium"}
                cursor={"pointer"}
                color={"blue.500"}
                _hover={{color: "white"}}
            >
                {isFollowed ? "UnFollow" : "Follow"}
            </Button>
        </Flex>
    );
};

export default SuggestedUser;
