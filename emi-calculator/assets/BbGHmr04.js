import{Q as r,A as p}from"./Bj7LMV-i.js";function m(t){const{theme:e,name:o,props:n}=t;return!e||!e.components||!e.components[o]||!e.components[o].defaultProps?n:r(e.components[o].defaultProps,n)}function c({props:t,name:e,defaultTheme:o,themeId:n}){let s=p(o);return n&&(s=s[n]||s),m({theme:s,name:e,props:t})}export{c as u};