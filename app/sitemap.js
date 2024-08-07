export default function sitemap() {
    return [
      {
        url: 'https://queencitywebsolutions.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://queencitywebsolutions.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://queencitywebsolutions.com/contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://queencitywebsolutions.com/service',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://queencitywebsolutions.com/portfolio',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      // {
      //   url: 'https://queencitywebsolutions.com/blog',
      //   lastModified: new Date(),
      //   changeFrequency: 'weekly',
      //   priority: 0.5,
      // },
    ]
  }