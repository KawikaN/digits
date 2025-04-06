import { Col, Container, Row } from 'react-bootstrap';
import ContactCard from '@/components/ContactCard';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { Contact, Note } from '@/lib/validationSchemas';

interface ContactWithNotes extends Contact {
  notes: Note[];
}

export default async function ListContacts() {
  const session = await getServerSession(authOptions);
  const contacts = await prisma.contact.findMany({
    where: {
      owner: session?.user?.email || '',
    },
  });

  const notes = await prisma.$queryRaw<Note[]>`SELECT * FROM "Note" WHERE owner = ${session?.user?.email || ''}`;

  const contactsWithNotes: ContactWithNotes[] = contacts.map((contact) => ({
    ...contact,
    notes: notes.filter((note) => note.contactId === contact.id),
  }));

  return (
    <Container className="py-5">
      <h2>List Contacts</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {contactsWithNotes.map((contact) => (
          <Col key={`Contact-${contact.id}`}>
            <ContactCard
              contact={contact}
              notes={contact.notes}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
