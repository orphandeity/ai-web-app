import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { EmailAddress } from '@clerk/nextjs/dist/types/server'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser()
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user?.id as string,
    },
  })

  if (!match) {
    // this is a brand new user
    await prisma.user.create({
      data: {
        clerkId: user?.id as string,
        email: user?.emailAddresses[0].emailAddress as string,
      },
    })
  }

  redirect('/journal')
}

const NewUser = async () => {
  await createNewUser()
  return null
}

export default NewUser
