import { css } from '@emotion/css';
import { useEffect, useState } from 'react';
import { DefaultLayout } from '~components/DefaultLayout/DefaultLayout';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { GalleryPopup } from './GalleryPopup';

//NOTE: when a new gallery folder added need to add a key below by the name of the folder
const GalleryKeysByFolder = {
  army: {
    key: 'צבא',
    description: 'מילים שמתארות את התחנה הזאת החייו של אורן',
  },
  takwondo: {
    key: 'טארקוונדו',
    description: 'מילים שמתארות את התחנה הזאת החייו של אורן',
  },
  traveling: {
    key: 'טיולים',
    description: 'מילים שמתארות את התחנה הזאת החייו של אורן',
  },
  guide: {
    key: 'טיולים',
    description: 'מילים שמתארות את התחנה הזאת החייו של אורן',
  },
};

export const Gallery = () => {
  const [folders, setFolders] = useState([]);
  const [folderImages, setFolderImages] = useState([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    //To do: improve?
    const imagesContext = import.meta.glob(
      '/src/assets/galleryImages/**/*.{png,jpg,jpeg,webp}'
    );
    const imagePaths = Object.keys(imagesContext);
    const groupImagesByFolder = async () => {
      const folderMap = {};

      for (const path of imagePaths) {
        const segments = path.split('/');
        const folderName = segments[4];

        if (!folderMap[folderName]) {
          folderMap[folderName] = {
            folder: folderName,
            images: [],
          };
        }

        const imageModule = await imagesContext[path]();
        folderMap[folderName].images.push(imageModule.default);
      }

      const folderArray = Object.values(folderMap);
      setFolders(folderArray);
    };

    groupImagesByFolder();
  }, []);

  const closePopupGallery = () => {
    setIsGalleryOpen(false);
    setFolderImages([]);
  };

  return (
    <DefaultLayout>
      <div className={'container'}>
        <div className={titleWrapperStyle}>
          <h1>הגלריה של אורן</h1>
          <p>טקסט שמתאר במשפט את מה שיהיה בעמוד הזה. שיסתכם באורך הזה</p>
        </div>
        <div className={containerStyle}>
          {folders.map((folder, folderIndex) => {
            const { key, description } = GalleryKeysByFolder[folder.folder];

            return (
              <div
                key={folderIndex}
                className={cardStyle}
                onClick={() => {
                  setFolderImages(folder.images);
                  setIsGalleryOpen(true);
                }}>
                <img src={folder.images[0]} alt={folder.folderName} />
                <div className={contentWrapperStyle}>
                  <p>{key}</p>
                  <p>{description}</p>
                  <div className={arrowStyle}>
                    <FaArrowAltCircleLeft />
                  </div>
                </div>
              </div>
            );
          })}
          {isGalleryOpen && (
            <GalleryPopup
              images={folderImages}
              closePopupGallery={closePopupGallery}
            />
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

const titleWrapperStyle = css`
  margin-bottom: 35px;
  > h1 {
    font-size: 45px;
    font-weight: 600;
  }

  > p {
    font-weight: 400;
    font-size: 20px;
  }
`;

const containerStyle = css`
  display: flex;
  gap: 40px;
  min-height: 60vh;
  flex-wrap: wrap;
`;

const contentWrapperStyle = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 10px;
`;

const arrowStyle = css`
  color: var(--primary);
  display: flex;
  width: 100%;
  justify-content: end;
  font-size: 20px;
`;

const cardStyle = css`
  display: flex;
  gap: 5px;
  height: 266px;
  width: 350px;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 1px 3px 9px 0px #0000001a;

  &:hover {
    background-color: #dcdbdb;
  }
`;
