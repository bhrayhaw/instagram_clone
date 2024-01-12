import {
    Avatar,
    AvatarGroup,
    Button,
    Flex,
    Text,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import useUserProfileStore from "../../store/UserProfileStore";
import useAuthStore from "../../store/AuthStore";
import EditProfile from "./EditProfile";
import useFollowAndUnFollowUser from "../../hooks/useFollowAndUnFollowUser";

const ProfileHeader = () => {
    const { userProfile } = useUserProfileStore();
    const authUser = useAuthStore((state) => state.user);

    const {isFollowing, handleFollowUser, isUpdating} = useFollowAndUnFollowUser(userProfile?.uid)
    const visitingOwnProfileAndAuth =
        authUser && authUser.username === userProfile.username;
    const visitingAnotherProfileAndAuth =
        authUser && authUser.username !== userProfile.username;
    const {isOpen, onOpen, onClose} = useDisclosure();
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
                <Avatar src={userProfile.profilePicURL} />
            </AvatarGroup>

            <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
                <Flex
                    gap={4}
                    direction={{ base: "column", sm: "row" }}
                    justifyContent={{ base: "center", sm: "flex-start" }}
                    alignItems={"center"}
                    w={"full"}
                >
                    <Text fontSize={{ base: "sm", md: "lg" }}>
                        {userProfile.username}
                    </Text>
                    {visitingOwnProfileAndAuth && (
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
                                onClick={onOpen}
                            >
                                Edit Profile
                            </Button>
                        </Flex>
                    )}
                    {visitingAnotherProfileAndAuth && (
                        <Flex
                            gap={4}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Button
                                bg={"blue.500"}
                                color={"white"}
                                _hover={{ bg: "blue.700" }}
                                size={{ base: "sm", md: "lg" }}
                                isLoading={isUpdating}
                                onClick={handleFollowUser}
                            >
                                {isFollowing ? "UnFollow": "Follow"}
                            </Button>
                        </Flex>
                    )}
                </Flex>
                <Flex justifyContent={"space-between"} gap={5}>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>
                            {userProfile.posts.length}
                        </Text>
                        Posts
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>
                            {userProfile.followers.length}
                        </Text>
                        Followers
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }}>
                        <Text as={"span"} fontWeight={"bold"} mr={1}>
                            {userProfile.following.length}
                        </Text>
                        Following
                    </Text>
                </Flex>
                <Text>{userProfile.fullname}</Text>
                <Text>{userProfile.bio}</Text>
            </VStack>
            {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
        </Flex>
    );
};

export default ProfileHeader;
