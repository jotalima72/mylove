"use client"
import React, { useEffect } from "react";
import { Card } from "./Card";

export default function Timer() {
  const [getDate, setDate] = React.useState(new Date());

  useEffect(() => {
    const targetDate = new Date("2024-05-25T00:00:00");
    const currentDate = new Date();

    if (currentDate > targetDate) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }
    const interval = setInterval(() => {
      const diference = targetDate.getTime() - (new Date()).getTime()
      setDate(new Date(diference));
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="flex flex-col gap-2 font-mono text-green-400 w-fit">
      <div className="flex gap-4 justify-around">
        <div>
          <Card>{getDate.getMonth() >= 10 ? getDate.getMonth() : "0" + getDate.getMonth()}</Card>
          <span>months</span>
        </div>
        <div>
          <Card>{(getDate.getDate() - 1) >= 10 ? (getDate.getDate() - 1) : "0" + (getDate.getDate() - 1)}</Card>
          <span>days</span>
        </div>
      </div>
      <div className="flex gap-4 justify-between">
        <div>
          <Card>{getDate.getUTCHours() >= 10 ? getDate.getUTCHours() : "0" + getDate.getUTCHours()}</Card>
          <span>hours</span>
        </div>
        <div>
          <Card>{getDate.getUTCMinutes() >= 10 ? getDate.getUTCMinutes() : "0" + getDate.getUTCMinutes()}</Card>
          <span>minutes</span>
        </div>
        <div>
          <Card>{getDate.getUTCSeconds() >= 10 ? getDate.getUTCSeconds() : "0" + getDate.getUTCSeconds()}
          </Card>
          <span>seconds</span>
        </div>
      </div>
    </div >
  )
}