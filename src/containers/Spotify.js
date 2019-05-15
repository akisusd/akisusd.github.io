import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import { fetchSongs } from '../actions/songActions';
import { setToken } from '../actions/tokenActions';
import SongList from '../components/SongList';

class Spotify extends Component {
	
	componentDidMount() {

	  let hashParams = {};
	  let e, r = /([^&;=]+)=?([^&;]*)/g,
	    q = window.location.hash.substring(1);
	  while ( e = r.exec(q)) {
	    hashParams[e[1]] = decodeURIComponent(e[2]);
	  }

	  if(!hashParams.access_token) {
	    window.location.href = 'https://accounts.spotify.com/authorize?client_id=32e01da48975407b869e51284666b21a&response_type=token&redirect_uri=http://localhost:3000/spotify/callback';
	  } else {
	    this.props.setToken(hashParams.access_token);
	  }

	}

	componentWillReceiveProps(nextProps) {
	  if(nextProps.token) {
			this.props.fetchUser(nextProps.token);
			this.props.fetchSongs(nextProps.token);
	  };
	}

	render() {
	  return (
	    <div>
				<SongList/>
	    </div>
	  );
	}
}

Spotify.propTypes = {
  token: PropTypes.string,
	fetchUser: PropTypes.func,
	fetchSongs: PropTypes.func,
	setToken: PropTypes.func
};

const mapStateToProps = (state) => {

  return {
    token: state.tokenReducer.token
  };

};

const mapDispatchToProps = dispatch => {

  return bindActionCreators({
		fetchUser,
		fetchSongs,
		setToken
  },dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(Spotify);