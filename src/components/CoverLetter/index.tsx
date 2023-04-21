import React, { ReactNode } from "react"
import * as styles from "./styles.css"
import GithubIcon from "../../images/github-mark.inline.svg"
import LinkedinIcon from "../../images/linkedin.inline.svg"
import { MDXProvider } from "@mdx-js/react"

const Paragraph = ({ children }: { children?: ReactNode }) => (
  <p className={styles.paragraph}>{children}</p>
)

const ContactInfo = ({
  address,
  email,
  phone,
  github,
  linkedin,
}: Queries.ApplicantDataFragment) => {
  return (
    <div className={styles.contactList}>
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

export const CoverLetter = ({
  applicant,
  careerObjective,
  company,
  children,
}: Queries.CoverLetterFrontmatterFragment & { children: ReactNode }) => {
  const { childApplicantsJson } = applicant
  if (childApplicantsJson) {
    const { name, address, email, github, linkedin, phone } =
      childApplicantsJson
    return (
      <MDXProvider components={{ p: Paragraph }}>
        <div className={styles.coverLetter}>
          <div className={styles.headerSection}>
            <div className={styles.innerHeaderSection}>
              <h1 className={styles.applicantName}>{name}</h1>
              <div className={styles.careerObjective}>
                Applying for <b>{careerObjective}</b> at <b>{company}</b>
              </div>
              <ContactInfo
                address={address}
                email={email}
                github={github}
                linkedin={linkedin}
                name={name}
                phone={phone}
              />
            </div>
          </div>
          <div className={styles.bodySection}>
            <div className={styles.innerBodySection}>
              <div className={styles.bodyText}>{children}</div>
            </div>
          </div>
        </div>
      </MDXProvider>
    )
  }
  return null
}
