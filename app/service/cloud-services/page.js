import ServiceMarketingPage from '@components/pages/ServiceMarketingPage';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CloudIcon,
  Cog6ToothIcon,
  FolderArrowDownIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Cloud Services',
  description: 'Cloud setup, migration support, administration, and secure collaboration guidance.',
};

export default function CloudServicesPage() {
  return (
    <ServiceMarketingPage
      hero={{
        title: 'Cloud Services',
        text: 'Cloud setup and support that helps your team collaborate, manage files, and work securely from the tools they already use.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
      }}
      intro={{
        eyebrow: 'Cloud Services',
        title: 'Cloud tools organized around how your team works',
        text: 'Cloud systems should make files, users, apps, and collaboration easier to manage. We help configure, migrate, secure, and support cloud environments so daily work feels connected instead of scattered.',
      }}
      highlights={[
        {
          name: 'Cleaner Collaboration',
          description: 'Structure cloud files, permissions, and shared workspaces around teams, roles, and real workflows.',
          icon: UserGroupIcon,
        },
        {
          name: 'Safer Administration',
          description: 'Manage users, access, MFA, device settings, and policies with security built into everyday operations.',
          icon: ShieldCheckIcon,
        },
        {
          name: 'Smoother Migrations',
          description: 'Move data, email, and workflows with attention to continuity, permissions, and user adoption.',
          icon: CloudArrowUpIcon,
        },
      ]}
      coverage={{
        eyebrow: 'What We Cover',
        title: 'Cloud setup, migration, and administration',
        text: 'Whether you are cleaning up an existing tenant or moving into a new platform, these services help keep cloud work secure, organized, and easier to support.',
        items: [
          'Cloud Setup',
          'Microsoft 365 Administration',
          'Google Workspace Support',
          'Email Migration',
          'File Migration',
          'User Administration',
          'Permission Management',
          'Shared Drive Planning',
          'Collaboration Tools',
          'Cloud Security Settings',
          'MFA Configuration',
          'Device Access Policies',
          'Cloud Backup Planning',
          'Ongoing Cloud Support',
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        title: 'A practical path from scattered tools to cleaner cloud operations',
        text: 'Cloud work is easiest to manage when users, files, apps, policies, and documentation all follow a clear structure.',
        steps: [
          {
            title: 'Audit',
            description: 'Review users, licenses, files, permissions, email, storage, collaboration tools, and current pain points.',
            icon: CloudIcon,
          },
          {
            title: 'Plan',
            description: 'Define the migration path, security controls, naming conventions, ownership, and support process.',
            icon: Cog6ToothIcon,
          },
          {
            title: 'Move',
            description: 'Migrate users, email, files, and workflows carefully while reducing disruption during the transition.',
            icon: FolderArrowDownIcon,
          },
          {
            title: 'Support',
            description: 'Keep the environment current with user changes, access updates, troubleshooting, and improvements.',
            icon: WrenchScrewdriverIcon,
          },
        ],
      }}
      outcomes={{
        eyebrow: 'Business Outcomes',
        title: 'Cloud environments that are easier to trust and manage',
        text: 'The right cloud setup gives your team clearer collaboration, stronger access control, and less confusion when people, files, or tools change.',
        items: [
          {
            name: 'Organized users',
            description: 'Accounts, groups, permissions, and licenses stay aligned with the way the business operates.',
            icon: UsersIcon,
          },
          {
            name: 'Protected access',
            description: 'Cloud sign-ins, sharing, and device access are shaped around practical security controls.',
            icon: LockClosedIcon,
          },
          {
            name: 'Steady improvement',
            description: 'Cloud support becomes a repeatable process instead of a scramble when something changes.',
            icon: ArrowPathIcon,
          },
        ],
      }}
      cta={{
        title: 'Need a cleaner cloud setup?',
        text: 'Start with a conversation about your users, files, collaboration tools, and migration priorities.',
        href: '/contact',
        label: 'Start a Conversation',
      }}
    />
  );
}
