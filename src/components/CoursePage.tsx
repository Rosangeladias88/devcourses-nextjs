import styles from "../app/cursos/CoursePage.module.css";

interface CoursePageProps {
  title: string;
  description: string;
  topics: string[];
}

export default function CoursePage({
  title,
  description,
  topics,
}: CoursePageProps) {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.description}>{description}</p>

      <section className={styles.content}>
        <h2>Conteúdo do curso</h2>

        <ul>
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}