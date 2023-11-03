import './style/App.css';
import Header from './Header';
import HeaderMobile from './mobileJsx/HeaderMobile';
import Skills from './Skills';
import Certificate from './Certificate';
import CertificateMobile from './mobileJsx/CertificateMobile';
import Development from './Development';
import Experience from './Experience';
import ExperienceMobile from './mobileJsx/ExperienceMobile';
import Paginate from './Paginate';
import Responsive from './Responsive';

function App() {
  return <>
  <Header />
  <HeaderMobile />
  <div className='frame24'>
    <article className='frame25'>
      <Skills />
      <Certificate />
    </article>
    <article className='frame26'>
      <Development  tikers="#HTML #CSS #responsive" title="Título"/>
      <Experience />
    </article>
  </div>
    <div className='devMobile'>
    <Development  tikers="#HTML #CSS #responsive" title="Título"/>
    </div>
    <ExperienceMobile />
    <CertificateMobile />
    <Responsive />
    <Paginate />
  </>
}

export default App
