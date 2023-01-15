import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
    return (
        <main>
            <CreateArea />
            <Note key={1} title="Note title" content="Note content" />
        </main>
    )
}