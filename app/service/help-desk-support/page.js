import ServiceMarketingPage from '@components/pages/ServiceMarketingPage';
import {
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  ComputerDesktopIcon,
  LifebuoyIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Help Desk Support',
  description: 'Help desk support for user issues, device questions, and everyday technology problems.',
};

export default function HelpDeskSupportPage() {
  return (
    <ServiceMarketingPage
      hero={{
        title: 'Help Desk Support',
        text: 'Responsive support for day-to-day technology issues so your team can spend less time stuck and more time working.',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1920&q=80',
      }}
      intro={{
        eyebrow: 'Help Desk Support',
        title: 'Everyday technology support with clearer follow-through',
        text: 'Help desk support gives employees a reliable place to bring device questions, account problems, software issues, and recurring frustrations. The goal is faster answers, cleaner triage, and fewer repeat problems.',
      }}
      highlights={[
        {
          name: 'User-Focused Help',
          description: 'Support employees through common issues without making every problem feel like a major interruption.',
          icon: UserGroupIcon,
        },
        {
          name: 'Clear Triage',
          description: 'Separate quick fixes from deeper problems so requests move in the right direction from the start.',
          icon: QueueListIcon,
        },
        {
          name: 'Recurring Issue Tracking',
          description: 'Use support patterns to identify root causes, documentation gaps, and systems that need improvement.',
          icon: MagnifyingGlassIcon,
        },
      ]}
      coverage={{
        eyebrow: 'What We Cover',
        title: 'Help desk coverage for daily work',
        text: 'These support areas help your team stay productive while giving the business a clearer view of common technology needs.',
        items: [
          'User Support',
          'Remote Troubleshooting',
          'Device Questions',
          'Software Support',
          'Account Assistance',
          'Password Reset Guidance',
          'Printer Support',
          'Email Troubleshooting',
          'Application Access Issues',
          'Issue Triage',
          'Ticket Follow-Up',
          'User Onboarding Support',
          'Basic Documentation',
          'Recurring Issue Reporting',
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        title: 'A support flow that keeps issues moving',
        text: 'Good help desk support is not just answering questions. It is capturing the issue, finding the next step, and using what repeats to improve the environment.',
        steps: [
          {
            title: 'Capture',
            description: 'Collect the user, device, app, symptoms, urgency, and business impact behind the request.',
            icon: ChatBubbleLeftRightIcon,
          },
          {
            title: 'Triage',
            description: 'Sort requests by priority, complexity, access needs, and whether a deeper fix is required.',
            icon: ClipboardDocumentListIcon,
          },
          {
            title: 'Resolve',
            description: 'Walk through troubleshooting, remote support, account guidance, and user communication.',
            icon: WrenchScrewdriverIcon,
          },
          {
            title: 'Improve',
            description: 'Track recurring issues and turn repeated support needs into documentation or system improvements.',
            icon: ArrowPathIcon,
          },
        ],
      }}
      outcomes={{
        eyebrow: 'Business Outcomes',
        title: 'Support that reduces friction for the whole team',
        text: 'A clearer help desk process helps employees get unstuck faster and gives leadership better visibility into technology problems.',
        items: [
          {
            name: 'Less downtime',
            description: 'Users have a practical path for common issues before they interrupt the rest of the day.',
            icon: LifebuoyIcon,
          },
          {
            name: 'Healthier devices',
            description: 'Device and software issues are easier to notice, document, and address over time.',
            icon: ComputerDesktopIcon,
          },
          {
            name: 'Cleaner resolution',
            description: 'Follow-up and recurring issue tracking make support less random and more accountable.',
            icon: CheckCircleIcon,
          },
        ],
      }}
      cta={{
        title: 'Need a better support path for your team?',
        text: 'Start with a conversation about the issues your users run into most often.',
        href: '/contact',
        label: 'Start a Conversation',
      }}
    />
  );
}
