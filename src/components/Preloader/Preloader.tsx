export default function Preloader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-t from-my-primary to-my-secondary">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-transparent border-t-white border-l-white rounded-full animate-spinSlow"></div>
        <div className="absolute inset-2 border-4 border-transparent border-t-white border-r-white rounded-full animate-spinReverse"></div>
      </div>
    </div>
  );
}