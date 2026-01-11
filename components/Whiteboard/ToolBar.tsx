import * as fabric from "fabric";

export const addRect = (canvas: fabric.Canvas) =>
  canvas.add(
    new fabric.Rect({
      left: 100,
      top: 100,
      width: 120,
      height: 80,
      stroke: "white",
      fill: "transparent",
      strokeWidth: 2,
    })
  );

export const addEllipse = (canvas: fabric.Canvas) =>
  canvas.add(
    new fabric.Ellipse({
      rx: 60,
      ry: 40,
      left: 200,
      top: 150,
      stroke: "white",
      fill: "transparent",
      strokeWidth: 2,
    })
  );

export const addLine = (canvas: fabric.Canvas) =>
  canvas.add(
    new fabric.Line([50, 100, 250, 100], {
      stroke: "white",
      strokeWidth: 2,
    })
  );

export const addText = (canvas: fabric.Canvas) => {
  canvas.add(
    new fabric.Textbox("Text", {
      left: 150,
      top: 50,
      fill: "#fff",
      fontFamily: "Poppins",
      fontSize: 20,
    })
  );
};

export const addArrow = (canvas: fabric.Canvas) => {
  if (!canvas) return;

  const line = new fabric.Line([0, 0, 120, 0], {
    stroke: "white",
    strokeWidth: 2,
  });

  const head = new fabric.Triangle({
    width: 12,
    height: 14,
    fill: "white",
    left: 120,
    top: 0,
    angle: 90,
  });

  const arrow = new fabric.Group([line, head], {
    left: 150,
    top: 150,
  });

  canvas.add(arrow);
};
