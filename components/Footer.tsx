import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-100 px-6 py-12 dark:border-slate-800 lg:px-12">
      <div className="container-core grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
            <span className="heading-display text-lg font-bold lowercase">vibe & voice</span>
          </div>
          <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">Resonating with culture, leading with strategy.</p>
          <div className="flex gap-4 text-xs uppercase">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700">in</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700">ig</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700">tw</span>
          </div>
        </div>

        <div>
          <h4 className="mb-6 font-semibold">Company</h4>
          <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">Our Process</Link></li>
            <li><Link href="/">Careers</Link></li>
            <li><Link href="/">Press Kit</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-semibold">Services</h4>
          <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <li>PR & Communications</li>
            <li>Growth Marketing</li>
            <li>Content Creation</li>
            <li>Influencer Marketing</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-semibold">Location</h4>
          <p className="mb-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Hauz Khas, New Delhi
            <br />
            India 110016
          </p>
          <a href="mailto:hello@vibenvoice.com" className="text-sm font-semibold text-primary">
            hello@vibenvoice.com
          </a>
        </div>
      </div>

      <div className="container-core mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:border-slate-800/50 md:flex-row">
        <span>(c) 2026 Vibe & Voice India. All rights reserved.</span>
        <div className="flex gap-8">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
