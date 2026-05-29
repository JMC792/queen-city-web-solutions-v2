import ServiceMarketingPage from '@components/pages/ServiceMarketingPage';
import {
  ArrowPathIcon,
  BugAntIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Maintenance',
  description: 'Website maintenance and support for reliable, up-to-date business websites.',
};

export default function MaintenancePage() {
  return (
    <ServiceMarketingPage
      hero={{
        title: 'Maintenance',
        text: 'Ongoing support to keep your website current, healthy, and aligned with the business as it changes.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80',
      }}
      intro={{
        eyebrow: 'Maintenance',
        title: 'Keep your website useful after launch',
        text: 'Websites need attention as offers, teams, services, links, content, and priorities change. Maintenance gives your business a practical path for fixes, updates, performance checks, and steady improvements.',
      }}
      highlights={[
        {
          name: 'Fresh Content',
          description: 'Update pages, offers, photos, service details, forms, and calls to action as the business changes.',
          icon: DocumentTextIcon,
        },
        {
          name: 'Small Fixes Early',
          description: 'Catch broken links, layout issues, outdated copy, form problems, and rough edges before they hurt trust.',
          icon: BugAntIcon,
        },
        {
          name: 'Steady Improvement',
          description: 'Use maintenance time to improve pages, performance, conversion paths, and technical quality over time.',
          icon: ArrowPathIcon,
        },
      ]}
      coverage={{
        eyebrow: 'What We Cover',
        title: 'Website maintenance and improvement support',
        text: 'These services keep your site current, reliable, and ready to support the business after the initial launch.',
        items: [
          'Content Updates',
          'Page Edits',
          'Bug Fixes',
          'Broken Link Checks',
          'Form Testing',
          'Performance Review',
          'Image Updates',
          'Copy Revisions',
          'Plugin Review',
          'Security Recommendations',
          'Analytics Review',
          'Monthly Improvement Planning',
          'Launch Follow-Up',
          'Technical Cleanup',
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        title: 'A simple rhythm for keeping the site healthy',
        text: 'Maintenance works best when updates, fixes, and improvements are organized into a repeatable support flow.',
        steps: [
          {
            title: 'Review',
            description: 'Look for content needs, broken elements, layout concerns, performance issues, and business changes.',
            icon: ClipboardDocumentCheckIcon,
          },
          {
            title: 'Update',
            description: 'Handle page edits, copy changes, image swaps, form adjustments, and practical content requests.',
            icon: WrenchScrewdriverIcon,
          },
          {
            title: 'Test',
            description: 'Check key pages, links, forms, responsive layouts, and technical details after updates.',
            icon: CheckCircleIcon,
          },
          {
            title: 'Improve',
            description: 'Plan steady enhancements around performance, clarity, conversion paths, and site growth.',
            icon: Cog6ToothIcon,
          },
        ],
      }}
      outcomes={{
        eyebrow: 'Business Outcomes',
        title: 'A website that keeps pace with the business',
        text: 'Maintenance helps your website avoid slow decay after launch and gives you a support path for the changes that naturally come up.',
        items: [
          {
            name: 'Current information',
            description: 'Services, offers, team details, forms, and messaging stay aligned with what the business is doing now.',
            icon: ClockIcon,
          },
          {
            name: 'More reliable experience',
            description: 'Regular checks and fixes reduce the small issues that make visitors question credibility.',
            icon: ShieldCheckIcon,
          },
          {
            name: 'Useful improvements',
            description: 'Reporting and review time can turn maintenance into ongoing progress instead of just repairs.',
            icon: ChartBarIcon,
          },
        ],
      }}
      cta={{
        title: 'Need ongoing website support?',
        text: 'Start with a conversation about your current site, update needs, and improvement priorities.',
        href: '/contact',
        label: 'Start a Conversation',
      }}
    />
  );
}
