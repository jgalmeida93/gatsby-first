const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-contador-js": hot(preferDefault(require("/Users/jonas/Projetos/gatsby/estudo/workshop/src/templates/contador.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jonas/Projetos/gatsby/estudo/workshop/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jonas/Projetos/gatsby/estudo/workshop/src/pages/index.js")))
}

