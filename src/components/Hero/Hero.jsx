import { css } from '@emotion/css';
import { heroData } from '~/Data/heroData';

export const Hero = () => {
  const { text, title, date } = heroData || {};
  //To do: fix text
  return (
    <div>
      <div className={imgWrapperStyle}>
        <img className={imgStyle} src='/bg_image.webp' alt='' />
        <div className={textWrapperStyle}>
          <div className={titleStyle}>{title}</div>
          <div className={dateStyle}>{date}</div>

          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

const titleStyle = css`
  font-weight: 500;
  font-size: 60px;
`;

const dateStyle = css`
  font-weight: 400;
  font-size: 30px;
  margin-top: -20px;
  margin-bottom: 20px;
`;
const textWrapperStyle = css`
  position: absolute;
  width: 550px;
  top: 48px;
  left: 1028px;
  padding: 20px 40px;
  gap: 32px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  font-weight: 400;
`;

const imgWrapperStyle = css`
  height: 800px;
  width: 100%;
  position: relative;
`;

const imgStyle = css`
  height: 100%;
  width: 100%;
  object-fit: cover;
  //style for mobile
`;
