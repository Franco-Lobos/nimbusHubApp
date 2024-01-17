// src/components/UserManagement.tsx
import useUser from '~/components/hooks/useUser';

const UserManagement = () => {
  const { user } = useUser();

  return (
    <div className="text-white p-4">
      {user ? (
        <p className="text-xl">Welcome, pedri!</p> //{user.username}!
      ) : (
        <p className="text-xl">Guest User</p>
      )}
    </div>
  );
};

export default UserManagement;
