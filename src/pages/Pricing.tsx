import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Check, ArrowRight, HelpCircle, ChevronDown,
  CreditCard, DollarSign, Percent, Clock,
  Shield, Zap, Star, Award, Users
} from 'lucide-react';
import SEO from '@/components/SEO';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import FloatingLogo from '@/components/FloatingLogo';
import HexagonNetwork from '@/components/HexagonNetwork';

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      setCount(Math.floor(progressPercent * end));

      if (progressPercent < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}</span>;
};

// Floating element animation
const FloatingElement = ({ children, delay = 0, className = "" }) => {
  return (
    <div
      className={`animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly');
  };

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 499,
      annualPrice: 5388, // 10% discount
      features: [
        "Up to 5 users",
        "Basic AI analytics",
        "Standard support",
        "Cloud storage (100GB)",
        "Weekly reports"
      ],
      notIncluded: [
        "Advanced AI features",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      cta: "Get Started",
      popular: false,
      color: "from-cyberpink/70 to-cyberpink/20"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and teams",
      monthlyPrice: 999,
      annualPrice: 10788, // 10% discount
      features: [
        "Up to 20 users",
        "Advanced AI analytics",
        "Priority support",
        "Cloud storage (500GB)",
        "Daily reports",
        "Custom integrations",
        "API access"
      ],
      notIncluded: [
        "Dedicated account manager",
        "24/7 priority support",
        "Custom AI model training"
      ],
      cta: "Get Started",
      popular: true,
      color: "from-cyberpurple/70 to-cyberpurple/20"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 2499,
      annualPrice: 26988, // 10% discount
      features: [
        "Unlimited users",
        "Full AI feature suite",
        "24/7 priority support",
        "Cloud storage (2TB)",
        "Real-time analytics",
        "Custom integrations",
        "API access",
        "Dedicated account manager",
        "Custom AI model training",
        "On-premise deployment option"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
      color: "from-cyberorange/70 to-cyberorange/20"
    }
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. For enterprise customers, we also offer invoicing options."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time. Downgrades will take effect at the end of your current billing cycle."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for our Starter and Professional plans. No credit card required."
    },
    {
      question: "What kind of support is included?",
      answer: "All plans include email support. Professional plans include priority support during business hours, while Enterprise plans include 24/7 priority support."
    },
    {
      question: "Do you offer custom pricing for specific needs?",
      answer: "Yes, we offer custom pricing for organizations with specific requirements. Please contact our sales team to discuss your needs."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Pricing - Cyberdetox"
        description="Flexible pricing plans for businesses of all sizes. Choose the plan that fits your needs and budget."
      />

      {/* Pricing Hero Section */}
      <section className="bg-gradient-to-r from-cyberpink to-cyberpurple text-white py-20 md:py-28 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyberorange/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyberpurple/20 blur-3xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-3/4 left-1/3 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        {/* Hexagon Network Animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
          <HexagonNetwork width={1200} height={600} nodeCount={30} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:col-span-2 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 animate-pulse-slow">
                <span className="mr-2 bg-white text-cyberpink p-1 rounded-full">
                  <Percent className="h-3 w-3" />
                </span>
                Save 10% with Annual Billing
              </div>

              <h1 className="heading-xl mb-6 relative">
                <span className="relative inline-block">
                  <span className="relative z-10">Simple, Transparent Pricing</span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-cyberorange/30 rounded-full -z-10 transform -rotate-1"></span>
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Choose the plan that fits your needs. All plans include core features with different limits and capabilities to support your business growth.
              </p>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {[
                  { icon: <CreditCard className="h-4 w-4" />, text: "No Credit Card Required" },
                  { icon: <Clock className="h-4 w-4" />, text: "14-Day Free Trial" },
                  { icon: <Shield className="h-4 w-4" />, text: "Cancel Anytime" }
                ].map((badge, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                  >
                    <span className="mr-1.5 text-white">{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Link
                  to="#pricing-plans"
                  className="bg-white text-cyberpink hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg group inline-flex items-center"
                >
                  View Pricing Plans
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: <Users className="h-6 w-6" />, title: "5,000+", subtitle: "Happy Customers" },
              { icon: <Star className="h-6 w-6" />, title: "4.9/5", subtitle: "Customer Rating" },
              { icon: <Award className="h-6 w-6" />, title: "99.9%", subtitle: "Uptime Guarantee" },
              { icon: <Zap className="h-6 w-6" />, title: "24/7", subtitle: "Customer Support" }
            ].map((item, index) => (
              <FloatingElement
                key={index}
                delay={index * 0.2}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
              >
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.subtitle}</p>
              </FloatingElement>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </section>

      {/* Pricing Toggle */}
      <section id="pricing-plans" className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-cyberpink font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <div className="flex items-center">
              <Switch
                checked={billingCycle === 'annual'}
                onCheckedChange={toggleBillingCycle}
                className="data-[state=checked]:bg-cyberpink"
              />
            </div>
            <div className="flex items-center">
              <span className={`text-lg ${billingCycle === 'annual' ? 'text-cyberpink font-medium' : 'text-gray-500'}`}>
                Annual
              </span>
              <span className="ml-2 bg-cyberpink/10 text-cyberpink text-xs font-medium px-2 py-1 rounded-full">
                Save 10%
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-cyberpink transform md:-translate-y-4' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-cyberpink text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className={`bg-gradient-to-br ${plan.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="opacity-90 mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">${billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.annualPrice / 12)}</span>
                    <span className="ml-2 opacity-80">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm mt-1 opacity-80">
                      ${plan.annualPrice} billed annually
                    </p>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-cyberpink mr-3 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.notIncluded.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-4">Not included:</h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="h-5 w-5 border border-gray-300 rounded-full mr-3 shrink-0 mt-0.5" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`w-full button-primary justify-center ${
                      plan.popular ? 'bg-gradient-to-r from-cyberpink to-cyberpurple' : ''
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-cyberpink to-cyberpurple text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8">
              Contact us today to discuss your needs or start your free trial.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="button-primary bg-white hover:bg-gray-100 text-cyberpink">
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="button-secondary border-white text-white hover:bg-white/10">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
