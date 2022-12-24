import { cards } from '../../mock/cards';
import { FlashcardSidebarLink } from './flashcard-sidebar-link';

export const ManageSidebar = () => {
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
        {cards.map(({ id, question, answer, slug, categoryId }) => (
          <li key={id}>
            <FlashcardSidebarLink
              question={question}
              answer={answer}
              slug={slug}
              categoryId={categoryId}
            />
          </li>
        ))}
      </nav>
    </div>
  );
};
