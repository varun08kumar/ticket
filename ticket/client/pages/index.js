


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




