const path = require("path");
const rootPath = path.dirname(require.main.filename);
const view = (file) => path.join(rootPath, "views", file);
module.exports = view;
