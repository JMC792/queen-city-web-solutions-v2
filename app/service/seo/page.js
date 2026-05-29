import ServiceMarketingPage from '@components/pages/ServiceMarketingPage';
import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PencilSquareIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'SEO',
  description: 'Search engine optimization services for stronger visibility and better local discovery.',
};

export default function SeoPage() {
  return (
    <ServiceMarketingPage
      hero={{
        title: 'SEO',
        text: 'Practical SEO improvements that help customers find, understand, and trust your business online.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
      }}
      intro={{
        eyebrow: 'SEO',
        title: 'Search visibility built on useful pages and clean foundations',
        text: 'SEO works best when technical structure, page content, local signals, and buyer questions all point in the same direction. We help improve the pieces that make your business easier to find and understand.',
      }}
      highlights={[
        {
          name: 'Technical Clarity',
          description: 'Improve crawlability, metadata, page structure, internal links, sitemap signals, and performance basics.',
          icon: WrenchScrewdriverIcon,
        },
        {
          name: 'Local Relevance',
          description: 'Shape service and location signals around the way nearby customers search for help.',
          icon: MapPinIcon,
        },
        {
          name: 'Content Direction',
          description: 'Plan useful pages and resources around real customer questions instead of generic keyword stuffing.',
          icon: PencilSquareIcon,
        },
      ]}
      coverage={{
        eyebrow: 'What We Cover',
        title: 'SEO foundations, content, and local visibility',
        text: 'These services help clean up what search engines read and improve what visitors experience once they arrive.',
        items: [
          'Technical SEO Review',
          'Metadata Optimization',
          'Sitemap Review',
          'Page Title Cleanup',
          'Content Hierarchy',
          'Internal Linking',
          'Local SEO Foundations',
          'Service Page Planning',
          'Keyword Research',
          'Content Planning',
          'Search Intent Review',
          'Performance Recommendations',
          'Analytics Review',
          'SEO Reporting',
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        title: 'SEO work that starts with what customers are trying to find',
        text: 'A good SEO process connects technical cleanup with content that answers real questions and supports real buying decisions.',
        steps: [
          {
            title: 'Audit',
            description: 'Review site structure, metadata, indexability, performance, content gaps, and local search signals.',
            icon: DocumentMagnifyingGlassIcon,
          },
          {
            title: 'Prioritize',
            description: 'Identify the search opportunities and cleanup work most likely to support business goals.',
            icon: ClipboardDocumentCheckIcon,
          },
          {
            title: 'Improve',
            description: 'Update titles, descriptions, page structure, internal links, local signals, and content direction.',
            icon: MagnifyingGlassIcon,
          },
          {
            title: 'Measure',
            description: 'Track visibility, traffic, page performance, and content opportunities over time.',
            icon: ChartBarIcon,
          },
        ],
      }}
      outcomes={{
        eyebrow: 'Business Outcomes',
        title: 'Search improvements that compound over time',
        text: 'SEO gives your website a better chance to become a long-term discovery asset, especially when service pages and resources are built around customer intent.',
        items: [
          {
            name: 'More qualified discovery',
            description: 'Pages are aligned around the services, locations, and questions your audience searches for.',
            icon: GlobeAltIcon,
          },
          {
            name: 'Better page quality',
            description: 'Cleaner hierarchy, metadata, and content make pages easier for both people and search engines.',
            icon: PresentationChartLineIcon,
          },
          {
            name: 'Clearer growth signals',
            description: 'Reporting and measurement help identify what is working and where to improve next.',
            icon: ArrowTrendingUpIcon,
          },
        ],
      }}
      cta={{
        title: 'Want stronger search visibility?',
        text: 'Start with a conversation about your services, locations, current website, and growth goals.',
        href: '/contact',
        label: 'Start a Conversation',
      }}
    />
  );
}
