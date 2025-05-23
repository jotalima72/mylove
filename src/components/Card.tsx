import React from "react";

export function Card({ children, center }: { children?: React.ReactNode, center?: boolean }) {
  return (
    <div className={`${center?? 'flex flex-col gap-4 items-center justify-center'} border px-2 md:px-6 py-3 w-full md:w-[80%] rounded-lg font-mono text-green-400 border-green-400 bg-green-600/40 text-[1rem] lg:text-[4rem]`}>
      {children}
    </div>
  )
} 
