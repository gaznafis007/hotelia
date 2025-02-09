import Link from "next/link"

export default function Pagination({ currentPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center space-x-2 mt-8">
      {pages.map((page) => (
        <Link
          key={page}
          href={`/hotels?page=${page}`}
          className={`px-4 py-2 rounded ${currentPage === page ? "bg-blue-600 text-white" : "bg-gray-600"}`}
        >
          {page}
        </Link>
      ))}
    </div>
  )
}

