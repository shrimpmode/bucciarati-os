import { Note } from "@/store/features/notes/notesSlice";

export type NotePreviewProps = {
  note: Note;
};
export const NotePreview = ({ note }: NotePreviewProps) => {
  return (
    <div className="py-2 px-4 bg-neutral-200 dark:bg-neutral-600 dark:text-neutral-300 rounded-md text-xs">
      <div>
        <div className="font-semibold">
          {note.title ? note.title : "New Note"}
        </div>

        <div className="flex gap-2 text-xs">
          <div className="font-semibold">
            {new Date(note.updated).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="">{note.content.substring(0, 20)}</div>
        </div>
      </div>
    </div>
  );
};
