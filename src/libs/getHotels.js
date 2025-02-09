export async function getHotels(page = 1, limit = 8) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/hotels`);
    const hotels = await res.json();
    const totalHotels = hotels.length
    const totalPages = Math.ceil(totalHotels / limit)
    const paginatedHotels = hotels.slice((page - 1) * limit, page * limit)
    return { hotels: paginatedHotels, totalPages }
  }