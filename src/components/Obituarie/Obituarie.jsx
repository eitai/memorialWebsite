import { css } from '@emotion/css';
import { useObituarieStore } from '~store/ObituariesStore';

export const Obituarie = () => {
  const { selectedObituarie, deleteObituarie } = useObituarieStore();
  const { img, name, howRelated, images, obituarieText } = selectedObituarie;

  return (
    <div>
      <div className={navWrapperStyle}>
        <span onClick={deleteObituarie}>הספדים</span>
        <span>{`>`}</span>
        <span>{name}</span>
      </div>
      <div className={ObituarieWrapperStyle}>
        <div>
          <div className={imageTitleWrapper}>
            <div>
              <img src={img} alt='howRelated' className={imgStyle} />
            </div>
            <div className={nameWrapperStyle}>
              <div>{name}</div>
              <div>{howRelated}</div>
            </div>
          </div>
          <div>{obituarieText}</div>
        </div>
        <div className={imgsWrapperStyle}>
          {images?.map((img, index) => {
            return (
              <div key={index} className={imgtyle}>
                <img src={img} alt='' className={imgstyle} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const imgsWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const imgtyle = css`
  border-radius: 15px;
  overflow: hidden;
`;

const imgstyle = css`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ObituarieWrapperStyle = css`
  display: flex;
  border: 1px solid var(--primary);
  border-radius: 15px;
  padding: 24px;
  gap: 20px;

  > div {
    width: 50%;
  }
`;

const imgStyle = css`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

const navWrapperStyle = css`
  display: flex;
  gap: 10px;
  font-size: 15px;
  > span {
    &:first-child {
      cursor: pointer;
    }

    &:last-child {
      font-weight: 500;
    }
  }
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
  margin-bottom: 20px;
`;
