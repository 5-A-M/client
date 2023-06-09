import DefalutModal from './DefalutModal';

function DeleteNotesModal({
	openDeleteModal,
	setOpenDeleteModal,
	handleDelete,
}) {
	const data = {
		title: '작성글 삭제',
		contents: '정말 삭제하시겠습니까?',
		lpbtnTexts: '예',
		pbtnTexts: '아니오',
	};

	return (
		<DefalutModal
			title={data.title}
			contents={data.contents}
			subContents={data.subContents}
			lpbtnTexts={data.lpbtnTexts}
			pbtnTexts={data.pbtnTexts}
			setIsOpen={setOpenDeleteModal}
			modalIsOpen={openDeleteModal}
			onClickLpbtn={handleDelete}
		/>
	);
}

export default DeleteNotesModal;
