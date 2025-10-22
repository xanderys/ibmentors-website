import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MessageCircle, Clock, Target, BookOpen, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 -ml-4 md:ml-0">
            <img src="/images/logo-header.png" alt="IB Mentors" className="h-8" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#team" className="text-sm font-medium hover:text-primary transition-colors">Team</a>
            <a href="#framework" className="text-sm font-medium hover:text-primary transition-colors">Framework</a>
            <a href="#programmes" className="text-sm font-medium hover:text-primary transition-colors">Programmes</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </nav>
          <Button asChild>
            <a href="#contact">Message Now</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Master IB English with a{" "}
              <span className="text-primary">45 Pointer</span> Tutor
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Unlock the secrets to how I scored{" "}
              <span className="font-semibold text-accent">19/20 for Paper 1</span> and ranked{" "}
              <span className="font-semibold text-accent">1st in my school</span> for IB English!
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#contact">Message Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-black text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Struggling with <span className="text-red-400 italic">confusing texts</span>,{" "}
              <span className="text-red-400 italic">fuzzy expressions</span> and{" "}
              <span className="text-red-400 italic">structuring essays</span>? You're not alone.
            </h2>
            <p className="text-lg text-center text-gray-300">
              The paper requires nuanced skills in text analysis and critique—areas many students find challenging.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <p className="text-gray-300 italic">
                    "My teacher says my <strong>analysis is not thorough</strong> enough or touch-and-go, but does not tell me how to improve"
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <p className="text-gray-300 italic">
                    "I have <strong>no idea how to structure</strong> my essay"
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <p className="text-gray-300 italic">
                    "I don't know how to <strong>evaluate literary language</strong> and keep <strong>retelling</strong> the text instead"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">Meet your Mentor</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Hi! I'm Xander 👋</h2>
              </div>
              <div className="space-y-4 text-lg">
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>I achieved a <strong>perfect score of 45/45</strong> in my IB exams among the top 0.8% of students to do so globally.</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Ranked as the <strong>Top Scorer for IB English</strong> in St. Joseph's Institution (<strong>Top #5 Global</strong> IB school) in Singapore.</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Scored an almost perfect <strong>19/20</strong> on my English Paper 1, <strong>85%</strong> for Individual Oral in addition to a <strong>91% overall</strong> English score.</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span>Received offers from globally renowned institutions like <strong>LSE, Imperial College London, UCL, NUS</strong>.</span>
                </p>
              </div>
              <p className="text-muted-foreground">
                Drawing from my wealth of experience mentoring students from <strong>Singapore's premier institutions</strong>—including SJI, ACSI, HCIS and more—each of my students have experienced exceptional improvements scoring mostly 7s in their English courses.
              </p>
              <p className="text-muted-foreground">
                <strong>Having tutored students of all abilities</strong>, Whether you're aiming to improve from a 4/5 grade or looking to polish your exam strategies to unlock the coveted 7, my tailored approach is designed to meet you where you are.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/xander.webp" 
                alt="Xander - IB Mentor" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section id="framework" className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">The 45-point Framework</h2>
            <p className="text-xl text-muted-foreground">
              Guaranteed to <strong>clear the fuzziness of English</strong> and boost you to an elite <span className="text-accent font-bold">7</span>!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Stress-Free Success</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Achieve your dream grades without the unnecessary stress, confusion and mistakes
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Unlimited Practice & Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Benefit from unlimited exam-centric marking and personalised feedback on your work
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>45-pointer at your fingertips</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Gain invaluable IB mentorship with someone who actually took and succeeded in the IB to the fullest degree
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mb-4" />
                <CardTitle>24/7 Questions and Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Receive 24/7 support and instant access to expert guidance for all your IB English queries, ensuring you're never left in the dark.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Exam-based Questionbanks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Exercises to focus on the skills demanded by the IB English course. Master the exact style and difficulty of questions you will face.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Tailored Mentorship to your needs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We adapt to your unique learning style, strengths and areas for improvement. Offering you a personal roadmap to excel.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section id="programmes" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">My Programmes</h2>
            <p className="text-xl text-muted-foreground">Choose a plan that's right for you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">IB English Premium Classes</CardTitle>
                <CardDescription className="text-base">
                  Unlock the strategies—I personally used—to <strong>score 19/20</strong> in Paper 1 and <strong>rank 1st</strong> in my school for IB English.
                </CardDescription>
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
                <Button className="w-full" size="lg" asChild>
                  <a href="#contact">Book Now*</a>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  *As a private tutor I only commit to 10 students at once so secure your spot quickly!
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">IAs, EE and TOK</CardTitle>
                <CardDescription className="text-base">
                  Additional coursework specific guidance, personalised for all your IB needs. Let me handle it.
                </CardDescription>
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
                <Button className="w-full" size="lg" variant="outline" asChild>
                  <a href="#contact">Inquire Now*</a>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  *As a private tutor I only commit to 10 students at once so secure your spot quickly!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center space-y-4">
            <p className="text-lg">Learn more about my tutoring and how I can help you.</p>
            <Button size="lg" asChild>
              <a href="#contact">Book Now*</a>
            </Button>
            <p className="text-muted-foreground mt-8">
              Have someone in mind? Receive <strong className="text-accent">100SGD</strong> for each first-time referral!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Testimonials</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "English was always my weakest subject, especially with the pressure of IB exams looming. I feared I wouldn't make the grade until I started sessions with Xander. His tutoring transformed my approach to learning; Xander personalized each lesson to fit my learning style, making a world of difference."
                </p>
                <p className="font-semibold">- Arthur Goh (HCIS)</p>
                <p className="text-sm text-muted-foreground">SL Language & Literature: 7</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "Tutor Xander was an excellent tutor for my daughter. Xander's one-on-one attention and deep understanding of the IB curriculum helped invaluably in preparing her for the IB exams and mastering the answering techniques that were not taught in her school. She has certainly benefitted from his teaching!"
                </p>
                <p className="font-semibold">- Mother of, Elina (UWC)</p>
                <p className="text-sm text-muted-foreground">SL Literature: 7</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "I felt especially anxious about English because it felt like I could never improve it no matter how hard I worked. Xander's tutoring changed that. His approach demystified the IB expectations and helped me apply my knowledge with precision. The strategies he shared were exactly what I needed to tackle my exams confidently."
                </p>
                <p className="font-semibold">- Ian Wong (SJI)</p>
                <p className="text-sm text-muted-foreground">SL Language & Literature: 6, P1: 16/20</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">FAQs</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Why would I need a tutor for English?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  IB English requires specific analytical and writing skills that aren't always taught in school. A tutor who has achieved top scores can provide personalized guidance, exam strategies, and feedback that helps you understand exactly what the IB is looking for.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are there any free trials/refunds?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I offer a free consultation session where we can evaluate your current level and discuss how I can help you improve. This allows you to experience my teaching approach before committing to the full programme.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose My Personalized Tutoring Over a Tuition Center?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlike tuition centers with large classes, I provide one-on-one attention tailored to your specific needs. As someone who achieved a perfect 45/45 score, I understand the IB system intimately and can offer strategies that worked at the highest level. You'll also get unlimited access to me for questions and feedback, not just during scheduled classes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Unlock Your IB English Success</h2>
            <p className="text-xl text-muted-foreground">Register Today and Start Excelling!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="mailto:info@ibmentors.com">Email Me</a>
              </Button>
              <Button size="lg" className="text-lg px-8" variant="outline" asChild>
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">WhatsApp</a>
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
              <a href="https://instagram.com/ibmentors" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

