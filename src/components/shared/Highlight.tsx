export default function Highlight({ children, ...props }: { children: React.ReactNode }) {
  return (
    <span className="font-bold text-slate-500" {...props}>
      {children}
    </span>
  );
}
