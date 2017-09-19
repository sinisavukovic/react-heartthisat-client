import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SongProfile = ({
	profile
}) => {
	return (
		<div className="profile-card">
			<div className="profile-card-avatar">
				<img src={profile.artwork_url} alt="Song avatar" />
			</div>
			<div className="profile-card-info">
				<div className="profile-card-title">{ profile.title }</div>
				<div className="profile-card-stats">
					<div className="profile-card-stats-col">
						<div>Playbacks</div>
						<div>{ profile.playback_count }</div>
					</div>
					<div className="profile-card-stats-col">
							<div>Downloads</div>
							<div>{ profile.download_count }</div>
					</div>
					<div className="profile-card-stats-col">
							<div>Liked</div>
							<div>{ profile.favoritings_count }</div>
					</div>
				</div>
			</div>
		</div>			
	)
}

SongProfile.propTypes = {
	profile: PropTypes.shape({}),
};

export default SongProfile;