import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Hompage from "./pages/Homepage/Homepage";
import Authpage from "./pages/Authpage/Authpage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import Profilepage from "./pages/Profilepage/Profilepage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

function App() {
    const [authUser] = useAuthState(auth);
    return (
        <PageLayout>
            <Routes>
                <Route path="/" element={authUser ? <Hompage /> : <Navigate to="/auth"/>} />
                <Route path="/auth" element={!authUser ? <Authpage /> : <Navigate to="/"/>} />
                <Route path="/:username" element={<Profilepage />} />
            </Routes>
        </PageLayout>
    );
}

export default App;
