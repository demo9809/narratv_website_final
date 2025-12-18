
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Img,
    Link,
    Hr,
} from '@react-email/components';
import * as React from 'react';

interface PortfolioAccessEmailProps {
    name: string;
}

export const PortfolioAccessEmail = ({
    name = 'Creative Partner',
}: PortfolioAccessEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Your exclusive access to Narratv Space portfolio</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>Access Granted.</Heading>
                    <Text style={text}>
                        Hello {name},
                    </Text>
                    <Text style={text}>
                        Thank you for your interest in our work. As requested, we are pleased to share our private portfolio with you. This document contains detailed case studies, strategy breakdowns, and results that we do not publish publicly.
                    </Text>

                    <Section style={btnContainer}>
                        <Button
                            style={button}
                            href="https://drive.google.com/file/d/1I_Mpx6Opcz3bdRp1jgOgIRm_6lKQFJKs/view?usp=sharing"
                        >
                            View Private Portfolio
                        </Button>
                    </Section>

                    <Text style={text}>
                        Or copy this link:<br />
                        <Link href="https://drive.google.com/file/d/1I_Mpx6Opcz3bdRp1jgOgIRm_6lKQFJKs/view?usp=sharing" style={link}>
                            https://drive.google.com/file/d/1I_Mpx6Opcz3bdRp1jgOgIRm_6lKQFJKs/view?usp=sharing
                        </Link>
                    </Text>

                    <Hr style={hr} />

                    <Text style={footer}>
                        This access is confidential. Please do not distribute this document outside of your organization.
                    </Text>
                    <Text style={footer}>
                        Narratv Space<br />
                        Global Standards, Local Roots.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export default PortfolioAccessEmail;

const main = {
    backgroundColor: '#0a0a0a',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '40px 20px',
    maxWidth: '560px',
    backgroundColor: '#000000',
    border: '1px solid #333',
    borderRadius: '8px',
};

const h1 = {
    color: '#ffffff',
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    margin: '30px 0',
    letterSpacing: '-1px',
};

const text = {
    color: '#cccccc',
    fontSize: '16px',
    lineHeight: '26px',
    marginBottom: '20px',
};

const btnContainer = {
    textAlign: 'center' as const,
    margin: '40px 0',
};

const button = {
    backgroundColor: '#F3795D', // Brand Orange
    borderRadius: '4px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    width: '100%',
    padding: '16px 0',
};

const link = {
    color: '#F3795D',
    textDecoration: 'underline',
};

const hr = {
    borderColor: '#333',
    margin: '20px 0',
};

const footer = {
    color: '#666666',
    fontSize: '12px',
    lineHeight: '20px',
    textAlign: 'center' as const,
    marginTop: '20px',
};
