let os = require("os");

module.exports = {
    skipJsErrors: true,
    hostname: os.hostname(),

    baseUrl: "https://saucedemo.com/",
    concurrency: 1,
}