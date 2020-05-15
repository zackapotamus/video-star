import React, { Component } from 'react';
import NavBar2 from '../components/Shared/NavBar/NavBar2';
import GreyBlockTop from '../components/Shared/GreyBlockTop/GreyBlockTop';
import GreyBlock from '../components/Shared/GreyBlock/GreyBlock';
import ProfileCard from '../components/Shared/Card/ProfileCard';

class Account extends Component {
    render() {
        return (
            <>
                <NavBar2 />

                <GreyBlockTop page='Account' />

                <ProfileCard />

                <GreyBlock />

            </>
        );
    }
}

export default Account;