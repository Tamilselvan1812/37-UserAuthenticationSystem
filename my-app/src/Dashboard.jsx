import { useLocation } from "react-router-dom";

function Dashboard() {

  const location = useLocation();
  const user = location.state;


  return (
    <div className="container">
      <h2>Welcome</h2>

      {user ? (
        <>
          <p><b>Username:</b> {user.username}</p>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
        </>
      ) : (
        <p>No user data</p>
      )}
    </div>
  );
}

export default Dashboard;