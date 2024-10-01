import { css } from '@emotion/css';
import { pages } from '~/Data/pages';
import { FaCalendarCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={containerStyle}>
      <div className={pagesWrapperStyle}>
        {pages.map((page) => {
          const isCurrentPage = page === pages[0];
          return (
            <button
              className={pageStyle(isCurrentPage)}
              key={page.key}
              onClick={() => navigate(page.key)}>
              {page.name}
            </button>
          );
        })}
      </div>
      <button className={updatesWrapperStyle}>
        <FaCalendarCheck />
        לכל העדכונים
      </button>
    </div>
  );
};

const updatesWrapperStyle = css`
  border-radius: 8px;
  border: 2px solid var(--primary);
  padding: 6px 8px;
  font-size: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-right: auto;
  color: var(--primary);
`;

const containerStyle = css`
  height: 65px;
  border-bottom: 2px solid #fff;
  padding: 0 95px;
  display: flex;
  align-items: center;
`;

const pagesWrapperStyle = css`
  height: 43px;
  display: flex;
  gap: 32px;
  height: 100%;
  display: flex;
  align-items: end;
`;

const pageStyle = (isCurrentPage) => css`
  min-width: 104px;
  height: 40px;
  padding: 10px 22px;
  gap: 10px;
  border-radius: 8px 8px 0.5px 0.5px;
  opacity: 0px;
  transition: all 0.1s ease-in;
  background-color: ${isCurrentPage && '#f4fbff'};
  &:hover {
    background-color: ${isCurrentPage ? '#e3e9ee' : '#f4fbff'};
  }
`;
