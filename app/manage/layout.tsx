import { usePathname } from 'next/navigation';
import { ManageSidebar } from '../../src/components/manage-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'flex-start',
        flex: 1,
      }}
    >
      <ManageSidebar />
      <div
        style={{
          background:
            'linear-gradient(90deg,#f9fafb 15px,transparent 1%) 50%,linear-gradient(#f9fafb 15px,transparent 1%) 50%,rgba(0,0,0,.24)',
          backgroundSize: '16px 16px',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    </div>
  );
}
