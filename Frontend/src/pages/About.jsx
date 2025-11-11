import ken from "../assets/kenny.jpg"
import non from "../assets/non.jpg"
import spy from "../assets/spy.jpg"

export default function About(){
    return(
        <section className="relative w-full overflow-x-hidden">
            <ul className="flex justify-center gap-4 p-2 text-sm text-slate-800 lg:text-xl font-semibold bg-gray-300 uppercase">
                <a href="">Who We Are</a>
                <a href="">Our Works</a>
                <a href="">Our Services</a>
            </ul>
            <div className="flex flex-col lg:flex-row h-full">
                <a className="group relative block w-100 h-100 bg-black">
                    <img src={ken} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Developer</p>
                        <p className="text-xl font-bold text-white sm:text-2xl">Wasutorn Tasee</p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm text-white">
                                    Black People
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a className="group relative block w-100 h-100 bg-black">
                    <img src={spy} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Developer</p>
                        <p className="text-xl font-bold text-white sm:text-2xl">Nattapat Chearauttasak</p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm text-white">
                                    Black People
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a className="group relative block w-100 h-100 bg-black">
                    <img src={non} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Developer</p>
                        <p className="text-xl font-bold text-white sm:text-2xl">Phonkiat Robkob</p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm text-white">
                                    Black People
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a className="group relative block w-100 h-100 bg-black">
                    <img src={ken} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Developer</p>
                        <p className="text-xl font-bold text-white sm:text-2xl">Sinlaphachai Homhual</p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm text-white">
                                    Black People
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a className="group relative block w-100 h-100 bg-black">
                    <img src={ken} className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"/>
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">Developer</p>
                        <p className="text-xl font-bold text-white sm:text-2xl">Nontawad Saetan</p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="text-sm text-white">
                                    Black People
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}