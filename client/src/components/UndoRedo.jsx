import React from "react";
import { Redo, Undo } from "../../../../sketchflow/client/src/assets/icons";
import { useAppContext } from "../../../../sketchflow/client/src/provider/AppStates";

export default function UndoRedo() {
  const { undo, redo } = useAppContext();
  return (
    <section className="undoRedo">
      <button type="button" onClick={undo}>
        <Undo />
      </button>
      <button type="button" onClick={redo}>
        <Redo />
      </button>
    </section>
  );
}
