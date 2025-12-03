import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import { careerItems, educationItems, honorsItems } from '/data/about'
import Base from '@/layouts/Base'

export async function getStaticProps() {
    const meta = {
        title: 'About | Gabriel Gazal',
        description:
            'Gabriel Gazal is an iOS developer.',
        tagline: 'A little bit from my life',
        image: '/static/images/avatar.jpg'
    }

    return { props: meta }
}

function About({ title, description, image }) {
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
                <meta
                    content={`https://gabrielgazal.com${image}`}
                    property="og:image"
                />
            </Head>

            <Main>
                <IntroContainer>
                    <ImageWrapper>
                        <Image
                            alt="Gabriel Gazal"
                            src={image}
                            width={500}
                            height={550}
                            style={{ borderRadius: '12px', objectFit: 'cover' }}
                            priority
                        />
                    </ImageWrapper>

                    <DescriptionWrapper>
                        <Paragraph>
                            <strong>Hey, I'm Gabriel Gazal</strong>
                        </Paragraph>
                        <Paragraph>
                            A mechanical engineer who ended up loving coding more than building cars :P
                        </Paragraph>
                        <Paragraph>
                            I'm an Apple Developer Academy alumni and I currently work as a Mobile Engineer at{' '}
                            <a href="https://nubank.com.br/" target="_blank" rel="noopener noreferrer">
                                Nubank.
                            </a> Born and raised in <strong>Curitiba, Brazil</strong>. Currently living in Jundiaí with my beautiful fiancée and our dog.
                        </Paragraph>
                        <Paragraph>
                            I love traveling, home automation, board games and CrossFit. When I'm not coding you can find me walking around the town with Joca 🐕
                        </Paragraph>
                    </DescriptionWrapper>
                </IntroContainer>

                <SectionTitle>Career</SectionTitle>
                <CareerSection>
                    {careerItems.map((item, index) => (
                        <CareerItem key={index}>
                            <h3>{item.jobTitle}</h3>
                            <p>
                                <a
                                    href={item.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.company}
                                </a>
                                <span> • {item.location}</span>
                            </p>
                            <p>
                                <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span> –{' '}
                                <span>
                                    {item.endDate
                                        ? format(parseISO(item.endDate), 'LLL yyyy')
                                        : 'Present'}
                                </span>{' '}
                                • <span>{getDuration(item.startDate, item.endDate)}</span>
                            </p>
                        </CareerItem>
                    ))}
                </CareerSection>
                <SectionTitle>Education</SectionTitle>
                <EducationSection>
                    {educationItems.map((item, index) => (
                        <Educationtem key={index}>
                            <h3>{item.degreeType} in {item.degreeArea}</h3>
                            <p>
                                <a
                                    href={item.institutionUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.institution}
                                </a>
                            </p>
                            <p>
                                <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span> –{' '}
                                <span>
                                    {item.endDate
                                        ? format(parseISO(item.endDate), 'LLL yyyy')
                                        : 'Present'}
                                </span>{' '}
                            </p>
                        </Educationtem>
                    ))}
                </EducationSection>
                <SectionTitle>Honors</SectionTitle>
                <HonorsSection>
                    {honorsItems.map((item, index) => (
                        <HonorsItem key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>
                                <strong>Awarding institution:</strong>{' '}
                                <a
                                    href={item.institutionUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.institution}
                                </a>
                            </p>
                        </HonorsItem>
                    ))}
                </HonorsSection>
            </Main>
        </>
    )
}

const Main = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '100%',
    maxWidth: '820px',
    padding: '40px 20px',
})

const IntroContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1.1fr 1.0fr',
    alignItems: 'start',
    gap: '32px',
    marginBottom: '64px',
    '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
    },
})

const ImageWrapper = styled('div', {
    width: '100%',
    maxWidth: '400px',
    justifySelf: 'center',
})

const DescriptionWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
})

const Paragraph = styled('p', {
    margin: 0,
    lineHeight: 1.7,
    fontSize: '17px',
    color: '$gray12',
})

const SectionTitle = styled('h2', {
    fontSize: '2rem',
    fontWeight: 600,
    color: 'white',
    lineHeight: 1,
})

const CareerSection = styled('section', {
    width: '100%',
    marginTop: '0px',
})

const CareerItem = styled('div', {
    marginBottom: '40px',
    '& h3': {
        marginBottom: '4px',
        fontSize: '18px',
        fontWeight: '600',
    },
    '& p': {
        margin: '4px 0',
        lineHeight: 1.6,
        fontSize: '15px',
    },
    '& a': {
        color: '$primary',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
})

const EducationSection = styled('section', {
    width: '100%',
    marginTop: '0px',
})

const Educationtem = styled('div', {
    marginBottom: '40px',
    '& h3': {
        marginBottom: '4px',
        fontSize: '18px',
        fontWeight: '600',
    },
    '& p': {
        margin: '4px 0',
        lineHeight: 1.6,
        fontSize: '15px',
    },
    '& a': {
        color: '$primary',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
})

const HonorsSection = styled('section', {
    width: '100%',
    marginTop: '0px',
})

const HonorsItem = styled('div', {
    marginBottom: '40px',
    '& h3': {
        marginBottom: '4px',
        fontSize: '18px',
        fontWeight: '600',
    },
    '& p': {
        margin: '4px 0',
        lineHeight: 1.6,
        fontSize: '15px',
    },
    '& a': {
        color: '$primary',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
})

About.Layout = Base

export default About