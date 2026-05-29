import StartupInfoPage from '@components/pages/StartupInfoPage';

export const metadata = {
  title: 'Process',
  description: 'The Queen City Web Solutions process from discovery to launch and ongoing growth.',
};

export default function ProcessPage() {
  return (
    <StartupInfoPage
      eyebrow="How It Works"
      title="Process"
      subtitle="A clear path from messy ideas to a polished website and digital system that supports the business."
      image="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80"
      bullets={['Discover', 'Plan', 'Design', 'Build', 'Launch and improve']}
      sections={[
        {
          title: '1. Discover',
          text: 'We learn what the business offers, who it serves, what currently works, and where the website is falling short.',
        },
        {
          title: '2. Plan',
          text: 'We shape the page structure, offers, content priorities, and conversion path before jumping into design.',
        },
        {
          title: '3. Build and Launch',
          text: 'We design, develop, test, and launch the site with a practical path for updates and improvements after it goes live.',
        },
      ]}
    />
  );
}
