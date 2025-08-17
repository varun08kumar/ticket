// // import axios from "axios";
// import buildClient from "../api/build-client";
// const LandingPage= ({currentUser})=>{
//     // console.log('i am on client');
//     // axios.get('/api/users/currentuser')
//     // {currentUser}
      
//     return currentUser?<h1>user signed in </h1>:<h1>chodu signin kar</h1>
// };


// LandingPage.getInitialProps=async (context)=>{
//     const {req}=context;
//     console.log(req);
    
//     const {data}=await buildClient(context).get('/api/users/currentuser');
//     return data;
// }
// export default LandingPage;


import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return currentUser
    ? <h1>user signed in</h1>
    : <h1>signin karo!!!!!</h1>;
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  return { ...data };  // Ensure this returns { currentUser: ... }
};

export default LandingPage;




