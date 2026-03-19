import Image from "next/image";
import { CountdownTimer } from "@/components/countdown-timer";
import { EmailForm } from "@/components/email-form";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  // Generate particles
  const particles = Array.from({ length: 20 }).map((_, i) => {
    const size = Math.random() * 3 + 2; // 2-5px
    const x = Math.random() * 100; // 0-100vw
    const y = Math.random() * 100; // 0-100vh
    const delay = Math.random() * 4; // 0-4s
    const duration = Math.random() * 3 + 3; // 3-6s
    const color = i % 2 === 0 ? "bg-primary" : "bg-secondary";
    const opacity = Math.random() * 0.4 + 0.3; // 0.3-0.7
    return (
      <div
        key={i}
        className={`absolute rounded-full ${color} pointer-events-none`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${x}vw`,
          top: `${y}vh`,
          animation: `float ${duration}s infinite alternate ease-in-out ${delay}s`,
          opacity,
        }}
      />
    );
  });

  return (
    <main className="relative min-h-screen selection:bg-primary/30 selection:text-white">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 pt-20 pb-16">
        {/* Abstract animated gradient mesh & particles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[100px] animate-mesh-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px] animate-mesh-slow" style={{ animationDelay: '-10s' }} />
          <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[90px] animate-mesh-slow" style={{ animationDelay: '-5s' }} />
          {particles}
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full mt-auto mb-auto">
          {/* Logo SVG */}
          <div className="mb-10 relative group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 rounded-full" />
            <Image
              src="/logo.svg"
              alt="KDSL logo"
              width={100}
              height={100}
              priority
              className="relative z-10 animate-reveal-up drop-shadow-[0_0_15px_rgba(0,217,255,0.4)]"
            />
          </div>

          <p className="text-[#94A3B8] uppercase tracking-[0.25em] text-xs sm:text-sm md:text-base mb-6 font-semibold animate-reveal-up" style={{ animationDelay: "100ms", opacity: 0, animationFillMode: "forwards" }}>
            Stream. Download. Binge. Repeat.
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 animate-reveal-up tracking-tight" style={{ animationDelay: "200ms", opacity: 0, animationFillMode: "forwards" }}>
            <span className="text-white">Coming </span>
            <span className="text-gradient">Soon</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-reveal-up leading-relaxed" style={{ animationDelay: "300ms", opacity: 0, animationFillMode: "forwards" }}>
            Your ultimate destination for K-Dramas, Asian movies, and exclusive content — anytime, anywhere.
          </p>

          <CountdownTimer />
        </div>

        {/* Scroll down indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle z-10 text-gray-400 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div> */}
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-24 flex flex-col items-center">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight">What&apos;s Coming</h2>
             <div className="w-[100px] h-[5px] rounded-full bg-gradient-to-r from-primary to-secondary" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <ScrollReveal delay="100">
               <FeatureCard icon="📺" title="Vast K-Drama Library" desc="Thousands of K-Dramas, C-Dramas, and Asian movies with new titles added daily." />
            </ScrollReveal>
            <ScrollReveal delay="200">
               <FeatureCard icon="⬇️" title="Offline Downloads" desc="Download episodes and movies to watch offline — no internet needed." />
            </ScrollReveal>
            <ScrollReveal delay="300">
               <FeatureCard icon="🌐" title="Multi-Language Subtitles" desc="Subtitles in English, Spanish, Arabic, French, and 15+ languages." />
            </ScrollReveal>
            <ScrollReveal delay="400">
               <FeatureCard icon="🎬" title="HD & 4K Streaming" desc="Crystal-clear quality up to 4K with adaptive bitrate streaming." />
            </ScrollReveal>
            <ScrollReveal delay="500">
               <FeatureCard icon="📱" title="Cross-Device Sync" desc="Start on your phone, continue on tablet. Your watchlist syncs everywhere." />
            </ScrollReveal>
            <ScrollReveal delay="none"> 
               <FeatureCard icon="🔔" title="Smart Recommendations" desc="AI-powered suggestions based on your taste. Never miss a hidden gem." />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Notify / Email Section */}
      <section className="relative py-24 px-4 border-t border-white/5 bg-gradient-to-b from-[#0A0E27] to-[#1A1F3A]/30 z-10 flex flex-col items-center">
        <ScrollReveal className="text-center max-w-3xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Be the First to Know</h2>
          <p className="text-[#94A3B8] text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Drop your email and get early access + exclusive launch offers
          </p>
          <EmailForm />
          <p className="text-xs text-gray-500 mt-8 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"></path></svg>
            We respect your privacy. No spam, ever.
          </p>
        </ScrollReveal>
      </section>
      
      {/* Social Links & Footer */}
      <footer className="relative py-16 border-t border-white/5 bg-[#050714] z-10 flex flex-col items-center">
         <ScrollReveal className="flex flex-col items-center w-full max-w-4xl px-4">
            <h3 className="text-2xl font-bold text-white mb-8">Follow Us for Updates</h3>
            <div className="flex gap-4 sm:gap-6 mb-12">
              <SocialIcon name="Facebook" href="https://www.facebook.com/KDramaslofficla" target="_blank" />
               <SocialIcon name="Instagram" href="https://instagram.com/KDramaslofficla" target="_blank" />
               <SocialIcon name="TikTok" href="https://tiktok.com/KDramaslofficla" target="_blank" />
            </div>
            
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />
            
            <p className="text-[#94A3B8] text-sm md:text-base mb-3 text-center">
              © {new Date().getFullYear()} KDramaSL. All rights reserved.
            </p>
            <p className="text-[#64748B] text-xs md:text-sm font-medium tracking-wide text-center">
              Made with ❤️ for K-Drama fans worldwide
            </p>
         </ScrollReveal>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="group bg-[#1A1F3A]/80 backdrop-blur-sm border border-white/5 hover:border-primary/40 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(0,217,255,0.2)] text-left flex flex-col h-full relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-40 h-40 bg-primary/10 rounded-full blur-[50px] group-hover:bg-primary/20 transition-colors duration-500" />
      <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-secondary/10 rounded-full blur-[50px] group-hover:bg-secondary/20 transition-colors duration-500" />
      
      <div className="text-5xl md:text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-500 origin-bottom-left filter drop-shadow-lg">{icon}</div>
      <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{title}</h3>
      <p className="text-[#94A3B8] leading-relaxed flex-1 text-base md:text-lg relative z-10 font-medium">{desc}</p>
    </div>
  );
}

function SocialIcon({ name, href, target }: { name: string; href: string; target?: string }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      aria-label={name}
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#1A1F3A] border border-white/10 flex items-center justify-center hover:bg-[#1A1F3A] hover:border-primary/50 transition-all duration-300 hover:scale-110 group relative shadow-lg"
    >
       <span className="sr-only">{name}</span>
       <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
       {name === "Instagram" && <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#94A3B8] group-hover:text-white transition-colors z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.319.975.975 1.257 2.242 1.319 3.608.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.062 1.366-.344 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.344-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.584.07-4.849.062-1.366.344-2.633 1.319-3.608.975-.975 2.242-1.257 3.608-1.319 1.266-.058 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/></svg>}
       {name === "Twitter" && <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#94A3B8] group-hover:text-white transition-colors z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
       {name === "TikTok" && <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#94A3B8] group-hover:text-white transition-colors z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>}
       {name === "YouTube" && <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#94A3B8] group-hover:text-white transition-colors z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>}
       {name === "Facebook" && <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#94A3B8] group-hover:text-white transition-colors z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}
    </a>
  );
}
