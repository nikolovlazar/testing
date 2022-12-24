import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarLink } from './sidebar-link';

export const MainSidebar = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 12,
        width: '100%',
        maxWidth: 250,
        height: '100%',
        borderRightWidth: 1,
        alignItems: 'flex-start',
      }}
    >
      <h1>🧠</h1>
      <nav style={{ width: '100%' }}>
        <li>
          <SidebarLink title='Manage' href='/manage' />
        </li>
        <li>
          <SidebarLink title='Practice' href='/practice' />
        </li>
      </nav>
    </div>
  );
};
