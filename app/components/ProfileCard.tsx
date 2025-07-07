import React from "react";
import Image from "next/image";
import { MapPin, Briefcase, Eye } from "lucide-react";

export interface ProfileCardProps {
    id?: string;
    name?: string;
    role?: string;
    location?: string;
    experience?: string;
    avatarUrl?: string;
    backgroundUrl?: string;
    isPremium?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    id,
    name,
    role,
    location,
    experience,
    avatarUrl,
    backgroundUrl,
    isPremium = false,
}) => {
    return (
        <div
            className={`group w-full max-w-xs min-h-[240px] bg-white/10 backdrop-blur-md backdrop-brightness-125 border ${
                isPremium
                    ? "border-yellow-400/80 shadow-yellow-400/20 shadow-lg"
                    : "border-white/30"
            } rounded-3xl shadow-lg overflow-hidden flex flex-col hover:scale-105 hover:shadow-2xl transition-all duration-300 relative`}
        >
            {/* Premium badge */}
            {isPremium && (
                <div className="absolute top-3 right-3 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center">
                        <span className="mr-1">✨</span>
                        PREMIUM
                    </div>
                </div>
            )}
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
                    <MapPin className="w-3 h-3 mr-2 text-gray-400 flex-shrink-0" />
                    <span className="truncate">{location}</span>
                </div>
                <div className="flex items-center text-xs text-gray-200">
                    <Briefcase className="w-3 h-3 mr-2 text-gray-400 flex-shrink-0" />
                    <span className="truncate">{experience}</span>
                </div>
                <div className="flex items-center text-xs text-gray-200">
                    <Eye className="w-3 h-3 mr-2 text-gray-400 flex-shrink-0" />
                    <a
                        href={`/profile/${id}`}
                        className="text-blue-300 hover:underline hover:text-white transition-colors truncate text-xs"
                    >
                        View Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
