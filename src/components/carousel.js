import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

export default function Carousel({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000 })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {});
  }, [emblaApi]);

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, i) => (
          <div key={i} className="flex-[0_0_100%] relative">
            <div className="relative w-full md:w-[280px] h-[400px]">
              <img
                src={slide.src}
                alt={slide.caption || ""}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent rounded-xl" />
              {(slide.caption || slide.text) && (
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  {slide.caption && (
                    <h3 className="font-bold text-lg mb-1 line-clamp-1">
                      {slide.caption}
                    </h3>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
