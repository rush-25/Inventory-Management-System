import { ReactNode } from 'react';
import { cn } from './Button';

export function Card({ className, children }: { className?: string, children: ReactNode }) {
  return (
    <div className={cn("bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, action, className }: { title: string, subtitle?: string, action?: ReactNode, className?: string }) {
  return (
    <div className={cn("px-6 py-4 border-b border-slate-200 flex items-center justify-between", className)}>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export function CardContent({ className, children }: { className?: string, children: ReactNode }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}
