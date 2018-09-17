// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {
      utf8: false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 750, // (Number) The width of the viewport. 
      viewportHeight: 1334, // (Number) The height of the viewport. 
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
      viewportUnit: 'vw', // (String) Expected units. 
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
      mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
    },
    "postcss-viewport-units": {},
    "cssnano": {
      preset: "advanced",
      autoprefixer: false,
      "postcss-zindex": false//前者是有重复调用，后者是一个讨厌的东东。只要启用了这个插件，z-index的值就会重置为1。这是一个天坑，千万记得将postcss-zindex设置为false。著作权归作者所有。
    }
  }
}
