type Props = {
  title: string
}

const bla = 'var'

export default function Home({ title = 'Boilerplate 001!' }: Props) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
