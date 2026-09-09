type HeaderProps = { name: string }

const navigationItems = [
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
] as const

export function Header({ name }: HeaderProps) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label={`Back to ${name} introduction`}>
        {name}
      </a>
      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          {navigationItems.map(([label, href]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
