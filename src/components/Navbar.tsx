const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-background-light/80 px-6 py-5 backdrop-blur-md lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEyljQAuNXxaecb_rHPYIdLYxJZ_QSDFbUae0OvVwms8r-hmlowPtOdTE_4mBI6_PTBeyX-mEKMjrR3krL9P9QpnLKrnKKQEVt3dadnngf9f3hhTh-Yo4wYsAXvy1Jt8Q1IH45bsW_Z4gH8MC3gXHetNt-nWCY4bLfp4M2WHvnZSueYeZz7mxE5jKxGET49DrvB3QQd56nnk8ur-2um9ZRzgVN0gr8V9jStZCV2hZfmjW8HjguS97HJ8Xw7TSGikqVQvIWdIAjLgg"
            alt="Vibe n Voice logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-xl font-bold tracking-tight">vibe n voice</span>
        </a>
        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
