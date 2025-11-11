import pic from "../assets/screentime.jpg";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen overflow-x-hidden">
      <img src={pic} className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 flex items-start justify-start px-4 pt-20 sm:px-10 sm:pt-32 md:px-20 md:pt-40 lg:px-40 lg:pt-40 max-w-xl">
        <h2 className="text-6xl md:text-8xl lg:text-8xl font-semibold text-white leading-tight">
            Mental Health Wellnes Predict
        </h2>
      </div>
    </section>
  );
}