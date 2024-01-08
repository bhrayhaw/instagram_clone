import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/AuthStore";

const useSignUpWithEmailAndPassword = () => {
    const showToast = useShowToast();
    const loginUser = useAuthStore(state => state.login)
    const [createUserWithEmailAndPassword, , loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const signup = async (inputs) => {
        if (
            !inputs.email ||
            !inputs.fullname ||
            !inputs.username ||
            !inputs.password
        ) {
            showToast("Error", "Please fill out these fields", "error");
            return;
        }

        const usersRef = collection(firestore, "users");

        const q = query(usersRef, where("username", "==", inputs.username));

        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty) return (
            showToast("Error", "Username already exists", "error")
        )
        try {
            const newUser = await createUserWithEmailAndPassword(
                inputs.email,
                inputs.password
            );

            if (!newUser && error) {
                showToast("Error", error.message, "error");
            }
            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    fullname: inputs.fullname,
                    username: inputs.username,
                    email: inputs.email,
                    bio: "",
                    profilePicUrl: "",
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
                loginUser(userDoc)
                showToast(
                    "Account Created",
                    "Your account has been created successfully.",
                    "success"
                );
            }
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    };
    return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
