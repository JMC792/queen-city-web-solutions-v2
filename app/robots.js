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
    sitemap: 'https://www.queencitywebsolutions.com/sitemap.xml',
  }
}