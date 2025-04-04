import { Col, Container, Row } from 'react-bootstrap';
import ContactCard from '@/components/ContactCard';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { Contact } from '@/lib/validationSchemas';

export default async function ListContacts() {
  const session = await getServerSession(authOptions);
  const contacts = await prisma.contact.findMany({
    where: {
      owner: session?.user?.email || '',
    },
  });

  return (
    <Container className="py-5">
      <h2>List Contacts</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {contacts.map((contact) => (
          <Col key={`Contact-${contact.id}`}>
            <ContactCard contact={contact} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
