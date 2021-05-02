import React from 'react';
import Header from '../Header/Header';
import Particles from '../Particle/Particle';
import "./HeaderMain.css"

const HeaderMain = () => {
    return (
        <div className="header-container">

            <Header/>
            <Particles/>
                            
        </div>
    );
};

export default HeaderMain;