import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Schedule() {
  return (
    <section id='schedule'>
      <div className="flex flex-col space-y-10 items-center justify-center overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Scheduling form</h1>
      <iframe
      className='self-center rounded-xl overflow-hidden'
        width="640"
        height="800"
        src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAALshY8JUQ1FWSzcxNjBPVFhIR1laNzg2TTJIM1Q4RS4u&embed=true"
        style={{ border: 'none'}}
        allowFullScreen
      />
      </div>
    </section>
  )
}