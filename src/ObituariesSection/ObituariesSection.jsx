import { css } from '@emotion/css';
import Carousel from 'react-multi-carousel';
import { obituariesData } from '~/Data/ObituariesData';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { GoArrowLeft } from 'react-icons/go';

export const ObituariesSection = () => {
  const { text, title, obituaries, buttonText } = obituariesData;
  return (
    <div className={containerStyle}>
      <div className={textWrapperStyle}>
        <div className={titleStyle}>{title}</div>
        <div className={textStyle}>{text}</div>
        <div className={buttonStyle}>
          {buttonText}
          <GoArrowLeft />
        </div>
      </div>
      <div>
        <Carousel {...carouselProps}>
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
                <div className={obituarieTextWrapperStyle}>{obituarieText}</div>
                <div className={btnWrapperStyle}>
                  <button>להספד המלא</button>
                  <FaArrowAltCircleLeft />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
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

const btnWrapperStyle = css`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  color: var(--primary);
  > svg {
    font-size: 18px;
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
`;

const cardStyle = css`
  background-color: white;
  width: 330px;
  border-radius: 24px;
  overflow: hidden;
  padding: 30px;
  box-shadow: -5px 5px 0 0px #0000001a;
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

const textStyle = css`
  width: 450px;
  font-weight: 400;
`;

const carouselStyle = css`
  height: 500px;
`;

const buttonStyle = css`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--primary);
  font-weight: 500;
  margin-top: 15px;
  font-size: 18px;
`;

const titleStyle = css`
  font-size: 25px;
  font-weight: 500;
`;

const containerStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const textWrapperStyle = css`
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin-bottom: -50px;
`;

const carouselResponsiveData = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

const carouselProps = {
  additionalTransfrom: 0,
  arrows: true,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: carouselStyle,
  containerClass: 'container-with-dots',
  dotListClass: '',
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: '',
  keyBoardControl: true,
  minimumTouchDrag: 80,
  pauseOnHover: true,
  renderArrowsWhenDisabled: false,
  renderButtonGroupOutside: false,
  renderDotsOutside: false,
  rewind: false,
  rewindWithAnimation: false,
  rtl: true,
  shouldResetAutoplay: true,
  showDots: false,
  sliderClass: '',
  slidesToSlide: 1,
  swipeable: true,
  responsive: carouselResponsiveData,
};
