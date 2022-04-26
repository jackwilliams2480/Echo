import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import LoginPage from "./pages/loginPage/LoginPage";
import SideBar from "./pages/mainPage/MainPage";
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<LoginPage />} />
                <Route path="/home" element = {<SideBar />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;