import Header from "../components/SitHeader";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <main>
      <Header />

      <section>
        <h2>Cursos disponíveis</h2>
        <p>Escolha um curso e comece seus estudos.</p>
        <CourseCard />
      </section>
    </main>
  );
}