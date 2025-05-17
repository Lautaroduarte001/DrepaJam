import React from "react";
import styles from "../RighSidebar/RightSidebar.module.css"


interface Props{
    ranking: React.ReactNode;
    ads: React.ReactNode;
}

const RightSidebar = ({
  ranking,
  ads
}: Props) => {
  return (
    <aside className={styles.RightSidebarContainer}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Ranking Jameros</h3>
        {ranking}
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Anuncios</h3>
        {ads}
      </div>
    </aside>
  );
};

export default RightSidebar;
