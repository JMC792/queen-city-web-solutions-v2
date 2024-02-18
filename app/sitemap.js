export default function sitemap() {
    return [
      {
        url: 'https://vaporxcrawlspace.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://vaporxcrawlspace.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://vaporxcrawlspace.com/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://vaporxcrawlspace.com/service',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://vaporxcrawlspace.com/portfolio',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      // {
      //   url: 'https://vaporxcrawlspace.com/blog',
      //   lastModified: new Date(),
      //   changeFrequency: 'weekly',
      //   priority: 0.5,
      // },
    ]
  }