import React from 'react';
import GreyBlockImage from '../../../img/grey-block.png';

const GreyBlock = () => {

    const greyblock = {
        backgroundImage: `url(${GreyBlockImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 200,
        marginTop: 5,
        marginBottom: 0
    }

    return (
        <div className="jumbotron jumbotron-fluid" style={greyblock}>
            <div className="row">
                <div className="col">
                
                </div>
            </div>
        </div>
    );
};

export default GreyBlock;