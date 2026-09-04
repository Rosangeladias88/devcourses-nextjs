import styles from "../CoursePage.module.css";
export default function NextjsCoursePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Curso de Next.js</h1>

      <p className={styles.description}>
        Aprenda os fundamentos do Next.js e desenvolva aplicações web modernas.
      </p>

      <section className={styles.content}>
  <h2>Conteúdo do curso</h2>

  <ul>
    <li>Introdução ao Next.js</li>
    <li>Componentes React</li>
    <li>App Router e rotas</li>
    <li>CSS Modules</li>
  </ul>
</section>
    </main>
  );
}