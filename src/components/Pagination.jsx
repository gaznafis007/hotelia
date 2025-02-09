'use client';
import Link from "next/link"
import Button from "./ui/Button";

export default function Pagination({ currentPage, totalPages, setPage }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const handlePage = (page) =>{
    setPage(page)
  }
  return (
    <div className="flex justify-center space-x-2 mt-8">
      {pages.map((page) => (
        <Button
          key={page}
          handler={() =>handlePage(page)}
          className={`px-4 py-2 rounded ${currentPage === page ? "bg-blue-600 text-white" : "bg-gray-600"}`}
        >
          {page}
        </Button>
      ))}
    </div>
  )
}

