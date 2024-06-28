export interface CharacterResponse {
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
  status: string;
}
