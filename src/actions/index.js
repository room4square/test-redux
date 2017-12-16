export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};

// fungsi di atas disebut action creator.
// didalam file ini ada banyak export, kenapa ga export default
// karena klo pake default nanti tidak bisa di import * all