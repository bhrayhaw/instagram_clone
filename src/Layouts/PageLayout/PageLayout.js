import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";

const PageLayout = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const { pathname } = useLocation();
    const canRenderSideBar = pathname !== "/auth" && user;
    const canShowNavBar = !user && !loading && pathname !== "/auth";
    const checkingIsUserAuthenticated = !user && loading

    if(checkingIsUserAuthenticated) return <PageSpinner/>


    return (
        <Flex flexDir={canShowNavBar ? "column" : "row"}>
            {canRenderSideBar ? (
                <Box w={{ base: "70px", md: "240px" }}>
                    <Sidebar />
                </Box>
            ) : null}
            { canShowNavBar ?
                <Navbar /> : null}
            <Box
                flex={1}
                w={{ base: "calc(100% -70px)", md: "calc(100% -240px)" }}
                maxW={"auto"}
            >
                {children}
            </Box>
        </Flex>
    );
};

export default PageLayout;

const PageSpinner = () => {
    return (
        <Flex flexDir={"column"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
            <Spinner size={"xl"}/>
        </Flex>
    )
}