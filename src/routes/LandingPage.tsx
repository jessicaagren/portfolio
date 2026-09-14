import Footer from '../components/Footer/Footer';
import NeonSign from '../components/NeonSign/NeonSign';

export default function LandingPage() {
  return (
    <div className='LandingPage'>
      <div className='landingContent'>
        <NeonSign />
      </div>
      <Footer></Footer>
    </div>
  );
}
