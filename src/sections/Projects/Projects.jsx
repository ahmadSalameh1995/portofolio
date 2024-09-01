import styles from './ProjectsStyles.module.css';
import weather from '../../assets/weather.png';
import todolist from '../../assets/todolist.png';
import notes from '../../assets/notes.webp';
import resume from '../../assets/resume.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={weather}
          link="https://github.com/ahmadSalameh1995/App-Weather"
          h3="Weather"
          p="Weather App"
        />
        <ProjectCard
          src={todolist}
          link="https://github.com/ahmadSalameh1995/Todolist"
          h3="Notes"
          p="Notes App"
        />
        <ProjectCard
          src={notes}
          link="https://github.com/ahmadSalameh1995/Notes-CRUD"
          h3="notes"
          p="Aotes Shop"
        />
        <ProjectCard
          src={resume}
          link="https://github.com/ahmadSalameh1995/Resume"
          h3="resume"
          p="Resume App"
        />
      </div>
    </section>
  );
}

export default Projects;
