import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Hr,
    Row,
    Column,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    budget?: string;
    services?: string[];
    message: string;
    formType: 'general' | 'project';
}

export const ContactFormEmail = ({
    name,
    email,
    phone,
    company,
    budget,
    services,
    message,
    formType,
}: ContactFormEmailProps) => {
    const isProject = formType === 'project';
    const displayServices = services && services.length > 0 ? services.join(', ') : 'None selected';

    return (
        <Html>
            <Head />
            <Preview>New Inquiry from {name} - {isProject ? 'Start a Project' : 'General Inquiry'}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>New Website Inquiry</Heading>

                    <Section style={section}>
                        <Text style={label}>Type:</Text>
                        <Text style={data}>{isProject ? '🚀 Start a Project' : '📧 General Inquiry'}</Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Row>
                            <Column>
                                <Text style={label}>Name:</Text>
                                <Text style={data}>{name}</Text>
                            </Column>
                            <Column>
                                <Text style={label}>Email:</Text>
                                <Text style={data}>{email}</Text>
                            </Column>
                        </Row>
                        {isProject && (
                            <Row>
                                <Column>
                                    <Text style={label}>Phone/WA:</Text>
                                    <Text style={data}>{phone || 'N/A'}</Text>
                                </Column>
                                <Column>
                                    <Text style={label}>Company:</Text>
                                    <Text style={data}>{company || 'N/A'}</Text>
                                </Column>
                            </Row>
                        )}
                    </Section>

                    {isProject && (
                        <>
                            <Hr style={hr} />
                            <Section style={section}>
                                <Text style={label}>Budget Range:</Text>
                                <Text style={data}>{budget || 'Not specified'}</Text>

                                <Text style={labelWrapper}>Services Needed:</Text>
                                <Text style={data}>{displayServices}</Text>
                            </Section>
                        </>
                    )}

                    <Hr style={hr} />

                    <Section style={section}>
                        <Text style={label}>Message:</Text>
                        <Text style={messageText}>{message}</Text>
                    </Section>

                    <Hr style={hr} />
                    <Text style={footer}>Sent from Narratv.Space Website Form</Text>
                </Container>
            </Body>
        </Html>
    );
};

export default ContactFormEmail;

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '40px 20px',
    borderRadius: '5px',
    maxWidth: '600px',
};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    margin: '0 0 20px',
};

const section = {
    padding: '10px 0',
};

const label = {
    color: '#888',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase' as const,
    marginBottom: '4px',
};

const labelWrapper = {
    ...label,
    marginTop: '16px',
};

const data = {
    color: '#333',
    fontSize: '16px',
    marginTop: '0',
    marginBottom: '0',
};

const messageText = {
    ...data,
    lineHeight: '1.5',
    whiteSpace: 'pre-wrap' as const,
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    textAlign: 'center' as const,
};
