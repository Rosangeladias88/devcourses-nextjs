import CoursePage from "../../../components/CoursePage";

export default function NextjsCoursePage() {
  return (
    <CoursePage
      title="Curso de Next.js"
      description="Aprenda os fundamentos do Next.js e desenvolva aplicações web modernas."
      topics={[
        "Introdução ao Next.js",
        "Componentes React",
        "App Router e rotas",
        "CSS Modules",
      ]}
    />
  );
}