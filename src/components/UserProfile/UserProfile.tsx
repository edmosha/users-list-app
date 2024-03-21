'use client'
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import userIcon from "../../../public/icons/user.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const UserProfile = () => {
    const user = useSelector((store: RootState) => store.users.selectedUser);

    return (
        <div className={styles.container}>
            <Image src={userIcon} alt="user avatar" className={styles.img} />

            <p className={styles.title}>{user.name + " " + user.surname || "Заглушка"}</p>

            <div className={styles.textContainer}>
                <p className={styles.text}>Id:</p>
                <p className={styles.text}>{user.id || 0}</p>
            </div>

            <div className={styles.textContainer}>
                <p className={styles.text}>Возраст:</p>
                <p className={styles.text}>{user.age || 0}</p>
            </div>

            <div className={styles.textContainer}>
                <p className={styles.text}>Почта:</p>
                <p className={styles.text}>{user.email || 0}</p>
            </div>
        </div>
    );
};

export default UserProfile;