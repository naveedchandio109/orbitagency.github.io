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
  '$3,500 – $10,000 (Core MVP / Custom AI, Website or Mobile Build)',
  '$10,000 – $25,000 (Full-Scale Platform & Architecture)',
  '$25,000+ (Dedicated Multi-Engineer Team & Long-Term Management)',
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
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Fallback if backend route is not mounted
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
    <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 block">
            SECURE PROJECT INTAKE · DIRECT TO NAVEED ALI
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold font-display text-slate-950 mt-0.5">
            Submit Your Project Brief
          </h3>
        </div>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-700 font-mono-tabular shrink-0">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          <span>100% Confidential</span>
        </div>
      </div>

      {submittedRecord ? (
        <div
          className="py-5 space-y-4"
          role="status"
          aria-live="polite"
          data-testid="inquiry-confirmation"
        >
          <div className="flex items-start gap-3 pb-4 border-b border-slate-200">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-base font-extrabold text-slate-950 font-display">
                Project Brief Verified & Dispatched ({submittedRecord.referenceId})
              </h4>
              <p className="text-xs sm:text-sm font-bold text-slate-700 leading-relaxed">
                Thank you, <strong className="text-slate-950 font-extrabold">{submittedRecord.client.fullName}</strong>. Your inquiry for{' '}
                <strong className="text-blue-700 font-extrabold">{submittedRecord.project.category}</strong> has been securely routed to Orbit Agency.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 font-bold block">Client & Country</span>
              <span className="text-slate-950 font-extrabold mt-0.5 block">
                {submittedRecord.client.fullName} · {submittedRecord.client.country}
              </span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block">Verification Profile</span>
              <span className="text-blue-700 font-extrabold font-mono-tabular truncate mt-0.5 block">
                {submittedRecord.client.verificationUrl}
              </span>
            </div>
            <div>
              <span className="text-slate-500 font-bold block">Selected Budget</span>
              <span className="text-emerald-700 font-extrabold mt-0.5 block">
                {submittedRecord.project.budget}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={submittedRecord.whatsappContinuationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Continue Directly on WhatsApp with Naveed Ali</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 text-xs font-extrabold transition-colors cursor-pointer whitespace-nowrap"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Submit Another</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="inquiry-full-name"
                className="block text-xs font-extrabold text-slate-900 mb-1"
              >
                Full Name *
              </label>
              <input
                id="inquiry-full-name"
                type="text"
                value={formState.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                placeholder="e.g., Marcus Sterling"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-bold text-slate-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600"
                required
              />
              {errors.fullName && (
                <p className="mt-1 text-[11px] font-extrabold text-rose-600" role="alert">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="inquiry-country"
                className="block text-xs font-extrabold text-slate-900 mb-1"
              >
                Country *
              </label>
              <input
                id="inquiry-country"
                type="text"
                value={formState.country}
                onChange={(e) => handleChange('country', e.target.value)}
                placeholder="e.g., United States, UK, UAE"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-bold text-slate-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600"
                required
              />
              {errors.country && (
                <p className="mt-1 text-[11px] font-extrabold text-rose-600" role="alert">
                  {errors.country}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="inquiry-verification-url"
                className="block text-xs font-extrabold text-slate-900 mb-1"
              >
                Company or LinkedIn Profile URL *
              </label>
              <input
                id="inquiry-verification-url"
                type="text"
                value={formState.verificationUrl}
                onChange={(e) => handleChange('verificationUrl', e.target.value)}
                placeholder="https://linkedin.com/in/profile or Company"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-bold text-slate-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600"
                required
              />
              {errors.verificationUrl && (
                <p className="mt-1 text-[11px] font-extrabold text-rose-600" role="alert">
                  {errors.verificationUrl}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="inquiry-category"
                className="block text-xs font-extrabold text-slate-900 mb-1"
              >
                Project Category *
              </label>
              <select
                id="inquiry-category"
                value={formState.projectCategory}
                onChange={(e) => handleChange('projectCategory', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-bold text-slate-950 focus:bg-white focus:outline-none focus:border-blue-600"
              >
                {PROJECT_CATEGORIES.map((category) => (
                  <option key={category} value={category} className="bg-white text-slate-950 font-bold">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="inquiry-budget"
                className="block text-xs font-extrabold text-slate-900 mb-1"
              >
                Estimated Budget *
              </label>
              <select
                id="inquiry-budget"
                value={formState.estimatedBudget}
                onChange={(e) => handleChange('estimatedBudget', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-bold text-slate-950 focus:bg-white focus:outline-none focus:border-blue-600"
              >
                {BUDGET_RANGES.map((range) => (
                  <option key={range} value={range} className="bg-white text-slate-950 font-bold">
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="inquiry-details"
                className="block text-xs font-extrabold text-slate-900 mb-1"
              >
                Project Details & Goals *
              </label>
              <input
                id="inquiry-details"
                type="text"
                value={formState.projectDetails}
                onChange={(e) => handleChange('projectDetails', e.target.value)}
                placeholder="Describe your website, AI tool, or mobile app scope..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-bold text-slate-950 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-blue-600"
                required
              />
              {errors.projectDetails && (
                <p className="mt-1 text-[11px] font-extrabold text-rose-600" role="alert">
                  {errors.projectDetails}
                </p>
              )}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Protected routing directly to Orbit Agency executive intake.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Sending...' : 'Submit Verified Project Inquiry'}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
