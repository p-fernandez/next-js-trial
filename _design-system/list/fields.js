export const Field = ({ className, children }) => (
  <div className={`bold italic text-slate-200 ${className}`}>{children}</div>
);
export const FieldValue = ({ className, children }) => (
  <div className={className}>{children}</div>
);
