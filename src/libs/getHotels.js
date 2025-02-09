export async function getHotels(page = 1, limit = 8) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/hotels`)
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const hotels = await res.json()
      const totalHotels = hotels.length
      const totalPages = Math.ceil(totalHotels / limit)
      const paginatedHotels = hotels.slice((page - 1) * limit, page * limit)
      return { hotels: paginatedHotels, totalPages }
    } catch (error) {
      console.error("Error fetching hotels:", error)
      throw new Error(`Failed to fetch hotels: ${error.message}`)
    }
  }
  
  