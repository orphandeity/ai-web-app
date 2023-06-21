import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div className="h-screen grid place-content-center">
      <SignUp afterSignInUrl="/new-user" redirectUrl="/new-user" />
    </div>
  )
}

export default SignUpPage
