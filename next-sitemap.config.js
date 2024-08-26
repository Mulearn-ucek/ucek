/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://uck.ac.in',
  generateRobotsTxt: true,
  exclude: ['/facilites/*', '/test'],
}