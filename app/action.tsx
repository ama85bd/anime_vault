'use server';

import AnimeCard, { AnimeProp } from '@/components/AnimeCard';
import axios from 'axios';

const MAX_LIMIT = 8;
export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();
  return data.map((anime: AnimeProp, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
};

export const fetchTestData = async () => {
  const response = await axios.get('http://localhost:3000/api/tasks');
  return response;
};
