// import { useState } from "react";
import { use, useEffect } from "react";
// import axios from 'axios'
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default ()=>{
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [errors,setErrors] = useState([]);
    const {doRequest,errors}=useRequest({
        url:'/api/users/signout',
        method:'post',
        // body:{email,password},
        onSuccess:()=>Router.push('/auth/signin')
    });
    
   useEffect(()=>{
        doRequest();
    },[]);
    return (
   <div>signing out ...........................................</div>
    );
};