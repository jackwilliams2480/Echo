import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import LoginPage from "./pages/loginPage/LoginPage";
import MainPage from "./pages/mainPage/MainPage";
import Playlist from "./component/Playlist";
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<LoginPage />} />
                <Route path="/home" element = {<MainPage />} />
                <Route path="/test" element = {<Playlist/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;