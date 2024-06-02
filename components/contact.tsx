export default function Contact() {
    return (
        <div className="relative flex items-top justify-center bg-white sm:items-center py-5" id="contact">
            <div className="lg:px-52 sm:px-10 py-10 mr-2 bg-gray-100 border shadow-l rounded-xl">
                <h1 className="text-4xl sm:text-5xl text-gray-800 font-extrabold tracking-tight">
                    Get in touch
                </h1>
                <div className="flex items-center text-gray-600">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        <a href="mailto:contact@tipofmyhand.com">contact@tipofmyhand.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}