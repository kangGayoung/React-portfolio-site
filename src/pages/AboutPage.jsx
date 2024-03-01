import PageHeader from "../components/PageHeader";
import SkillsBox from "../components/SkillsBox";
import ExperienceBox from "../components/ExperienceBox";
import "../components/style/skillsBox.scss";
import NavBar from "../components/NavBar";

export default function AboutPage() {
  return (
    <>
      <NavBar page="about" />
      <div>
        <PageHeader backText={`Skills`} mainText={`about`} pointText={`me`} />
        <section className="about_layout">
          <h2>MY SKILLS</h2>
          <SkillsBox />
        </section>

        <section className="about_layout">
          <h2>EXPERIENCE & EDUCATION</h2>
          <ExperienceBox />
        </section>
      </div>
    </>
  );
}
