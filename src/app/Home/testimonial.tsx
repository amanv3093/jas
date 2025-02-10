
import { FiMessageSquare } from "react-icons/fi";

const testimonials = [
  {
    name: "Rahul Chahal,",
    feedback:
      "I had an outstanding experience working with Jas Oberoi. His professionalism, market knowledge, and dedication made the process of buying my home smooth and stress-free. Jas was always available to answer my questions and provided valuable insights that helped me make informed decisions. I highly recommend Jas Oberoi to anyone looking for a reliable and expert realtor!",
  },
  {
    name: "Manveer singh",
    feedback:
      "I recently had the pleasure of working with Jas Oberoi as my realtor, and I couldn't be more satisfied with the experience. Jas's expertise, dedication, and attention to detail made the entire process of buying my new home seamless and stress-free. His knowledge of the local market and commitment to finding the perfect property for me was truly impressive. I highly recommend Jas Oberoi to anyone looking for a reliable and professional realtor.",
  },
  {
    name: "Pavan Aujla",
    feedback:
      "Maria Hussain is the absolute best realtor I have worked with. We fell in love with a property that was perfect for our extended family but it seemed out of reach. Her amazing negotiation tactics managed to get us this property for much under asking price. Highly recommend Maria! We will be using her for all of our future purchases and you should too!.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white text-center xl:px-32 lg:px-8 px-5">
      {/* Heading */}
      <h2 className="text-yellow-500 text-lg font-bold">
        ⭐ Customer Testimonials
      </h2>
      <h3 className="text-4xl font-extrabold mt-2">
        Testimonial Video & Google <br /> Reviews
      </h3>

      {/* Testimonials Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-black text-white rounded-lg shadow-lg p-6 max-w-xs flex flex-col items-center"
          >
            <FiMessageSquare size={32} className="text-red-500 mb-6" />
            <p className="text-gray-300 text-center pb-10">
              {testimonial.feedback}
            </p>
            <h1 className="text-red-500 mb-1">{testimonial.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;