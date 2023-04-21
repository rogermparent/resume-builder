import React from "react"
import * as styles from "./styles.css"
import GithubIcon from "../../../images/github-mark.inline.svg"
import LinkedinIcon from "../../../images/linkedin.inline.svg"

const ContactInfo = ({
  address,
  email,
  phone,
  github,
  linkedin,
}: Queries.ApplicantDataFragment) => {
  return (
    <div className={styles.defaultVerticalMargin}>
      {address && (
        <div className={styles.contactListItem}>
          <span className={styles.contactIcon}>&#8962;</span>{" "}
          <span>{address}</span>
        </div>
      )}
      {email && (
        <div className={styles.contactListItem}>
          <a href={`mailto://${email}`} className={styles.contactLink}>
            <span className={styles.contactIcon}>&#9993;</span>{" "}
            <span>{email}</span>
          </a>
        </div>
      )}
      {phone && (
        <div className={styles.contactListItem}>
          <a href={`tel://${phone}`} className={styles.contactLink}>
            <span className={styles.contactIcon}>&#128379;</span>{" "}
            <span>{phone}</span>
          </a>
        </div>
      )}
      {github && (
        <div className={styles.contactListItem}>
          <a
            href={`https://github.com/${github}`}
            className={styles.contactLink}
          >
            <GithubIcon className={styles.contactIcon} />{" "}
            <span>github.com/{github}</span>
          </a>
        </div>
      )}
      {linkedin && (
        <div className={styles.contactListItem}>
          <a
            href={`https://linkedin.com/in/${linkedin}`}
            className={styles.contactLink}
          >
            <LinkedinIcon className={styles.contactIcon} />{" "}
            <span>linkedin.com/in/{linkedin}</span>
          </a>
        </div>
      )}
    </div>
  )
}

const DateSpan = ({
  startDate,
  endDate,
}: {
  startDate?: string | null
  endDate?: string | null
}) =>
  startDate ? (
    <>
      {" "}
      <span className={styles.dateSpan}>
        {<span>{startDate}</span>}
        {endDate && (
          <>
            {" - "}
            <span>{endDate}</span>
          </>
        )}
      </span>
    </>
  ) : null

const Education = ({
  education,
}: {
  readonly education?: Queries.ResumeViewFragment["education"]
}) => {
  return education && education.length > 0 ? (
    <div className={styles.sectionWrapper}>
      <h2 className={styles.sidebarSectionTitle}>Education</h2>
      {education.map(({ achievement, school, startDate, endDate }, i) => (
        <div key={i} className={styles.educationItem}>
          {achievement && (
            <h3 className={styles.educationAchievement}>{achievement}</h3>
          )}
          {school && (
            <div className={styles.educationSchool}>
              {school}
              {startDate && (
                <div>
                  <DateSpan startDate={startDate} endDate={endDate} />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  ) : null
}

const JobExperience = ({
  jobExperience,
}: {
  readonly jobExperience?: Queries.ResumeViewFragment["jobExperience"]
}) => {
  return jobExperience && jobExperience.length > 0 ? (
    <div className={styles.sectionWrapper}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.experienceList}>
        {jobExperience.map(
          ({ startDate, endDate, duties, title, company }, i) => (
            <div key={i} className={styles.experienceListItem}>
              <div className={styles.sectionTitleBlock}>
                <div className={styles.sectionItemTitle}>{title}</div>
                <div className={styles.sectionSubtitle}>{company}</div>
                {startDate && (
                  <div className={styles.sectionSubtitle}>
                    <DateSpan startDate={startDate} endDate={endDate} />
                  </div>
                )}
              </div>
              {duties && (
                <ul className={styles.list}>
                  {duties.map(duty => (
                    <li className={styles.experienceListItem}>{duty}</li>
                  ))}
                </ul>
              )}
            </div>
          )
        )}
      </div>
    </div>
  ) : null
}

const Projects = ({
  projects,
}: {
  readonly projects?: Queries.ResumeViewFragment["projects"]
}) => {
  return projects && projects.length > 0 ? (
    <div className={styles.sectionWrapper}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <ul className={styles.projectsList}>
        {projects.map(({ description, url, name, startDate, endDate }, i) => (
          <li key={i} className={styles.projectsListItem}>
            <div className={styles.sectionTitleBlock}>
              <div className={styles.sectionItemTitle}>{name}</div>
              {url && (
                <div className={styles.sectionSubtitle}>
                  <a href={url} target="_blank" className={styles.projectLink}>
                    {url}
                  </a>
                </div>
              )}
              {startDate && (
                <div className={styles.sectionSubtitle}>
                  <DateSpan startDate={startDate} endDate={endDate} />
                </div>
              )}
            </div>
            {description && (
              <p className={styles.projectsListDescription}>{description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  ) : null
}

const Skills = ({
  skills,
}: {
  skills?: Queries.ResumeViewFragment["skills"]
}) => {
  return (
    <div className={styles.sectionWrapper}>
      <h2 className={styles.sidebarSectionTitle}>Skills</h2>
      <ul className={styles.skillsList}>
        {skills?.map(skill => (
          <li key={skill} className={styles.skillsListItem}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Resume = ({
  resume,
}: {
  readonly resume?: Queries.ResumeViewFragment | null
}) => {
  const {
    careerObjective,
    company,
    education,
    jobExperience,
    projects,
    skills,
    summary,
    applicant,
  } = resume || {}
  const { childApplicantsJson = null } = applicant || {}
  const {
    github = null,
    address = null,
    email = null,
    name = null,
    phone = null,
    linkedin = null,
  } = childApplicantsJson || {}
  return (
    <div className={styles.resume}>
      <div className={styles.contentContainer}>
        <div className={styles.sidebarContainer}>
          <div className={styles.sidebarInnerContainer}>
            <div className={styles.headerContainer}>
              {name && <h1 className={styles.applicantName}>{name}</h1>}
              <ContactInfo
                name={name}
                phone={phone}
                email={email}
                address={address}
                github={github}
                linkedin={linkedin}
              />
            </div>
            <div className={styles.sidebarMainSection}>
              <Skills skills={skills} />
              <Education education={education} />
            </div>
          </div>
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.mainInnerContainer}>
            <div className={styles.sectionWrapper}>
              {careerObjective && (
                <div className={styles.careerObjective}>{careerObjective}</div>
              )}
              {company && (
                <div className={styles.companyObjective}>{company}</div>
              )}
            </div>
            {summary && <span>{summary}</span>}
            <JobExperience jobExperience={jobExperience} />
            <Projects projects={projects} />
          </div>
        </div>
      </div>
    </div>
  )
}
