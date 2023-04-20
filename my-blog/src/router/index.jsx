import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, SignInView , PostsView, DetailView, ProfileView, SignUpView} from "../page";
import MainLayout from "../layouts/mainLayouts";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route element={<MainLayout />}>
                    <Route path="/home" element={<HomeView />} />
                    <Route path="/Posts" element={<PostsView />} />
                    <Route path="/detail/:id" element={<DetailView />} />
                    <Route path="/Profile" element={<ProfileView />} />
                </Route>
                <Route path="/signup" element={<SignUpView />} />
                <Route path="/" element={<SignInView />} />
            </Routes>
        </BrowserRouter>
    )

}