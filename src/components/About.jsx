import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                alt="About Hotelia"
                width={500}
                height={375}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">About Hotelia</h2>
              <p className="text-gray-600 mb-4">
                Hotelia is your premier destination for finding the perfect hotel for your next adventure. We curate a
                selection of the finest accommodations around the world, ensuring that your stay is nothing short of
                extraordinary.
              </p>
              <p className="text-gray-600 mb-4">
                From luxurious resorts to cozy boutique hotels, we have something for every traveler. Our mission is to
                make your journey memorable by connecting you with exceptional properties that cater to your unique
                preferences.
              </p>
              <Link href="/about" className="text-blue-600 font-semibold hover:underline">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;