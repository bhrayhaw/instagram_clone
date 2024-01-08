import { Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/AuthStore";
import { doc, setDoc, getDoc } from "firebase/firestore";

const GoogleAuth = ({ prefix }) => {
    const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore((state) => state.login);

    const HandleGoogleAuth = async () => {
        try {
            const newUser = await signInWithGoogle();
            if (!newUser && error) {
                showToast("Error", error.message, "error");
                return;
            }
            const userRef = doc(firestore, "users", newUser.user.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap) {
                const userDoc = userSnap.data();
                localStorage.setItem("user-info", JSON.stringify(userDoc))
                loginUser(userDoc)
            }else{
                const userDoc = {
                    uid: newUser.user.uid,
                    fullname: newUser.user.displayName,
                    username: newUser.user.email.split("@")[0],
                    email: newUser.user.email,
                    bio: "",
                    profilePicUrl: newUser.user.photoURL,
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };
                await setDoc(
                    doc(firestore, "users", newUser.user.uid),
                    userDoc
                );
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
            }
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    };

    return (
        <Flex
            alignItems={"center"}
            justifyContent={"center"}
            onClick={HandleGoogleAuth}
        >
            <Image w={5} src="/google.png" alt="Google Logo" />
            <Text mx={2} cursor={"pointer"} fontSize={14}>
                {prefix} with google
            </Text>
        </Flex>
    );
};

export default GoogleAuth;
