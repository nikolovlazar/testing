import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarItemProps = {
  title: string;
  href: string;
};

export const SidebarLink = ({ title, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname?.startsWith(href);

  return (
    <NextLink
      href={href}
      style={{
        width: 'full',
        padding: '8px 2px',
        color: isActive ? 'white' : 'rgba(0, 0, 0, 0.75)',
        background: isActive ? 'rgba(0, 0, 0, 0.85)' : 'unset',
      }}
    >
      {title}
    </NextLink>
  );
};
