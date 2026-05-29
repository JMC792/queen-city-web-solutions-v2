import StartupInfoPage from '@components/pages/StartupInfoPage';

export const metadata = {
  title: 'Resources',
  description: 'Guides and resources for improving business websites and digital systems.',
};

export default function ResourcesPage() {
  return (
    <StartupInfoPage
      eyebrow="Learn"
      title="Resources"
      subtitle="Practical guides for making your website clearer, faster, easier to trust, and better at generating leads."
      image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
      bullets={['Website improvement guides', 'SEO basics', 'Lead generation tips', 'Automation ideas']}
      sections={[
        {
          title: 'Website Strategy',
          text: 'Articles and guides that help business owners understand what their website should say, show, and do.',
        },
        {
          title: 'SEO and Content',
          text: 'Plain-language resources for improving visibility, planning pages, and answering the questions customers already have.',
        },
        {
          title: 'Digital Systems',
          text: 'Ideas for turning forms, follow-up, content, and repeated tasks into better workflows for the business.',
        },
      ]}
      ctaTitle="Have a topic in mind?"
      ctaText="Send us the question your customers keep asking. It might become the next resource or guide."
    />
  );
}
