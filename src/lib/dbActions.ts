'use server';

import { PrismaClient, Contact, Note } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

/**
 * Adds a new contact to the database.
 * @param contact, an object with the following properties: firstName, lastName, address, image, description, owner.
 */
export async function addContact(contact: { firstName: string; lastName: string; address: string; image: string; description: string; owner: string }) {
  // console.log(`addContact data: ${JSON.stringify(contact, null, 2)}`);
  await prisma.contact.create({
    data: {
      firstName: contact.firstName,
      lastName: contact.lastName,
      address: contact.address,
      image: contact.image,
      description: contact.description,
      owner: contact.owner,
    },
  });
}

/**
 * Edits an existing contact in the database.
 * @param contact, an object with the following properties: id, firstName, lastName, address, image, description, owner.
 */
export async function editContact(contact: Contact) {
  // console.log(`editContact data: ${JSON.stringify(contact, null, 2)}`);
  await prisma.contact.update({
    where: { id: contact.id },
    data: {
      firstName: contact.firstName,
      lastName: contact.lastName,
      address: contact.address,
      image: contact.image,
      description: contact.description,
      owner: contact.owner,
    },
  });
}

/**
 * Deletes an existing contact from the database.
 * @param id, the id of the contact to delete.
 */
export async function deleteContact(id: number) {
  // console.log(`deleteContact id: ${id}`);
  await prisma.contact.delete({
    where: { id },
  });
}

/**
 * Adds a new note to the database.
 * @param note, an object with the following properties: content, contactId.
 */
export async function addNote(note: { content: string; contactId: number }) {
  await prisma.note.create({
    data: {
      content: note.content,
      contactId: note.contactId,
    },
  });
}

/**
 * Deletes an existing note from the database.
 * @param id, the id of the note to delete.
 */
export async function deleteNote(id: number) {
  await prisma.note.delete({
    where: { id },
  });
}

/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { email: string; password: string }) {
  // console.log(`createUser data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
    },
  });
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}
