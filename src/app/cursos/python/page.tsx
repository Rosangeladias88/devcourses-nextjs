import CoursePage from "../../../components/CoursePage";

export default function PythonCoursePage() {
  return (
    <CoursePage
      title="Curso de Python"
      description="Aprenda lógica de programação e desenvolva aplicações utilizando Python."
      topics={[
        "Introdução ao Python",
        "Variáveis e tipos de dados",
        "Estruturas condicionais",
        "Laços de repetição",
        "Funções",
      ]}
    />
  );
}