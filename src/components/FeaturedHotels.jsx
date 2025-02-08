import Image from "next/image"
import Link from "next/link"

const featuredHotels = [
  {
    id: 1,
    name: "Luxe Harbor Resort",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    price: 450,
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    image: "https://images.unsplash.com/photo-1548704606-0c9f85a34b72",
    price: 320,
  },
  {
    id: 3,
    name: "Urban Oasis Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    price: 280,
  },
]

export default function FeaturedHotels() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src={hotel.image || "/placeholder.svg"}
                alt={hotel.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                <p className="text-gray-600">Starting from ${hotel.price}/night</p>
                <Link
                  href={`/hotels/${hotel.id}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

