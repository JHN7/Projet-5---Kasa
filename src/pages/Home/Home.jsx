import Banner from '../../components/Banner/Banner';
import HomeBanner from '../../assets/Banniere-Accueil.jpg'
import Gallery from '../../components/Gallery/Gallery';

function Home() {
  return (
    <main className="container">
      <Banner image={HomeBanner} text={<>Chez vous, <br className="mobile-break" /> partout et ailleurs </>}/>
      <Gallery />
      
    </main>
  );
}

  export default Home;
  