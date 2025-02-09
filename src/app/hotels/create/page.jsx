"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Button from "@/components/ui/Button"


const amenitiesList = ["Free Wi-Fi", "Parking", "Restaurant", "Fitness Center", "Swimming Pool", "Spa"]

export default function AddHotel() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    price: "",
    availableRooms: "",
    image: "",
    rating: "",
    amenities: [],
    description: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleAmenityChange = (amenity) => {
    setFormData((prevData) => ({
      ...prevData,
      amenities: prevData.amenities.includes(amenity)
        ? prevData.amenities.filter((a) => a !== amenity)
        : [...prevData.amenities, amenity],
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)
    setIsLoading(true)

    try {
      const response = await fetch("/api/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to add hotel")
      }

      router.push("/hotels/manage")
    } catch (error) {
      console.error("Error adding hotel:", error)
      alert("Failed to add hotel. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Add New Hotel</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Hotel Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 border border-slate-400 rounded px-4 py-2 w-full text-slate-800"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 border border-slate-400 rounded px-4 py-2 w-full text-slate-800"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price per Night
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            className="mt-1 border border-slate-400 rounded px-4 py-2 w-full text-slate-800"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableRooms" className="block text-sm font-medium text-gray-700">
            Available Rooms
          </label>
          <input
            type="number"
            id="availableRooms"
            name="availableRooms"
            value={formData.availableRooms}
            onChange={handleChange}
            required
            min="0"
            className="mt-1 border border-slate-400 rounded px-4 py-2 w-full text-slate-800"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="mt-1 border border-slate-400 rounded px-4 py-2 w-full text-slate-800"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            min="0"
            max="5"
            step="0.1"
            className="mt-1 border border-slate-400 rounded px-4 py-2 w-full text-slate-800"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
          <div className="space-y-2">
            {amenitiesList.map((amenity) => (
              <div key={amenity} className="flex items-center">
                <input
                type="checkbox"
                  id={amenity}
                  checked={formData.amenities.includes(amenity)}
                  onChange={() => handleAmenityChange(amenity)}
                />
                <label htmlFor={amenity} className="ml-2 text-sm text-gray-700">
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 border border-slate-400 rounded px-4 py-2 w-full text-slate-800"
            rows={4}
          ></textarea>
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Hotel"}
        </Button>
      </form>
    </div>
  )
}



