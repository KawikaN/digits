'use client';

import { Container } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/** Render a Not Authorized page if the user enters a URL that they don't have authorization for. */
export default function NotAuthorizedPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Container className="py-4 text-center">
      <h1>Not Authorized</h1>
      <p>You do not have permission to access this page.</p>
      <p>Redirecting to home page...</p>
    </Container>
  );
}
