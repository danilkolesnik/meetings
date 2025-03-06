"use client";
import { useState } from "react";
import Link from "next/link";
import { FacebookIcon, GoogleIcon, TelegramIcon } from "@component/assets/icons/icons";
import CustomInput from "@component/ui/CustomInput";
import CustomButton from "@component/ui/CustomButton";

export function RegistrationForm() {
  const [step, setStep] = useState(1)

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-700 pt-6">Create an account</h1>
        <p className="text-gray-500 mt-1">Join our community and find your perfect match</p>
      </div>

      <div className="px-6 pb-4 space-y-4">
        {step === 1 ? (
          <div className="space-y-4">
            <div className="space-y-4">

              <div className="space-y-2">
                <CustomInput id="email" type="email" placeholder="your@email.com" label="Email" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <CustomInput id="first-name" type="text" placeholder="John" label="First name" />
                </div>
                <div className="space-y-2">
                  <CustomInput id="last-name" type="text" placeholder="Doe" label="Last name" />
                </div>
              </div>

              <div className="space-y-2">
                <CustomInput id="password" type="password" placeholder="********" label="Password" />
              </div>
              
              <CustomButton onClick={() => setStep(2)} 
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                }>
                Continue
              </CustomButton>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button className="cursor-pointer flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-blue-50 hover:border-blue-200">
                <GoogleIcon />
              </button>
              <button className="cursor-pointer flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-blue-50 hover:border-blue-200">
                <FacebookIcon />
              </button>
              <button className="cursor-pointer flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-blue-50 hover:border-blue-200">
                <TelegramIcon />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-lg bg-green-50 p-4 border border-green-100 text-center">
              <div className="flex justify-center mb-2">
                <div className="bg-green-500 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="font-medium text-green-800">Registration Successful!</h3>
              <p className="text-sm text-green-600 mt-1">Your account has been created</p>
            </div>
            <CustomButton onClick={() => setStep(1)}>
                Start Finding Matches
            </CustomButton>
          </div>
        )}
      </div>

      <div className="px-6 pb-6 text-center text-sm text-gray-500 space-y-2">
        <div>
          Already have an account?{" "}
          <Link href="#" className="text-pink-500 hover:underline">
            Sign in
          </Link>
        </div>
        <div>
          By signing up, you agree to our{" "}
          <Link href="#" className="text-pink-500 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-pink-500 hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

