import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

/* En el caso que traemos los datos de una api, arreglo, lista de objeetos,etc */

const users = [
  {
    userName: "kylian",
    name: "Kylian Santaella R.",
  },
  {
    userName: "anarg",
    name: "Anargelis Rodriguez O.",
  },
  {
    userName: "maryan",
    name: "Mariangel Rodriguez R.",
  },
  {
    userName: "elismar",
    name: "Elismar Rodriguez M.",
  },
  {
    userName: "migye",
    name: "Migyelis Rodriguez M.",
  },
  {
    userName: "lisme",
    name: "Lismely Mundarain F.",
  },
];

export function App() {
  return (
    <section className='App'>
      {users.map((user) => {
        const { userName, name } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}></TwitterFollowCard>
        );
      })}
    </section>
  );
}
