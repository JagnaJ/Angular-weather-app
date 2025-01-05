
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
    'index.csr.html': {size: 622, hash: '87c65d479c44f66c798aca6aa073e23606452563ac90c966d92fbfc36f2027a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '2d4909942205f893109dfd26abf0dc3403432069a2f6f13cd72c70a341fea89d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5837, hash: '2084729499b676d0303262a0be2c12d88fb597716247a12077be2d96b7303444', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZAYVYYH6.css': {size: 11832, hash: 'pqKc/PAC1U8', text: () => import('./assets-chunks/styles-ZAYVYYH6_css.mjs').then(m => m.default)}
  },
};
