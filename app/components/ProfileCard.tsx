import React from "react";

export interface ProfileCardProps {
    firstName?: string;
    lastName?: string;
    role?: string;
    location?: string;
    experience?: string;
    profileImage?: string;
    coverImage?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    firstName = "FIRST NAME",
    lastName = "LAST NAME",
    role = "FRONTEND DEVELOPER",
    location = "LOCATION",
    experience = "EXPERIENCE",
    profileImage: customProfileImage = "https://picsum.photos/100",
    coverImage: customCoverImage = "https://picsum.photos/600/240",
}) => {
    return (
        <div className="w-full max-w-[320px] mx-auto">
            <div className="bg-gray-900 rounded-2xl text-white shadow-lg border border-gray-700 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {/* Cover Image Background */}
                <div className="relative h-28 overflow-hidden">
                    <img
                        src={customCoverImage}
                        alt="Cover"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay for better contrast */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Profile Section with Names */}
                <div className="relative -mt-8 px-4 z-20 flex items-center">
                    <div className="flex-1">
                        <h3 className="text-lg font-bold tracking-wide text-white">
                            {firstName}
                        </h3>
                    </div>

                    {/* Profile Image */}
                    <div className="flex-shrink-0 mx-3">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
                            <img
                                src={customProfileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Last Name */}
                    <div className="flex-1 text-right">
                        <h3 className="text-lg font-bold tracking-wide text-white">
                            {lastName}
                        </h3>
                    </div>
                </div>

                {/* Content Area */}
                <div className="px-4 py-4">
                    <div className="text-center space-y-1">
                        <h2 className="text-white text-lg font-semibold tracking-tight">
                            {role}
                        </h2>
                        <p className="text-gray-400 text-sm tracking-wide">
                            {location}
                        </p>
                        <p className="text-gray-400 text-sm tracking-wide">
                            {experience}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
