'use client';

import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSession } from 'next-auth/react';
import { AddNoteSchema } from '@/lib/validationSchemas';
import { addNote } from '@/lib/dbActions';

interface AddNoteFormProps {
  contactId: number;
}

export default function AddNoteForm({ contactId }: AddNoteFormProps) {
  const [note, setNote] = useState('');
  const { data: session } = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await AddNoteSchema.validate({ note, contactId, owner: session?.user?.email });
      await addNote({ note, contactId, owner: session?.user?.email as string });
      setNote('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Add Note</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note here"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Note
      </Button>
    </Form>
  );
}
