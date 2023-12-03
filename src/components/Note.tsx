import creationDate from "@/services/creationDate";

export default function Note({ note }: { note: NoteType }) {
  return (
    <div className="bg-stone-900 w-max h-max mx-1 my-3 text-white p-5 rounded space-y-3 overflow-hidden">
      <h1 className="font-bold text-center text-2xl">{note.title}</h1>
      <p className="text-sm text-center">{note.content}</p>
      <div>
        <p className="text-xs text-end text-stone-500">
          Created {creationDate(note.createdAt)}
        </p>
      </div>
    </div>
  );
}
