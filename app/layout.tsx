import { MainSidebar } from '../src/components/main-sidebar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <div
          style={{ display: 'flex', height: '100vh', alignItems: 'flex-start' }}
        >
          <MainSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
