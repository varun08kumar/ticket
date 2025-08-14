export default {
    webpack:(config)=>{
        return {
            ...config,
            watchOptions:{
                ...config.watchOptions,
                poll: 300
            }
        };
    },
    allowedDevOrigins:['ticketing.dev']
}

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     webpack: (config) => {
//       config.watchOptions = {
//         ...config.watchOptions,
//         poll: 300,
//       };
//       return config;
//     },
//     allowedDevOrigins: ['http://ticketing.dev'],
//   };
  
//   module.exports = nextConfig;
  