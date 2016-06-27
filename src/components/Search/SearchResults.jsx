import React from 'react';
import { connect } from 'react-redux';
import { addVideo } from '../../actions';
import SearchResultsItem from './SearchResultsItem';

function SearchResults({ id, results, ...props }) {
	const styles = {
		list: {
			listStyleType: 'none',
		},
	};

	return (
		<ul
			id={id}
			style={styles.list}
		>
			{results.map((video, index) => (
				<SearchResultsItem
					key={video.key}
					index={index}
					video={video}
					onClick={() => props.addVideo(video)}
				/>
			))}
		</ul>
	);
}

SearchResults.propTypes = {
	id: React.PropTypes.string,
	results: React.PropTypes.array.isRequired,
	addVideo: React.PropTypes.func,
};

SearchResults.defaultProps = {
	addVideo: () => null,
};

const mapStateToProps = (state) => ({
	results: state.search.results,
});

const mapDispatchToProps = {
	addVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
