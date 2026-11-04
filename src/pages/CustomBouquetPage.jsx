import React, { useState } from 'react';
import { CheckCircle, MessageCircle, Upload, ChevronDown, ChevronUp } from 'lucide-react';
import {
  FLOWER_TYPES,
  FLOWER_COLORS,
  BOUQUET_SIZES,
  WRAPPING_OPTIONS,
  RIBBON_COLORS,
  WHATSAPP_NUMBER,
} from '../data/products';

const STEP_LABELS = ['Flowers', 'Colors & Size', 'Wrapping', 'Personal Touch', 'Review'];

const BUDGET_OPTIONS = [
  'Under ₹500', '₹500 – ₹1000', '₹1000 – ₹2000', '₹2000 – ₹3500', '₹3500+',
];

function StepIndicator({ current, total }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {Array.from({ length: total }).map((_, i) => (
        <React.Fragment key={i}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs font-semibold transition-all duration-300 ${
              i < current
                ? 'bg-sage text-white'
                : i === current
                ? 'bg-dusty text-white shadow-lg scale-110'
                : 'bg-blush text-cocoa/50'
            }`}
          >
            {i < current ? <CheckCircle size={16} /> : i + 1}
          </div>
          {i < total - 1 && (
            <div className={`h-0.5 w-10 sm:w-16 transition-all duration-500 ${i < current ? 'bg-sage' : 'bg-blush'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function SelectableChip({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-sans text-xs transition-all duration-200 border ${
        selected
          ? 'bg-dusty border-dusty text-white shadow-sm'
          : 'bg-white border-blush text-cocoa hover:border-dusty'
      }`}
    >
      {label}
    </button>
  );
}

export default function CustomBouquetPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    flowers: [],
    colors: [],
    size: '',
    stemCount: '',
    wrapping: '',
    ribbon: '',
    message: '',
    budget: '',
    instructions: '',
    name: '',
    phone: '',
    inspiration: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const toggle = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const set = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const buildWhatsAppMessage = () => {
    const lines = [
      '🌸 *PETALIQUE – Custom Bouquet Request*',
      '',
      `*Name:* ${form.name || 'Not provided'}`,
      `*Phone:* ${form.phone || 'Not provided'}`,
      '',
      `*Flowers:* ${form.flowers.join(', ') || '—'}`,
      `*Colors:* ${form.colors.join(', ') || '—'}`,
      `*Bouquet Size:* ${form.size || '—'}`,
      `*Number of Stems:* ${form.stemCount || '—'}`,
      `*Wrapping:* ${form.wrapping || '—'}`,
      `*Ribbon Color:* ${form.ribbon || '—'}`,
      `*Budget:* ${form.budget || '—'}`,
      '',
      `*Personal Message:* ${form.message || 'None'}`,
      `*Special Instructions:* ${form.instructions || 'None'}`,
      '',
      '_Looking forward to creating something beautiful! 💐_',
    ];
    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="pt-20 min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6">🌸</div>
          <h2 className="font-serif text-3xl text-cocoa mb-3">Request Sent!</h2>
          <p className="font-sans text-sm text-cocoa/70 leading-relaxed mb-6">
            Your custom bouquet request has been shared on WhatsApp. K will get back to you within 24 hours to confirm your order and start crafting your dream bouquet.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(0); setForm({ flowers: [], colors: [], size: '', stemCount: '', wrapping: '', ribbon: '', message: '', budget: '', instructions: '', name: '', phone: '', inspiration: null }); }}
            className="btn-primary"
          >
            Build Another Bouquet
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-blush/30 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="section-subheading mb-3">Dream It. We'll Craft It.</p>
          <h1 className="section-heading">Build Your Custom Bouquet</h1>
          <p className="font-sans text-sm text-cocoa/60 mt-4 max-w-lg mx-auto">
            Design your perfect handcrafted bouquet step by step. We'll bring your vision to life.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <StepIndicator current={step} total={STEP_LABELS.length} />

        <div className="bg-white rounded-2xl shadow-sm border border-blush/50 p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-cocoa mb-1">
            Step {step + 1}: {STEP_LABELS[step]}
          </h2>
          <div className="w-12 h-0.5 bg-dusty mb-6" />

          {/* Step 0 – Flower types */}
          {step === 0 && (
            <div>
              <p className="font-sans text-sm text-cocoa/70 mb-5">
                Which flowers would you like in your bouquet? Select one or more.
              </p>
              <div className="flex flex-wrap gap-3">
                {FLOWER_TYPES.map((f) => (
                  <SelectableChip key={f} label={f} selected={form.flowers.includes(f)} onClick={() => toggle('flowers', f)} />
                ))}
              </div>
              {form.flowers.length > 0 && (
                <p className="font-sans text-xs text-dusty mt-4">
                  Selected: {form.flowers.join(', ')}
                </p>
              )}
              <div className="mt-6 p-4 bg-blush/30 rounded-xl border border-blush/60">
                <p className="font-sans text-xs text-cocoa/80 leading-relaxed">
                  🌸 <strong>Pricing:</strong> ₹210 per flower (Actual value ₹599).
                  <br />
                  ✨ <strong>Lily:</strong> +₹250 extra per flower due to intricate petal craftsmanship.
                </p>
              </div>
            </div>
          )}

          {/* Step 1 – Colors & Size */}
          {step === 1 && (
            <div className="space-y-7">
              <div>
                <p className="font-sans text-sm font-medium text-cocoa mb-3">Flower Colors</p>
                <div className="flex flex-wrap gap-3">
                  {FLOWER_COLORS.map((c) => (
                    <SelectableChip key={c} label={c} selected={form.colors.includes(c)} onClick={() => toggle('colors', c)} />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-cocoa mb-3">Bouquet Size</p>
                <div className="flex flex-wrap gap-3">
                  {BOUQUET_SIZES.map((s) => (
                    <SelectableChip key={s} label={s} selected={form.size === s} onClick={() => set('size', s)} />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-cocoa mb-2">Number of Stems</p>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={form.stemCount}
                    onChange={(e) => set('stemCount', e.target.value)}
                    placeholder="e.g. 5"
                    className="w-36 px-4 py-2.5 border border-blush rounded-full font-sans text-sm text-cocoa focus:outline-none focus:border-dusty transition-colors"
                  />
                  {form.stemCount && Number(form.stemCount) > 0 && (
                    <span className="font-sans text-xs text-dusty">
                      Est: ~₹{(Number(form.stemCount) * 210).toLocaleString('en-IN')}{form.flowers.includes('Lilies') ? ' (+₹250/lily)' : ''}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2 – Wrapping */}
          {step === 2 && (
            <div className="space-y-7">
              <div>
                <p className="font-sans text-sm font-medium text-cocoa mb-3">Wrapping Paper</p>
                <div className="flex flex-wrap gap-3">
                  {WRAPPING_OPTIONS.map((w) => (
                    <SelectableChip key={w} label={w} selected={form.wrapping === w} onClick={() => set('wrapping', w)} />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-cocoa mb-3">Ribbon Color</p>
                <div className="flex flex-wrap gap-3">
                  {RIBBON_COLORS.map((r) => (
                    <SelectableChip key={r} label={r} selected={form.ribbon === r} onClick={() => set('ribbon', r)} />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-cocoa mb-2">Budget</p>
                <div className="flex flex-wrap gap-3">
                  {BUDGET_OPTIONS.map((b) => (
                    <SelectableChip key={b} label={b} selected={form.budget === b} onClick={() => set('budget', b)} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3 – Personal Touch */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="font-sans text-sm font-medium text-cocoa block mb-2">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-blush rounded-xl font-sans text-sm text-cocoa focus:outline-none focus:border-dusty transition-colors"
                />
              </div>
              <div>
                <label className="font-sans text-sm font-medium text-cocoa block mb-2">Phone / WhatsApp</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  placeholder="+91 00000 00000"
                  className="w-full px-4 py-3 border border-blush rounded-xl font-sans text-sm text-cocoa focus:outline-none focus:border-dusty transition-colors"
                />
              </div>
              <div>
                <label className="font-sans text-sm font-medium text-cocoa block mb-2">
                  Personalized Message <span className="text-cocoa/40 font-normal">(for the tag)</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  placeholder="e.g. 'Happy Birthday, my love! 💕'"
                  rows={3}
                  className="w-full px-4 py-3 border border-blush rounded-xl font-sans text-sm text-cocoa focus:outline-none focus:border-dusty transition-colors resize-none"
                />
              </div>
              <div>
                <label className="font-sans text-sm font-medium text-cocoa block mb-2">
                  Special Instructions <span className="text-cocoa/40 font-normal">(optional)</span>
                </label>
                <textarea
                  value={form.instructions}
                  onChange={(e) => set('instructions', e.target.value)}
                  placeholder="Any specific requests, theme ideas or reference details..."
                  rows={3}
                  className="w-full px-4 py-3 border border-blush rounded-xl font-sans text-sm text-cocoa focus:outline-none focus:border-dusty transition-colors resize-none"
                />
              </div>
              <div>
                <label className="font-sans text-sm font-medium text-cocoa block mb-2">
                  Inspiration Photo <span className="text-cocoa/40 font-normal">(optional)</span>
                </label>
                <label className="flex items-center gap-3 w-full px-4 py-4 border-2 border-dashed border-blush rounded-xl cursor-pointer hover:border-dusty transition-colors">
                  <Upload size={18} className="text-dusty" />
                  <span className="font-sans text-sm text-cocoa/60">
                    {form.inspiration ? form.inspiration.name : 'Upload a reference image'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => set('inspiration', e.target.files[0])}
                  />
                </label>
                <p className="font-sans text-[10px] text-cocoa/40 mt-1">
                  Note: Share the image directly on WhatsApp after submitting for best results.
                </p>
              </div>
            </div>
          )}

          {/* Step 4 – Review */}
          {step === 4 && (
            <div>
              <p className="font-sans text-sm text-cocoa/70 mb-6">
                Here's a summary of your custom bouquet request. Everything looks good? Submit to connect with us on WhatsApp!
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Flowers', value: form.flowers.join(', ') || '—' },
                  { label: 'Colors', value: form.colors.join(', ') || '—' },
                  { label: 'Size', value: form.size || '—' },
                  { label: 'Stems', value: form.stemCount || '—' },
                  { label: 'Wrapping', value: form.wrapping || '—' },
                  { label: 'Ribbon', value: form.ribbon || '—' },
                  { label: 'Budget', value: form.budget || '—' },
                  { label: 'Message', value: form.message || 'None' },
                  { label: 'Instructions', value: form.instructions || 'None' },
                  { label: 'Name', value: form.name || '—' },
                  { label: 'Phone', value: form.phone || '—' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start justify-between py-2.5 border-b border-blush/50">
                    <span className="font-sans text-xs tracking-wider uppercase text-dusty w-28 flex-shrink-0">{label}</span>
                    <span className="font-sans text-sm text-cocoa text-right">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blush/30 rounded-xl">
                <p className="font-sans text-xs text-cocoa/70 leading-relaxed">
                  💛 After submitting, K will reach out via WhatsApp to confirm details, share pricing and estimated delivery time. Handcrafted items require <strong>3–8 business days</strong> preparation.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-blush/50">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="px-6 py-2.5 border border-blush rounded-full font-sans text-xs tracking-widest uppercase text-cocoa hover:border-dusty transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Back
            </button>
            {step < STEP_LABELS.length - 1 ? (
              <button
                onClick={() => setStep((s) => Math.min(STEP_LABELS.length - 1, s + 1))}
                className="btn-primary"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#25D366] text-white rounded-full font-sans text-xs tracking-widest uppercase hover:bg-[#1ebe5a] transition-colors"
              >
                <MessageCircle size={14} />
                Send on WhatsApp
              </button>
            )}
          </div>
        </div>

        {/* Step labels row */}
        <div className="flex justify-between mt-4 px-2">
          {STEP_LABELS.map((label, i) => (
            <span
              key={label}
              className={`font-sans text-[9px] tracking-wider uppercase ${i === step ? 'text-dusty' : 'text-cocoa/30'}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
