export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] flex items-center justify-center opacity-70">
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 md:w-96 md:h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] animate-blob"></div>
      <div className="absolute top-[20%] right-[-5%] w-72 h-72 md:w-96 md:h-96 bg-accent/30 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-10%] left-[20%] w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}
