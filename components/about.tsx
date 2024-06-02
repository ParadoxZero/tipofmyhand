import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Create and use Social media account',
        description:
            'Modern day social media is great, but can be complicated to navigate. Set yourself up in the wonderful world of internet. Connect and share with your friends and family.',
        icon: CheckIcon,
    },
    {
        name: 'New phone or laptop',
        description:
            'Got yourself a new phone or laptop? We can help you set up the device so that you can start using it immediately.',
        icon: CheckIcon,
    },
    {
        name: 'Simple Queries',
        description:
            'Google says storage full? One drive not working? Not recieving emails? We can help you fix them up.',
        icon: CheckIcon,
    },
    {
        name: 'Confused about buying a new piece of equipment',
        description:
            'Discuss with us your requirements and confusion, we will help you with guidelines to make an informed choice.',
        icon: CheckIcon,
    },
]

export default function About() {
    return (
        <section className="relative">
            <div className="bg-white py-5 sm:py-10 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-blue-600">Get all the help you need</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to set up comfortably in your own space
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We will guide you and walk you through as you explore and learn new app, website, or a device.
                            For example here are few ways you can leverage us.
                        </p>
                    </div>
                    {CheckLists()}
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            These are just few of the many ways you can leverage us. Fill the request form
                            and we will get back to you after we do our research to assist you.
                        </p>
                    </div>
                    {Steps()}
                </div>
            </div>
        </section>
    )
}

function CheckLists() {
    return <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl rounded-2xl bg-gray-40 p-10 text-center ring-1 ring-inset ring-gray-900/5">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
            ))}
        </dl>
    </div>
}

function Steps() {
    const steps = [
        {
            no: 1,
            title: "Request appointment",
            description: "Fill in the request form with your query and contact details."
        },
        {
            no: 2,
            title: "Request review",
            description: "We will then review the request and judge if we can contribute meaningfully to your problem. We will get back to you with scheduling and payment details"
        },
        {
            no: 3,
            title: "Schedule appointment",
            description: "We will send an email with steps on how to schedule your appointment based on your convinience. Select a your prefered slot. You will then recieve a confirmation email containing video chat meeting link for the appointment."
        },
        {
            no: 4,
            title: "Finish payment",
            description: "The email will contain payment and invoice link. Make sure to complete the payment before the appointment to avoid cancellation."
        },
        {
            no: 5,
            title: "Join the meet",
            description: "Make sure to join the meeting on time, we will discuss your issues and fix them within the slot."
        }
    ]
    return <nav aria-label="Progress" className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl rounded-2xl bg-gray-40 p-10 text-center'>
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
            {steps.map((step) => (
                <li className="md:flex-1">
                    <h2 className="text-base font-semibold leading-7 text-blue-500 my-5 text-left">Step: {step.no}</h2>
                    <span className="group flex flex-col border-l-4 border-blue-300  py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                        <div className='rounded flex flex-col'>
                            <dt className="text-base font-semibold leading-7 text-gray-900 text-left">{step.title}</dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600 text-left">
                                {step.description}
                            </dd>
                        </div>
                    </span>
                </li>
            ))}
        </ol>
    </nav>
}