import React from "react";
import UserList from "@/components/UserList/UserList";
import UserProfile from "@/components/UserProfile/UserProfile";
import styles from "./styles.module.scss";

const MainPage = () => {
    return (
        <div className={styles.container}>
            <UserList />
            <UserProfile />
        </div>
    );
};

export default MainPage;