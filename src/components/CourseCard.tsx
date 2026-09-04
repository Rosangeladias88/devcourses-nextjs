import Link from "next/link";
import styles from "./CourseCard.module.css";
type CourseCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function CourseCard({
  title,
  description,
  href,
}: CourseCardProps) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={href}>
        <button>Ver curso</button>
      </Link>
    </article>
  );
}