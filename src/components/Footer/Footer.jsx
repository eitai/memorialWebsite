import { css } from '@emotion/css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <div className={containerStyle}>
      <div className={LinksContainerStyle}>
        <div className={LinksWrapperStyle}>
          <div>קיצורי דרך</div>
          <button>סיפור חייו</button>
          <button>גלריה </button>
          <button>הספדים</button>
        </div>
        <button className={buttonStyle}>להיות לוחם</button>
        <div>
          <button className={buttonStyle}>מרכז העדכונים</button>
          <div className={socialIconsWrapper}>
            <FaFacebookSquare />
            <FaSquareInstagram />
          </div>
        </div>
      </div>
      <img src='/footerimg.jpg' alt='' className={imgStyle} />
    </div>
  );
};

const containerStyle = css`
  width: 1220px;
  margin: 0 auto;
  position: relative;
  background-color: #d9e6e8;
  padding: 40px;
  display: flex;
  justify-content: space-between;
`;

const imgStyle = css`
  border-radius: 15px;
`;

const LinksContainerStyle = css`
  display: flex;
  align-items: start;
  gap: 15px;
`;

const socialIconsWrapper = css`
  display: flex;
  gap: 5px;

  > svg {
    font-size: 20px;
    cursor: pointer;

    &:first-child {
      color: #1877f2;
    }
    &:last-child {
      color: #cd486b;
    }
  }
`;

const buttonStyle = css`
  font-weight: 400;
  text-decoration: underline;
`;

const LinksWrapperStyle = css`
  display: flex;
  flex-direction: column;

  > div {
    &:first-child {
      margin-bottom: 10px;
      font-weight: 500;
    }
  }

  > button {
    font-size: 14px;
    text-align: right;
  }
`;
