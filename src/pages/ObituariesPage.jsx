import { css, cx } from '@emotion/css';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { DefaultLayout } from '~components/DefaultLayout/DefaultLayout';
import { Obituarie } from '~components/Obituarie/Obituarie';
import { obituariesData } from '~Data/ObituariesData';
import { useObituarieStore } from '~store/ObituariesStore';

export const ObituariesPage = () => {
  const { text, obituaries } = obituariesData;
  const { selectedObituarie, setObituarie } = useObituarieStore();

  return (
    <DefaultLayout>
      <div className={cx('container', containerStyle)}>
        {selectedObituarie ? (
          <Obituarie />
        ) : (
          <>
            <div className={titleStyle}>הספדים</div>
            <div className={subtextWrapper}>{text}</div>
            <div className={obituariesWrapperStyle}>
              {obituaries.map((obituarie, index) => {
                const { img, howRelated, obituarieText, name } = obituarie;
                return (
                  <div key={index} className={cardStyle}>
                    <div className={imageTitleWrapper}>
                      <div>
                        <img src={img} alt='howRelated' className={imgStyle} />
                      </div>
                      <div className={nameWrapperStyle}>
                        <div>{name}</div>
                        <div>{howRelated}</div>
                      </div>
                    </div>
                    <div className={obituarieTextWrapperStyle}>
                      {obituarieText}
                    </div>
                    <button
                      className={btnWrapperStyle}
                      onClick={() => setObituarie({ obituarie })}>
                      <span>להספד המלא</span>
                      <FaArrowAltCircleLeft />
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

const obituarieTextWrapperStyle = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: normal;
`;

const containerStyle = css`
  min-height: 60vh;
`;

const titleStyle = css`
  font-weight: 500;
  font-size: 45px;
`;

const subtextWrapper = css`
  font-weight: 400;
`;

const btnWrapperStyle = css`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  color: var(--primary);
  cursor: pointer;
  > svg {
    font-size: 18px;
  }
`;

const obituariesWrapperStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 40px;
`;

const nameWrapperStyle = css`
  display: flex;
  flex-direction: column;

  > div {
    &:first-child {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

const imageTitleWrapper = css`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const cardStyle = css`
  background-color: white;
  width: 330px;
  height: 300px;
  border-radius: 24px;
  overflow: hidden;
  padding: 30px;
  box-shadow: 1px 3px 9px 0px #0000001a;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const imgStyle = css`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;
