import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    name: 'Swift and Efficient Service',
    description:
      'Prompt response times and efficient handling of your IT needs. Queen City IT Solutions prides itself on its speed and effectiveness, ensuring your IT challenges are addressed swiftly while maintaining the highest standards of quality.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Expertise and Accuracy',
    description: 'Our expertise in IT services and consultation ensures accurate and precise handling of your projects. You can trust that every detail will be meticulously addressed, resulting in optimal outcomes for your IT infrastructure and security needs.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Dedicated to Client Satisfaction',
    description: 'Client satisfaction drives everything we do. From the initial consultation to the resolution of your IT issues, your satisfaction is our top priority. Trust Queen City IT Solutions for an excellent service experience.',
    icon: CheckCircleIcon,
  },
]

export default function ProductScreenshot(props) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Text */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">
                About Us
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Story and Mission
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Queen City IT Solutions was founded in Charlotte with a mission to provide top-tier IT services and consultation. We are dedicated to enhancing businesses' IT infrastructure and security nationwide.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Image */}
          <img
            alt=""
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
      </div>
    </div>
  )
}
