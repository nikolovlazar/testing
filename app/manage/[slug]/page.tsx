'use client';

import { useReducer } from 'react';

import { cards } from '../../../mock/cards';
import { categories } from '../../../mock/categories';

type Params = {
  slug: string;
};

enum ValuesActionKind {
  SET_QUESTION = 'SET_QUESTION',
  SET_ANSWER = 'SET_ANSWER',
  SET_CATEGORY = 'SET_CATEGORY',
}

type ValuesAction = {
  type: ValuesActionKind;
  payload: any;
};

type ValuesState = Partial<{
  id: number;
  question: string;
  answer: string;
  categoryId: number;
}>;

function valuesReducer(state: ValuesState, action: ValuesAction) {
  switch (action.type) {
    case ValuesActionKind.SET_QUESTION:
      return { ...state, question: action.payload };
    case ValuesActionKind.SET_ANSWER:
      return { ...state, answer: action.payload };
    case ValuesActionKind.SET_CATEGORY:
      return { ...state, categoryId: action.payload };
    default:
      return state;
  }
}

export default function Page({ params: { slug } }: { params: Params }) {
  const card = cards.find((card) => card.slug === slug);
  const [values, dispatch] = useReducer(valuesReducer, {
    id: card?.id,
    question: card?.question,
    answer: card?.answer,
    categoryId: card?.categoryId,
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: 16,
        }}
      >
        <h4>Editing {card?.question}</h4>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='question'>Question</label>
            <input
              id='question'
              placeholder='What is React?'
              value={values?.question}
              onChange={(e) =>
                dispatch({
                  type: ValuesActionKind.SET_QUESTION,
                  payload: e.currentTarget.value,
                })
              }
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='answer'>Answer</label>
            <textarea
              id='answer'
              placeholder='In hac habitasse platea dictumst. Nam auctor, metus imperdiet commodo ultricies, ante libero malesuada libero, a hendrerit ex nisl a tellus.'
              value={values?.answer}
              onChange={(e) =>
                dispatch({
                  type: ValuesActionKind.SET_ANSWER,
                  payload: e.currentTarget.value,
                })
              }
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor='category'>Category</label>
            <select
              id='category'
              placeholder='Select category'
              defaultValue={values?.categoryId}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div
          style={{ display: 'flex', width: 'full', justifyContent: 'flex-end' }}
        >
          <button>Delete</button>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
}
