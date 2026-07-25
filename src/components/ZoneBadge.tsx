interface ZoneBadgeProps {
  min: number;
  max: number;
  /** The grower's own zone, if known, to highlight compatibility. */
  userZone?: number;
}

export default function ZoneBadge({ min, max, userZone }: ZoneBadgeProps) {
  const inRange = userZone != null && userZone >= min && userZone <= max;
  const label = min === max ? `Zone ${min}` : `Zones ${min}-${max}`;

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
        userZone == null
          ? "bg-leaf-100 text-leaf-800"
          : inRange
            ? "bg-leaf-600 text-white"
            : "bg-soil-100 text-soil-700"
      }`}
      title={
        userZone != null
          ? inRange
            ? `Grows in your zone (${userZone})`
            : `Outside your zone (${userZone})`
          : undefined
      }
    >
      {label}
    </span>
  );
}
