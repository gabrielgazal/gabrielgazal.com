import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import items from '../data/about'

// Navbar e Footer se você tiver
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false })
const Footer = dynamic(() => import('../components/Footer'), { ssr: false })

export async function getStaticProps() {
    const meta = {
        title: 'About // Gabriel Gazal',
        description:
            "Gabriel Gazal is an iOS developer obsessed with developer experience.",
        image: '/images/avatar.jpg',
    }

    return { props: meta }
}

export default function About({ title, description, image }) {
    const getDuration = (startDate, endDate) => {
        const durationObj = intervalToDuration({
            start: parseISO(startDate),
            end: endDate ? parseISO(endDate) : new Date(),
        })

        let durationStr = ''
        if (durationObj.years > 1) durationStr = `${durationObj.years} years `
        else if (durationObj.years === 1) durationStr = `${durationObj.years} year `
        durationStr += `${durationObj.months} months`
        return durationStr
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta content={title} property="og:title" />
                <meta content={description} name="description" />
                <meta content={description} property="og:description" />
                <meta content={`https://gabrielgazal.com${image}`} property="og:image" />
            </Head>

            <Navbar />

            <Main>
                <IntroContainer>
                    <ImageWrapper>
                        <Image
                            alt="Gabriel Gazal"
                            src={image}
                            width={450}
                            height={600}
                            style={{ borderRadius: '12px', objectFit: 'cover' }}
                            priority
                        />
                    </ImageWrapper>

                    <DescriptionWrapper>
                        <Paragraph>
                            <strong>Hey, I'm Gabriel Gazal</strong>
                        </Paragraph>
                        <Paragraph>
                            iOS developer passionate about developer experience and building apps that people love to use.
                        </Paragraph>
                        <Paragraph>
                            <strong>Currently:</strong> working on iOS projects and exploring new ways to improve app performance, usability, and accessibility.
                        </Paragraph>
                        <Paragraph>
                            <strong>Outside of coding:</strong> I enjoy running, watching movies, and experimenting with side projects.
                        </Paragraph>
                    </DescriptionWrapper>
                </IntroContainer>

                <h2>Career</h2>
                <CareerSection>
                    {items.map((item, index) => (
                        <CareerItem key={index}>
                            <h3>{item.jobTitle}</h3>
                            <p>
                                <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
                                    {item.company}
                                </a>
                                <span> • {item.location}</span>
                            </p>
                            <p>
                                <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span> –{' '}
                                <span>{item.endDate ? format(parseISO(item.endDate), 'LLL yyyy') : 'Present'}</span> •{' '}
                                <span>{getDuration(item.startDate, item.endDate)}</span>
                            </p>
                        </CareerItem>
                    ))}
                </CareerSection>
            </Main>

            <Footer />
        </>
    )
}

const Main = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    width: '100%',
    maxWidth: 900,
    padding: '40px 20px',
})

const IntroContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginBottom: '60px',
})

const ImageWrapper = styled('div', {
    flexShrink: 0,
})

const DescriptionWrapper = styled('div', {
    flex: 1,
    minWidth: '250px',
})

const Paragraph = styled('p', {
    margin: '10px 0',
    lineHeight: 1.6,
})

const CareerSection = styled('section', {
    width: '100%',
    marginTop: '20px',
})

const CareerItem = styled('div', {
    marginBottom: '40px',
})
