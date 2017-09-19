import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ArtistProfile = ({
	profile
}) => {
	return (
		<div className="profile-card">
			<div className="profile-card-avatar">
				<img src={profile.avatar_url} alt="User avatar" />
			</div>
			<div className="profile-card-info">
				<div className="profile-card-username">{ profile.username }</div>
				<div className="profile-card-location">{ profile.geo }</div>
				<div className="profile-card-stats">
					<div className="profile-card-stats-col">
						<div>Followers</div>
						<div>{ profile.followers_count }</div>
					</div>
					<div className="profile-card-stats-col">
							<div>Following</div>
							<div>{ profile.following_count }</div>
					</div>
					<div className="profile-card-stats-col">
							<div>Liked</div>
							<div>{ profile.likes_count }</div>
					</div>
				</div>
			</div>
		</div>			
	)
}

ArtistProfile.propTypes = {
	profile: PropTypes.shape({}),
};

export default ArtistProfile;