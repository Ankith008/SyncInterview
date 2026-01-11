import * as fabric from "fabric";

export const exportJSON = (canvas: fabric.Canvas) => {
  if (!canvas) return;

  const json = canvas.toJSON();
  console.log(json);

  localStorage.setItem("whiteboard", JSON.stringify(json));
  alert("saved");
};

export const importJSON = (canvas: fabric.Canvas) => {
  if (!canvas) return;

  const data = localStorage.getItem("whiteboard");
  if (!data) return;
  canvas.clear();

  canvas.loadFromJSON(JSON.parse(data), () => {
    canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
    canvas.calcOffset();
    canvas.requestRenderAll();
  });
};
