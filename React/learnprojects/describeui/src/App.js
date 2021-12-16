import { people } from './components/Data.js';
import Profile1 from './components/Profile.js';

export default function App() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      {people.map(person => (
        <ol>
        <Profile1
          key={person.id}
          name={person.name}
          imageId={person.imageId}
        />
        </ol>
      ))}
    </section>
  );
}
