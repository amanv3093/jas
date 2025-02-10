import Image from "next/image";
import img1 from "../../../public/img1.jpeg";
// const tattoos = [
//   "/tattoo1.jpg",
//   "/tattoo2.jpg",
//   "/tattoo3.jpg",
//   "/tattoo4.jpg",
// ];

export default function Section6() {
  return (
    <section className="bg-black text-white py-12 px-6 text-center">
      <h2 className="text-yellow-500 text-lg font-bold">⭐ Our Work</h2>
      {/* <h1 className="text-3xl md:text-5xl font-extrabold mt-2">
        SEE WHY I AM THE BEST TATTOO ARTIST IN <br /> THE VALLEY
      </h1>
      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor.
      </p> */}

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={img1}
            alt="img"
            width={300}
            height={400}
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={img1}
            alt="img"
            width={300}
            height={400}
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={img1}
            alt="img"
            width={300}
            height={400}
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={img1}
            alt="img"
            width={300}
            height={400}
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
