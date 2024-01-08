import React from "react";
import {
    GridItem,
    Flex,
    Text,
    Image,
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Box,
    Avatar,
    Divider,
    VStack,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import FeedPostFooter from "../FeedPosts/FeedPostFooter";

const ProfilePost = ({ img }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <GridItem
                cursor={"pointer"}
                aspectRatio={1 / 1}
                overflow={"hidden"}
                border={"1px solid"}
                borderRadius={4}
                position={"relative"}
                borderColor={"whiteAlpha.300"}
                onClick={onOpen}
            >
                <Flex
                    opacity={0}
                    _hover={{ opacity: 1 }}
                    position={"absolute"}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg={"blackAlpha.700"}
                    transition={"all 0.3s ease"}
                    zIndex={1}
                    justifyContent={"center"}
                >
                    <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        gap={50}
                    >
                        <Flex>
                            <AiFillHeart size={20} />
                            <Text fontWeight={"bold"} ml={2}>
                                7
                            </Text>
                        </Flex>
                        <Flex>
                            <FaComment size={20} />
                            <Text fontWeight={"bold"} ml={2}>
                                7
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Image w={"100%"} h={"100%"} objectFit={"cover"} src={img} />
            </GridItem>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                isCentered={true}
                size={{ base: "3xl", md: "5xl" }}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody bg={"black"}>
                        <Flex
                            gap={4}
                            w={{ base: "90%", sm: "70%", md: "full" }}
                            mx={"auto"}
                        >
                            <Box
                                border={"1px solid"}
                                borderRadius={4}
                                borderColor={"whiteAlpha.300"}
                                overflow={"hidden"}
                                flex={1.5}
                            >
                                <Image src={img} />
                            </Box>
                            <Flex
                                flex={1}
                                flexDir={"column"}
                                px={10}
                                display={{ base: "none", md: "block" }}
                            >
                                <Flex
                                    alignItems={"center"}
                                    justifyContent={"space-between"}
                                >
                                    <Flex alignItems={"center"} gap={4}>
                                        <Avatar
                                            src="/profilepic.png"
                                            size={"sm"}
                                        />
                                        <Text fontWeight={"bold"} fontSize={12}>
                                            Bhrayhaw
                                        </Text>
                                    </Flex>
                                    <Box
                                        _hover={{
                                            bg: "whiteAlpha.400",
                                            color: "red.700",
                                        }}
                                        borderRadius={4}
                                        p={1}
                                    >
                                        <MdDelete
                                            size={20}
                                            cursor={"pointer"}
                                        />
                                    </Box>
                                </Flex>
                                <Divider my={4} color={"gray.400"} />
                                <VStack
                                    w={"full"}
                                    alignItems={"start"}
                                    maxH={"350px"}
                                    overflowY={"auto"}
                                >
                                    <Comment
                                        createdAt={"1d ago"}
                                        profilepic={"/profilepic.png"}
                                        username={"Bhrayhaw"}
                                        text={"Nice picture"}
                                    />
                                    <Comment
                                        createdAt={"13h ago"}
                                        profilepic={"/img1.png"}
                                        username={"Bhrayhaw"}
                                        text={"Nice picture"}
                                    />
                                    <Comment
                                        createdAt={"12h ago"}
                                        profilepic={"/img2.png"}
                                        username={"Bhrayhaw"}
                                        text={"Nice picture"}
                                    />
                                </VStack>
                                <Divider my={4} color={"gray.800"} />
                                <FeedPostFooter isProfilePic={true}/>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProfilePost;
