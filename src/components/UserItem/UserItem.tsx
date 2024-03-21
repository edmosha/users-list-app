import React, { FC, Ref } from "react";
import userIcon from "../../../public/icons/user.svg";
import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
    username: string;
    isSelected: boolean;
    onClick: () => void;
}

const UserItem: FC<Props> = ({username, isSelected, onClick}) => {
    return (
        <li className={`${styles.container} ${isSelected ? styles.selected : ""}`} onClick={onClick}>
            <Image src={userIcon} alt="user icon" className={styles.icon} />
            <p className={styles.text}>{username}</p>
        </li>
    );
};

export default UserItem;