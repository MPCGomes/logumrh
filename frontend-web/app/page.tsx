import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import VacancyCard from "@/components/VacancyCard/VacancyCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <VacancyCard
        id={23456}
        vacancy="Nome da Vaga"
        firm='Empresa'
        sector='Setor'
        modality='Modalidade'
        period='Período'
        scale='Escala'
        location='Endereço'
        requirements='Requisitos1; Requisitos2'
        activities='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dui quam, euismod in dui eu, volutpat porta nulla. Sed luctus.'
      />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
