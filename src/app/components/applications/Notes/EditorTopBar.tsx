import { MdEditNote } from "react-icons/md";
import { Note, addNote } from "@/store/features/notes/notesSlice";
import { useDispatch } from "react-redux";

export const EditorTopBar = () => {
  const emptyNote: Note = {
    id: new Date().getTime(),
    title: "",
    content: "",
    created: new Date().getTime(),
    updated: new Date().getTime(),
  };
  const dispatch = useDispatch();
  return (
    <div className="dark:bg-neutral-800">
      <div
      >
        <MdEditNote
          className="text-2xl mx-2"
          onClick={() => {
            dispatch(addNote(emptyNote));
          }}
        />
      </div>
    </div>
  );
};
