
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive the latest updates about SolSharks.",
      });
      
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 bg-ocean-gradient text-white relative overflow-hidden">
      {/* Animated bubbles */}
      <div className="absolute top-0 left-1/4 w-4 h-4 bg-white/30 rounded-full animate-bubble-1"></div>
      <div className="absolute top-0 left-1/3 w-6 h-6 bg-white/20 rounded-full animate-bubble-2"></div>
      <div className="absolute top-0 left-2/3 w-8 h-8 bg-white/10 rounded-full animate-bubble-3"></div>
      <div className="absolute top-0 left-3/4 w-5 h-5 bg-white/20 rounded-full animate-bubble-2"></div>
      
      {/* Water shimmer effect */}
      <div className="absolute inset-0 water-shimmer"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-3 mb-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white font-medium">
            Stay Connected
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
          
          <p className="text-xl text-white/80 mb-8">
            Subscribe to our newsletter to receive game updates, special events, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow py-6 px-4 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit" 
              className="btn-primary py-6 whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
