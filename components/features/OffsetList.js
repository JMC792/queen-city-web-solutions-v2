import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Full Encapsulations',
        description: 'Comprehensive encapsulation solutions for complete protection against moisture, mold, and pests.',
    },
    {
        name: 'Partial Encapsulations',
        description: 'Targeted encapsulation services for specific areas, providing effective moisture and pest control.',
    },
    {
        name: 'Sump Pump Installs',
        description: 'Professional installation of sump pumps to efficiently manage and redirect excess water away from your crawlspace.',
    },
    {
        name: 'French Drain System Exterior/Interior',
        description: 'Expert installation of French drain systems, both exterior and interior, for superior drainage and water management.',
    },
    {
        name: 'Dehumidifier & Condensation Pump Install',
        description: 'Installation of high-quality dehumidifiers and condensation pumps to maintain optimal humidity levels in your crawlspace.',
    },
    {
        name: 'Crawlspace Clean-Out',
        description: 'Thorough clean-out services to remove debris, pests, and contaminants, ensuring a clean and healthy crawlspace environment.',
    },
    {
        name: 'Vapor Barriers',
        description: 'Installation of durable vapor barriers to prevent moisture ingress, mold growth, and improve overall crawlspace health.',
    },
    {
        name: 'Insulation Install',
        description: 'High-grade insulation installation for enhanced energy efficiency and thermal protection of your crawlspace.',
    },
    {
        name: 'Downspout Extension',
        description: 'Effective downspout extensions to divert water away from the foundation, preventing water damage and erosion.',
    },
    {
        name: 'Mold Remediation',
        description: 'Professional mold remediation services to identify, treat, and prevent mold infestations in your crawlspace.',
    },
]

export default function Example(props) {
    return (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
                <h2 className="text-base font-semibold leading-7 text-indigo-600">{props.heading}</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{props.title}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                {props.paragraph}
                </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                    <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                    {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
                </div>
            ))}
            </dl>
        </div>
        </div>
    </div>
    )
}
