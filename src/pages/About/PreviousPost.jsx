import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import GalleryOne from "../../assets/gallery-1.png";
import GalleryTwo from "../../assets/gallery-2.png";
import GalleryThree from "../../assets/gallery-3.png";
import GalleryFour from "../../assets/gallery-4.png";
import GalleryIcon from "../../assets/gallery-icon.png";
import organizer1 from "../../assets/my-headshot.png";
import organizer2 from "../../assets/img6063.png";
import ContactUs from "./Contact"


const PreviousPost = () => {
  const images = [
    { image: GalleryOne },
    { image: GalleryTwo },
    { image: GalleryThree },
    { image: GalleryFour },
    { image: GalleryTwo },
    { image: GalleryThree },
    { image: GalleryOne },
    { image: GalleryFour },
  ];

  const [slidesPerPage, setSlidesPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setSlidesPerPage(4);
      } else {
        setSlidesPerPage(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const totalSlides = images.length;
    setCurrentSlide((prev) =>
      prev + slidesPerPage >= totalSlides ? 0 : prev + slidesPerPage
    );
  };

  const prevSlide = () => {
    const totalSlides = images.length;
    setCurrentSlide((prev) =>
      prev - slidesPerPage < 0
        ? totalSlides - slidesPerPage
        : prev - slidesPerPage
    );
  };

  return (
		<>
      <div className="p-8 font-pop">
        <div className="relative text-left">
          <div className="mb-6 mt-16">
            <div className="flex gap-7">
              <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl text-green-800 mb-8">
                Past Events
              </h2>
            </div>
            <div className="md:flex justify-between items-center">
              <p className="text-gray-600 text-base lg:text-lg md:w-1/2 mb-4">
                Explore past events held in our community.
              </p>
              <div className="flex gap-4 md:mr-8 md:ml-0 ml-24">
                <div
                  className="text-4xl text-gray-600 cursor-pointer items-center justify-center "
                  onClick={prevSlide}
                >
                  <FaAngleLeft className="bg-gray-300 p-3 rounded-full" />
                </div>
                <div
                  className="text-4xl text-gray-600 cursor-pointer rounded-full"
                  onClick={nextSlide}
                >
                  <FaAngleRight className="bg-gray-300 p-3 rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 ">
            <div className="w-full h-full overflow-hidden relative mb-16 ">
              <div className="flex ">
                {images
                  .slice(currentSlide, currentSlide + slidesPerPage)
                  .map((img, index) => (
                    <div
                      key={index}
                      className={`w-full sm:w-1/${slidesPerPage} p-1 relative`}
                    >
                      <div className="relative ">
                        <img
                          src={img.image}
                          alt={`Image ${index + currentSlide + 1}`}
                          className="w-full h-96 object-cover rounded-md"
                        />
                        <div className=" absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 rounded-md">
                          <h4 className="text-white text-lg font-bold">
                            Hacktober Fest
                          </h4>
                          <p className="text-gray-200">
                            17th October 2023, Ado Ekiti
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-2xl md:text-2xl lg:text-3xl text-green-800 mb-8 ml-8">
          Organizers
        </h2>
        <section className="py-10 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Organizer 1 */}
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
                  <img
                    src={organizer1}
                    alt="Goodness Sewo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-xl font-bold">Goodness Sewo</h5>
                <p className="text-gray-600">GDSC Lead</p>
                <a href="/view/#" className="text-green-600 hover:underline">
                  View Profile
                </a>
              </div>

              {/* Organizer 2 */}
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
                  <img
                    src={organizer1}
                    alt="Favour Adetayo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-xl font-bold">Favour Adetayo</h5>
                <p className="text-gray-600">GDSC Co-Lead</p>
                <a href="/view/#" className="text-green-600 hover:underline">
                  View Profile
                </a>
              </div>

              {/* Organizer 3 */}
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
                  <img
                    src={organizer2}
                    alt="Favour Adetayo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-xl font-bold">Favour Adetayo</h5>
                <p className="text-gray-600">GDSC Co-Lead</p>
                <a href="/view/#" className="text-green-600 hover:underline">
                  View Profile
                </a>
              </div>

              {/* Organizer 4 */}
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
                  <img
                    src={organizer2}
                    alt="Goodness Sewo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-xl font-bold">Goodness Sewo</h5>
                <p className="text-gray-600">GDSC Lead</p>
                <a href="/view/#" className="text-green-600 hover:underline">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
			<ContactUs/>
		</>
  );
};

export default PreviousPost;
