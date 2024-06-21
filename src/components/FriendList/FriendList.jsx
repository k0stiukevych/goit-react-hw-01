import css from "./FriendList.module.css";

import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.ulList}>
        {friends.map((friend) => {
          return (
            <li key={friend.id} className={css.liItem}>
              <FriendListItem item={friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
