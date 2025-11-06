'use client';

import { useState, useEffect } from 'react';

// Layout Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import CaseStudiesSection from './components/sections/CaseStudiesSection';
import JobSearchSection from './components/sections/JobSearchSection';
import HobbiesSection from './components/sections/HobbiesSection';
import ContactSection from './components/sections/ContactSection';

// Configuration
import { siteConfig } from '@/config/site.config';

// Data Imports
import personalInfo from '@/data/personal-info.json';
import navigationData from '@/data/navigation.json';
import heroStatsData from '@/data/hero-stats.json';
import aboutData from '@/data/about.json';
import skillsData from '@/data/skills.json';
import caseStudiesData from '@/data/case-studies.json';
import jobSearchData from '@/data/job-search.json';
import hobbiesData from '@/data/hobbies.json';
import contactData from '@/data/contact.json';
import footerData from '@/data/footer.json';

// Types
import {
  PersonalInfo,
  NavigationData,
  HeroStatsData,
  AboutData,
  SkillsData,
  CaseStudiesData,
  JobSearchData,
  HobbiesData,
  ContactData,
  FooterData,
} from '@/types';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Type assertions for JSON imports
  const typedPersonalInfo = personalInfo as PersonalInfo;
  const typedNavigationData = navigationData as NavigationData;
  const typedHeroStatsData = heroStatsData as HeroStatsData;
  const typedAboutData = aboutData as AboutData;
  const typedSkillsData = skillsData as SkillsData;
  const typedCaseStudiesData = caseStudiesData as CaseStudiesData;
  const typedJobSearchData = jobSearchData as JobSearchData;
  const typedHobbiesData = hobbiesData as HobbiesData;
  const typedContactData = contactData as ContactData;
  const typedFooterData = footerData as FooterData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation
        items={typedNavigationData.items}
        isScrolled={isScrolled}
        onNavigate={scrollToSection}
        name={typedPersonalInfo.name}
      />

      <HeroSection
        personalInfo={typedPersonalInfo}
        siteConfig={siteConfig}
        stats={typedHeroStatsData.stats}
        onNavigate={scrollToSection}
      />

      <AboutSection
        journey={typedAboutData.journey}
        motivations={typedAboutData.motivations}
        values={typedAboutData.values}
      />

      <SkillsSection
        coreSkills={typedSkillsData.coreSkills}
        toolStack={typedSkillsData.toolStack}
      />

      <CaseStudiesSection caseStudies={typedCaseStudiesData.caseStudies} />

      <JobSearchSection
        title={typedJobSearchData.title}
        criteria={typedJobSearchData.criteria}
        summary={typedJobSearchData.summary}
      />

      <HobbiesSection
        title={typedHobbiesData.title}
        hobbies={typedHobbiesData.hobbies}
        tagline={typedHobbiesData.tagline}
      />

      <ContactSection
        siteConfig={siteConfig}
        contactData={typedContactData}
      />

      <Footer text={typedFooterData.text} lastUpdate={typedFooterData.lastUpdate} />
    </div>
  );
}
