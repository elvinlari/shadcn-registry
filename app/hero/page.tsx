"use client"

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

import {
  SiApple,
  SiFacebook,
  SiGithub,
  SiGoogle,
  SiInstagram,
  SiX,
  SiYoutube,
} from '@icons-pack/react-simple-icons';
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from '@/components/ui/announcement';
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/marquee';
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from '@/components/ui/video-player';
import NumberFlow from '@number-flow/react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, BadgeCheck, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FloatingNavProps {
  className?: string;
}

const navItems = [
  { label: 'Hero', href: '#hero' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const logos = [
  {
    name: 'GitHub',
    icon: SiGithub,
    url: 'https://github.com',
  },
  {
    name: 'Facebook',
    icon: SiFacebook,
    url: 'https://facebook.com',
  },
  {
    name: 'Google',
    icon: SiGoogle,
    url: 'https://google.com',
  },
  {
    name: 'X',
    icon: SiX,
    url: 'https://x.com',
  },
  {
    name: 'Apple',
    icon: SiApple,
    url: 'https://apple.com',
  },
  {
    name: 'Instagram',
    icon: SiInstagram,
    url: 'https://instagram.com',
  },
  {
    name: 'YouTube',
    icon: SiYoutube,
    url: 'https://youtube.com',
  },
];

const plans = [
  {
    id: 'hobby',
    name: 'Hobby',
    price: {
      monthly: 'Free forever',
      yearly: 'Free forever',
    },
    description:
      'The perfect starting place for your web app or personal project.',
    features: [
      '50 API calls / month',
      '60 second checks',
      'Single-user account',
      '5 monitors',
      'Basic email support',
    ],
    cta: 'Get started for free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: {
      monthly: 90,
      yearly: 75,
    },
    description: 'Everything you need to build and scale your business.',
    features: [
      'Unlimited API calls',
      '30 second checks',
      'Multi-user account',
      '10 monitors',
      'Priority email support',
    ],
    cta: 'Subscribe to Pro',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 'Get in touch for pricing',
      yearly: 'Get in touch for pricing',
    },
    description: 'Critical security, performance, observability and support.',
    features: [
      'You can DDOS our API.',
      'Nano-second checks.',
      'Invite your extended family.',
      'Unlimited monitors.',
      "We'll sit on your desk.",
    ],
    cta: 'Contact us',
  },
];


