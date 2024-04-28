export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center">
      {children}
    </div>
  );
}
