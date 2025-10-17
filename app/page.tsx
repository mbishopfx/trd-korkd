import HeroWithForm from '@/components/home/HeroWithForm';
import PromoVideo from '@/components/home/PromoVideo';
import FounderQuote from '@/components/home/FounderQuote';
import MissionSection from '@/components/home/MissionSection';
import AvailabilitySection from '@/components/home/AvailabilitySection';
import ServicesImageGrid from '@/components/home/ServicesImageGrid';
import FAQSection from '@/components/home/FAQSection';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroWithForm />
      <PromoVideo />
      <FounderQuote />
      <MissionSection />
      <AvailabilitySection />
      <ServicesImageGrid />
      <FAQSection />
      <TestimonialCarousel />
      <FinalCTA />
    </>
  );
}
