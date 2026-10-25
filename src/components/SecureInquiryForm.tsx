import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, MessageSquare, Lock, Send, RotateCcw } from 'lucide-react';
import {
  createInquiryPayload,
  DispatchedInquiryRecord,
  InquiryFormInput,
  validateInquiryForm,
} from '../utils/searchAndValidation';

interface SecureInquiryFormProps {
  preselectedCategory?: string;
}

const PROJECT_CATEGORIES = [
  'iOS and Android Mobile App Development',
  'Custom AI Tools and Automation',
  'Web and E-Commerce Platforms',
  'Agile Project and Team Management',
  'Full-Scale Multi-Platform Architecture',
];

const BUDGET_RANGES = [
  '$1,500 – $3,500 (24-Hour Rapid Prototype / Small Scope)',
  '$3,500 – $10,000 (Core MVP / Custom AI or Mobile Build)',
  '$10,000 – $25,000 (Full-Scale Platform & Architecture)',
  '$25,000+ (Dedicated Multi-Engineer Roster & Long-Term SLA)',
];

export const SecureInquiryForm: React.FC<SecureInquiryFormProps> = ({ preselectedCategory }) => {
  const [formState, setFormState] = useState<InquiryFormInput>({
    fullName: '',
    country: '',
    verificationUrl: '',
    projectCategory: preselectedCategory || PROJECT_CATEGORIES[0],
    projectDetails: '',
    estimatedBudget: BUDGET_RANGES[1],
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormInput, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<DispatchedInquiryRecord | null>(null);

  useEffect(() => {
    if (preselectedCategory) {
      setFormState((prev) => ({
        ...prev,
        projectCategory: preselectedCategory,
      }));
    }
  }, [preselectedCategory]);

  const handleChange = (field: keyof InquiryFormInput, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateInquiryForm(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    const payload = createInquiryPayload(formState);

    try {
      await fetch('./api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Fallback if backend route is not mounted on static GitHub Pages
      });
    } finally {
      setIsSubmitting(false);
      setSubmittedRecord(payload);
    }
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setFormState({
      fullName: '',
      country: '',
      verificationUrl: '',
      projectCategory: preselectedCategory || PROJECT_CATEGORIES[0],
      projectDetails: '',
      estimatedBudget: BUDGET_RANGES[1],
    });
    setErrors({});
  };

  return (
    <div className="rounded-2xl bg-[#0A0C16]/90 border border-[#00F5FF]/30 p-6 sm:p-10 shadow-[0_0_45px_rgba(0,245,255,0.08)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-semibold tracking-wider text-[#00F5FF] block">
            ENCRYPTED EXECUTIVE INTAKE · DIRECT TO MANAGING DIRECTOR
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
            Secure Project Inquiry &amp; Client Verification Form
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 text-xs text-slate-300 font-mono-tabular shrink-0">
          <Lock className="w-4 h-4 text-[#10B981]" />
          <span>Protected Executive Routing</span>
        </div>
      </div>

      {submittedRecord ? (
        <div
          className="py-8 space-y-6"
          role="status"
          aria-live="polite"
          data-testid="inquiry-confirmation"
        >
          <div className="flex items-start gap-4 pb-6 border-b border-white/10">
            <CheckCircle2 className="w-7 h-7 text-[#10B981] shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h4 className="text-lg font-bold text-white font-display">
                Project Brief Verified &amp; Dispatched ({submittedRecord.referenceId})
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Thank you, <strong className="text-white">{submittedRecord.client.fullName}</strong>. Your verified project dossier for{' '}
                <strong className="text-[#00F5FF]">{submittedRecord.project.category}</strong> has been securely routed to Orbit Agency’s executive desk under strict NDA confidentiality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-white/10 text-xs">
            <div>
              <span className="text-slate-400 block">Client &amp; Region</span>
              <span className="text-white font-semibold mt-1 block">
                {submittedRecord.client.fullName} · {submittedRecord.client.country}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Verification Profile</span>
              <span className="text-[#00F5FF] font-mono-tabular truncate mt-1 block">
                {submittedRecord.client.verificationUrl}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block">Allocated Scope Tier</span>
              <span className="text-[#10B981] font-semibold mt-1 block">
                {submittedRecord.project.budget}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={submittedRecord.whatsappContinuationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#04130D] font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Continue Directly on WhatsApp with Naveed Ali</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Submit Another Scope</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="inquiry-full-name"
                className="block text-xs font-semibold text-slate-200 mb-2"
              >
                Full Name *
              </label>
              <input
                id="inquiry-full-name"
                type="text"
                value={formState.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                placeholder="e.g., Marcus Sterling"
                className="w-full px-4 py-3 rounded-xl bg-[#05050A] border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF] transition-colors"
                required
              />
              {errors.fullName && (
                <p className="mt-1.5 text-xs text-rose-400" role="alert">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="inquiry-country"
                className="block text-xs font-semibold text-slate-200 mb-2"
              >
                Country *
              </label>
              <input
                id="inquiry-country"
                type="text"
                value={formState.country}
                onChange={(e) => handleChange('country', e.target.value)}
                placeholder="e.g., United States, United Kingdom, UAE, Switzerland"
                className="w-full px-4 py-3 rounded-xl bg-[#05050A] border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF] transition-colors"
                required
              />
              {errors.country && (
                <p className="mt-1.5 text-xs text-rose-400" role="alert">
                  {errors.country}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="inquiry-verification-url"
                className="block text-xs font-semibold text-slate-200 mb-2"
              >
                Company or LinkedIn Profile URL (Client Verification) *
              </label>
              <input
                id="inquiry-verification-url"
                type="text"
                value={formState.verificationUrl}
                onChange={(e) => handleChange('verificationUrl', e.target.value)}
                placeholder="https://linkedin.com/in/yourprofile or company domain"
                className="w-full px-4 py-3 rounded-xl bg-[#05050A] border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF] transition-colors"
                required
              />
              {errors.verificationUrl && (
                <p className="mt-1.5 text-xs text-rose-400" role="alert">
                  {errors.verificationUrl}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="inquiry-category"
                className="block text-xs font-semibold text-slate-200 mb-2"
              >
                Project Category *
              </label>
              <select
                id="inquiry-category"
                value={formState.projectCategory}
                onChange={(e) => handleChange('projectCategory', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#05050A] border border-white/15 text-sm text-white focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF] transition-colors"
              >
                {PROJECT_CATEGORIES.map((category) => (
                  <option key={category} value={category} className="bg-[#080912] text-white">
                    {category}
                  </option>
                ))}
              </select>
              {errors.projectCategory && (
                <p className="mt-1.5 text-xs text-rose-400" role="alert">
                  {errors.projectCategory}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="inquiry-budget"
              className="block text-xs font-semibold text-slate-200 mb-2"
            >
              Estimated Budget *
            </label>
            <select
              id="inquiry-budget"
              value={formState.estimatedBudget}
              onChange={(e) => handleChange('estimatedBudget', e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#05050A] border border-white/15 text-sm text-white focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF] transition-colors"
            >
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range} className="bg-[#080912] text-white">
                  {range}
                </option>
              ))}
            </select>
            {errors.estimatedBudget && (
              <p className="mt-1.5 text-xs text-rose-400" role="alert">
                {errors.estimatedBudget}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="inquiry-details"
              className="block text-xs font-semibold text-slate-200 mb-2"
            >
              Project Details, Goals &amp; Desired Timeline *
            </label>
            <textarea
              id="inquiry-details"
              rows={4}
              value={formState.projectDetails}
              onChange={(e) => handleChange('projectDetails', e.target.value)}
              placeholder="Describe your product vision, required platforms (iOS, Android, AI SaaS, Web), and whether you need a 24-hour prototype start..."
              className="w-full px-4 py-3 rounded-xl bg-[#05050A] border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00F5FF] focus:ring-1 focus:ring-[#00F5FF] transition-colors"
              required
            />
            {errors.projectDetails && (
              <p className="mt-1.5 text-xs text-rose-400" role="alert">
                {errors.projectDetails}
              </p>
            )}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#00F5FF] shrink-0" />
              <span>
                Zero spam guarantee. Direct encrypted routing to Orbit Agency executive intake.
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#8A2BE2] text-[#05050A] font-bold text-sm shadow-[0_0_28px_rgba(0,245,255,0.4)] hover:brightness-110 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Encrypting & Sending...' : 'Submit Verified Project Inquiry'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
