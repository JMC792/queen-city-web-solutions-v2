import ServiceMarketingPage from '@components/pages/ServiceMarketingPage';
import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  GlobeAltIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PencilSquareIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'SEO Guides',
  description:
    'Practical SEO guides for improving website visibility, local discovery, page structure, content planning, and technical search foundations.',
};

export default function SeoGuidesPage() {
  return (
    <ServiceMarketingPage
      hero={{
        title: 'SEO Guides',
        text: 'Plain-language SEO guidance for improving search visibility, local discovery, page quality, and the content customers use to find you.',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80',
      }}
      intro={{
        eyebrow: 'SEO Guides',
        title: 'Build search visibility from clearer pages and better signals',
        text: 'SEO is easier to act on when the work is broken into practical pieces: technical cleanup, local relevance, useful service pages, internal links, and content that answers real buyer questions.',
      }}
      highlights={[
        {
          name: 'Search Foundations',
          description:
            'Understand titles, descriptions, headings, sitemap signals, crawlability, and page structure.',
          icon: DocumentMagnifyingGlassIcon,
        },
        {
          name: 'Local Discovery',
          description:
            'Shape location and service signals around how nearby customers search for solutions.',
          icon: MapPinIcon,
        },
        {
          name: 'Useful Content',
          description:
            'Plan pages and resources around real customer intent instead of generic keyword lists.',
          icon: PencilSquareIcon,
        },
      ]}
      coverage={{
        eyebrow: 'Guide Topics',
        title: 'The SEO basics worth improving first',
        text: 'These guide areas help you understand what search engines need, what visitors need, and how to prioritize changes that can compound over time.',
        items: [
          'Technical SEO Basics',
          'Page Titles',
          'Meta Descriptions',
          'Heading Structure',
          'Sitemap Signals',
          'Internal Links',
          'Local SEO',
          'Service Page Planning',
          'Keyword Intent',
          'Content Gaps',
          'Google Business Profile',
          'Performance Signals',
          'Analytics Review',
          'SEO Prioritization',
        ],
      }}
      process={{
        eyebrow: 'How To Use These Guides',
        title: 'A simple SEO improvement workflow',
        text: 'Start with the parts of the site that affect clarity and discovery most, then build a steady content and measurement rhythm.',
        steps: [
          {
            title: 'Audit',
            description:
              'Review current pages, metadata, headings, local signals, traffic sources, and obvious content gaps.',
            icon: MagnifyingGlassIcon,
          },
          {
            title: 'Prioritize',
            description:
              'Choose improvements based on search intent, business value, technical effort, and visitor usefulness.',
            icon: ClipboardDocumentCheckIcon,
          },
          {
            title: 'Publish',
            description:
              'Improve existing pages and add new content that directly supports services, locations, and customer questions.',
            icon: GlobeAltIcon,
          },
          {
            title: 'Measure',
            description:
              'Track visibility, engagement, conversions, and new content opportunities over time.',
            icon: ChartBarIcon,
          },
        ],
      }}
      outcomes={{
        eyebrow: 'What Good SEO Supports',
        title: 'A website that is easier to find and easier to understand',
        text: 'SEO is not only about rankings. It also improves how clearly your website explains the business once people arrive.',
        items: [
          {
            name: 'Clearer site structure',
            description:
              'Service pages, headings, links, and metadata work together so each page has a clearer purpose.',
            icon: LinkIcon,
          },
          {
            name: 'Better local relevance',
            description:
              'Pages can better reflect the services, locations, and search questions that matter to your market.',
            icon: PresentationChartLineIcon,
          },
          {
            name: 'Steadier growth',
            description:
              'Useful content and measured improvements can turn the site into a longer-term discovery asset.',
            icon: ArrowTrendingUpIcon,
          },
        ],
      }}
      cta={{
        title: 'Want help improving SEO?',
        text: 'Start with a conversation about your site, services, locations, and the search visibility you want to build.',
        href: '/service/seo',
        label: 'Explore SEO Services',
      }}
    />
  );
}
