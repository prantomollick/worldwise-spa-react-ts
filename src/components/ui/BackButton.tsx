import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button/Button";

const BackButton: FC = () => {
    const navigate = useNavigate();

    return (
        <Button
            type="button"
            variant="back"
            onClick={(e) => {
                e.preventDefault();
                navigate(-1);
            }}
        >
            &larr; Back
        </Button>
    );
};

export default BackButton;
