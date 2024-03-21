"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import UserItem from "@/components/UserItem/UserItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { setSelectedUser } from "@/lib/feauteres/users/usersSlice";

const UserList = () => {
    const [items, setItems] = useState<Array<any>>([]);
    const [height, setHeight] = useState<number>();

    const selectedUser = useSelector((state: RootState) => state.users.selectedUser);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setHeight(Math.floor((window.innerHeight - 200) / 62) * 62 + 40);

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((res) => setItems(res as Array<any>));
    }, []);

    return (
        <div className={styles.container} style={{height: height + "px"}}>
            <ul className={styles.scrollContainer}>
                {items.map((user, i) => (
                    <UserItem
                        key={i}
                        username={user.name + " " + user.surname}
                        isSelected={selectedUser.id === user.id}
                        onClick={() => dispatch(setSelectedUser(user))} />
                ))}
            </ul>
        </div>
    );
};

export default UserList;