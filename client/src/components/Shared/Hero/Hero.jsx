import React from 'react';

const Hero = (props) => {

    const jumbotron = {
            color: 'white',
            backgroundImage: `url(${props.imageUrl})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 400,
            marginTop: 5
    }


    return (
        <div className="jumbotron jumbotron-fluid" style={jumbotron}>
            <div className="container">
                <h1 className="display-4" style={{textAlign: 'center', marginTop: 100}}>{props.page}</h1>
            </div>
        </div>
    );
};

export default Hero;