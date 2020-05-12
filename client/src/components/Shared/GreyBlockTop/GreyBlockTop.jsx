import React from 'react';
import GreyBlockImage from '../../../img/grey-block.png';

const GreyBlockTop = (props) => {

    const greyblock = {
        backgroundImage: `url(${GreyBlockImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 200,
        marginTop: 5
    }

    const textblock = {
            textAlign: 'center',
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white' 
    }

    return (
        <div className="jumbotron jumbotron-fluid" style={greyblock}>
            <div className="row">
                <div className="col">
                <h1 className="display-4" style={textblock}>{props.page}</h1>
                </div>
            </div>
        </div>
    );
};

export default GreyBlockTop;