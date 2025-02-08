import HotelCard from "@/components/HotelCard"
import Pagination from "@/components/Pagination"
import { hotels } from "@/constants/constants"
import Link from "next/link"


async function getHotels(page = 1, limit = 8) {

  const totalHotels = hotels.length
  const totalPages = Math.ceil(totalHotels / limit)
  const paginatedHotels = hotels.slice((page - 1) * limit, page * limit)

  return { hotels: paginatedHotels, totalPages }
}

export default async function Hotels({ searchParams }) {
  const page = Number.parseInt(searchParams.page) || 1
  const { hotels, totalPages } = await getHotels(page)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
      <div className="mt-8">
        <Link href="/hotels/create" className="bg-green-600 text-white px-4 py-2 rounded">
          Create Hotel
        </Link>
      </div>
    </div>
  )
}

