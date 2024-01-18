import { NotesMenu } from "@/app/components/applications/Notes/NotesMenu";
import { NoteEditor } from "@/app/components/applications/Notes/NoteEditor";

export const Notes = () => {
  return (
    <div className="bg-neutral-100 flex h-[600px] w-[800px] overflow-hidden dark:text-neutral-300 resize">
      <NotesMenu />
      <NoteEditor />
    </div>
  );
};
