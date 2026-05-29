import ServiceMarketingPage from '@components/pages/ServiceMarketingPage';
import {
  ArrowPathIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Web Design & Hosting',
  description: 'Custom website design, hosting support, and launch help for growing businesses.',
};

export default function WebDesignPage() {
  return (
    <ServiceMarketingPage
      hero={{
        title: 'Web Design & Hosting',
        text: 'Clean, fast, conversion-focused websites with hosting support for businesses that need to look credible and stay online.',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80',
      }}
      intro={{
        eyebrow: 'Web Design & Hosting',
        title: 'A website that makes the business easier to trust',
        text: 'Your website should explain what you do, guide visitors toward the next step, and feel dependable on every device. We shape structure, copy, visuals, development, hosting, and launch details around that goal.',
      }}
      highlights={[
        {
          name: 'Clear Positioning',
          description: 'Organize pages around what visitors need to understand before they call, book, or request a quote.',
          icon: SparklesIcon,
        },
        {
          name: 'Responsive Build',
          description: 'Create a polished experience across desktop, tablet, and mobile without layout surprises.',
          icon: DevicePhoneMobileIcon,
        },
        {
          name: 'Launch Support',
          description: 'Handle practical hosting, deployment, domain, analytics, and post-launch details.',
          icon: RocketLaunchIcon,
        },
      ]}
      coverage={{
        eyebrow: 'What We Cover',
        title: 'Website design, build, hosting, and launch',
        text: 'From first impression to technical setup, these services help your website look credible, load reliably, and guide visitors toward action.',
        items: [
          'Custom Website Design',
          'Responsive Development',
          'Landing Pages',
          'Service Pages',
          'Website Copy Structure',
          'Conversion-Focused Layouts',
          'Contact Forms',
          'Hosting Setup',
          'Domain Configuration',
          'Analytics Setup',
          'Performance Optimization',
          'Launch Support',
          'Post-Launch Fixes',
          'Website Expansion Planning',
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        title: 'A focused path from idea to launched website',
        text: 'The best websites come from clear decisions about audience, offer, content, design, build quality, and launch readiness.',
        steps: [
          {
            title: 'Clarify',
            description: 'Define the audience, offer, site goals, required pages, content needs, and visitor actions.',
            icon: CursorArrowRaysIcon,
          },
          {
            title: 'Design',
            description: 'Shape page structure, visual direction, section flow, calls to action, and responsive behavior.',
            icon: PaintBrushIcon,
          },
          {
            title: 'Build',
            description: 'Develop the site with clean components, responsive layouts, forms, performance, and technical basics.',
            icon: CodeBracketIcon,
          },
          {
            title: 'Launch',
            description: 'Prepare hosting, domains, analytics, testing, deployment, and post-launch support.',
            icon: RocketLaunchIcon,
          },
        ],
      }}
      outcomes={{
        eyebrow: 'Business Outcomes',
        title: 'A website built to support real business conversations',
        text: 'A stronger website helps visitors quickly understand your value, trust your business, and choose a clear next step.',
        items: [
          {
            name: 'Better first impression',
            description: 'Modern structure, copy, and visuals make the business easier to understand in seconds.',
            icon: ComputerDesktopIcon,
          },
          {
            name: 'More useful traffic',
            description: 'Service pages and landing pages can support search, ads, referrals, and local discovery.',
            icon: GlobeAltIcon,
          },
          {
            name: 'Reliable hosting',
            description: 'Launch support and hosting details reduce avoidable issues after the site goes live.',
            icon: ServerStackIcon,
          },
        ],
      }}
      cta={{
        title: 'Ready for a stronger website?',
        text: 'Start with a conversation about your audience, services, site goals, and launch timeline.',
        href: '/contact',
        label: 'Start a Conversation',
      }}
    />
  );
}
