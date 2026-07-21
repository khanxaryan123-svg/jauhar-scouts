import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4 px-6" style={{backgroundColor: "#F2EFE9"}}>
      <div className="max-w-7xl mx-auto flex items-center gap-2">
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-slate-500">/</span>
            )}
            {item.isCurrent ? (
              <span className="text-slate-800 font-semibold">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-blue-700 hover:text-blue-800 font-medium transition-colors">
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}