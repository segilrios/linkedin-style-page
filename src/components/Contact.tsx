import type { Profile } from '../types/content'

export function Contact({ contacts, cv }: Pick<Profile, 'contacts' | 'cv'>) {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      {contacts.length > 0 ? (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li key={contact.href}>
              <a href={contact.href}>{contact.label}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Contact destinations have not been published yet.</p>
      )}
      {cv ? (
        <a className="button-link" href={cv.href} download>
          {cv.label}
        </a>
      ) : null}
    </section>
  )
}
