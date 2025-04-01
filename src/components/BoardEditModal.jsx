import { useBoardStore } from '../store';

const BoardEditModal = ({ item, onClose }) => {
  const { updateBoard } = useBoardStore();
  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const editTask = {
      id: item.id,
      type: formData.get('type'),
      title: formData.get('title'),
      desc: formData.get('desc'),
      created_at: new Date().toISOString().split('T')[0],
    };
    updateBoard(editTask);
    onClose();
  };

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg shadow-lg p-6 w-[600px]">
        <h2 className="text-xl font-semibold mb-4 whitespace-break-spaces">업무 수정</h2>
        <form onSubmit={(e) => handleForm(e)} className="flex flex-col gap-2">
          <div>업무 분류</div>
          <select className="border border-gray-300 rounded-md p-2" name="type" id="type" defaultValue={item.type}>
            <option value="todo">할 일</option>
            <option value="inprogress">진행 중</option>
            <option value="done">완료</option>
          </select>
          <div>업무 제목</div>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="업무 제목을 입력하세요."
            className="border border-gray-300 rounded-md p-2"
            defaultValue={item.title}
            required
          />
          <div>업무 내용</div>
          <textarea
            name="desc"
            id="desc"
            defaultValue={item.desc}
            placeholder="업무 내용을 입력하세요."
            className="border border-gray-300 rounded-md p-2 resize-none"
            required
          ></textarea>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="cursor-pointer mt-4 bg-black text-white px-4 py-2 rounded hover:bg-stone-600"
            >
              수정
            </button>
            <button
              onClick={onClose}
              className="cursor-pointer mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              닫기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoardEditModal;
