"use client";

import { useEffect, useRef, useState } from "react";

const SYMBOLS = ["+", "@", "?", "[", "]", "/"];
const GRID_SIZE = 50;

interface GridCell {
  id: number;
  x: number;
  y: number;
  symbol: string;
  isActive: boolean;
  opacity: number;
}

export default function SymbolGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cells, setCells] = useState<GridCell[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize grid
  useEffect(() => {
    const updateGrid = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const cols = Math.ceil(rect.width / GRID_SIZE) + 1;
      const rows = Math.ceil(rect.height / GRID_SIZE) + 1;

      const newCells: GridCell[] = [];
      let id = 0;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          newCells.push({
            id: id++,
            x: col * GRID_SIZE,
            y: row * GRID_SIZE,
            symbol: "·",
            isActive: false,
            opacity: 0.3,
          });
        }
      }
      setCells(newCells);
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  // Random animation
  useEffect(() => {
    if (cells.length === 0) return;

    const animateRandomCells = () => {
      setCells((prevCells) => {
        const newCells = [...prevCells];

        // Reset some previously active cells back to dots
        newCells.forEach((cell, index) => {
          if (cell.isActive && Math.random() < 0.15) {
            newCells[index] = {
              ...cell,
              symbol: "·",
              isActive: false,
              opacity: 0.3,
            };
          }
        });

        // Activate random cells (about 3-5 at a time)
        const numToActivate = Math.floor(Math.random() * 3) + 2;
        for (let i = 0; i < numToActivate; i++) {
          const randomIndex = Math.floor(Math.random() * newCells.length);
          const randomSymbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

          newCells[randomIndex] = {
            ...newCells[randomIndex],
            symbol: randomSymbol,
            isActive: true,
            opacity: 0.4 + Math.random() * 0.4, // Random opacity between 0.4 and 0.8
          };
        }

        return newCells;
      });
    };

    // Run animation every 150ms
    intervalRef.current = setInterval(animateRandomCells, 150);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [cells.length]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {cells.map((cell) => (
        <span
          key={cell.id}
          className={`absolute font-mono text-sm select-none transition-all duration-300 ${
            cell.isActive ? "text-slate-400 scale-110" : "text-slate-700"
          }`}
          style={{
            left: cell.x,
            top: cell.y,
            transform: "translate(-50%, -50%)",
            opacity: cell.opacity,
          }}
        >
          {cell.symbol}
        </span>
      ))}
    </div>
  );
}
