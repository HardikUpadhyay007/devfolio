import React from "react";
import users from "../data/users.json";
import ProfileCard from "./ProfileCard";

const UserCards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-8 justify-items-center">
            {users.map((user) => {
                const parts = user.name.split(" ");
                const firstName = parts[0];
                const lastName = parts.slice(1).join(" ");
                return (
                    <ProfileCard
                        key={user.id}
                        firstName={firstName}
                        lastName={lastName}
                        role={user.role}
                        location={user.location}
                        experience={user.experience}
                        profileImage={user.avatarUrl}
                        coverImage={user.backgroundUrl}
                    />
                );
            })}
        </div>
    );
};

export default UserCards;
