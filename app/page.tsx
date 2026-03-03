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
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.agreeToTerms &&
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.email.trim() &&
      formData.password.trim()
    ) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-teal-900 to-orange-600 flex items-center justify-center p-4">
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between text-white px-12 py-12 h-screen">
        <div className="text-2xl font-bold">Fin aqs</div>

        <div>
          <h1 className="text-5xl font-bold leading-tight mb-8">
            Expert level <span className="text-teal-400">Cybersecurity</span> in{' '}
            <span className="text-teal-400">hours</span> not weeks.
          </h1>
          <ul className="space-y-6 mt-12">
            <li className="flex items-start gap-4 text-lg">
              <span className="text-teal-400 text-2xl">✓</span>
              Spider and map targets effortlessly
            </li>
            <li className="flex items-start gap-4 text-lg">
              <span className="text-teal-400 text-2xl">✓</span>
              Deliver validated findings fast
            </li>
            <li className="flex items-start gap-4 text-lg">
              <span className="text-teal-400 text-2xl">✓</span>
              Generate enterprise-grade reports
            </li>
          </ul>
        </div>

        <div className="text-sm opacity-80">Fenrir Security © 2026</div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md bg-card rounded-2xl shadow-xl p-8 border border-border">
          <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
          <p className="text-center text-muted-foreground mb-8">
            Already have an account? <span className="text-primary cursor-pointer">Log in</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border bg-background"
              />
              <input
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border bg-background"
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border bg-background"
            />

            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border bg-background"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                name="agreeToTerms"
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the <span className="text-primary">Terms</span> and{' '}
                <span className="text-primary">Privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={
                !formData.agreeToTerms ||
                !formData.firstName.trim() ||
                !formData.lastName.trim() ||
                !formData.email.trim() ||
                !formData.password.trim()
              }
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium disabled:opacity-50"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}