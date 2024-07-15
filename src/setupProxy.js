const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://emma.maryland.gov",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/page.aspx/en/rfp/request_browse_public",
      },
    })
  );
};
