import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hompage from "./pages/Homepage/Homepage";
import Authpage from "./pages/Authpage/Authpage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import Profilepage from "./pages/Profilepage/Profilepage";

function App() {
    return (
        <PageLayout>
            <Routes>
                <Route path="/" element={<Hompage />} />
                <Route path="/auth" element={<Authpage />} />
                <Route path="/:username" element={<Profilepage />} />
            </Routes>
        </PageLayout>
    );
}

export default App;
