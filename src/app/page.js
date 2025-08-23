import Faq from '../components/Faq/Faq'
import WhyTherapy from '../components/WhyTherapy/WhyTherapy'
import Psychologists from '../components/Psychologists/Psychologists'
import SpecialistsPart from '../components/SpecialistsPart/SpecialistsPart'
import IssuePart  from '../components/IssuePart/IssuePart'
import './globals.css';


export default function Home() {
  return (
    <>
      <IssuePart />
      <SpecialistsPart />
      <Psychologists />
      <WhyTherapy />
      <Faq />
    </>
  )
}
