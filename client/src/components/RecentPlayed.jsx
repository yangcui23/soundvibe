import React from 'react'
import styles from './dash.module.css'
import { BiSolidPlaylist } from 'react-icons/bi'
export default function RecentPlayed({ track, chooseTrack, toggleDropdown }) {
  function handlePlay() {
    chooseTrack(track)
  }
  return (
    <div
      className={styles.trackDiv}
      style={{ cursor: "pointer" }}

    >
      <img src={track.album.images[0].url} className={styles.biggerCover} alt='recent played' onClick={handlePlay} />

      <div className={styles.track}>

        <div className={styles.trackTitle}>{track.name}</div>
        <div className={styles.name}>
          <p className={styles.wn}>
            {track.artists[0].name}
          </p>
          <button onClick={() => toggleDropdown(track.uri)} className={styles.divAddButton} ><BiSolidPlaylist /></button>
        </div>
      </div>
    </div>
  )
}
