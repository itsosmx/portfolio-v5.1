"use client";
import React from "react";
import PointerPosition from "../utils/PointerPosition";

export default function BackgroundCursor({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient( circle at ${PointerPosition().x}px ${
          PointerPosition().y
        }px, rgba(255, 255, 255, 0.08)  , transparent 30% )`,
      }}>
      {children}
    </div>
  );
}
