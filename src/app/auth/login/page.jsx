"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import { useForm } from "react-hook-form"

export default function Login() {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/hotels",
    })
  }

  return (
    <div className="max-w-md mx-auto mt-8 min-h-screen text-slate-800">
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Sign In
        </button>
      </form>
      <Link className="mt-4 hover:underline" href={'/auth/register'}>New to hotelia? register</Link>
      <div className="mt-4">
        <button
          onClick={() => signIn("google", { callbackUrl: "/hotels" })}
          className="w-full bg-red-600 text-white py-2 rounded"
        >
          Sign In with Google
        </button>
      </div>
    </div>
  )
}

