import Image from "next/image";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="bg-amber-50 py-24">
      <HeroSlider />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-12 px-6">

        <div className="max-w-xl">
          <h2 className="mb-6 text-5xl font-bold text-gray-800">
            愛犬の"かわいい"をもっと。
          </h2>

          <p className="mb-8 text-lg text-gray-600">
            トリミング・シャンプーで、
            <br />
            毎日をもっと笑顔に。
          </p>

          <button className="rounded-full bg-green-600 px-8 py-4 text-white transition-colors hover:bg-green-700">
            ご予約はこちら
          </button>
        </div>

        <Image
          src="/images/hero-dog.jpg"
          alt="トリミング後の犬"
          width={500}
          height={500}
          className="rounded-3xl shadow-lg"
        />

      </div>
    </section>
  );
}