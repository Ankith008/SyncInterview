import React from "react";
import Image from "next/image";
import * as fabric from "fabric";
import { addArrow, addEllipse, addLine, addRect, addText } from "./ToolBar";
import { exportJSON, importJSON } from "./ExpoInpo";

type Props = {
  canvasRef: React.RefObject<fabric.Canvas | null>;
};

export default function Buttons({ canvasRef }: Props) {
  return (
    <div className="fixed top-[80px] left-1/2 -translate-x-1/2 z-20 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-3 flex gap-4 text-white">
      <button onClick={() => canvasRef.current && addRect(canvasRef.current)}>
        <Image src="/reactangle.png" width={24} height={24} alt="" />
      </button>

      <button
        onClick={() => canvasRef.current && addEllipse(canvasRef.current)}
      >
        <Image src="/ellipse.png" width={24} height={24} alt="" />
      </button>

      <button onClick={() => canvasRef.current && addLine(canvasRef.current)}>
        <Image src="/line.png" width={24} height={24} alt="" />
      </button>

      <button onClick={() => canvasRef.current && addArrow(canvasRef.current)}>
        <Image src="/arrow.png" width={24} height={24} alt="" />
      </button>

      <button onClick={() => canvasRef.current && addText(canvasRef.current)}>
        <Image src="/text.png" width={24} height={24} alt="" />
      </button>

      <button
        onClick={() => canvasRef.current && exportJSON(canvasRef.current)}
      >
        <Image src="/submit.png" width={24} height={24} alt="" />
      </button>

      <button
        onClick={() => canvasRef.current && importJSON(canvasRef.current)}
      >
        <Image src="/Import.png" width={24} height={24} alt="" />
      </button>
    </div>
  );
}
