import React from 'react'
import { styled } from '../stitches.config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'

export default function Base({ children }) {
    const { title, tagline, primaryColor, secondaryColor } = children.props

    return (
        <Wrapper>
            <Navbar />
            <PostMain
                css={{
                    '& ::selection': {
                        background: `$${primaryColor}`,
                        color: '#000000ff',
                        WebkitTextFillColor: 'black',
                    },
                }}
            >
                <PostContent>
                    <PostContainer>
                        <GradientTitle
                            css={{
                                backgroundImage: `linear-gradient(
                  135deg,
                  $pink 0%,
                  $purple100%
                );`,
                            }}
                        >
                            {tagline || title}
                        </GradientTitle>
                        {children}
                    </PostContainer>
                </PostContent>
            </PostMain>
            <Footer />
        </Wrapper>
    )
}

const GradientTitle = styled('h1', {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginTop: '0.5rem',
    marginBottom: '2rem',
    lineHeight: '1.2',
    backgroundImage: `linear-gradient(135deg, $purple 0%, $cyan 100%)`,
    backgroundSize: '100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    WebkitBoxDecorationBreak: 'clone',
})