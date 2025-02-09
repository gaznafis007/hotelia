'use client';
import HotelCard from "@/components/HotelCard"
import Pagination from "@/components/Pagination"
import Button from "@/components/ui/Button"
import Link from "next/link"
import { useEffect, useState } from "react";


const Hotels = () =>{
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null);
  const fetchHotels = async () =>{
    setLoading(true)
    try{
      const res = await fetch('/api/hotels')
      const data = await res.json()
    setHotels(data);
    setTotalPages(Math.ceil(data.length/8));
    }catch(err){
      setError(err.message);
    }finally{
      setLoading(false)
    }
  }
  useEffect(() =>{
    fetchHotels()
  },[])
if(loading){
  <h2 className="text-4xl text-center text-blue-500">Loading...</h2>
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
      <Pagination currentPage={page} setPage={setPage} totalPages={totalPages} />
      <div className="mt-8">
        <Link href="/hotels/manage" className="bg-green-500 px-4 py-2 text-white rounded">
          Manage Hotels
        </Link>
      </div>
    </div>
  )
}

export default Hotels