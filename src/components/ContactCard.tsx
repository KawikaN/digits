'use client';

import { Card, ListGroup } from 'react-bootstrap';
import { Contact, Note } from '@/lib/validationSchemas';
import Link from 'next/link';
import NoteItem from './NoteItem';
import AddNoteForm from './AddNoteForm';

interface ContactCardProps {
  contact: Contact;
  notes: Note[];
}

export default function ContactCard({ contact, notes }: ContactCardProps) {
  return (
    <Card className="h-100">
      <Card.Header>
        <img className="card-img-top" src={contact.image} width={75} alt={`${contact.firstName} ${contact.lastName}`} />
        <Card.Title>
          {contact.firstName}
          {' '}
          {contact.lastName}
        </Card.Title>
        <Card.Subtitle>{contact.address}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{contact.description}</Card.Text>
        <ListGroup variant="flush">
          {notes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </ListGroup>
        <AddNoteForm contactId={contact.id as number} />
      </Card.Body>
      <Card.Footer>
        <Link href={`/edit-contact/${contact.id}`}>Edit</Link>
      </Card.Footer>
    </Card>
  );
}
