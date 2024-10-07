import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { AlertStack } from './AlertStack/AlertStack';
import { Gallery } from '~pages/Gallery';
import { css } from '@emotion/css';

import 'yet-another-react-lightbox/styles.css';
import { ObituariesPage } from '~pages/ObituariesPage';

const App = () => {
  return (
    <div className={appStyle}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<Gallery />} path={'/gallery'} />
          <Route element={<ObituariesPage />} path={'/Obituaries'} />
        </Routes>
      </BrowserRouter>
      <AlertStack />
    </div>
  );
};

const appStyle = css`
  position: relative;
  min-height: 100vh;
`;

export default App;
