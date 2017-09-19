import PropTypes from 'prop-types';
import React from 'react';

const Artwork = ({
	artworkUrl,
	size,
	isActive,
	children
}) => {
	return (
		<div className={`album-art album-art--${size} ` + (isActive ? 'active' : '') }>
			<img src={artworkUrl} height="250" width="250" />
			{children}
		</div>
	)
}

Artwork.propTypes = {
	artworkUrl: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired,
	children: PropTypes.node
}

export default Artwork;