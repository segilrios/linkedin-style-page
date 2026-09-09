import type { Profile } from '../types/content'

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section className="hero" aria-labelledby="introduction-heading">
      <p className="eyebrow">Professional dossier</p>
      <h1 id="introduction-heading">{profile.headline}</h1>
      <p className="hero-name">{profile.name}</p>
      <p className="hero-introduction">{profile.introduction}</p>
    </section>
  )
}
