import React from 'react';

const Hero = (props) => {

    const jumbotron = {
            color: 'white',
            backgroundImage: `url(${props.imageUrl})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 400,
            marginTop: 5,
            marginBottom: 0
    }


    return (
        <div className="jumbotron jumbotron-fluid" style={jumbotron}>
            <div className="container">
                
            </div>
        </div>
    );
};

export default Hero;