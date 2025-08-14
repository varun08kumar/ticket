// import axios from "axios";

// export default ({req}) => {
//     console.log(typeof window);
    
//     if (typeof window === 'undefined') {
//         // We are on the server
//         return axios.create({
//         baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
//         // baseURL: 'http://ticketing.dev:3000',
//         headers: req?.headers,
//         });
//     } else {
//         // We are on the browser
//         return axios.create({
//         baseURL: '/',
//         });
//     }
// }


import axios from 'axios';

export default ({ req }) => {
    console.log('Building client with req:', req);
    
  if (typeof window === 'undefined') {
    // Running on the server
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: {
        ...req.headers,
        host: 'ticketing.dev' // 👈 critical to route correctly through Ingress
      }
    });
  } else {
    // Running in the browser
    return axios.create({
      baseURL: '/'
    });
  }
};
