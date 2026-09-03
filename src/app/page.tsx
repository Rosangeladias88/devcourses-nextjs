import Header from "../components/SitHeader";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <main>
      <Header />

      <section>
        <h2>Cursos disponíveis</h2>
        <p>Escolha um curso e comece seus estudos.</p>
        <CourseCard
  title="Next.js"
  description="Aprenda os fundamentos do framework Next.js."
/>

<CourseCard
  title="Python"
  description="Aprenda lógica de programação e desenvolvimento com Python."
/>

<CourseCard
  title="SQL"
  description="Aprenda os fundamentos de bancos de dados e consultas SQL."
/>
      </section>
    </main>
  );
}