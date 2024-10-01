import { ObituariesSection } from '~/ObituariesSection/ObituariesSection';
import { DefaultLayout } from '~components/DefaultLayout/DefaultLayout';
import { Hero } from '~components/Hero/Hero';
import { LifeStations } from '~components/LifeStations/LifeStations';

const HomePage = () => {
  return (
    <DefaultLayout>
      <Hero />
      <div className={'container'}>
        <LifeStations />
        <ObituariesSection />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
