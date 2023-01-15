export default function Note(props: { key: number, title: string, content: string }) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>DELETE</button>
    </div>
  )
}