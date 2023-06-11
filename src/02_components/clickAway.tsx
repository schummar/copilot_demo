import  { useEffect, useRef, useState } from "react";

export function ClickAway() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(!open)}>Toggle</button>
      {open && (
        <div className="box">
          <h1>Click away</h1>
          <p>Click outside of this box to close it</p>
        </div>
      )}
    </div>
  );
}