export function FloatingNav({ className }: FloatingNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-300',
        'rounded-full border px-6 py-3',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg'
          : 'bg-background/95 backdrop-blur-sm',
        className
      )}
    >
      <div className="flex items-center space-x-1">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant={activeSection === item.href.substring(1) ? 'default' : 'ghost'}
            size="sm"
            onClick={() => scrollToSection(item.href)}
            className="text-sm font-medium transition-colors"
          >
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => (
  <section id="hero" className="min-h-screen flex flex-col gap-16 px-8 py-24 text-center">
    <div className="flex flex-col items-center justify-center gap-8">
      <a href="#pricing">
        <Announcement>
          <AnnouncementTag>New</AnnouncementTag>
          <AnnouncementTitle>Revolutionary SaaS Dashboard Platform</AnnouncementTitle>
        </Announcement>
      </a>
      <h1 className="mb-0 text-balance font-medium text-6xl md:text-7xl xl:text-[5.25rem] bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
        Build. Scale. Succeed.
      </h1>
      <p className="mt-0 mb-0 text-balance text-xl text-muted-foreground max-w-3xl">
        Transform your business with our cutting-edge dashboard platform. 
        Streamline operations, analyze data, and accelerate growth with 
        beautiful, responsive components designed for the modern web.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Button asChild size="lg" className="text-lg px-8 py-4 h-14">
          <a href="#pricing" className="flex items-center no-underline">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 h-14">
          <a href="#about" className="no-underline">
            Learn More
          </a>
        </Button>
      </div>
      <div className="flex items-center gap-8 mt-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <BadgeCheck className="h-4 w-4 text-green-500" />
          <span>No credit card required</span>
        </div>
        <div className="flex items-center gap-2">
          <BadgeCheck className="h-4 w-4 text-green-500" />
          <span>14-day free trial</span>
        </div>
        <div className="flex items-center gap-2">
          <BadgeCheck className="h-4 w-4 text-green-500" />
          <span>Cancel anytime</span>
        </div>
      </div>
    </div>
    <section className="flex flex-col items-center justify-center gap-8 rounded-xl bg-secondary py-12 pb-18">
      <p className="mb-0 text-balance font-medium text-muted-foreground">
        Trusted by teams at leading companies worldwide
      </p>
      <div className="flex size-full items-center justify-center">
        <Marquee>
          <MarqueeFade className="from-secondary" side="left" />
          <MarqueeFade className="from-secondary" side="right" />
          <MarqueeContent pauseOnHover={false}>
            {logos.map((logo) => (
              <MarqueeItem className="mx-16 size-12" key={logo.name}>
                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                  <logo.icon className="size-full opacity-70 hover:opacity-100 transition-opacity" />
                </a>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-4xl">
        <div className="text-center">
          <div className="text-3xl font-bold text-foreground">10k+</div>
          <div className="text-sm text-muted-foreground">Active Users</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-foreground">99.9%</div>
          <div className="text-sm text-muted-foreground">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-foreground">24/7</div>
          <div className="text-sm text-muted-foreground">Support</div>
        </div>
      </div>
    </section>
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-3xl -z-10"></div>
      <VideoPlayer className="overflow-hidden rounded-lg border shadow-2xl">
        <VideoPlayerContent
          crossOrigin=""
          muted
          preload="metadata"
          poster="https://via.placeholder.com/800x450/000000/FFFFFF?text=Video+Placeholder"
          slot="media"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4"
        />
        <VideoPlayerControlBar>
          <VideoPlayerPlayButton />
          <VideoPlayerSeekBackwardButton />
          <VideoPlayerSeekForwardButton />
          <VideoPlayerTimeRange />
          <VideoPlayerTimeDisplay showDuration />
          <VideoPlayerMuteButton />
          <VideoPlayerVolumeRange />
        </VideoPlayerControlBar>
      </VideoPlayer>
    </div>
  </section>
);

// Pricing Section Component
const PricingSection = () => {
  const [frequency, setFrequency] = useState<string>('monthly');
  
  return (
    <section id="pricing" className="min-h-screen flex flex-col gap-16 px-8 py-24 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="mb-0 text-balance font-medium text-5xl tracking-tighter!">
          Simple, transparent pricing
        </h1>
        <p className="mx-auto mt-0 mb-0 max-w-2xl text-balance text-lg text-muted-foreground">
          Managing a business is hard enough, so why not make your life easier?
          Our pricing plans are simple, transparent and scale with you.
        </p>
        <Tabs defaultValue={frequency} onValueChange={setFrequency}>
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">
              Yearly
              <Badge variant="secondary">20% off</Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="mt-8 grid w-full max-w-4xl gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              className={cn(
                'relative w-full text-left',
                plan.popular && 'ring-2 ring-primary'
              )}
              key={plan.id}
            >
              {plan.popular && (
                <Badge className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 rounded-full">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="font-medium text-xl">
                  {plan.name}
                </CardTitle>
                <CardDescription>
                  <p>{plan.description}</p>
                  {typeof plan.price[frequency as keyof typeof plan.price] ===
                  'number' ? (
                    <NumberFlow
                      className="font-medium text-foreground"
                      format={{
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0,
                      }}
                      suffix={`/month, billed ${frequency}.`}
                      value={
                        plan.price[
                          frequency as keyof typeof plan.price
                        ] as number
                      }
                    />
                  ) : (
                    <span className="font-medium text-foreground">
                      {plan.price[frequency as keyof typeof plan.price]}.
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                {plan.features.map((feature, index) => (
                  <div
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                    key={index}
                  >
                    <BadgeCheck className="h-4 w-4" />
                    {feature}
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'secondary'}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center items-center px-8 py-24 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="mb-8 text-balance font-medium text-5xl tracking-tighter">
        About Our Platform
      </h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're dedicated to providing developers with the best tools and components
            to build exceptional web applications. Our platform combines modern design
            principles with cutting-edge technology.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-primary" />
              Modern, responsive design components
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-primary" />
              Comprehensive documentation
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-primary" />
              Active community support
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-primary" />
              Regular updates and improvements
            </li>
          </ul>
        </div>
        <div className="bg-secondary rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Get Started Today</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of developers who are already building amazing applications
            with our platform.
          </p>
          <Button className="w-full">
            Start Building
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// Contact Section Component
const ContactSection = () => (
  <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-8 py-24 bg-gradient-to-br from-primary/5 to-secondary/10">
    <div className="max-w-6xl mx-auto w-full">
      <div className="text-center mb-16">
        <h1 className="mb-4 text-balance font-medium text-5xl tracking-tighter">
          Let's Build Something Amazing Together
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to transform your business? Get in touch with our team and let's discuss 
          how we can help you achieve your goals.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">hello@yourcompany.com</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-muted-foreground">123 Innovation Street<br />Tech Valley, CA 94000</p>
                  <p className="text-sm text-muted-foreground">Open office hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-semibold mb-4">Why Work With Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                <span className="text-sm">Expert team with 10+ years experience</span>
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                <span className="text-sm">Proven track record with 500+ projects</span>
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                <span className="text-sm">24/7 dedicated support</span>
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                <span className="text-sm">Money-back guarantee</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Contact Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <input 
                  className="w-full px-3 py-2 border rounded-md bg-background" 
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <input 
                  className="w-full px-3 py-2 border rounded-md bg-background" 
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input 
                type="email"
                className="w-full px-3 py-2 border rounded-md bg-background" 
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Company</label>
              <input 
                className="w-full px-3 py-2 border rounded-md bg-background" 
                placeholder="Your Company"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea 
                className="w-full px-3 py-2 border rounded-md bg-background min-h-[120px]" 
                placeholder="Tell us about your project..."
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* CTA Section */}
      <div className="mt-16 text-center bg-card border rounded-lg p-8">
        <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don't wait! Join thousands of satisfied customers who have transformed 
          their businesses with our platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default function Index() {
  return (
    <div className="relative">
      <FloatingNav />
      <HeroSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

