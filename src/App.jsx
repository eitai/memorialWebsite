import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { AlertStack } from './AlertStack/AlertStack';
import { Gallery } from '~components/Gallery/Gallery';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<Gallery />} path={'/gallery'} />
        </Routes>
      </BrowserRouter>
      <AlertStack />
    </div>
  );
};

export default App;
