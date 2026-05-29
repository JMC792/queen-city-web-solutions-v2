import ServiceMarketingPage from '@components/pages/ServiceMarketingPage';
import {
  ArrowPathIcon,
  CheckBadgeIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  CloudArrowUpIcon,
  ExclamationTriangleIcon,
  FolderArrowDownIcon,
  LifebuoyIcon,
  ServerStackIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Backup & Disaster Recovery',
  description: 'Backup strategy and disaster recovery planning for business continuity.',
};

export default function BackupDisasterRecoveryPage() {
  return (
    <ServiceMarketingPage
      hero={{
        title: 'Backup & Disaster Recovery',
        text: 'Protect important business data and plan recovery steps before outages, mistakes, or unexpected failures interrupt operations.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80',
      }}
      intro={{
        eyebrow: 'Backup & Disaster Recovery',
        title: 'Recovery planning before the pressure hits',
        text: 'Backups only matter if they can be trusted when something goes wrong. We help identify critical data, structure backup coverage, document recovery steps, and make continuity planning part of everyday IT operations.',
      }}
      highlights={[
        {
          name: 'Protected Data',
          description: 'Make sure key files, systems, and cloud data are covered by backup plans that match business priorities.',
          icon: CircleStackIcon,
        },
        {
          name: 'Clear Recovery',
          description: 'Document recovery steps so outages, accidental deletion, device failures, and ransomware concerns have a path forward.',
          icon: LifebuoyIcon,
        },
        {
          name: 'Continuity Focus',
          description: 'Connect backups, infrastructure, users, and vendors into a practical plan for getting work moving again.',
          icon: ShieldCheckIcon,
        },
      ]}
      coverage={{
        eyebrow: 'What We Cover',
        title: 'Backup and recovery services',
        text: 'From backup planning to recovery workflows and continuity reviews, these services help reduce the business impact of data loss and downtime.',
        items: [
          'Backup Strategy',
          'Cloud Backup Planning',
          'Server Backup Support',
          'Endpoint Backup Guidance',
          'Microsoft 365 Backup',
          'Google Workspace Backup',
          'Recovery Workflow Planning',
          'Disaster Recovery Documentation',
          'Business Continuity Reviews',
          'Retention Policy Guidance',
          'Backup Monitoring',
          'Restore Testing',
          'Ransomware Recovery Planning',
          'Vendor Coordination',
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        title: 'A practical backup rhythm for real recovery',
        text: 'The process starts by deciding what must be protected, then building the steps needed to restore it under pressure.',
        steps: [
          {
            title: 'Identify',
            description: 'Map critical files, systems, cloud tools, devices, users, vendors, and downtime risks.',
            icon: ServerStackIcon,
          },
          {
            title: 'Protect',
            description: 'Align backup methods, retention, monitoring, and coverage with what the business actually needs.',
            icon: CloudArrowUpIcon,
          },
          {
            title: 'Document',
            description: 'Create recovery workflows, contact paths, priority order, and decision points before an incident happens.',
            icon: ClipboardDocumentCheckIcon,
          },
          {
            title: 'Validate',
            description: 'Review backup status, test restores where appropriate, and improve the plan as systems change.',
            icon: CheckBadgeIcon,
          },
        ],
      }}
      outcomes={{
        eyebrow: 'Business Outcomes',
        title: 'Less uncertainty when data or systems fail',
        text: 'A stronger backup and disaster recovery plan helps your business respond faster, reduce avoidable downtime, and make better decisions during stressful moments.',
        items: [
          {
            name: 'Faster restores',
            description: 'Recovery steps are clearer when files, systems, priorities, and responsibilities are documented.',
            icon: FolderArrowDownIcon,
          },
          {
            name: 'Lower downtime risk',
            description: 'Continuity planning connects backup coverage to the work your team needs to resume first.',
            icon: ArrowPathIcon,
          },
          {
            name: 'Better incident readiness',
            description: 'Outages, deleted files, and ransomware concerns are easier to handle with a prepared response path.',
            icon: ExclamationTriangleIcon,
          },
        ],
      }}
      cta={{
        title: 'Need a clearer recovery plan?',
        text: 'Start with a conversation about your critical data, current backups, and business continuity priorities.',
        href: '/contact',
        label: 'Start a Conversation',
      }}
    />
  );
}
