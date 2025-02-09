'use client';
import HotelCard from "@/components/HotelCard"
import Pagination from "@/components/Pagination"
import Button from "@/components/ui/Button"
import { getHotels } from "@/libs/getHotels"
import Link from "next/link"


const Hotels = async({ searchParams }) =>{
  const page = Number.parseInt(searchParams?.page ?? 1)
  let hotels = []
  let totalPages = 0
  let error = null

  try {
    const result = await getHotels(page)
    hotels = result.hotels
    totalPages = result.totalPages
  } catch (e) {
    console.error("Error in Hotels page:", e)
    error = e.message
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Hotels</h1>
        <p className="text-gray-600 mb-4">{error}</p>
        <Button handler={() => window.location.reload()}>Try Again</Button>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} />
      <div className="mt-8">
        <Link href="/hotels/manage" className="bg-green-500 px-4 py-2 text-white rounded">
          Manage Hotels
        </Link>
      </div>
    </div>
  )
}

export default Hotels