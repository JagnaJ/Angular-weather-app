
export default {
  basePath: '/Angular-weather-app/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
