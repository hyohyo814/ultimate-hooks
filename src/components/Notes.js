const Notes = ({notes, handle, content}) => {
  return (
    <div>
      <form onSubmit={handle}>
        <input {...content} />
        <button>create</button>
      </form>
      {notes.map((n) => (
        <p key={n.id}>{n.content}</p>
      ))}
    </div>
  );
};

export default Notes