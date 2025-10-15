import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Example of how cn() works
// const state = true;
// <Button className={
//   cn(
//     "bg-indigo-500",
//     state && "bg-red-500" // If state is true, then the button becomes red
//   )
// }>
//   Click me
//     </Button>