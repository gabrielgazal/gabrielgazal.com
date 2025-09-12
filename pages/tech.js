import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import categories from '../data/tech'

export async function getStaticProps() {
    const meta = {
        title: 'Tech | Gabriel Gazal',
        description:
            "A list of <strong>software</strong>, <strong>hardware</strong>, and <strong>other tools</strong> I use and recommend.",
        tagline: 'Tools and other things I like.',
    }

    return { props: meta }
}

function Tech(props) {
    const { title, description, image } = props

    const renderAll = () => {
        return categories.map((category, index) => {
            return (
                <div key={index}>
                    <h2>{category.name}</h2>
                    <ul>
                        {category.items.map((item, iIndex) => {
                            return (
                                <li key={iIndex}>
                                    <a href={item.url} target="_blank">
                                        {item.title}
                                    </a>
                                    <span> - </span>
                                    <span
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        })
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta content={title} property="og:title" />
                <meta content={stripHtml(description)} name="description" />
                <meta content={stripHtml(description)} property="og:description" />
                <meta content="https://gabrielgazal.com/tech" property="og:url" />
                <meta content={`https://gabrielgazal.com${image}`} property="og:image" />
            </Head>

            <p dangerouslySetInnerHTML={{ __html: description }} />

            {renderAll()}
        </>
    )
}

Tech.Layout = Base

export default Tech