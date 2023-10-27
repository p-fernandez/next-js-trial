export const Error = ({ message }) =>
  message && <div className="rounded bg-red-700 text-center">{message}</div>;
export const Success = ({ message }) =>
  message && <div className="rounded bg-green-700 text-center">{message}</div>;
