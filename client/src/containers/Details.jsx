import React, { Component } from 'react';
import NavBar2 from '../components/Shared/NavBar/NavBar2';
import GreyBlockTop from '../components/Shared/GreyBlockTop/GreyBlockTop';
import GreyBlock from '../components/Shared/GreyBlock/GreyBlock';

class Details extends Component {
    render() {
        return (
            <>
                <NavBar2 />
                <GreyBlockTop page='Details' />
                <div className="container-fluid bg-light py-3">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card card-body">

                                {/* MOVIE DETAILS GO HERE */}

                            </div>
                        </div>
                    </div>
                </div>

                <GreyBlock />
            </>
        );
    }
}

export default Details;