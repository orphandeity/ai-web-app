import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function HomePage() {
  const { userId } = await auth()

  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-xl mx-auto space-y-4">
        <h1 className="text-6xl">The best Journal app, period.</h1>
        <p className="text-2xl text-white/60">
          this is the best app for tracking your mood throughout your life. all
          you have to do is be honest.
        </p>
        <Link href={href}>
          <div>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              get started
            </button>
          </div>
        </Link>
      </div>
    </div>
  )
}
