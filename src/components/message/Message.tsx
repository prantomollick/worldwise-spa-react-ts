import { FC } from "react";
import styles from "./Message.module.css";

interface IMessageProps {
    message: string;
}

const Message: FC<IMessageProps> = ({ message }) => {
    return (
        <p className={styles.message}>
            <span role="img">👋</span> {message}
        </p>
    );
};

export default Message;
