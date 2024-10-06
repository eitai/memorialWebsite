import { css } from '@emotion/css';
import { Box, ImageList, ImageListItem } from '@mui/material';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';

export const GalleryPopup = ({ images, closePopupGallery }) => {
  const [isSliderGalleryOpened, setIsSliderGalleryOpened] = useState(false);
  const [sliderGalleryIndex, setSliderGalleryIndex] = useState(-1);

  const openSldierGallery = ({ index }) => {
    setIsSliderGalleryOpened(true);
    setSliderGalleryIndex(index);
  };

  const closeGallery = ({ index }) => {
    closePopupGallery();
    setIsSliderGalleryOpened(false);
  };
  console.log(images);
  console.log(sliderGalleryIndex);
  return (
    <div className={containerStyle}>
      <div className={closeBtnStyle} onClick={closeGallery}>
        X
      </div>

      {isSliderGalleryOpened ? (
        <div>
          <Lightbox
            index={sliderGalleryIndex}
            slides={images.map((image) => {
              console.log(image);
              return {
                src: image,
                width: 3840,
                height: 5760,
              };
            })}
            on={{
              view: ({ index }) => setSliderGalleryIndex(index),
              click: () => setIsSliderGalleryOpened(true),
            }}
            plugins={[Inline]}
            carousel={{
              padding: 0,
              spacing: 0,
              imageFit: 'cover',
            }}
            inline={{
              style: {
                width: '100%',
                maxWidth: '900px',
                aspectRatio: '3 / 2',
                margin: '0 auto',
              },
            }}
            imageFit={'cover'}
          />
        </div>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            overflow: 'auto',
            cursor: 'pointer',
          }}>
          <ImageList variant='masonry' cols={3} gap={8}>
            {images.map((item, index) => {
              return (
                <ImageListItem
                  onClick={() => openSldierGallery({ index })}
                  key={item}
                  cols={item.cols || 1}
                  rows={item.rows || 1}>
                  <img
                    src={`${item}?w=248&fit=crop&auto=format&dpr=2`}
                    alt={item}
                    loading='lazy'
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Box>
      )}
    </div>
  );
};

const containerStyle = css`
  position: fixed;
  height: 80vh;
  width: 80vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #3e3f3ffc;
  z-index: 999;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden; // Prevent overflow from the container
`;

const closeBtnStyle = css`
  align-self: flex-end;
  cursor: pointer;
  color: white;
  margin-bottom: 10px;
`;
