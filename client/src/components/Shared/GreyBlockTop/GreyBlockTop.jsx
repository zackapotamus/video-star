import React from 'react';

const GreyBlockTop = () => {

    const greyblock = {
        backgroundImage: 'url(./img/grey-block.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 200,
    }

    return (
        <div className="container" style={greyblock}>
            <div className="row">
                <div className="col">
                    
                </div>
            </div>
        </div>
    );
};

export default GreyBlockTop;