export function FloatingLetters() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-10 left-6 text-7xl font-black text-black/5 floaty">2Z</div>
      <div className="absolute top-24 right-10 text-6xl font-black text-black/5 floaty" style={{ animationDelay: "1.2s" }}>D</div>
      <div className="absolute bottom-24 left-10 text-6xl font-black text-black/5 floaty" style={{ animationDelay: "2.1s" }}>Z</div>
      <div className="absolute bottom-10 right-12 text-7xl font-black text-black/5 floaty" style={{ animationDelay: "0.6s" }}>0</div>
    </div>
  );
}
