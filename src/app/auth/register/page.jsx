"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

export default function Register() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const onSubmit = async (data) => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    const res = await response.json()
    if (response.ok) {
        if(res.acknowledged){
            router.push("/auth/login")
        }
    } else {
      // Handle error
      console.log('error happen', res)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 min-h-screen text-slate-800">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
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
          Register
        </button>
      </form>
    </div>
  )
}

