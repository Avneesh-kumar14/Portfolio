
import './App.css';
import Header from './Component/Header';
import Part from './Component/Part';
import Footer from './Component/Footer';
import Ourproject from './Component/Ourproject';
import Services from './Component/Services';


function App() {
  return (
    <div className='bg-primary text-textcolor'>
      <Header />
      <Part />
      <Services />
      <Ourproject />
      <Footer />
    </div>
  );
}
export default App;
