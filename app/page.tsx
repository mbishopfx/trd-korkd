import HeroWithForm from '@/components/home/HeroWithForm';
import PromoVideo from '@/components/home/PromoVideo';
import FounderQuote from '@/components/home/FounderQuote';
import MissionSection from '@/components/home/MissionSection';
import AvailabilitySection from '@/components/home/AvailabilitySection';
import ServicesImageGrid from '@/components/home/ServicesImageGrid';
import FAQSection from '@/components/home/FAQSection';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import FinalCTA from '@/components/home/FinalCTA';
import { 
  getOrganizationSchema, 
  getLocalBusinessSchema, 
  getPersonSchema, 
  getWebsiteSchema,
  getOfferSchema,
  getFAQSchema 
} from '@/lib/schema';

export default function Home() {
  const faqs = [
    {
      question: "How quickly can I start seeing results?",
      answer: "Most clients see increased leads and visibility within 30-60 days. We focus on sustainable, organic growth strategies that compound over time."
    },
    {
      question: "What's included in the $499 package?",
      answer: "Our starter package includes Google Business Profile optimization, local SEO foundation, initial website analysis, and custom strategy development. We'll create a roadmap specifically for your business goals."
    },
    {
      question: "Do you work with startups or just established businesses?",
      answer: "Both! We specialize in helping entrepreneurs launch new ventures and helping established businesses scale. Whether you're starting from scratch or looking to grow, we have the expertise to help."
    },
    {
      question: "What makes Kork'd Media different from other agencies?",
      answer: "We're not just marketers - we're tech bridges who understand the full stack. From strategy to implementation, we provide custom solutions that actually work for your specific industry and goals."
    }
  ];

  return (
    <>
      {/* Enhanced Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getOfferSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />

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
