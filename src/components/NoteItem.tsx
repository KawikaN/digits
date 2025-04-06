'use client';

import { ListGroup } from 'react-bootstrap';
import { Note } from '@/lib/validationSchemas';

interface NoteItemProps {
  note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
  return (
    <ListGroup.Item>
      <p className="fw-lighter">{note.createdAt?.toLocaleDateString('en-US')}</p>
      <p>{note.note}</p>
    </ListGroup.Item>
  );
} 