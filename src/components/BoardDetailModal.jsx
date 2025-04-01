const BoardDetailModal = ({ item, onClose, onConfirm, onEdit }) => {
  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg shadow-lg p-6 w-[600px]">
        <div className="flex">
          <h2 className="text-xl font-semibold mb-4 whitespace-break-spaces">{item.title}</h2>
        </div>
        <p>{item.desc}</p>
        <div className="flex items-center justify-between gap-4 mt-4">
          <button
            onClick={onClose}
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600"
          >
            닫기
          </button>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => onConfirm(item.id)}
              className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-sm"
            >
              삭제
            </button>
            <button
              onClick={onEdit}
              className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-sm"
            >
              수정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetailModal;
