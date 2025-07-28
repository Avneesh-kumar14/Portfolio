import { Import } from 'lucide-react';
import './App.css';
import Header from './Component/Header';
import Part from './Component/Part';
import Footer from './component/footer';
import Ourproject from './component/ourproject';
import Services from './component/services';


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
