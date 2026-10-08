function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
      aria-label={label}
    >
      {children}
    </a>
  );
}
export  default SocialLink
