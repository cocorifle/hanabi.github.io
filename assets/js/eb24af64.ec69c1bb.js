/*! For license information please see eb24af64.ec69c1bb.js.LICENSE.txt */
(self.webpackChunkhanabi_github_io=self.webpackChunkhanabi_github_io||[]).push([[6782],{8173:function(e,n,t){"use strict";function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function r(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(n,{Z:function(){return r}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(t),d=r,b=g["".concat(c,".").concat(d)]||g[d]||p[d]||a;return t?i.createElement(b,o(o({ref:n},u),{},{components:t})):i.createElement(b,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6679:function(e){e.exports={mainSidebar:["about",{"Beginner's Guide":["beginner","beginner/card-layout",{"The Chop":["beginner/chop","beginner/chop-question-1","beginner/chop-question-2","beginner/chop-question-3","beginner/chop-question-4"]},"beginner/card-notes","beginner/two-types-of-clues",{"1 - Play Clues":["beginner/play-clues","beginner/play-clues-question-1","beginner/play-clues-question-2","beginner/delayed-play-clues","beginner/delayed-play-clues-question-1","beginner/delayed-play-clues-question-2","beginner/delayed-play-clues-question-3"]},{"2 - Save Clues":["beginner/save-clues","beginner/5-save","beginner/5-save-question-1","beginner/5-save-question-2","beginner/2-save","beginner/2-save-question-1","beginner/2-save-question-2","beginner/2-save-question-3","beginner/critical-save","beginner/critical-save-question-1","beginner/critical-save-question-2","beginner/critical-save-question-3","beginner/critical-save-question-4"]},{"Clue Interpretation":["beginner/single-card-focus","beginner/single-card-focus-question-1","beginner/single-card-focus-question-2","beginner/single-card-focus-question-3","beginner/single-card-focus-question-4","beginner/clue-interpretation","beginner/clue-interpretation-question-1","beginner/clue-interpretation-question-2","beginner/clue-interpretation-question-3","beginner/clue-interpretation-question-4"]},"beginner/three-main-principles",{"1 - Good Touch Principle":["beginner/good-touch-principle","beginner/good-touch-principle-question-1","beginner/good-touch-principle-question-2","beginner/good-touch-principle-question-3","beginner/good-touch-principle-question-4"]},{"2 - Save Principle":["beginner/save-principle","beginner/save-principle-question-1","beginner/save-principle-question-2"]},{"3 - Minimum Clue Value Principle":["beginner/minimum-clue-value-principle","beginner/minimum-clue-value-principle-question-1"]},{"The Early Game":["beginner/early-game","beginner/early-game-question-1","beginner/early-game-question-2","beginner/early-game-question-3","beginner/early-game-question-4"]},{"General Strategy":["beginner/other-general-strategy","beginner/other-general-strategy-question-1","beginner/other-general-strategy-question-2","beginner/other-general-strategy-question-3","beginner/other-general-strategy-question-4","beginner/other-general-strategy-question-5"]},{"Special Moves":["beginner/special-moves","beginner/prompt","beginner/prompt-question-1","beginner/prompt-question-2","beginner/prompt-question-3","beginner/finesse","beginner/finesse-question-1","beginner/finesse-question-2"]},"beginner/next-steps"]},"how-to-join","learning-path",{"Basic Strategies":["reference","first-principles","level-1","level-2","level-3","level-4","level-5","level-6","level-7","level-8","level-9","level-10","level-11","level-12","level-13","level-14","level-15","level-16","level-17","level-18","level-19","level-20","level-21","level-22","level-23"]},{"Advanced Strategies":["extras","extras/play-clues","extras/save-clues","extras/fix-clues","extras/discards-misplays","extras/chop-moves","extras/special-finesses","extras/special-bluffs","extras/suboptimal-moves","extras/pushes-pulls","extras/signal-shifting","extras/ejections","extras/discharges","extras/charms","extras/ejection-extensions","extras/miscellaneous"]},{"Variant Specific":["variant-specific","variant-specific/3-suits","variant-specific/black","variant-specific/black-rainbow","variant-specific/brown","variant-specific/clue-starved","variant-specific/color-blind","variant-specific/cow-pig","variant-specific/dark-null","variant-specific/dark-omni-gray-pink","variant-specific/dark-pink","variant-specific/dark-prism","variant-specific/dark-rainbow","variant-specific/deceptive-fives","variant-specific/dual-color-3-suits","variant-specific/dual-color-6-suits","variant-specific/dual-color","variant-specific/duck","variant-specific/extremely-ambiguous","variant-specific/muddy-rainbow-cocoa-rainbow","variant-specific/null","variant-specific/number-blind","variant-specific/number-mute","variant-specific/omni","variant-specific/pink","variant-specific/pink-omni","variant-specific/pink-ones","variant-specific/prism","variant-specific/rainbow","variant-specific/rainbow-muddy-rainbow","variant-specific/rainbow-ones-rainbow-fives","variant-specific/reversed","variant-specific/special-fives","variant-specific/throw-it-in-a-hole","variant-specific/totally-blind","variant-specific/up-or-down","variant-specific/white","variant-specific/no-positive-clues"]},"convention-attribution"]}},1961:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var i=t(8173),r=t(7294),a=t(5774),o=t(6679),s=o.mainSidebar.find((function(e){return e["Beginner's Guide"]}))["Beginner's Guide"],c=[];!function e(n,t){for(var r,a=(0,i.Z)(t);!(r=a()).done;){var o=r.value;"string"==typeof o?n.push(o):e(n,Object.values(o)[0])}}(c,s),"beginner"===c[0]&&c.shift();var l=c.length;function u(e){var n=e.id,t=c.findIndex((function(e){return"beginner/"+n===e}));if(-1===t)throw new Error("page id not found in sidebar");var i=Math.round((t+1)/l*100);return(0,r.useEffect)((function(){document.querySelector("main > div > div > div:nth-child(2)").append(document.querySelector("#percent")),document.querySelector("#percent").style.display=null})),r.createElement("div",{id:"percent",style:{position:"fixed",display:"none",width:"8em",height:"8em"}},r.createElement(a.Ip,{value:i,text:i+"%"}))}},3673:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var i=t(2122),r=t(9756),a=(t(7294),t(3905)),o=t(1961),s=["components"],c={id:"three-main-principles",title:"The Three Main Principles"},l=void 0,u={unversionedId:"beginner/three-main-principles",id:"beginner/three-main-principles",isDocsHomePage:!1,title:"The Three Main Principles",description:"- So far, we have covered:",source:"@site/docs/beginner/three-main-principles.md",sourceDirName:"beginner",slug:"/beginner/three-main-principles",permalink:"/docs/beginner/three-main-principles",editUrl:"https://github.com/hanabi/hanabi.github.io/edit/main/docs/beginner/three-main-principles.md",version:"current",frontMatter:{id:"three-main-principles",title:"The Three Main Principles"},sidebar:"mainSidebar",previous:{title:"Clue Interpretation (Question 4)",permalink:"/docs/beginner/clue-interpretation-question-4"},next:{title:"Good Touch Principle (GTP)",permalink:"/docs/beginner/good-touch-principle"}},p=[],g={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{id:"three-main-principles",mdxType:"BeginnersGuideProgress"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"So far, we have covered:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"how to discard (i.e. the chop)"),(0,a.kt)("li",{parentName:"ul"},"how to tell what a clue means (i.e. a ",(0,a.kt)("em",{parentName:"li"},"Play Clue")," or a ",(0,a.kt)("em",{parentName:"li"},"Save Clue"),")"),(0,a.kt)("li",{parentName:"ul"},"how to tell what the focus of a clue is (i.e. ",(0,a.kt)("em",{parentName:"li"},"Chop-Focus")," or left-most)"))),(0,a.kt)("li",{parentName:"ul"},"But that doesn't really tell you much about the ",(0,a.kt)("em",{parentName:"li"},"strategy")," involved in playing Hanabi. How do players find the best move for a certain situation?"),(0,a.kt)("li",{parentName:"ul"},"Hanabi is very complicated, so it is impossible to write a guide on how to find the best move. (And that's a good thing, because the game continues to be interesting to play, even after thousands of games!)"),(0,a.kt)("li",{parentName:"ul"},"Luckily, beginners can focus on internalizing just ",(0,a.kt)("strong",{parentName:"li"},"three main principles"),":",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Good Touch Principle")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Save Principle")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("em",{parentName:"li"},"Minimum Clue Value Principle")))),(0,a.kt)("li",{parentName:"ul"},"Let's go through each principle individually.")))}d.isMDXComponent=!0},5774:function(e,n,t){"use strict";t.d(n,{Ip:function(){return c}});var i=t(7294),r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)};function a(e){var n=e.className,t=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,c=e.strokeWidth,l=e.style;return(0,i.createElement)("path",{className:n,style:Object.assign({},l,s({pathRadius:a,dashRatio:r,counterClockwise:t})),d:o({pathRadius:a,counterClockwise:t}),strokeWidth:c,fillOpacity:0})}function o(e){var n=e.pathRadius,t=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+n+"\n      a "+n+","+n+" "+t+" 1 1 0,"+2*n+"\n      a "+n+","+n+" "+t+" 1 1 0,-"+2*n+"\n    "}function s(e){var n=e.counterClockwise,t=e.dashRatio,i=e.pathRadius,r=2*Math.PI*i,a=(1-t)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(n?-a:a)+"px"}}var c=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}(n,e),n.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},n.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},n.prototype.getPathRatio=function(){var e=this.props,n=e.value,t=e.minValue,i=e.maxValue;return(Math.min(Math.max(n,t),i)-t)/(i-t)},n.prototype.render=function(){var e=this.props,n=e.circleRatio,t=e.className,r=e.classes,o=e.counterClockwise,s=e.styles,c=e.strokeWidth,l=e.text,u=this.getPathRadius(),p=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+t,style:s.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:s.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(a,{className:r.trail,counterClockwise:o,dashRatio:n,pathRadius:u,strokeWidth:c,style:s.trail}),(0,i.createElement)(a,{className:r.path,counterClockwise:o,dashRatio:p*n,pathRadius:u,strokeWidth:c,style:s.path}),l?(0,i.createElement)("text",{className:r.text,style:s.text,x:50,y:50},l):null)},n.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},n}(i.Component)}}]);