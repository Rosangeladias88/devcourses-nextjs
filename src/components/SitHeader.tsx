import styles from "./SitHeader.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>DevCourses</h1>
      <p>Aprenda tecnologia. Desenvolva sua carreira.</p>
    </header>
  );
}