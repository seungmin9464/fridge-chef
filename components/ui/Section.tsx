type Props = {
  title?: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: Props) {
  return (
    <div className="mb-6">
      {title && (
        <p className="text-gray-400 text-sm mb-2">{title}</p>
      )}
      {children}
    </div>
  );
}