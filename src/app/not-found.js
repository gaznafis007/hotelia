import Link from "next/link"
import { Search, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">Oops! The page you are looking for does not exist or has been moved.</p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Go home
          </Link>
          <Link
            href="/hotels"
            className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300"
          >
            <Search className="w-5 h-5 mr-2" />
            Search hotels
          </Link>
        </div>
      </div>
    </div>
  )
}

