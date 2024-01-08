import {
    Avatar,
    AvatarGroup,
    Button,
    Flex,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";

const ProfileHeader = () => {
    return (
        <Flex
            gap={{ base: 4, sm: 10 }}
            alignItems={"center"}
            py={10}
            direction={{ base: "column", sm: "row" }}
        >
            <AvatarGroup
                justifySelf={"center"}
                alignSelf={"flex-start"}
                mx={"auto"}
                size={{ base: "xl", md: "2xl" }}
            >
                <Avatar src="/profilepic.png" name="Bhrayhaw" />
            </AvatarGroup>

            <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
                <Flex
                    gap={4}
                    direction={{ base: "column", sm: "row" }}
                    justifyContent={{ base: "center", sm: "flex-start" }}
                    alignItems={"center"}
                    w={"full"}
                >
                    <Text fontSize={{ base: "sm", md: "lg" }}>Bhrayhaw</Text>
                    <Flex
                        gap={4}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Button
                            bg={"white"}
                            color={"black"}
                            _hover={{ bg: "whiteAlpha.400" }}
                            size={{ base: "sm", md: "lg" }}
                        >
                            Edit Profile
                        </Button>
                    </Flex>
                </Flex>
                <Flex justifyContent={"space-between"} gap={5}>
                    <Text fontSize={{base: "xs", md: "sm"}}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>
                            4
                        </Text>
                        Posts
                    </Text>
                    <Text fontSize={{base: "xs", md: "sm"}}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>
                            4
                        </Text>
                        Followers
                    </Text>
                    <Text fontSize={{base: "xs", md: "sm"}}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>
                            4
                        </Text>
                        Following
                    </Text>
                </Flex>
                <Text>Bhrayhaw@1</Text>
                <Text>A little detail of myself to emphasize the mental</Text>
            </VStack>
        </Flex>
    );
};

export default ProfileHeader;
