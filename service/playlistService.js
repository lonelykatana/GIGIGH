import { playlist } from "../entity/playlist";

export function getSong(id) {
  const songs = playlist.find((song) => song.id === id);
  if (songs) {
    songs.played += 1;
    console(`Playing: ${songs.title}`);
    return songs;
  } else {
    console("Song not found");
  }
}
