const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "variables.scss";
      @import "functions.scss";
    `
  }
};

module.exports = nextConfig;
