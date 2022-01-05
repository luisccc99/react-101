import HeaderInfo from './components/HeaderInfo';
import BodySection from './components/BodySection';
import Footer from './components/Footer';

function App() {
  const personalInfo = {
    name: 'Luis Cruz',
    position: 'Software Developer',
    website: 'luiscruz.website',
    image: 'https://res.cloudinary.com/dpyp69d13/image/upload/v1641229808/38260178_jaydzc.jpg',
    about: "Focused and passionate student looking for a job position to gain experience as a systems engineer and support company's needs or software systems with my hard and soft skills",
    interests: 'Reading drama books, Watch Community or YouTube videos'
  }

  return (
    <div className="business-card">
      <HeaderInfo   
        name={personalInfo.name} 
        position={personalInfo.position} 
        website={personalInfo.website}
        image={personalInfo.image} />
      <main className='business-card__body'>
        <BodySection title="About" content={personalInfo.about} />
        <BodySection title="Interests" content={personalInfo.interests} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
