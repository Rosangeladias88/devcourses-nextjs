import Header from "../components/SitHeader";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <main>
      <Header />

      <section>
        <h2>Cursos disponíveis</h2>
        <p>Escolha um curso e comece seus estudos.</p>
      <div className="course-grid">
        <CourseCard
  title="Next.js"
  description="Aprenda os fundamentos do framework Next.js."
  href="/cursos/nextjs"
/>

<CourseCard
  title="Python"
  description="Aprenda lógica de programação e desenvolvimento com Python."
  href="/cursos/python"
/>

<CourseCard
  title="SQL"
  description="Aprenda os fundamentos de bancos de dados e consultas SQL."
  href="/cursos/sql"
/>
      </div>
      </section>
    </main>
  );
}