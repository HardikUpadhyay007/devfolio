import React from "react";
import Image from "next/image";

export interface ProfileCardProps {
    id?: string;
    name?: string;
    role?: string;
    location?: string;
    experience?: string;
    avatarUrl?: string;
    backgroundUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    role,
    location,
    experience,
    avatarUrl,
    backgroundUrl,
}) => {
    return (
        <div className="group w-full max-w-xs min-h-[240px] bg-white/10 backdrop-blur-md backdrop-brightness-125 border border-white/30 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <div
                className="relative h-20 bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${backgroundUrl})` }}
            >
                <div className="absolute inset-x-0 -bottom-6 flex justify-center">
                    <Image
                        src={avatarUrl || "/placeholder-avatar.jpg"}
                        alt={name || "User avatar"}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full border-4 border-white shadow-xl transform hover:scale-110 transition-transform duration-300 object-cover"
                        priority={false}
                        unoptimized={true}
                    />
                </div>
            </div>

            <div className="mt-6 px-4 text-center flex-shrink-0">
                <h2 className="text-lg font-bold tracking-tight text-white mb-1 truncate">
                    {name}
                </h2>
                <p className="text-gray-200 text-sm font-medium truncate">
                    {role}
                </p>
            </div>

            <div className="mt-2 px-4 space-y-1 pb-3 flex-1 flex flex-col justify-start">
                <div className="flex items-center text-xs text-gray-200">
                    <svg
                        className="w-3 h-3 mr-2 text-gray-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="truncate">{location}</span>
                </div>
                <div className="flex items-center text-xs text-gray-200">
                    <svg
                        className="w-3 h-3 mr-2 text-gray-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" />
                        <path d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5z" />
                    </svg>
                    <a
                        href="#"
                        className="text-blue-300 hover:underline hover:text-white transition-colors truncate text-xs"
                    >
                        {name?.toLowerCase().replace(/\s+/g, "")}\.portfolio.com
                    </a>
                </div>
                <div className="flex items-center text-xs text-gray-200">
                    <svg
                        className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    <span className="truncate">{experience} experience</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
