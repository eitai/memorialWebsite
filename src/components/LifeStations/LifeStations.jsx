import { lifeStationsData } from '~/Data/lifeStationsData.';
import { GoArrowLeft } from 'react-icons/go';
import { css } from '@emotion/css';

export const LifeStations = () => {
  const { text, title } = lifeStationsData;
  return (
    <div className={containerStyle}>
      <div className={textStyle}>
        <div>{title}</div>
        <div>{text}</div>
        <div>
          <span>לצפייה בכל התמונות</span>
          <GoArrowLeft />
        </div>
      </div>
      <div>
        <img src='/gallery.webp' alt='' className={imgStyle} />
      </div>
    </div>
  );
};

const textStyle = css`
  display: flex;
  flex-direction: column;

  > div {
    &:first-child {
      font-size: 25px;
      font-weight: 500;
    }
    &:nth-child(2) {
      width: 450px;
    }
    &:last-child {
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--primary);
      font-weight: 500;
      margin-top: 15px;
      font-size: 18px;
    }
  }
`;

const imgStyle = css`
  height: 350px;
  min-width: 430px;
`;

const containerStyle = css`
  height: 600px;
  display: flex;
  gap: 300px;
  align-items: center;
`;
