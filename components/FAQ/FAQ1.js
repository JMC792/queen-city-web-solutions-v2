import Link from "next/link"

const faqs = [
    {
        id: 1,
        question: "What services do you offer?",
        answer: "We offer a range of IT services including IT staffing solutions, IT consultation, project management, cybersecurity services, cloud solutions, and custom software development.",
    },
    {
        id: 2,
        question: "How do you ensure the quality of your IT professionals?",
        answer: "Our rigorous vetting process includes thorough interviews, technical assessments, and reference checks to ensure we provide highly skilled and experienced IT professionals.",
    },
    {
        id: 3,
        question: "Can you help with short-term IT staffing needs?",
        answer: "Yes, we provide both short-term and long-term IT staffing solutions tailored to meet your specific project requirements and timelines.",
    },
    {
        id: 4,
        question: "What industries do you specialize in?",
        answer: "We specialize in a wide range of industries including finance, healthcare, retail, technology, and more, providing tailored IT solutions to meet industry-specific needs.",
    }
]

export default function Example() {
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
                Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
                <Link href="/contact" className="font-semibold text-indigo-600 hover:text-indigo-500">
                sending us an email
                </Link>{' '}
                and we’ll get back to you as soon as we can.
            </p>
            </div>
            <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
                {faqs.map((faq) => (
                <div key={faq.id}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
        </div>
    )
}
