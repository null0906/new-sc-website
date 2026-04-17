/**
 * SecComply — useLeadForm.js
 * A reusable hook for the lead capture modal/form.
 *
 * Security fixes applied:
 *  C-07 — Honeypot field included to reject bot submissions
 *
 * Usage:
 *   const { formData, handleChange, handleSubmit, status } = useLeadForm();
 *
 *   In your JSX:
 *   <form onSubmit={handleSubmit}>
 *     <input name="name"    value={formData.name}    onChange={handleChange} />
 *     <input name="email"   value={formData.email}   onChange={handleChange} />
 *     <input name="company" value={formData.company} onChange={handleChange} />
 *     <textarea name="message" value={formData.message} onChange={handleChange} />
 *
 *     // ── Honeypot (MUST be hidden with CSS — do NOT use display:none via inline style
 *     //    as some screen readers flag that; use a CSS class instead) ──
 *     <div className="hp-field" aria-hidden="true">
 *       <label htmlFor="website">Website</label>
 *       <input
 *         type="text"
 *         id="website"
 *         name="website"
 *         value={formData.website}
 *         onChange={handleChange}
 *         tabIndex={-1}
 *         autoComplete="off"
 *       />
 *     </div>
 *
 *     <button type="submit" disabled={status === 'loading'}>Submit</button>
 *   </form>
 *
 *   In your CSS (globals.css or a module):
 *   .hp-field {
 *     position: absolute;
 *     left: -9999px;
 *     top: -9999px;
 *     opacity: 0;
 *     pointer-events: none;
 *   }
 */

import { useState } from 'react';

const INITIAL_STATE = {
  name:    '',
  email:   '',
  company: '',
  message: '',
  website: '', // honeypot — must stay empty
};

export function useLeadForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus]     = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    // Client-side honeypot check (server also checks — defence in depth)
    if (formData.website) {
      // Silently succeed for bots
      setStatus('success');
      return;
    }

    // Basic client-side validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMsg('Name and email are required.');
      return;
    }

    try {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      setFormData(INITIAL_STATE);

    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    status,
    errorMsg,
  };
}
