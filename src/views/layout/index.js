import React from 'react';
import Aside from "../../components/Aside";
import Header from "../../components/Header";
const Layout = ({children}) => {
    return (
        <div className='main-1'>
           <Aside />
            <main className='main'>
                <Header />
                {children}
            </main>
        </div>
    );
};

export default Layout;