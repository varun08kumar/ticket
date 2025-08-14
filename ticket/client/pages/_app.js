import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import { Component } from 'react';
import Header from '../components/header';
const AppComponent=({Component, pageProps,currentUser}) => {
    return (
        <div className="container">
           <Header currentUser={currentUser}/>
            <Component {...pageProps} />
        </div>
    );
};

AppComponent.getInitialProps = async (appContext) => {
    // console.log(appContext.ctx);
    
    const client=buildClient(appContext.ctx);
    // console.log(client);
    
    const {data} = await client.get('/api/users/currentuser');
    let pageProps;
    if(appContext.Component.getInitialProps){
        // console.log('appContext.Component.getInitialProps', appContext.Component.getInitialProps);
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }
    // const pageProps=await appContext.Component.getInitialProps(appContext.ctx);
    // let pageProps = {};

    return {
        pageProps,
        ...data
    };

};

export default AppComponent;