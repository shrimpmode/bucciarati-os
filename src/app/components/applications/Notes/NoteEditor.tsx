import { EditorTopBar } from "./EditorTopBar";

export const NoteEditor = () => {
  return (
    <div className="dark:bg-neutral-900 flex-1">
      <EditorTopBar />
      <div className="px-4 pt-2">note content</div>
    </div>
  );
};
