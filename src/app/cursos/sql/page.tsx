import styles from "../CoursePage.module.css";
export default function SqlPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Curso de SQL</h1>

      <p className={styles.description}>
        Aprenda os fundamentos de bancos de dados e consultas utilizando SQL.
      </p>

      <section className={styles.content}>
        <h2>Conteúdo do curso</h2>

        <ul>
          <li>Introdução a bancos de dados</li>
          <li>Tabelas, colunas e registros</li>
          <li>Comando SELECT</li>
          <li>Filtros com WHERE</li>
          <li>INSERT, UPDATE e DELETE</li>
        </ul>
      </section>
    </main>
  );
}