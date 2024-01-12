import { NotePreview } from "@/app/components/applications/Notes/NotePreview";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Divider } from "./Divider";

export const NotesMenu = () => {
    const notes = useSelector((state: RootState) => state.notes.notes);

    return (
        <div className="border-r border-r-neutral-300 dark:border-r-black min-w-[250px] dark:bg-neutral-800">
            <div className="flex flex-col gap-2">
                <Divider />
                <div className="px-2">
                    {
                        notes.map(note => {
                            return (
                                <NotePreview note={note} key={note.id} />
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}
