type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

//Intersection
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag() {},
  resize() {},
};
