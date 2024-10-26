import { FC, FormEvent, useEffect, useState } from "react";

import styles from "./LoginPage.module.css";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../components/ui/Button/Button";
import { useNavigate } from "react-router-dom";

const LoginPage: FC = () => {
    // PRE-FILL FOR DEV PURPOSES
    const [email, setEmail] = useState("jack@example.com");
    const [password, setPassword] = useState("qwerty");
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/app", { replace: true });
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email && !password) {
            return;
        }

        if (!isAuthenticated) {
            login(email, password);
        }
    };

    return (
        <main className={styles.login}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </form>
        </main>
    );
};
export default LoginPage;
