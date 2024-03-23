"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import UserItem from "@/components/UserItem/UserItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { setSelectedUser, addUsers } from "@/lib/features/users/usersSlice";
import { User } from "@/types/types";
import { server } from "@/features/generate-user";

const UserList = () => {
    const [height, setHeight] = useState<number>();
    const [page, setPage] = useState<number | null>(0);

    const {users: userList, selectedUser} = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch<AppDispatch>();

    const loadUsers = (page: number) => {
        server.getUsers(page)
            .then((res) => {
                const {users, next} = res as { users: User[], next: number | null };
                dispatch(addUsers(users));
                setPage(next);
            });
    }

    useEffect(() => {
        setHeight(Math.floor((window.innerHeight - 200) / 62) * 62 + 40);
        loadUsers(0);
        console.log(userList)
    }, []);

    const observer: any = useRef();

    const lastItemRef = useCallback((node: any) => {
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                page !== null && loadUsers(page);
            }
        });

        if (node) observer.current.observe(node);
    }, [page]);

    return (
        <div className={styles.container} style={{height: height + "px"}}>
            <ul className={styles.scrollContainer}>
                {userList.map((user, i) => (
                    <UserItem
                        key={user.id}
                        reff={i + 1 === userList.length - 6 ? lastItemRef : null}
                        username={user.name + " " + user.surname}
                        isSelected={selectedUser.id === user.id}
                        onClick={() => dispatch(setSelectedUser(user))}/>
                ))}
            </ul>
        </div>
    );
};

export default UserList;