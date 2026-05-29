import ServiceMarketingPage from '@components/pages/ServiceMarketingPage';
import {
  ArrowPathIcon,
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
  FunnelIcon,
  QueueListIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Automation',
  description: 'Simple business automation for lead capture, follow-up, and repeatable workflows.',
};

export default function AutomationPage() {
  return (
    <ServiceMarketingPage
      hero={{
        title: 'Automation',
        text: 'Simple digital systems that reduce manual work, capture better information, and keep leads from falling through the cracks.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80',
      }}
      intro={{
        eyebrow: 'Automation',
        title: 'Small workflow improvements that save real time',
        text: 'Automation does not have to be complicated to be useful. We help simplify repeatable tasks, organize intake, route information, and create clearer follow-up so your team spends less time chasing details.',
      }}
      highlights={[
        {
          name: 'Better Intake',
          description: 'Turn forms and requests into structured information your team can actually use.',
          icon: ClipboardDocumentListIcon,
        },
        {
          name: 'Faster Follow-Up',
          description: 'Trigger confirmations, notifications, task routing, and next steps after important actions.',
          icon: BoltIcon,
        },
        {
          name: 'Less Manual Repetition',
          description: 'Find recurring work that can be documented, simplified, connected, or automated.',
          icon: Cog6ToothIcon,
        },
      ]}
      coverage={{
        eyebrow: 'What We Cover',
        title: 'Automation for intake, routing, and follow-up',
        text: 'These services focus on practical improvements that make business workflows easier to manage without overbuilding the system.',
        items: [
          'Lead Intake Flows',
          'Contact Form Routing',
          'Follow-Up Sequences',
          'Email Notifications',
          'Task Creation',
          'CRM Handoff Planning',
          'Workflow Documentation',
          'Process Mapping',
          'Client Intake Forms',
          'Quote Request Flows',
          'Internal Request Forms',
          'Status Notifications',
          'Tool Integration Planning',
          'Automation Cleanup',
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        title: 'Automation that starts with the workflow, not the tool',
        text: 'Useful automation begins by understanding the steps people already repeat, then simplifying the handoffs that slow the team down.',
        steps: [
          {
            title: 'Map',
            description: 'Identify the steps, people, tools, decisions, delays, and repeated manual work in the workflow.',
            icon: QueueListIcon,
          },
          {
            title: 'Simplify',
            description: 'Remove unclear steps, tighten forms, improve routing, and define what should happen next.',
            icon: FunnelIcon,
          },
          {
            title: 'Connect',
            description: 'Build practical handoffs between forms, email, tasks, CRMs, documents, and notifications.',
            icon: WrenchScrewdriverIcon,
          },
          {
            title: 'Refine',
            description: 'Monitor how the workflow performs and make adjustments as real users put it to work.',
            icon: ArrowPathIcon,
          },
        ],
      }}
      outcomes={{
        eyebrow: 'Business Outcomes',
        title: 'Workflow systems that help people move faster',
        text: 'Well-scoped automation gives your team more consistent information, faster follow-up, and fewer tasks living only in someone’s memory.',
        items: [
          {
            name: 'Cleaner handoffs',
            description: 'Leads, requests, and internal tasks reach the right person with better context.',
            icon: RocketLaunchIcon,
          },
          {
            name: 'Fewer missed replies',
            description: 'Confirmations and notifications help keep prospects and customers from slipping through gaps.',
            icon: EnvelopeIcon,
          },
          {
            name: 'Better process visibility',
            description: 'Documented workflows make repeatable work easier to improve and delegate.',
            icon: ChatBubbleBottomCenterTextIcon,
          },
        ],
      }}
      cta={{
        title: 'Have a workflow that wastes time?',
        text: 'Start with a conversation about the forms, follow-ups, and repeated tasks slowing your team down.',
        href: '/contact',
        label: 'Start a Conversation',
      }}
    />
  );
}
