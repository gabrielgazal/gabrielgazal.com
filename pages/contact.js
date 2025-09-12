import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import Toast from '../components/Toast'
import { Box } from '../components/Box'
import { styled } from '../stitches.config'

export async function getStaticProps() {
    const meta = {
        title: 'Contact | Gabriel Gazal',
        tagline: "Let's chat!"
    }

    return { props: meta }
}

function Contact(props) {
    const { title, image } = props
    const description = `I <strong>love</strong> a good talk with anyone who loves to talk back! Software engineers, tech founders, students, and creators, you're all welcome. Even though my routine is crazy, I'll try my best to respond in a timely manner.`
    const [isEmailSent, setIsEmailSent] = React.useState(undefined)
    const [showToast, setShowToast] = React.useState(false)

    const onSendEmail = async (e) => {
        e.preventDefault()

        try {
            const isProd = process.env.NODE_ENV === 'production'
            const base = isProd ? 'https://gabrielgazal.com' : 'http://localhost:3000'

            await fetch(`${base}/api/email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: e.target.name.value,
                    email: e.target.email.value,
                    message: e.target.message.value,
                }),
            })

            setIsEmailSent(true)
            setShowToast(true)
        }
        catch (e) {
            console.error(e)
            setIsEmailSent(false)
            setShowToast(true)
        }
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta content={title} property="og:title" />
                <meta content={stripHtml(description)} name="description" />
                <meta content={stripHtml(description)} property="og:description" />
                <meta content="https://gabrielgazal.com/contact" property="og:url" />
                <meta content={`https://gabrielgazal.com${image}`} property="og:image" />
            </Head>

            <Box>
                <p dangerouslySetInnerHTML={{ __html: description }} />
                <h2>Send me an email</h2>
                <Form onSubmit={onSendEmail}>
                    <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="Name" required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="email@email.com" required />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Now it's time to let the creativity flow!" rows="4" required />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit">Send</Button>
                    </FormGroup>
                </Form>

                <Toast
                    title={isEmailSent ? 'Your email was sent!' : 'Oh no! Error'}
                    description={isEmailSent ? 'Thanks for taking the time to write it.' : 'Something wrong happened. Try again later.'}
                    isSuccess={isEmailSent}
                    showToast={showToast}
                    setShowToast={setShowToast}
                />
            </Box>
        </>
    )
}

const Form = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px'
})

const FormGroup = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
})

const Label = styled('label', {
    color: '$secondary',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '500'
})

const Input = styled('input', {
    color: '$primary',
    background: 'none',
    border: '1px solid $secondary',
    borderRadius: '$borderRadius',
    padding: '10px',
    '&:focus': { outline: 'none', borderColor: '$cyan' },
})

const Textarea = styled('textarea', {
    color: '$primary',
    background: 'none',
    border: '1px solid $secondary',
    borderRadius: '$borderRadius',
    padding: '10px',
    '&:focus': { outline: 'none', borderColor: '$cyan' },
})

const Button = styled('button', {
    color: '$background',
    background: '#fff',
    border: '1px solid #fff',
    borderRadius: '$borderRadius',
    cursor: 'pointer',
    padding: '10px',
    marginTop: '5px',
    transition: 'all 0.2s ease-in-out',
    '&:hover': { background: 'transparent', borderColor: '$cyan', color: '$cyan' },
    '&:focus': { background: 'transparent', borderColor: '$cyan', color: '$cyan', outline: 'none' },
})

Contact.Layout = Base

export default Contact