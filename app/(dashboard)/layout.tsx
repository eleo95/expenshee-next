import Navbar from "@/components/Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
}
