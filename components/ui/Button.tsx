type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-xl border border-[#3a3a3a] bg-[#2a2a2a] ${className}`}
    >
      {children}
    </button>
  );
}