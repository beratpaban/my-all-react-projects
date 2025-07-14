function UserCard(user) {
  return (
    <div className="border p-4 rounded shadow">
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Is Developer: {user.isDeveloper ? "Yes" : "No"}</p>
    </div>
  );
}

export default UserCard;
