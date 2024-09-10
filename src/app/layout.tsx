// src/app/layout.tsx

import React from 'react';
import '../app/globals.css'; // Import global styles if any

export const metadata = {
  title: 'Your Application Title',
  description: 'A brief description of your application',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
