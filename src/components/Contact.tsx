import emailjs from '@emailjs/browser'
import { AlertTriangle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Particles } from '@/components/ui/Particles'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/SectionHeader'
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '@/constants/emailjs'
import { personal } from '@/constants/personal'

type SendState = 'idle' | 'sending' | 'sent' | 'error'

const isConfigured =
  EMAILJS_PUBLIC_KEY.startsWith('YOUR_') === false &&
  EMAILJS_SERVICE_ID.startsWith('YOUR_') === false &&
  EMAILJS_TEMPLATE_ID.startsWith('YOUR_') === false

export function Contact() {
  const [status, setStatus] = useState<SendState>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!name || !email || !message) return
    if (!isConfigured) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: name, from_email: email, message }, { publicKey: EMAILJS_PUBLIC_KEY })
      setStatus('sent')
    } catch (error) {
      console.error('EmailJS send failed:', error)
      setStatus('error')
    }
  }

  function handleReset() {
    setStatus('idle')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line bg-surface">
      <div className="orb bottom-[-60px] left-[10%] h-72 w-72 bg-cyan/15 [animation-delay:8s]" />
      <Particles />

      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeader index="04" eyebrow="OPEN CHANNEL" title="Let us transmit a message." />

        {/* Terminal window */}
        <Reveal delay={100}>
          <div className="overflow-hidden rounded-xl border border-line bg-bg shadow-card">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="label-mono ml-3 text-xs text-muted">monish@terminal: ~/contact</span>
            <span className="label-mono ml-auto text-[11px] text-cyan">SSH://ACTIVE</span>
          </div>

          {/* Body */}
          {status === 'idle' || status === 'sending' ? (
            <form onSubmit={handleSubmit} className="term-body px-6 py-6 sm:px-8">
              <div className="label-mono text-xs leading-relaxed text-muted">
                <p>
                  <span className="text-green">monish@portfolio</span>
                  <span className="text-cyan">:~$</span> init contact_transmission
                </p>
                <p className="mt-1">Established secure channel. Fill in the fields below.</p>
              </div>

              {!isConfigured ? (
                <div className="mt-5 rounded-[9px] border border-orange/40 bg-orange/10 px-4 py-3 label-mono text-xs leading-relaxed text-orange">
                  MAIL NOT CONFIGURED — set your EmailJS IDs in src/constants/emailjs.ts to enable sending.
                </div>
              ) : null}

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="label-mono text-[11px] text-muted">NAME</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    required
                    className="term-input mt-1.5"
                  />
                </label>
                <label className="block">
                  <span className="label-mono text-[11px] text-muted">EMAIL</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@company.com"
                    required
                    className="term-input mt-1.5"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="label-mono text-[11px] text-muted">MESSAGE</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, role, or idea..."
                  required
                  rows={4}
                  className="term-input mt-1.5 resize-none"
                />
              </label>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="lift inline-flex items-center gap-2 rounded-[9px] bg-cyan px-6 py-3 text-sm font-bold text-bg hover:shadow-glow-cyan disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    <>
                      TRANSMIT MESSAGE
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                <a
                  href={personal.resumePath}
                  download
                  className="label-mono text-xs text-muted underline-offset-4 hover:text-cyan hover:underline"
                >
                  // or download resume
                </a>
              </div>
            </form>
          ) : null}

          {status === 'sent' ? (
            <div className="term-body px-6 py-16 text-center sm:px-8">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green" />
              <p className="label-mono mt-5 text-base text-green">MESSAGE TRANSMITTED SUCCESSFULLY</p>
              <p className="label-mono mt-2 text-xs text-muted">ACK // I will get back to you within 24 hours.</p>
              <button
                type="button"
                onClick={handleReset}
                className="label-mono mt-8 rounded-[9px] border border-line px-5 py-2.5 text-xs text-ink transition-colors hover:border-cyan hover:text-cyan"
              >
                SEND ANOTHER
              </button>
            </div>
          ) : null}

          {status === 'error' ? (
            <div className="term-body px-6 py-16 text-center sm:px-8">
              <AlertTriangle className="mx-auto h-12 w-12 text-orange" />
              <p className="label-mono mt-5 text-base text-orange">TRANSMISSION FAILED</p>
              <p className="label-mono mt-2 text-xs text-muted">
                {isConfigured
                  ? 'ERR // Something went wrong. Please try again or email me directly at monishkumar.6347@gmail.com.'
                  : 'ERR // EmailJS is not configured yet. Add your IDs in src/constants/emailjs.ts.'}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="label-mono rounded-[9px] border border-line px-5 py-2.5 text-xs text-ink transition-colors hover:border-cyan hover:text-cyan"
                >
                  EMAIL DIRECTLY
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="label-mono rounded-[9px] border border-line px-5 py-2.5 text-xs text-ink transition-colors hover:border-cyan hover:text-cyan"
                >
                  TRY AGAIN
                </button>
              </div>
            </div>
          ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  )
}