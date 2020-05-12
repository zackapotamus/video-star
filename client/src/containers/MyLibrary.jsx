import React, { Component } from 'react';
import NavBar2 from '../components/Shared/NavBar/NavBar2';
import Hero from '../components/Shared/Hero/Hero';
import GreyBlockTop from '../components/Shared/GreyBlockTop/GreyBlockTop';
import GreyBlock from '../components/Shared/GreyBlock/GreyBlock';

import WatchingMovieImage from '../img/watching-movie.jpg';

class MyLibrary extends Component {
    render() {
        return (
            <>
                <NavBar2 />
                <Hero imageUrl={WatchingMovieImage}/>
                <GreyBlockTop page='My Library' />

                {/* LIBRARY OF VIDEOS GOES HERE */}
                
                <GreyBlock />  
            </>
        );
    }
}

export default MyLibrary;