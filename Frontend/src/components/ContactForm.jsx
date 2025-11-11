export default function ContactForm(){
    return(
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="md:py-4">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Get in touch</h2>
                    <p className="mt-4 text-pretty text-gray-700">
                        If you have any questions, concerns, or just want to get to know us, you can always contact us.
                    </p>
                    <dl className="mt-6 space-y-3">
                        <div>
                            <dt className="sr-only">Phone number</dt>
                            <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path>
                                </svg>
                                <span className="font-medium">+1 (66) 09x-xxx-xxxx</span>
                            </dd>
                        </div>
                        <div>
                            <dt className="sr-only">Email</dt>

                            <dd className="grid grid-cols-[24px_1fr] items-center gap-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                                </svg>

                                <span className="font-medium">66xxxxx@kmitl.ac.th</span>
                            </dd>
                        </div>
                    </dl>
                </div>
                <form action="#" className="space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-900" for="name">Name</label>
                        <input className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none" id="name" type="text" placeholder="Your name"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900" for="email">Email</label>
                        <input className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none" id="email" type="email" placeholder="Your email"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-900" for="message">Message</label>
                        <textarea className="mt-1 w-full resize-none rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none" id="message" rows="4" placeholder="Your message"></textarea>
                    </div>
                    <button className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600" type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}