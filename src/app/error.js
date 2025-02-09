"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, Home, RefreshCcw } from "lucide-react"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="text-red-500 w-16 h-16" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4 text-slate-800">Oops! Something went wrong</h1>
        <p className="text-gray-600 text-center mb-6">
          {error?.message ||
            "We're sorry, but an unexpected error occurred. Our team has been notified and is working on a fix."}
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            <RefreshCcw className="w-5 h-5 mr-2" />
            Try again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}

