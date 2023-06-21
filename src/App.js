import { useField, useResource } from './hooks'
import Notes from './components/Notes'
import Persons from './components/Persons'

const App = () => {
  const content = useField('text')
  const name = useField('text')
  const number = useField('text')

  const [notes, noteService] = useResource('http://localhost:3005/notes')
  const [persons, personService] = useResource('http://localhost:3005/persons')

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
    content.onSubmit()
  }
 
  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value})
    name.onSubmit()
    number.onSubmit()
  }

  return (
    <div>
      <h2>notes</h2>
      <Notes
        notes={notes}
        handle={handleNoteSubmit}
        content={content}
        />

      <h2>persons</h2>
      <Persons
        name={name}
        number={number}
        handle={handlePersonSubmit}
        persons={persons}
        />
    </div>
  )
}

export default App