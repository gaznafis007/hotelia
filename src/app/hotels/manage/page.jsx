"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Pencil, Trash2 } from "lucide-react";

export default function ManageHotels() {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/hotels");
      const data = await res.json();
      setHotels(data);
      setError(null);
    } catch (e) {
      console.error("Error fetching hotels:", e);
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this hotel?")) {
      try {
        const response = await fetch(`/api/hotels/${id}`, {
          method: "DELETE",
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error("Failed to delete hotel");
        }
        if (result.deletedCount > 0) {
          setHotels(hotels.filter((hotel) => hotel._id !== id));
        }
      } catch (error) {
        console.error("Error deleting hotel:", error);
        alert("Failed to delete hotel. Please try again.");
      }
    }
  };

  if (isLoading) {
    return <div className="text-center py-10 text-blue-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Manage Hotels</h1>
      <div className="mb-4">
        <Link href="/hotels/create" passHref>
          <Button className={'bg-green-500'}>Add New Hotel</Button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-300 text-slate-800">
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Address</th>
              <th className="py-2 px-4 border-b text-left">Price</th>
              <th className="py-2 px-4 border-b text-left">Available Rooms</th>
              <th className="py-2 px-4 border-b text-left">Edit</th>
              <th className="py-2 px-4 border-b text-left">Delete</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr key={hotel._id} className="hover:bg-gray-50 text-gray-800">
                <td className="py-2 px-4 border-b">{hotel.name}</td>
                <td className="py-2 px-4 border-b">{hotel.address}</td>
                <td className="py-2 px-4 border-b">${hotel.price}</td>
                <td className="py-2 px-4 border-b">{hotel.availableRooms}</td>
                <td className="py-2 px-4 border-b">
                  <Button
                    className={"flex items-center space-x-2"}
                    handler={() => router.push(`/hotels/edit/${hotel._id}`)}
                  >
                    <Pencil className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                </td>
                <td className="py-2 px-4 border-b">
                  <Button
                    className={"bg-red-500 flex space-x-2 items-center"}
                    handler={() => handleDelete(hotel._id)}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
