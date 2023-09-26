import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import GroupListPage from "./pages/GroupListPage";
import GroupDetailsPage from "./pages/GroupDetailsPage";
import EditGroupPage from "./pages/EditGroupPage";
import EventListPage from "./pages/EventListPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import EditUserPage from "./pages/EditUserPage";
import MemoryCard from "./components/MemoryCard";
import EditMemoryCard from "./components/EditMemoryCard";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/groups" element={<GroupListPage />} />
                <Route path="/groups/:groupId" element={<GroupDetailsPage />} />
                <Route
                    path="/groups/edit/:groupId"
                    element={<EditGroupPage />}
                />
                <Route path="/events" element={<EventListPage />} />
                <Route path="/events/:eventId" element={<MemoryCard />} />
                <Route
                    path="/events/:eventId/edit/"
                    element={<EditMemoryCard />}
                />
                <Route path="/users/:userId" element={<UserDetailsPage />} />
                <Route path="/users/edit/:userId" element={<EditUserPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<LoginPage />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
        </>
    );
}

export default App;
