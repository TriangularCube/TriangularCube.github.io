(self.webpackChunk=self.webpackChunk||[]).push([[672],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),a=r(7067);function o(t,r,i){return a()?(e.exports=o=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},e.exports.__esModule=!0,e.exports.default=e.exports),o.apply(null,arguments)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},4811:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,a=0;a<e.length;a++){var o=e[a];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=r,r=!0,a++):r&&n&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=r,r=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,n=r,r=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},9230:function(e,t,r){"use strict";r.d(t,{G:function(){return k},L:function(){return m},M:function(){return w},P:function(){return x},_:function(){return s},a:function(){return i},b:function(){return u},g:function(){return c},h:function(){return l}});var n=r(7294),a=(r(4811),r(5697)),o=r.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(a[r]=e[r]);return a}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function u(e,t,r,n,a){return void 0===a&&(a={}),i({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function c(e,t,r,n,a,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===r?(u.width=n,u.height=a,u.backgroundColor=o,u.position="relative"):("constrained"===r||"fullWidth"===r)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var c=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return c}var d,p=["children"],f=function(e){var t=e.layout,r=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,r=s(e,p);return n.createElement(n.Fragment,null,n.createElement(f,i({},r)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,a=e.loading,o=e.alt,l=void 0===o?"":o,u=e.shouldLoad,c=s(e,g);return n.createElement("img",i({},c,{decoding:"async",loading:a,src:u?t:void 0,"data-src":u?void 0:t,srcSet:u?r:void 0,"data-srcset":u?void 0:r,alt:l}))},v=function(e){var t=e.fallback,r=e.sources,a=void 0===r?[]:r,o=e.shouldLoad,l=void 0===o||o,u=s(e,h),c=u.sizes||(null==t?void 0:t.sizes),d=n.createElement(y,i({},u,t,{sizes:c,shouldLoad:l}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,r=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+r,type:a,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:c})})),d):d};y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var b=["fallback"],x=function(e){var t=e.fallback,r=s(e,b);return t?n.createElement(v,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},r))};x.displayName="Placeholder",x.propTypes={fallback:a.string,sources:null==(d=v.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var w=function(e){return n.createElement(n.Fragment,null,n.createElement(v,i({},e)),n.createElement("noscript",null,n.createElement(v,i({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=v.propTypes;var E,C,O=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),i=3;i<n;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,r].concat(a)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:o().object.isRequired,alt:O},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],j=new Set,A=function(e){var t=e.as,a=void 0===t?"div":t,o=e.image,u=e.style,c=e.backgroundColor,d=e.className,p=e.class,f=e.onStartLoad,m=e.onLoad,g=e.onError,h=s(e,L),y=o.width,v=o.height,b=o.layout,x=function(e,t,r){var n={},a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(y,v,b),w=x.style,O=x.className,_=s(x,S),A=(0,n.useRef)(),k=(0,n.useMemo)((function(){return JSON.stringify(o.images)}),[o.images]);p&&(d=p);var M=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,y,v);return(0,n.useEffect)((function(){E||(E=Promise.all([r.e(774),r.e(597)]).then(r.bind(r,3597)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=A.current.querySelector("[data-gatsby-image-ssr]");return n&&l()?(n.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void j.add(k)):C&&j.has(k)?void 0:(E.then((function(r){var n=r.renderImageToString,a=r.swapPlaceholderImage;A.current.innerHTML=n(i({isLoading:!0,isLoaded:j.has(k),image:o},h)),j.has(k)||(e=requestAnimationFrame((function(){A.current&&(t=a(A.current,k,j,u,f,m,g))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[o]),(0,n.useLayoutEffect)((function(){j.has(k)&&C&&(A.current.innerHTML=C(i({isLoading:j.has(k),isLoaded:j.has(k),image:o},h)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[o]),(0,n.createElement)(a,i({},_,{style:i({},w,u,{backgroundColor:c}),className:O+(d?" "+d:""),ref:A,dangerouslySetInnerHTML:{__html:M},suppressHydrationWarning:!0}))},k=(0,n.memo)((function(e){return e.image?(0,n.createElement)(A,e):null}));k.propTypes=_,k.displayName="GatsbyImage";var M,T=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],I=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),P={src:o().string.isRequired,alt:O,width:I,height:I,sizes:o().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(M=k,function(e){var t=e.src,r=e.__imageData,a=e.__error,o=s(e,T);return a&&console.warn(a),r?n.createElement(M,i({image:r},o)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=P},4514:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7294),a=r(9230),o=r(8125),i=r(5414),s=r(7255);function l(){var e=(0,n.useRef)(null);return(0,n.useEffect)((function(){var t=document.createElement("script");t.async=!0,t.src="https://utteranc.es/client.js",t.setAttribute("repo","TriangularCube/TriangularCube.github.io"),t.setAttribute("issue-term","title"),t.setAttribute("label","Comment"),t.setAttribute("theme","github-dark"),t.setAttribute("crossorigin","anonymous"),null!=e.current?e.current.appendChild(t):console.log("Error adding utterances comments on: "+e)}),[]),n.createElement("div",{style:{width:"100%"},ref:e})}var u=function(e){var t,r,u=e.data,c=null===(t=u.mdx.frontmatter.featuredImage)||void 0===t||null===(r=t.childImageSharp)||void 0===r?void 0:r.gatsbyImageData;return n.createElement(n.Fragment,null,n.createElement(i.q,null,n.createElement("title",null,u.mdx.frontmatter.title)),n.createElement(s.M,null,n.createElement("div",null,c&&n.createElement(a.G,{image:c,alt:u.mdx.frontmatter.featuredImageAlt}),n.createElement("div",null),c&&n.createElement("hr",null),n.createElement("h4",{className:"title is-3"},u.mdx.frontmatter.title),n.createElement("p",{className:"subtitle is-5 pb-2"},n.createElement("em",null,u.mdx.frontmatter.date)),n.createElement("div",{className:"content"},n.createElement(o.MDXRenderer,null,u.mdx.body))),n.createElement("hr",null),n.createElement(l,null)))}},8125:function(e,t,r){var n=r(6899);e.exports={MDXRenderer:n}},6899:function(e,t,r){var n=r(9100),a=r(319),o=r(9713),i=r(7316),s=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=r(7294),d=r(4983).mdx,p=r(5862).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=i(e,s),l=p(t),f=c.useMemo((function(){if(!r)return null;var e=u({React:c,mdx:d},l),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(o)))}),[r,t]);return c.createElement(f,u({},o))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-tsx-1b3e5fd4b4eeafe05911.js.map