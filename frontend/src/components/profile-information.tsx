"use client";
import Image from "next/image"

export function ProfileInformation() {
    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Cover Photo */}
        <div className="h-32 bg-blue-500 relative">
            <div className="absolute -bottom-16 left-6">
            <div className="rounded-full border-4 border-white overflow-hidden h-32 w-32">
                <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover"
                />
            </div>
            </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 px-6 pb-6">
            <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold">Jessica Parker</h1>
            <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            </div>
            <div className="text-gray-500 mb-4 flex items-center gap-2">
            <span>28</span>
            <span>•</span>
            <span>New York, NY</span>
            </div>

            <div className="space-y-4">
            {/* About */}
            <div>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">About</h2>
                <p className="text-gray-700">
                Creative photographer with a passion for travel and outdoor adventures. Looking for someone to share new
                experiences with.
                </p>
            </div>

            {/* Interests */}
            <div>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Interests</h2>
                <div className="flex flex-wrap gap-2">
                {["Photography", "Hiking", "Travel", "Cooking", "Art", "Music"].map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-blue-50 text-blue-500 rounded-full text-sm">
                    {interest}
                    </span>
                ))}
                </div>
            </div>

            {/* Photos */}
            <div>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Photos</h2>
                <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((photo) => (
                    <div key={photo} className="aspect-square rounded-md overflow-hidden bg-gray-100">
                    <Image
                        src={`/placeholder.svg?height=150&width=150&text=Photo ${photo}`}
                        alt={`Photo ${photo}`}
                        width={150}
                        height={150}
                        className="object-cover w-full h-full"
                    />
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6 flex gap-3">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
            </svg>
            Message
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-200 rounded-full hover:bg-gray-50">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
            </svg>
            </button>
        </div>

        {/* Profile Stats */}
        <div className="border-t border-gray-100">
            <div className="grid grid-cols-3 divide-x divide-gray-100">
            <div className="p-4 text-center">
                <div className="text-xl font-semibold text-blue-500">1.2k</div>
                <div className="text-xs text-gray-500">Followers</div>
            </div>
            <div className="p-4 text-center">
                <div className="text-xl font-semibold text-blue-500">284</div>
                <div className="text-xs text-gray-500">Following</div>
            </div>
            <div className="p-4 text-center">
                <div className="text-xl font-semibold text-blue-500">95%</div>
                <div className="text-xs text-gray-500">Match Rate</div>
            </div>
            </div>
        </div>
        </div>
    );
}