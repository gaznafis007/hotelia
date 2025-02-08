import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Hotelia
        </Link>
        <div>
          {session ? (
            <>
              <Link href="/hotels" className="mr-4">
                Hotels
              </Link>
              <button onClick={() => signOut()} className="bg-white text-blue-600 px-4 py-2 rounded">
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/auth/login" className="bg-white text-blue-600 px-4 py-2 rounded">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

