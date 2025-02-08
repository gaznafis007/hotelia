import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-[70vh] flex items-center justify-center text-white">
                <Image
                  src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
                  alt="Luxury Hotel"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center">
                  <h1 className="text-5xl font-bold mb-4">Welcome to Hotelia</h1>
                  <p className="text-xl mb-8">Discover luxury and comfort in our handpicked hotels</p>
                  <Link
                    href="/hotels"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300"
                  >
                    Browse Hotels
                  </Link>
                </div>
              </section>
    );
};

export default Hero;