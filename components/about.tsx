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
            <div className="bg-white py-5 sm:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Get all the help you need</h2>
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
                </div>
            </div>
        </section>
    )
}

function CheckLists() {
    return <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
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
