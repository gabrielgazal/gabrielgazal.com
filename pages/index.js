import { styled } from '../stitches.config'
import Head from 'next/head'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'
import { getPersonJsonLd } from '../lib/json-ld'

import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false })
const Footer = dynamic(() => import('../components/Footer'), { ssr: false })
const ShortcutHome = dynamic(() => import('../components/ShortcutHome'), { ssr: false })

export async function getStaticProps() {
  return {
    props: {
      title: 'Gabriel Gazal',
      description: 'Obsessed with developing dreams',
      image: '/static/images/avatar.jpg',
    },
  }
}

export default function Index({ title, description, image }) {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://gabrielgazal.com" property="og:url" />
        <meta content={`https://gabrielgazal.com${image}`} property="og:image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd()),
          }}
          key="person-jsonld"
        />
      </Head>

      <Navbar />

      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <SectionTitle>{title}</SectionTitle>
              <p>
                <strong>
                  Mobile Engineer at{' '}
                  <a href="https://nubank.com.br/" target="_blank" rel="noopener noreferrer">
                    Nubank
                  </a>
                </strong>
                <br />
                {description}
              </p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </Home>

      <Footer />
    </Wrapper>
  )
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})

const SectionTitle = styled('h2', {
  fontSize: '2rem',
  fontWeight: 600,
  color: 'white',
  lineHeight: 1,
})
