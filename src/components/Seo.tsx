import { useEffect } from 'react'
import type { Project } from '../content'

const SITE_ORIGIN = 'https://arvinder-portfolio-five.vercel.app'
const DEFAULT_DESCRIPTION = 'Auckland-based software developer and AUT graduate building full-stack web platforms, IoT systems, cross-platform mobile applications, Unity projects, and low-level C software.'

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

export function Seo({ project }: { project?: Project }) {
  useEffect(() => {
    const title = project
      ? `${project.title} — Arvinder Singh`
      : 'Arvinder Singh — Graduate Software Developer in Auckland'
    const description = project?.outcome ?? DEFAULT_DESCRIPTION
    const pathname = project ? `/work/${project.slug}` : '/'
    const canonicalUrl = `${SITE_ORIGIN}${pathname}`

    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    const previous = document.getElementById('route-structured-data')
    previous?.remove()
    if (project) {
      const script = document.createElement('script')
      script.id = 'route-structured-data'
      script.type = 'application/ld+json'
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: project.summary,
        creator: { '@type': 'Person', name: 'Arvinder Singh' },
        url: canonicalUrl,
        keywords: project.technologies.join(', '),
      })
      document.head.appendChild(script)
    }

    return () => document.getElementById('route-structured-data')?.remove()
  }, [project])

  return null
}
