import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { NotesMenu } from "@/app/components/applications/Notes/NotesMenu";
import { NoteEditor } from "@/app/components/applications/Notes/NoteEditor";

export const Notes = () => {
    const notes = useSelector((state: RootState) => state.notes.notes);
    return (
        <div className="bg-neutral-100 h-full flex min-h-[600px] dark:text-neutral-300">
            <NotesMenu />
            <NoteEditor />
        </div>
    );
};
