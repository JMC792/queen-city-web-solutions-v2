import ServiceMarketingPage from '@components/pages/ServiceMarketingPage';
import {
  ArrowPathIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CursorArrowRaysIcon,
  DocumentMagnifyingGlassIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Free Website Audit',
  description:
    'Request a free website performance, SEO, trust, and conversion audit from Queen City Web Solutions.',
};

export default function FreeAuditPage() {
  return (
    <ServiceMarketingPage
      hero={{
        title: 'Free Website Audit',
        text: 'A practical review of your website performance, SEO foundations, trust signals, and conversion path so you can see what to improve next.',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80',
      }}
      intro={{
        eyebrow: 'Free Audit',
        title: 'Find the website issues that are costing you trust and leads',
        text: 'A website audit gives you a clearer view of what visitors experience, what search engines can understand, and where your site may be slowing down the path from interest to contact.',
      }}
      highlights={[
        {
          name: 'Performance Clarity',
          description:
            'Review speed, mobile usability, layout friction, and technical details that can affect the visitor experience.',
          icon: ChartBarIcon,
        },
        {
          name: 'SEO Foundations',
          description:
            'Check titles, descriptions, headings, page structure, crawl signals, and local search basics.',
          icon: MagnifyingGlassIcon,
        },
        {
          name: 'Conversion Path',
          description:
            'Look at calls to action, contact flow, trust signals, service clarity, and how easy it is to take the next step.',
          icon: CursorArrowRaysIcon,
        },
      ]}
      coverage={{
        eyebrow: 'What We Review',
        title: 'A focused audit across the details that matter',
        text: 'The audit is built to surface practical improvements, not bury you in vague technical noise. You get a clearer starting point for making the website more useful.',
        items: [
          'Homepage Clarity',
          'Mobile Experience',
          'Page Speed Signals',
          'SEO Metadata',
          'Heading Structure',
          'Service Page Quality',
          'Local Search Signals',
          'Call-to-Action Flow',
          'Contact Form Friction',
          'Trust Signals',
          'Content Gaps',
          'Technical SEO Basics',
          'Accessibility Touchpoints',
          'Priority Recommendations',
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        title: 'A simple review process with useful next steps',
        text: 'The goal is to give you a prioritized view of what to fix, improve, or plan next based on the current state of the site.',
        steps: [
          {
            title: 'Submit',
            description:
              'Send your website URL and a little context about your business, goals, and current concerns.',
            icon: GlobeAltIcon,
          },
          {
            title: 'Review',
            description:
              'We check the site across performance, SEO, mobile layout, content clarity, and conversion flow.',
            icon: DocumentMagnifyingGlassIcon,
          },
          {
            title: 'Prioritize',
            description:
              'The findings are organized around what is likely to matter most for trust, visibility, and lead generation.',
            icon: ClipboardDocumentCheckIcon,
          },
          {
            title: 'Improve',
            description:
              'You get a clearer path for quick fixes, deeper improvements, or a larger redesign conversation.',
            icon: ArrowPathIcon,
          },
        ],
      }}
      outcomes={{
        eyebrow: 'What You Get',
        title: 'A clearer roadmap for improving your website',
        text: 'The audit helps turn vague website concerns into concrete observations and practical next steps.',
        items: [
          {
            name: 'Priority fixes',
            description:
              'A short list of the most important issues to address first, instead of an overwhelming pile of suggestions.',
            icon: RocketLaunchIcon,
          },
          {
            name: 'Better search readiness',
            description:
              'A clearer view of the SEO foundations that help search engines understand your pages.',
            icon: PresentationChartLineIcon,
          },
          {
            name: 'Stronger trust signals',
            description:
              'Practical ways to make the site feel more credible, clear, and action-oriented for visitors.',
            icon: ShieldCheckIcon,
          },
        ],
      }}
      cta={{
        title: 'Ready for your free website audit?',
        text: 'Send your website URL and the main thing you want the site to do better. We will take a look and point you toward the best next steps.',
        href: '/contact',
        label: 'Request a Free Audit',
      }}
    />
  );
}
