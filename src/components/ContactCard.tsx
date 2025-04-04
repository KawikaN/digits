"use client";

import { Card } from 'react-bootstrap';
import { Contact } from '@/lib/validationSchemas';

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
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
      </Card.Body>
    </Card>
  );
}
