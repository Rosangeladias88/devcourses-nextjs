import styles from "./CourseCard.module.css";
type CourseCardProps = {
  title: string;
  description: string;
};

export default function CourseCard({
  title,
  description,
}: CourseCardProps) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Ver curso</button>
    </article>
  );
}