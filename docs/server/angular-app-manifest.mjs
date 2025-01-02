
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 622, hash: 'dea220edf5b22c369f197bb2b0896e16f0836a111a6e689d83c33c0ccd654b29', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '360f949514fe3b7e96deda350e3a64f259ee9cb8344c16f1554ac634b37a8bff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4897, hash: '3b20e71911517e5ee3c1ee3405670b1478ed8bbc20100680ccac6e3e4f3a036d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZAYVYYH6.css': {size: 11832, hash: 'pqKc/PAC1U8', text: () => import('./assets-chunks/styles-ZAYVYYH6_css.mjs').then(m => m.default)}
  },
};
