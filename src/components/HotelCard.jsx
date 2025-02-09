'use client'
import Link from "next/link"
import Image from "next/image"
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share"
import { Facebook, Twitter, PhoneIcon as Whatsapp } from "lucide-react"

export default function HotelCard({ hotel }) {
  const shareUrl = `https://hotelia.com/hotels/${hotel._id}`

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        src={hotel.image || "/placeholder.svg"}
        alt={hotel.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-slate-800">{hotel.name}</h2>
        <p className="text-gray-600 mb-2">{hotel.address}</p>
        <p className="text-lg font-bold mb-2 text-slate-800">${hotel.price} / night</p>
        <p className="text-sm mb-2 text-slate-800">Available Rooms: {hotel.availableRooms}</p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-slate-800">{hotel.rating.toFixed(1)}</span>
        </div>
        <Link href={`/hotels/${hotel._id}`} className="block text-center bg-blue-600 text-white py-2 rounded mb-2">
          View Details
        </Link>
        <div className="flex justify-between">
          <FacebookShareButton url={shareUrl}>
            <Facebook size={24} />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <Twitter size={24} />
          </TwitterShareButton>
          <WhatsappShareButton url={shareUrl}>
            <Whatsapp size={24} />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  )
}

