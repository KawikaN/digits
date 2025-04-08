import * as Yup from 'yup';

export const AddContactSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  address: Yup.string().required('Address is required'),
  image: Yup.string().required('Image URL is required'),
  description: Yup.string().required('Description is required'),
});

export const EditContactSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  address: Yup.string().required('Address is required'),
  image: Yup.string().required('Image URL is required'),
  description: Yup.string().required('Description is required'),
});

export const AddNoteSchema = Yup.object({
  content: Yup.string().required('Note content is required'),
});

export interface Contact {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  image: string;
  description: string;
  owner: string;
}

export interface Note {
  id?: number;
  note: string;
  contactId: number;
  owner: string;
  createdAt?: Date;
}
