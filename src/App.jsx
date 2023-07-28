const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ parts }) => {
  return (
    <>
    {parts.map(part => <p>{part.name} {part.exercises}</p>)}
    </>
  )
}

const Total = ({ parts }) => {
  let total = 0
  parts.forEach(part => total = total + part.exercises)
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App

// Aqui, um array preenchido com valores inteiros é transformado em um array contendo strings de HTML usando o método map. Na parte 2 deste curso, veremos que o map é usado com frequência em Reac