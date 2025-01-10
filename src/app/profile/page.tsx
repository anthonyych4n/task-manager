
interface ProfilePageProps {
    username: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ username }) => {
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Welcome to your profile page, {username}!</p>
            {/* Add more profile-related content here */}
        </div>
    );
};

export default ProfilePage;