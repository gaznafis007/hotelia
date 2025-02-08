import { hotels } from "@/constants/constants"
import Image from "next/image"
import Link from "next/link"
import HotelCard from "./HotelCard"


export default function FeaturedHotels() {
    const featuredHotels = hotels.filter(hotel => hotel.featured === true)
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredHotels.map((hotel) => (
            // <div key={hotel.id} className="rounded-lg overflow-hidden shadow-md">
            //   <Image
            //     src={hotel.image || "/placeholder.svg"}
            //     alt={hotel.name}
            //     width={400}
            //     height={300}
            //     className="w-full h-48 object-cover"
            //   />
            //   <div className="p-4">
            //     <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
            //     <p className="text-gray-600">Starting from ${hotel.price}/night</p>
            //     <Link
            //       href={`/hotels/${hotel.id}`}
            //       className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
            //     >
            //       View Details
            //     </Link>
            //   </div>
            // </div>
            <HotelCard key={hotel.id} hotel={hotel}/>
          ))}
        </div>
      </div>
    </section>
  )
}

