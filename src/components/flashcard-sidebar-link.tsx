import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '../../mock/categories';

export const FlashcardSidebarLink = ({
  question,
  answer,
  categoryId,
  slug,
}: any) => {
  const pathname = usePathname();
  const isActive = pathname === `/manage/${slug}`;
  const category = categories.find((category) => category.id === categoryId);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: isActive ? 'linkActiveBackground' : 'linkBackground',
        padding: 16,
        transition: 'background-color 0.2s',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            padding: '4px 2px',
            background: 'lightgray',
            borderRadius: 4,
          }}
        >
          {category?.name}
        </div>
        <NextLink href={`/manage/${slug}`}>
          <h3
            style={{
              color: isActive ? 'white' : '#2D3748',
            }}
          >
            {question}
          </h3>
        </NextLink>
        <p
          style={{
            color: isActive ? '#A0AEC0' : '#718096',
            fontSize: 14,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};
