
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, ArrowLeft, Wifi, Car, Utensils, Dumbbell, WavesLadder, BrainCog } from "lucide-react"
import Button from "@/components/ui/Button"

 const HotelDetail = async ({ params }) =>{
    const {id} =  await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/hotels/${id}`);
  const hotel = await res.json()

  if (!hotel) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link href="/hotels" className="flex items-center text-blue-600 hover:underline mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Hotels
      </Link>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-96">
          <Image src={hotel?.image || "/placeholder.svg"} alt={hotel?.name} layout="fill" objectFit="cover" />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2 text-slate-800">{hotel?.name}</h1>
          <p className="text-gray-600 mb-4">{hotel?.address}</p>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="font-bold text-slate-800">{hotel?.rating}</span>
          </div>
          <p className="text-gray-700 mb-6">{hotel?.description}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-slate-800">Amenities</h2>
            <div className="grid grid-cols-2 gap-2">
              {hotel?.amenities?.map((amenity, index) => (
                <div key={index} className="flex items-center text-slate-800">
                  {amenity === "Free Wi-Fi" && <Wifi className="w-4 h-4 mr-2" />}
                  {amenity === "Parking" && <Car className="w-4 h-4 mr-2" />}
                  {amenity === "Restaurant" && <Utensils className="w-4 h-4 mr-2" />}
                  {amenity === "Fitness Center" && <Dumbbell className="w-4 h-4 mr-2" />}
                  {amenity === "Swimming Pool" && <WavesLadder className="w-4 h-4 mr-2"/>}
                  {amenity === "Spa" && <BrainCog className="w-4 h-4 mr-2"/>}
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-slate-800">${hotel.price}</p>
              <p className="text-gray-600">per night</p>
            </div>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HotelDetail