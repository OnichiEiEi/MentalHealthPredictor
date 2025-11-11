import ADHD from "../assets/ADHD.jpg"
import Insomnia from "../assets/Insomnia.png"
import Anxiety from "../assets/Depression and anxiety.jpg"

export default function Hero(){
    return(
        <section>
            <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8 bg-gray-200">
                <div className="flex flex-col gap-4 md:flex-row md:items-center justify-center md:gap-8">
                    <div className="md:col-span-1">
                        <div className="max-w-full w-sm md:w-md lg:w-4xl leading-tight">
                            <h2 className="text-2xl font-semibold text-gray-900 sm:text-xl md:text-2xl lg:text-4xl">
                                ADHD (Attention-Deficit/Hyperactivity Disorder)
                            </h2>
                            <p className="mt-4 text-pretty text-gray-700 text-sm sm:text-sm md:text-md lg:text-xl">
                                Condition characterized by inattention, hyperactivity, and impulsivity. 
                                Individuals with ADHD may be easily distracted, forgetful, or constantly active, but symptoms can be managed with behavioral therapy, support, and medication under medical guidance.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <img src={ADHD} class="rounded w-md h-md "/>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8 bg-gray-300">
                <div className="flex flex-col gap-4 md:flex-row-reverse md:items-center justify-center md:gap-8">
                    <div className="md:col-span-1">
                        <div className="max-w-full w-sm md:w-md lg:w-4xl leading-tight">
                            <h2 className="text-2xl font-semibold text-gray-900 sm:text-xl md:text-2xl lg:text-4xl">
                                Insomnia
                            </h2>
                            <p className="mt-4 text-pretty text-gray-700 text-sm sm:text-sm md:text-md lg:text-xl">
                                Condition where it is difficult to fall asleep, stay asleep, or achieve restful sleep, 
                                leading to inadequate rest. Causes may include stress, irregular sleep habits, or screen use before bedtime.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <img src={Insomnia} class="rounded w-md "/>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8 bg-gray-400">
                <div className="flex flex-col gap-4 md:flex-row md:items-center justify-center md:gap-8">
                    <div className="md:col-span-1">
                        <div className="max-w-full w-sm md:w-md lg:w-4xl leading-tight">
                            <h2 className="text-2xl font-semibold text-gray-900 sm:text-xl md:text-2xl lg:text-4xl">
                                Depression and anxiety
                            </h2>
                            <p className="mt-4 text-pretty text-gray-700 text-sm sm:text-sm md:text-md lg:text-xl">
                                mental health conditions that affect mood, thoughts, and daily functioning. 
                                They can cause persistent sadness, worry, or stress, impacting a person’s overall well-being.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <img src={Anxiety} class="rounded w-md h-auto"/>
                    </div>
                </div>
            </div>
        </section>
    );
}