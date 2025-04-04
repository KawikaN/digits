import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import EditContactForm from '@/components/EditContactForm';

export default async function EditContactPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  const contact = await prisma.contact.findUnique({
    where: {
      id: parseInt(params.id, 10),
      owner: session?.user?.email || '',
    },
  });

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return <EditContactForm contact={contact} />;
} 