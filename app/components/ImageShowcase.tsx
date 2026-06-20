import Image from "next/image";

const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

export default function ImageShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D97706]">
            Built for real people
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-6xl">
            Money transfers that feel human, simple, and trusted.
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            Cush Payments connects diaspora senders with families, businesses,
            mobile wallets, and bank accounts across Africa.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-[2rem] shadow-xl ${
                index === 0 ? "col-span-2 h-72" : "h-52"
              }`}
            >
              <Image
                src={src}
                alt="Cush Payments community"
                fill
                className="object-cover transition duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}