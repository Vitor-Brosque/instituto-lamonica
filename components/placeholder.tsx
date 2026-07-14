type PlaceholderProps = {
  label: string;
  className?: string;
};

// Bloco de mídia provisório — trocar por foto/vídeo real mantendo o mesmo container.
export default function Placeholder({ label, className = "" }: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-brand/30 bg-brand-tint/70 ${className}`}
    >
      <span className="max-w-[85%] px-4 py-6 text-center text-xs font-medium uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
    </div>
  );
}
