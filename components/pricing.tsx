'use client'

import { useState, useRef, useEffect } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'

const includedFeatures = [
  '30 minutes dedicated session',
  "One-on-one coaching",
  '1 Free follow up',
  'Discount on further follow ups',
]

function Pricing() {
  return (
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 md:my-10 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">General Consultation</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Setup a call with us to go help you with any of your questions. We will will help you set up your accounts,
              devices, and more. Talk to us in detail regarding your problem. And we will come up with a solution together on
              call.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$10</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Schedule now
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  * For more advance issues, prices might be different.
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default function PricingDetails() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-5 md:pb-0">
            <h1 className="h2 mb-4">Pricing</h1>
            <p className="text-xl text-gray-600">
              You can set up a consultation appointment with us anytime based on your convinience. The details of pricing is listed
              below.
            </p>
          </div>

          {/* Section content */}
          <Pricing/>
        </div>
      </div>
    </section>
  )
}