import axios from "axios";

const API_URL = "/api/evaluation-service/notifications";

// Replace with your Bearer token
const TOKEN ="import.meta.env.VITE_ACCESS_TOKEN";

export const getNotifications = async () => {
    try {
    const response = await axios.get(API_URL, {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
    });

    console.log("API Response:", response.data);

    return response.data.notifications;
} catch (error) {
    console.error("Error fetching notifications:", error);
    return [];
}
};