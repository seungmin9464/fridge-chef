type Props = {
  label: string;
  onClick?: () => void;
  onRemove?: () => void;
  active?: boolean;
};

export default function Chip({ label, onClick, onRemove, active }: Props) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm cursor-pointer
      ${active ? "bg-green-500 text-black" : "bg-[#2a2a2a] text-white"}`}
    >
      {label}
      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="text-gray-400"
        >
          ✕
        </button>
      )}
    </div>
  );
}