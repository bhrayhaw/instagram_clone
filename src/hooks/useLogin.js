import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/AuthStore";
const useLogin = () => {
    const showToast = useShowToast();
    const [signInWithEmailAndPassword, , loading, error] =
        useSignInWithEmailAndPassword(auth);
    const loginUser = useAuthStore((state) => state.login);

    const login = async (inputs) => {
        if (!inputs.email && !inputs.password) {
            return showToast("Error", "Please fill out these fields", "error");
        }
        try {
            const userCredentials = await signInWithEmailAndPassword(
                inputs.email,
                inputs.password
            );

            if (userCredentials) {
                const docRef = doc(
                    firestore,
                    "users",
                    userCredentials.user.uid
                );
                const docSnapshot = await getDoc(docRef);
                localStorage.setItem(
                    "user-info",
                    JSON.stringify(docSnapshot.data())
                );
                loginUser(docSnapshot.data());
            }
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    };
    return {loading, login, error}
};

export default useLogin;
