import AnimatedHeading from '../components/AnimatedHeading';

import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ChatWidget from '../components/ChatWidget';
import Layout from '../components/Layout'; // If using Layout to wrap

export default function Home() {
  return (
    <Layout>
      <main className="bg-gray-50 min-h-screen">
        <div className="pt-5 pb-5">
          <AnimatedHeading />
        </div>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
      </main>
    </Layout>
  );
}
