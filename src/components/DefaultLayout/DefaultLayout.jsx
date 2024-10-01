import { ClosestUpdate } from '~components/ClosestUpdate/ClosestUpdate';
import { Footer } from '~components/Footer/Footer';
import { Navbar } from '~components/Navbar/Navbar';

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <ClosestUpdate />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
