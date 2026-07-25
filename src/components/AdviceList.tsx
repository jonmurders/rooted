import type { CareAdvice } from "@/lib/advice";

const levelStyles: Record<CareAdvice["level"], string> = {
  info: "bg-leaf-50 border-leaf-200 text-leaf-900",
  warning: "bg-amber-50 border-amber-300 text-amber-900",
  danger: "bg-red-50 border-red-300 text-red-900",
};

const typeIcon: Record<CareAdvice["type"], string> = {
  water: "\u{1F4A7}",
  freeze: "\u{2744}\u{FE0F}",
  heat: "\u{2600}\u{FE0F}",
};

export default function AdviceList({ advice }: { advice: CareAdvice[] }) {
  if (advice.length === 0) return null;

  return (
    <ul className="space-y-2">
      {advice.map((item, i) => (
        <li
          key={i}
          className={`border rounded-md px-3 py-2 text-sm flex gap-2 ${levelStyles[item.level]}`}
        >
          <span aria-hidden>{typeIcon[item.type]}</span>
          <span>{item.message}</span>
        </li>
      ))}
    </ul>
  );
}
