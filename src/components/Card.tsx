import React from "react";

export function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div className={`border px-6 py-3 w-fit rounded-lg font-mono text-green-400 border-green-400 bg-green-600/40 text-[1rem] lg:text-[4rem]`}>
      {children}
    </div>
  )
} 
