import { useEffect, useState } from "react";
import { getNotifications } from "../services/notificationService";

function Dashboard() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const data = await getNotifications();

      console.log("Notifications:", data);

      setNotifications(data || []);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading notifications...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notifications</h1>

      {notifications.length === 0 ? (
        <p>No notifications found</p>
      ) : (
        notifications.map((item) => (
          <div
            key={item.ID}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{item.Type}</h3>
            <p>{item.Message}</p>
            <small>{item.Timestamp}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;