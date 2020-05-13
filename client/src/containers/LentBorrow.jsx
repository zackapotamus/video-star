import React, { Component } from 'react';
import NavBar2 from '../components/Shared/NavBar/NavBar2';
import Hero from '../components/Shared/Hero/Hero';
import GreyBlockTop from '../components/Shared/GreyBlockTop/GreyBlockTop';
import GreyBlock from '../components/Shared/GreyBlock/GreyBlock';

import RetroCamera from '../img/retro-camera.jpg';
class LentBorrow extends Component {

    render() {
        return (
            <>
                <NavBar2 />
                <Hero imageUrl={RetroCamera}/>
                <GreyBlockTop page='Lent / Borrowed' />
                <h6 style={{textAlign: 'center'}}>LENT VIDEOS</h6>
                {/* TABLE OF LENT VIDEOS GOES HERE */}
                <h6 style={{textAlign: 'center'}}>BORROWED VIDEOS</h6>
                {/* TABLE OF BORROWED VIDEOS GOES HERE */}
                <GreyBlock />  
            </>
        );
    }
}

export default LentBorrow;