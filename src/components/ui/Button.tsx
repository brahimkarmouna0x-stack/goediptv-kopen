type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`btn-shine inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#EF4135] text-slate-950 text-xs font-black 
       hover-effect uppercase tracking-[0.12em] shadow-lg shadow-[#EF4135]/20 hover:bg-[#EF4135] active:scale-[0.98] ${className}`}
      {...props}
      style={{ willChange: 'transform' }}
    >
      {children}
    </button>
  );
};

export default Button;
