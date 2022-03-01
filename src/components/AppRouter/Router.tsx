import Character from "../Character/character.component";
import CharactersList from "../Characters/characters.component";
import { Route, Routes } from "react-router-dom";

const Router = () => (
  <Routes>
    <Route path="/" element={<CharactersList />} />
    <Route path="/:characterId" element={<Character />} />
  </Routes>
);

export default Router;
