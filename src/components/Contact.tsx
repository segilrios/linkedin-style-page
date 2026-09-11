import type { Profile } from '../types/content'

export function Contact({ contacts, cv }: Pick<Profile, 'contacts' | 'cv'>) {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      {contacts.length > 0 ? (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li className="contact-item" key={contact.label}>
              <span className="contact-label">{contact.label}</span>
              {contact.href ? (
                <a
                  href={contact.href}
                  target={contact.external ? '_blank' : undefined}
                  rel={contact.external ? 'noreferrer' : undefined}
                >
                  {contact.value}
                </a>
              ) : (
                <address>{contact.value}</address>
              )}
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
