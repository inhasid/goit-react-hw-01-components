import FriendListItem from "./FriendListItem";
import styles from "./friendList.module.css";

const FriendList = ({ friends }) => {

    return (
        <ul className={styles.list}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
};

export default FriendList;