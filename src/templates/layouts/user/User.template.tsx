import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { FAKE_USER } from "../../../mocks/db/users.db";
import styles from "./UserTemplate.module.css";

const UserTemplate = () => {
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const user = FAKE_USER;

    const handleClick = () => {
        if (!isAuthenticated) return;
        logout();
        navigate("/");
    };

    return (
        <div className={styles.user}>
            <img src={user.avatar} alt={user.name} />
            <span>Welcome, {user.name}</span>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
};

export default UserTemplate;
