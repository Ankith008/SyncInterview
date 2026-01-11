"use client";

import { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import OptionsTab from "./OptionsTab";
import { applyColor, applytextFamily } from "./ApplyStyles";
import Buttons from "./Buttons";

export default function Whiteboard() {
  const canvasRef = useRef<fabric.Canvas | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const selectedObjRef = useRef<fabric.Object | null>(null);
  const [showColor, setShowColor] = useState<Boolean>(false);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const canvas = new fabric.Canvas("board", { selection: true });
    canvasRef.current = canvas;

    const resize = () => {
      const { clientWidth, clientHeight } = wrapperRef.current!;
      canvas.setDimensions({ width: clientWidth, height: clientHeight });
    };

    resize();
    window.addEventListener("resize", resize);

    canvas.on("selection:created", (e) => {
      selectedObjRef.current = e.selected?.[0] || null;
      setShowColor(true);
    });

    canvas.on("selection:updated", (e) => {
      selectedObjRef.current = e.selected?.[0] || null;
      setShowColor(true);
    });

    canvas.on("selection:cleared", () => {
      selectedObjRef.current = null;
      setShowColor(false);
    });

    return () => {
      window.removeEventListener("resize", resize);
      canvas.dispose();
    };
  }, []);

  return (
    <div className="w-full h-[calc(100vh-64px)] bg-gradient-to-br from-[#0b1220] to-[#050914] overflow-hidden">
      {showColor && (
        <OptionsTab
          applyColor={(color) =>
            applyColor(canvasRef.current, selectedObjRef.current, color)
          }
          applytextFamily={(style) =>
            applytextFamily(canvasRef.current, selectedObjRef.current, style)
          }
        />
      )}
      <Buttons canvasRef={canvasRef} />

      <div ref={wrapperRef} className="w-full h-full relative">
        <canvas id="board" className="absolute inset-0" />
      </div>
    </div>
  );
}
