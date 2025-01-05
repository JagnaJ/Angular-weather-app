
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Angular-weather-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular-weather-app"
  }
],
  assets: {
    'index.csr.html': {size: 642, hash: '11b3aace3b7c4a04f5fdceff673d4466eaeca5a3a200220318f58ed13f5a7a2e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1044, hash: '16fa9e3035417040d6f1c7426ca7a6c43c1d9351a305e3f99cbe7edb26a58919', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5857, hash: '61bc53552a1e6a9860f0225984397849258e80316481bc5f5ac6bcb93ea26b18', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZAYVYYH6.css': {size: 11832, hash: 'pqKc/PAC1U8', text: () => import('./assets-chunks/styles-ZAYVYYH6_css.mjs').then(m => m.default)}
  },
};
