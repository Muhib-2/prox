'use client';

// Render the default Next.js 404 page when a route is rejected by the i18n middleware
import Error from 'next/error';

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
