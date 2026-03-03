'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.agreeToTerms && formData.email && formData.password && formData.firstName && formData.lastName) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-orange-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Logo - Top Left */}
      <div className="absolute top-6 left-6 z-50">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">◆</span>
          </div>
          <span className="text-white font-semibold hidden sm:inline">aqs</span>
        </div>
      </div>

      
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between text-white px-12 py-12 h-screen">
        <div></div>

        <div>
          <h1 className="text-5xl xl:text-6xl font-bold leading-tight mb-8">
            Expert level <br />
            <span className="text-primary">Cybersecurity</span>
            <br />
            in <span className="text-primary">hours</span> not weeks.
          </h1>

          <div className="mt-16">
            <p className="text-white/80 text-sm uppercase tracking-wider font-semibold mb-6">What's included</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-lg flex-shrink-0">✓</span>
                <span className="text-white text-sm">Effortlessly spider and map targets to uncover hidden security flaws</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-lg flex-shrink-0">✓</span>
                <span className="text-white text-sm">Deliver high-quality, validated findings in hours, not weeks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 text-lg flex-shrink-0">✓</span>
                <span className="text-white text-sm">Generate professional, enterprise-grade security reports automatically.</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-white mb-2">
            <span className="text-primary text-2xl">★</span>
            <span className="font-semibold">Trustpilot</span>
          </div>
          <p className="text-white">
            <span className="font-bold text-lg">Rated 4.5/5.0</span>
            <span className="text-white/70 text-sm ml-3">(100k+ reviews)</span>
          </p>
        </div>
      </div>

     
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 relative z-10">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Sign up</h2>
          <p className="text-center text-muted-foreground text-sm mb-8">
            Already have an account?{' '}
            <a href="#" className="text-primary hover:underline font-semibold">
              Log in
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password (8+ characters)*"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                id="terms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-border cursor-pointer accent-primary"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                I agree to Aqs's{' '}
                <a href="#" className="text-primary hover:underline font-medium">
                  Terms & Conditions
                </a>{' '}
                and acknowledge the{' '}
                <a href="#" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={!formData.agreeToTerms || !formData.email || !formData.password}
              className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              Create account
            </button>
          </form>

          <div className="mt-8 flex gap-3">
            <button className="flex-1 py-2.5 rounded-full border border-border hover:bg-secondary transition-colors font-semibold text-lg">
              🍎
            </button>
            <button className="flex-1 py-2.5 rounded-full border border-border hover:bg-secondary transition-colors font-semibold text-lg">
              🔍
            </button>
            <button className="flex-1 py-2.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-semibold text-lg">
              ◆
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
