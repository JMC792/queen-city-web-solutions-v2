export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/blog/',
        '/post',
      ],
    },
    sitemap: 'https://www.vaporxcrawlspaces.com/sitemap.xml',
  }
}