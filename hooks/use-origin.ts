import { useEffect, useState } from "react"

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // if typeof window is not undefined AND window.location.origin exists then render window.location.origin else render an empty string
  const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : ""

  if (!mounted) {
    return null;
  }

  return origin;
}