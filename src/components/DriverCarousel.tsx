'use client';

import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

type DriveImage = {
  id: string;
  name: string;
  url: string;
};

export default function DriveCarousel() {
  const [images, setImages] = useState<DriveImage[]>([]);
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 15 },
      },
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 10 },
      },
    },
    slides: { perView: 1, spacing: 8 },

    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },

  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('/api/drive-images');
        if (!res.ok) throw new Error('Erro ao buscar imagens');
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error('Erro ao carregar imagens:', err);
      }
    };
    fetchImages();
  }, []);


  if (!images.length) return <p>Carregando imagens...</p>;

  return (
    <>
      <div className="w-full px-4 py-6 max-w-6xl mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {images.map((img) => (
            <div
              key={img.id}
              className="keen-slider__slide flex justify-center items-center"
            >
              <div className="w-[80dvw] h-[400px] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={img.url}
                  alt={img.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100dvw, (max-width: 1024px) 50dvw, 33dvw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div >
      )}
    </>
  );
}