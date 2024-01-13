import { MdEditNote } from "react-icons/md"
import { Note, addNote } from "@/store/features/notes/notesSlice"
import { useDispatch } from "react-redux"

export const EditorTopBar = () => {

    const emptyNote: Note = {
        id: new Date().getTime(),
        title: "",
        content: "",
        created: new Date(),
        updated: new Date()
    }
    const dispatch = useDispatch()
    return (
        <div className="dark:bg-neutral-800">
            <div onClick={() => {
                dispatch(addNote(emptyNote))
            }} >

                <MdEditNote className="text-2xl mx-2" />
            </div>
        </div>
    )
}
