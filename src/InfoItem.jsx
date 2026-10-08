function InfoItem({ Icon, label, value, href }) {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper
      href={href}
      className="flex items-center gap-4 group"
    >
      <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
        <Icon size={18} className="text-orange-500" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-gray-500 mb-0.5">
          {label}
        </div>
        <div className="text-white font-semibold group-hover:text-orange-400 transition-colors">
          {value}
        </div>
      </div>
    </Wrapper>
  );
}
export default InfoItem