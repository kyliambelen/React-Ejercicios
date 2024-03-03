import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <TwitterFollowCard
        isFollowing
        userName='kylian'
        name='Kylian Santaella'
      />

      <TwitterFollowCard userName='anarg' name='Anargelis Rodriguez' />

      <TwitterFollowCard
        isFollowing
        userName='maryan'
        name='Mariangel Rodriguez'
      />
      <TwitterFollowCard userName='elismar' name='Elismar Rodriguez' />
      <TwitterFollowCard
        isFollowing
        userName='migye'
        name='Migyelis Rodriguez'
      />
      <TwitterFollowCard userName='lisme' name='Lismely Mundarain' />
    </>
  );
}
