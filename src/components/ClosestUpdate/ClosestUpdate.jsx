import { css } from '@emotion/css';

export const ClosestUpdate = () => {
  return (
    <div className={containerStyle}>
      <span>
        ביום שישי בתאריך 20.9.2024 יתקיים מירוץ הבוז’ולה בו ננציח את אורן
      </span>
      <button>לפרטים נוספים לחצו כאן</button>
    </div>
  );
};

const containerStyle = css`
  background-color: var(--primary);
  color: #fff;
  display: flex;
  justify-content: center;
  gap: 10px;

  > button {
    text-decoration: underline;
    font-weight: 400;
  }
`;
