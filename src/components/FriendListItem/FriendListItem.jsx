import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ item }) {
  const { avatar, name, isOnline } = item;

  const statusIsOnline = clsx(css.statText, isOnline ? css.online : css.offline)

  return (
    <div className={css.friendInfoCont}>
      <img src={avatar} alt="Avatar" width="125" />
      <p className={css.friendName}>{name}</p>
      <p className={statusIsOnline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
