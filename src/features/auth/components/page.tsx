'use client'
import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignIn withSignUp />
    </div>
  )
}
