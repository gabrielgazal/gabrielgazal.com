import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import items from '../data/about'
import Base from '@/layouts/Base'

export async function getStaticProps() {
    const meta = {
        title: 'About | Gabriel Gazal',
        description:
            'Gabriel Gazal is an iOS developer.',
        tagline: 'A little bit from my world',
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
                            I'm an Apple Developer Academy alumni and I currently work as a Senior iOS Developer at{' '}
                            <a href="https://grupoolx.com.br/" target="_blank" rel="noopener noreferrer">
                                Grupo OLX.
                            </a> Born and raised in <strong>Curitiba, Brazil.</strong> Where I live with my beautiful fiancée and our dog.
                        </Paragraph>
                        <Paragraph>
                            I love traveling, home automation, board games and CrossFit. When I'm not coding you can find me walking around the town with Joca 🐕
                        </Paragraph>
                    </DescriptionWrapper>
                </IntroContainer>

                <SectionTitle>Career</SectionTitle>
                <CareerSection>
                    {items.map((item, index) => (
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
                {/* <SectionTitle>Education</SectionTitle> */} {/*TODO - Add this section*/}
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

About.Layout = Base

export default About