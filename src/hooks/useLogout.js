import { auth } from "../firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/AuthStore";

const useLogout = () => {
    const showToast = useShowToast();
    const [signOut, isLoggingOut, error] = useSignOut(auth);
    const logOutUser = useAuthStore((state) => state.logout);

    const HandleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem("user-info");
            logOutUser();
            showToast(
                "Logged Out",
                "You have been logged out successfully",
                "success"
            );
        } catch (error) {
            showToast("Error", "Couldn't sign out", "error");
        }
        await signOut();
    };
    return { HandleLogout, isLoggingOut, error };
};

export default useLogout;
