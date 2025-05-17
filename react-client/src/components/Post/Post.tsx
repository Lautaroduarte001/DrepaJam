import React from "react";
import styles from "../Post/Post.module.css"

interface userData{
    photo: string;
    fullName: string;
    username : string;
}

interface interactionItem {
    name: string; // Likes, comments, shares, etc...
    icon: React.ReactNode;
    count: number;
    isActive: boolean;
}

interface Props {
  userData: userData;
  dateTime: string;
  content: React.ReactNode;
  interaction: interactionItem[];
}


const Post = ({ userData, dateTime, content, interaction }: Props) => {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <img src={userData.photo} alt="Avatar" className={styles.avatar} />
        <div>
          <span>@{userData.username}</span>
          <strong>{userData.fullName}</strong>
          <small>{dateTime}</small>
        </div>
      </div>

      <div className={styles.content}>{content}</div>

      <div className={styles.interactions}>
        {interaction.map((item) => (
        <div key={item.name} className={`${styles.interactionItem} ${item.isActive ? styles.active : ''}`}>
        {item.icon}
        <span>{item.count}</span>
    </div>
  ))}
      </div>
    </div>
  );
};

export default Post;