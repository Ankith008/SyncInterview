import * as fabric from "fabric";

export const applyColor = (
  canvas: fabric.Canvas | null,
  obj: fabric.Object | null,
  color: string
) => {
  if (!canvas || !obj) return;

  if (obj.type === "textbox") {
    obj.set("fill", color);
  } else if (obj.type === "group") {
    obj.getObjects().forEach((child: any) => {
      if (child.stroke) child.set("stroke", color);
      if (child.fill) child.set("fill", color);
    });
  } else {
    obj.set("stroke", color);
  }

  canvas.renderAll();
};

export const applytextFamily = (
  canvas: fabric.Canvas | null,
  obj: fabric.Object | null,
  style: string
) => {
  if (!canvas || !obj || obj.type !== "textbox") return;

  if (style === "italic") {
    obj.set("fontStyle", "italic");
  } else {
    obj.set("fontStyle", "normal");

    if (style === "normal") obj.set("fontWeight", "normal");
    if (style === "semibold") obj.set("fontWeight", "600");
    if (style === "bold") obj.set("fontWeight", "bold");
  }

  canvas.renderAll();
};
