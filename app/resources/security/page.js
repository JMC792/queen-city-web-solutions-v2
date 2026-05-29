import ServiceMarketingPage from '@components/pages/ServiceMarketingPage';
import {
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  FingerPrintIcon,
  KeyIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Security Tips',
  description:
    'Practical cybersecurity tips for small businesses, including account protection, MFA, email safety, backups, and incident readiness.',
};

export default function SecurityTipsPage() {
  return (
    <ServiceMarketingPage
      hero={{
        title: 'Security Tips',
        text: 'Practical cybersecurity guidance for protecting accounts, users, devices, email, and business data without getting buried in technical noise.',
        image:
          'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1920&q=80',
      }}
      intro={{
        eyebrow: 'Security Tips',
        title: 'Small security habits that reduce real business risk',
        text: 'Most security improvements start with clear basics: stronger sign-ins, safer email behavior, cleaner access, reliable backups, and a plan for suspicious activity. These tips help you know where to begin.',
      }}
      highlights={[
        {
          name: 'Protect Accounts',
          description:
            'Use MFA, better password practices, access reviews, and role-based permissions to reduce account misuse.',
          icon: FingerPrintIcon,
        },
        {
          name: 'Reduce Email Risk',
          description:
            'Help users spot suspicious messages, fake invoices, credential prompts, and risky attachments.',
          icon: EnvelopeIcon,
        },
        {
          name: 'Prepare for Incidents',
          description:
            'Know what to do when a device, account, alert, or message looks suspicious.',
          icon: ExclamationTriangleIcon,
        },
      ]}
      coverage={{
        eyebrow: 'What To Review',
        title: 'Security areas every small business should understand',
        text: 'Use this as a starting checklist for reducing avoidable risk across everyday systems and workflows.',
        items: [
          'Multi-Factor Authentication',
          'Password Manager Usage',
          'Email Security Habits',
          'Phishing Awareness',
          'Device Updates',
          'Endpoint Protection',
          'Access Reviews',
          'Admin Account Controls',
          'Backup Readiness',
          'Software Patch Routine',
          'Vendor Account Cleanup',
          'Incident Response Contacts',
          'Security Policy Basics',
          'Employee Offboarding',
        ],
      }}
      process={{
        eyebrow: 'How To Start',
        title: 'A practical security improvement rhythm',
        text: 'Security does not have to start with a giant project. A simple review-and-improve rhythm can reduce risk quickly and keep progress manageable.',
        steps: [
          {
            title: 'Identify',
            description:
              'List the accounts, devices, apps, vendors, and data that matter most to daily operations.',
            icon: ClipboardDocumentCheckIcon,
          },
          {
            title: 'Harden',
            description:
              'Enable MFA, reduce unnecessary admin access, update devices, and tighten the most exposed settings.',
            icon: LockClosedIcon,
          },
          {
            title: 'Train',
            description:
              'Give users simple guidance for suspicious emails, account prompts, file sharing, and reporting concerns.',
            icon: UserGroupIcon,
          },
          {
            title: 'Repeat',
            description:
              'Review access, backups, alerts, and recurring security questions on a regular schedule.',
            icon: ArrowPathIcon,
          },
        ],
      }}
      outcomes={{
        eyebrow: 'Why It Matters',
        title: 'Security basics that make the business harder to disrupt',
        text: 'The right habits and controls can prevent common incidents, reduce confusion during alerts, and make recovery easier when something goes wrong.',
        items: [
          {
            name: 'Safer sign-ins',
            description:
              'MFA, password hygiene, and access controls make stolen or misused accounts less likely to cause damage.',
            icon: KeyIcon,
          },
          {
            name: 'Fewer avoidable mistakes',
            description:
              'Clear user guidance helps employees recognize common scams and risky behavior before it spreads.',
            icon: ShieldCheckIcon,
          },
          {
            name: 'Better response',
            description:
              'A simple plan helps the team know who to contact and what to do when something looks wrong.',
            icon: WrenchScrewdriverIcon,
          },
        ],
      }}
      cta={{
        title: 'Want a security review?',
        text: 'Start with a conversation about your users, accounts, devices, email, backups, and highest-priority risks.',
        href: '/service/cybersecurity-services',
        label: 'Explore Cybersecurity Services',
      }}
    />
  );
}
