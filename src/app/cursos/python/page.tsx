import styles from "../CoursePage.module.css";
export default function PythonCoursePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Curso de Python</h1>

      <p className={styles.description}>
        Aprenda lógica de programação e desenvolva aplicações utilizando Python.
      </p>
      <div>

      <h2>Conteúdo do curso</h2>

      <ul>
        <li>Introdução ao Python</li>
        <li>Variáveis e tipos de dados</li>
        <li>Estruturas condicionais</li>
        <li>Laços de repetição</li>
        <li>Funções</li>
      </ul>
    </div>
    </main>
  );
}