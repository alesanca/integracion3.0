import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./maincontent"

function MyApp(){
    return(
        <div id="all">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default MyApp;