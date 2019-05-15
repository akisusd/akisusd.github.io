import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class SongList extends Component {

  componentWillReceiveProps (nextProps) {
    if(nextProps.token !== '' && !nextProps.fetchSongsError && nextProps.fetchSongsPending) {
      this.props.fetchSongs(nextProps.token);
    }
  }

  msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  renderSongs() {
    return this.props.songs.map((song, i) => {
      return (
        <div key={i} className='row'>
          <div className='col-sm-2'>
            <p>{ song.track.name }</p>
          </div>

          <div className='col-sm-2'>
            <p>{ song.track.artists[0].name }</p>
          </div>

          <div className='col-sm-2'>
            <p>{ song.track.album.name }</p>
          </div>

          <div className='col-sm-2'>
            <p>{ moment(song.added_at).format('YYYY-MM-DD')}</p>
          </div>

          <div className='col-sm-2'>
            <p>{ this.msToMinutesAndSeconds(song.track.duration_ms) }</p>
          </div>
        </div>
      );
    });
  }

  render() {

    return (
      <div className='container-fluid'>
      <h1>Last played songs</h1>
        <div className='row'>
          <div className='col-sm-2 bg-info'>
            <p>Title</p>
          </div>
          <div className='col-sm-2 bg-info'>
            <p>Artist</p>
          </div>
          <div className='col-sm-2 bg-info'>
            <p>Album</p>
          </div>
          <div className='col-sm-2 bg-info'>
            <p>Date Added</p>
          </div>
          <div className='col-sm-2 bg-info'>
            <p>Length</p>
          </div>
        </div>
        {
          this.props.songs && !this.props.fetchSongsPending && !this.props.fetchPlaylistSongsPending && this.renderSongs()
        }

      </div>
    );
  }
}

SongList.propTypes = {
  token: PropTypes.string,
  songAddedId: PropTypes.string,
  songId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  songs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  fetchSongsError: PropTypes.bool,
  fetchSongsPending: PropTypes.bool,
  fetchPlaylistSongsPending: PropTypes.bool,
  fetchSongs: PropTypes.func,
};

export default SongList;
