import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, MessageCircle, Clock, Target, BookOpen, Users, Mail, Instagram, Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo - smaller on mobile */}
          <div className="flex items-center">
            <img src="/images/logo-header.png" alt="IB Mentors" className="h-6 sm:h-8" />
          </div>

          {/* Mobile navigation - show tabs directly */}
          <nav className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <a href="#team" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors">Team</a>
            <a href="#framework" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors">Framework</a>
            <a href="#programmes" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors">Programmes</a>
            <a href="#testimonials" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#faq" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </nav>

          {/* Right side - social icons and CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="https://wa.me/message/WMVGQ3E3MQ2PA1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hidden sm:block">
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/ibmentorsofficial" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hidden sm:block">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:info@ibmentors.com" className="hover:text-primary transition-colors hidden sm:block">
              <Mail className="w-5 h-5" />
            </a>
            <Button asChild className="btn-enhanced rounded-full text-xs sm:text-sm px-3 sm:px-4">
              <a href="https://wa.me/message/WMVGQ3E3MQ2PA1" target="_blank" rel="noopener noreferrer">Message Now</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-white overflow-hidden">
        {/* Decorative shapes - using actual SVG files */}
        <img 
          src="/images/23.svg" 
          alt="" 
          className="absolute top-10 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-70 pointer-events-none animate-float"
        />
        <img 
          src="/images/15.svg" 
          alt="" 
          className="absolute bottom-20 left-0 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 opacity-60 pointer-events-none animate-float-slow" 
          style={{ animationDelay: '1s' }}
        />
        <img 
          src="/images/69.svg" 
          alt="" 
          className="absolute top-16 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 opacity-70 pointer-events-none animate-float" 
          style={{ animationDelay: '2s' }}
        />
        <img 
          src="/images/81.svg" 
          alt="" 
          className="absolute bottom-32 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 opacity-60 pointer-events-none animate-float-slow" 
          style={{ animationDelay: '0.5s' }}
        />
        <img 
          src="/images/8.svg" 
          alt="" 
          className="hidden md:block absolute top-1/2 left-2 w-16 h-16 lg:w-20 lg:h-20 opacity-50 pointer-events-none animate-float" 
          style={{ animationDelay: '1.5s' }}
        />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight font-display">
              Master IB English with a{" "}
              <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-amber-300 bg-clip-text text-transparent">
                45 Pointer
              </span>{" "}
              Tutor
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Unlock the secrets to how I scored{" "}
              <span className="font-bold bg-yellow-200 px-2 py-1 rounded whitespace-nowrap">19/20 for Paper 1</span> and ranked{" "}
              <span className="font-bold bg-yellow-200 px-2 py-1 rounded whitespace-nowrap">1st in my school</span> for{" "}
              <span className="font-bold">IB English!</span>
            </p>
            <Button size="lg" className="text-lg px-8 mt-8 btn-enhanced rounded-full shadow-lg" asChild>
              <a href="#contact">Message Now</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Wave Divider */}
      <div className="relative w-full h-24 md:h-32 bg-white">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'translateY(1px)' }}>
          <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" fill="#000000"></path>
        </svg>
      </div>

      {/* Problem Statement */}
      <section className="relative py-16 md:py-24 bg-black text-white overflow-hidden">
        {/* Decorative swirls */}
        <div className="absolute left-0 top-1/4 w-16 md:w-24 opacity-50 pointer-events-none">
          <svg viewBox="0 0 100 100" className="text-white">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute right-0 bottom-1/4 w-16 md:w-24 opacity-50 pointer-events-none">
          <svg viewBox="0 0 100 100" className="text-white">
            <path d="M50,10 Q70,30 50,50 T50,90" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M40,10 Q60,30 40,50 T40,90" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M60,10 Q80,30 60,50 T60,90" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Struggling with <span className="italic" style={{ color: '#ef4444' }}>confusing texts</span>,{" "}
              <span className="italic" style={{ color: '#ef4444' }}>fuzzy expressions</span> and{" "}
              <span className="italic" style={{ color: '#ef4444' }}>structuring essays</span>? You're not alone.
            </h2>
            <p className="text-lg text-center text-gray-300">
              The paper requires nuanced skills in text analysis and critique—areas many students find challenging.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <p className="text-white italic text-base leading-relaxed">
                  "My teacher says my <strong className="italic" style={{ color: '#ff5757' }}>analysis is not thorough</strong> enough or touch-and-go, but does not tell me how to improve"
                </p>
              </div>
              <div className="p-6">
                <p className="text-white italic text-base leading-relaxed">
                  "I have <strong className="italic" style={{ color: '#ff5757' }}>no idea how to structure</strong> my essay"
                </p>
              </div>
              <div className="p-6">
                <p className="text-white italic text-base leading-relaxed">
                  "I don't know how to <strong className="italic" style={{ color: '#ff5757' }}>evaluate literary language</strong> and keep <strong className="italic" style={{ color: '#ff5757' }}>retelling</strong> the text instead"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider - Black to White */}
      <div className="relative w-full h-24 md:h-32 bg-black">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'translateY(1px)' }}>
          <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Meet your Mentor</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Hi! I'm Xander 👋</h2>
              </div>
              <div className="space-y-4 text-lg">
                <p className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🌍</span>
                  <span>I achieved a <span className="bg-purple-100 text-purple-700 px-1 rounded">perfect score of 45/45</span> in my IB exams among the <span className="bg-purple-100 text-purple-700 px-1 rounded">top 0.8%</span> of students to do so globally.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🏅</span>
                  <span>Ranked as the <span className="bg-yellow-100 text-yellow-800 px-1 rounded">Top Scorer</span> for IB English in St. Joseph's Institution (<strong>Top #5 Global</strong> IB school) in Singapore.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">💯</span>
                  <span>Scored an almost perfect <span className="bg-yellow-100 text-yellow-800 px-1 rounded">19/20</span> on my <span className="whitespace-nowrap">English Paper 1</span>, <span className="bg-yellow-100 text-yellow-800 px-1 rounded">85%</span> for Individual Oral in addition to a <span className="bg-yellow-100 text-yellow-800 px-1 rounded">91% overall</span> English score.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🏆</span>
                  <span>Received offers from globally renowned institutions like <strong>LSE, Imperial College London, UCL, NUS</strong>.</span>
                </p>
              </div>
              <p className="text-lg">
                Drawing from my wealth of experience mentoring students from <span className="bg-yellow-200 px-1 rounded font-semibold whitespace-nowrap">Singapore's premier institutions</span>—including SJI, ACSI, HCIS and more—each of my students have experienced <span className="bg-purple-100 text-purple-700 px-1 rounded font-semibold">exceptional improvements scoring mostly 7s</span> in their English courses.
              </p>
              <p className="text-lg">
                <span className="bg-yellow-200 px-1 rounded font-semibold">Having tutored students of all abilities</span>, whether you're aiming to improve from a 4/5 grade or looking to polish your exam strategies to unlock the coveted 7, my tailored approach is designed to meet you where you are.
              </p>
              
              {/* University Logos */}
              <div className="flex items-center gap-4 md:gap-6 pt-6 flex-wrap justify-center md:justify-start">
                <img src="/images/1200px-LSE_Logo.svg.png" alt="London School of Economics" className="h-10 md:h-12 object-contain" />
                <img src="/images/Imperial_logo.png" alt="Imperial College London" className="h-10 md:h-12 object-contain" />
                <img src="/images/ucl-logo.png.webp" alt="University College London" className="h-10 md:h-12 object-contain" />
                <img src="/images/National_University_of_Singapore-Logo.wine.png" alt="National University of Singapore" className="h-10 md:h-12 object-contain" />
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/xander.webp" 
                alt="Xander - IB Mentor" 
                className="rounded-lg shadow-2xl w-full h-full max-h-[700px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section id="framework" className="relative py-20 md:py-28 bg-[#7c6bea] text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-4xl animate-sparkle">✨</div>
        <div className="absolute top-20 right-1/4 text-2xl animate-sparkle" style={{ animationDelay: '1s' }}>⭐</div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white">The 45-point Framework</h2>
            <p className="text-xl text-white/90">
              Guaranteed to <strong className="text-white">clear the fuzziness of English</strong> and boost you to an <span className="text-green-400 font-bold underline decoration-green-400 decoration-2">elite 7</span>!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Stress-Free Success</h3>
              <p className="text-white/80">
                Achieve your dream grades without the unnecessary stress, confusion and mistakes
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Unlimited Practice & Feedback</h3>
              <p className="text-white/80">
                Benefit from unlimited exam-centric marking and personalised feedback on your work
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">45-pointer at your fingertips</h3>
              <p className="text-white/80">
                Gain invaluable IB mentorship with someone who actually took and succeeded in the IB to the fullest degree
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">24/7 Questions and Guidance</h3>
              <p className="text-white/80">
                Receive 24/7 support and instant access to expert guidance for all your IB English queries, ensuring you're never left in the dark.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Exam-based Questionbanks</h3>
              <p className="text-white/80">
                Exercises to focus on the skills demanded by the IB English course. Master the exact style and difficulty of questions you will face.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">Tailored Mentorship to your needs</h3>
              <p className="text-white/80">
                We adapt to your unique learning style, strengths and areas for improvement. Offering you a personal roadmap to excel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider - Purple to White */}
      <div className="relative w-full h-24 md:h-32 bg-[#7c6bea]">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'translateY(1px)' }}>
          <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Programmes Section */}
      <section id="programmes" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">My Programmes</h2>
            <p className="text-xl text-muted-foreground">Choose a plan that's right for you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-lg card-hover overflow-hidden border-0 rounded-xl">
              <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-6 text-white rounded-t-xl">
                <CardTitle className="text-2xl text-white">IB English Premium Classes</CardTitle>
                <CardDescription className="text-white/90 mt-2">
                  Unlock the strategies—I personally used—to <strong>score 19/20</strong> in Paper 1 and <strong>rank 1st</strong> in my school for IB English.
                </CardDescription>
              </div>
              <CardHeader className="pt-6">
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>1.5-hour sprint class every week: fully covering Paper 1/2 and Individual Oral</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Unlimited Mentoring: Ask questions 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Unlimited feedback on practices (even outside of classes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Essential 45 Pointer Cheat Sheets: Literary Device Banks, Paper 1/2 Formats, Text-type Toolkits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Personalised IB Success Roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Have some questions? Receive a free consultation with me to evaluate your weak areas and tips on how to improve your writing immediately!</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full btn-enhanced rounded-full" size="lg" asChild>
                  <a href="#contact">Book Now*</a>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  *As a private tutor I only commit to 10 students at once so secure your spot quickly!
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover overflow-hidden border-0 rounded-xl">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white rounded-t-xl">
                <CardTitle className="text-2xl text-white">IAs, EE and TOK</CardTitle>
                <CardDescription className="text-white/90 mt-2">
                  Additional coursework specific guidance, personalised for all your IB needs. Let me handle it.
                </CardDescription>
              </div>
              <CardHeader className="pt-6">
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>1.5-hour sprint class every week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>1-hour onboarding consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Personalised assignment guidance (weekly)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Personalised coursework roadmap and outline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Unlimited feedback based on specific IB requirements</span>
                    </li>
                  </ul>
                </div>
                <Button className="w-full btn-enhanced rounded-full" size="lg" variant="outline" asChild>
                  <a href="#contact">Inquire Now*</a>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  *As a private tutor I only commit to 10 students at once so secure your spot quickly!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            <Card className="shadow-lg card-hover">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="flex justify-center">
                  <MessageCircle className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">Message or call now</h3>
                <p className="text-muted-foreground">
                  Learn more about my tutoring and how I can help you.
                </p>
                <Button size="lg" className="btn-enhanced rounded-full bg-black text-white hover:bg-black/90" asChild>
                  <a href="https://wa.me/message/WMVGQ3E3MQ2PA1" target="_blank" rel="noopener noreferrer">Book Now*</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg card-hover">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">$</div>
                </div>
                <h3 className="text-2xl font-bold">Refer a friend & earn</h3>
                <p className="text-muted-foreground">
                  Have someone in mind? Receive <strong className="text-purple-600">100SGD</strong> for each first-time referral!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#7c6bea]">Testimonials</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="card-hover shadow-md relative">
              <CardContent className="pt-6">
                <div className="text-[#7c6bea] text-5xl font-serif absolute top-4 left-4 leading-none">"</div>
                <p className="text-muted-foreground italic mb-4 pt-8">
                  "English was always my weakest subject, especially with the pressure of IB exams looming. I feared I wouldn't make the grade until I started sessions with Xander. His tutoring transformed my approach to learning; Xander personalized each lesson to fit my learning style, making a world of difference."
                </p>
                <p className="font-semibold">- Arthur Goh (HCIS)</p>
                <p className="text-sm text-muted-foreground">SL Language & Literature: 7</p>
              </CardContent>
            </Card>

            <Card className="card-hover shadow-md relative">
              <CardContent className="pt-6">
                <div className="text-[#7c6bea] text-5xl font-serif absolute top-4 left-4 leading-none">"</div>
                <p className="text-muted-foreground italic mb-4 pt-8">
                  Tutor Xander was an excellent tutor for my daughter. Xander's one-on-one attention and deep understanding of the IB curriculum helped invaluably in preparing her for the IB exams and mastering the answering techniques that were not taught in her school. She has certainly benefitted from his teaching!"
                </p>
                <p className="font-semibold">- Mother of, Elina (UWC)</p>
                <p className="text-sm text-muted-foreground">SL Literature: 7</p>
              </CardContent>
            </Card>

            <Card className="card-hover shadow-md relative">
              <CardContent className="pt-6">
                <div className="text-[#7c6bea] text-5xl font-serif absolute top-4 left-4 leading-none">"</div>
                <p className="text-muted-foreground italic mb-4 pt-8">
                  I felt especially anxious about English because it felt like I could never improve it no matter how hard I worked. Xander's tutoring changed that. His approach demystified the IB expectations and helped me apply my knowledge with precision. The strategies he shared were exactly what I needed to tackle my exams confidently."
                </p>
                <p className="font-semibold">- Ian Wong (SJI)</p>
                <p className="text-sm text-muted-foreground">SL Language & Literature: 6, P1: 16/20</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">FAQs</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Why would I need a tutor for English?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  English is something most students overlook or give up because they simply do not understand the demands of the subject. As your tutor and with my proven strong ability in English from my success in the IB, my goal is to teach you the perspective and skillsets to dominate in this subject.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Are there any free trials/refunds?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  I offer a free consultation session where we can evaluate your current level and discuss how I can help you improve. This allows you to experience my teaching approach before committing to the full programme.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  Why Choose My Personalized Tutoring Over a Tuition Center?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  Opting for my tutoring services is like getting a bespoke suit instead of a retail one—I offer quality, personalised attention, adaptable lessons, and direct feedback to suit your learning style and goals, unlike the one-size-fits-all approach of large tuition centres.
                  <br/><br/>
                  Further, with my first-hand experience in excelling in the IBDP, I offer a fresh perspective and proven competency to teach my students to unlock their greatest potential in the IB.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-28 bg-[#7c6bea] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Unlock Your IB English Success</h2>
            <p className="text-xl text-white/90">Register Today and Start Excelling!</p>
            <div className="flex justify-center">
              <Button size="lg" className="text-lg px-10 py-6 bg-black hover:bg-black/90 text-white rounded-full btn-enhanced" asChild>
                <a href="https://wa.me/message/WMVGQ3E3MQ2PA1" target="_blank" rel="noopener noreferrer">Book a class now!</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/images/logo-header.png" alt="IB Mentors" className="h-6" />
              <span className="text-sm text-muted-foreground">© 2024 IBMentors. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:info@ibmentors.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                info@ibmentors.com
              </a>
              <a href="https://instagram.com/ibmentorsofficial" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

