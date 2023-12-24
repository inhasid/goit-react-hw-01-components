import styles from "./friendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline, }) => {
    return (
        <li className={styles.item}>
            {isOnline ? (
            <span className={styles.status_offline}></span>
        ) : (
            <span className={styles.status_online}></span>
        )}
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;