import Profile from "@/components/profile";
import SectionResume from "@/components/section-resume";
import Summary from "@/components/summary";
import { certifications, education, experience, profile, projects } from "@/lib/content";
import Project from '../components/project';

export default function Home() {
  return (
    <main className="w-full h-fit flex flex-col gap-16">

      <div className="max-w-screen-xl px-5 m-auto w-full h-fit grid gap-6
      grid-cols-1
      lg:grid-cols-[450px_1fr]
      ">

        <aside className=" h-fit w-full
        relative
        lg:sticky lg:top-16
        ">
          <Profile />
        </aside>

        <section className="flex flex-col gap-10">
          <article className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">About me</h2>
            <Summary content={profile.summary} />
          </article>
          <article className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">Work Experience</h2>
            {experience.map(exp => (
              <div key={exp.id}>
                <SectionResume 
                  name={exp.role} 
                  institution={exp.company} 
                  summary={exp.summary} 
                  startDate={exp.startDate} 
                  endDate={exp.endDate} 
                  skills={exp.skills}
                  linkedIn={exp.linkedIn} />
              </div>
            ))}
          </article>
          <article className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">Education History</h2>
            {education.map(edu => (
              <div key={edu.id}>
                <SectionResume 
                  name={edu.degree} 
                  institution={edu.university} 
                  summary={edu.summary} 
                  startDate={edu.startDate} 
                  endDate={edu.endDate} 
                  skills={edu.skills}
                  linkedIn={edu.linkedIn} />
              </div>
            ))}
          </article>
          <article className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">Certifications</h2>
            {certifications.map(cert => (
              <div key={cert.id}>
                <SectionResume 
                  name={cert.name}
                  institution={cert.issuedBy}
                  startDate={cert.date} 
                  summary={undefined} 
                  endDate={undefined} 
                  skills={undefined}
                  linkedIn={cert.linkedIn}/>
              </div>
            ))}
          </article>
        </section>

      </div>

      <section className="w-full h-fit py-12
      bg-[linear-gradient(to_bottom,#060606,#060606,#060606,#06060600)]
      ">
        <div className="max-w-screen-xl px-5 mx-auto flex flex-col gap-16">
          <div className="flex flex-col w-full h-fit justify-center items-center gap-4">
            <h4 className="text-emerald-400">Projects</h4>
            <h5 className="text-4xl">What I did so far!</h5>
            <p className="text-center text-md text-zinc-300 leading-relaxed">
              Explore my work, showcasing various projects and the skills and technologies I&apos;ve used.
              <br />
              Click to see the details and impact of each project.
            </p>
          </div>
            {projects.map(project => (
              <div key={project.id}>
                <Project 
                  slug={project.slug} 
                  name={project.name} 
                  category={project.category} 
                  image={project.image}
                  description={project.description} 
                  technologies={project.technologies} 
                  link={project.link} 
                  github={project.github} />
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
