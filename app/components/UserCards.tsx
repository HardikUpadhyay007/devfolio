import React from "react";
import users from "../data/users.json";
import ProfileCard from "./ProfileCard";

const UserCards: React.FC = () => {
    // Show all users
    const displayUsers = users;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 w-full max-w-6xl justify-items-center">
            {displayUsers.map((user) => (
                <ProfileCard
                    key={user.id}
                    id={user.id.toString()}
                    name={user.name}
                    role={user.role}
                    location={user.location}
                    experience={user.experience}
                    avatarUrl={user.avatarUrl}
                    backgroundUrl={user.backgroundUrl}
                />
            ))}
        </div>
    );
};

export default UserCards;
