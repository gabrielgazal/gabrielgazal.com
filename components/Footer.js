import Link from 'next/link'
import { styled } from '../stitches.config'

export default function Footer() {
  const links = [
    { title: 'Email', url: '/contact', icon: 'ri-mail-line' },
    { title: 'GitHub', url: 'https://github.com/gabrielgazal', icon: 'ri-github-line' },
    { title: 'LinkedIn', url: 'https://linkedin.com/in/gabrielgazal', icon: 'ri-linkedin-line' },
    { title: 'Instagram', url: 'https://instagram.com/gabrielgazal', icon: 'ri-instagram-line' },
  ]

  const renderAnchor = (link, index) => {
    const isExternal = link.url.startsWith('http')

    const AnchorComponent = isExternal ? 'a' : Link
    const props = isExternal
      ? { href: link.url, target: '_blank', rel: 'noopener noreferrer' }
      : { href: link.url }

    return (
      <Anchor key={index} as={AnchorComponent} {...props}>
        <Title>{link.title}</Title>
        <Icon className={link.icon} />
      </Anchor>
    )
  }

  return <Container>{links.map(renderAnchor)}</Container>
}

const Container = styled('footer', {
  background: '#0a0a0a',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 0',
})

const Icon = styled('i', {
  color: '#0a0a0a',
  marginLeft: '5px',
  fontSize: '16px',
  transition: 'color 200ms ease-in-out, transform 200ms ease-in-out',
})

const Anchor = styled('a', {
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  fontSize: '15px',
  marginLeft: '20px',
  textTransform: 'lowercase',
  border: 0,
  textDecoration: 'none',
  transition: 'color 200ms ease-in-out',

  '&:hover': {
    color: '#ffffffff',
  },

  '&:hover i': {
    color: '#ffffffff',
    transform: 'scale(1.1)',
  },

  '&:first-child': {
    margin: '0',
  },
})

const Title = styled('span', {
  display: 'block',
})
