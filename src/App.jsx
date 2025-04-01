import Boards from './components/Boards';
import Controller from './components/Controller';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="w-full h-[80px] bg-slate-800 flex flex-col items-center justify-center text-stone-100">
        <p className="text-lg font-semibold">Kanban Board Project</p>
        <p>Chapter 2. Zustand</p>
      </header>
      <main className="flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-4 p-4 w-full">
          <Boards type={'todo'} />
          <Boards type={'inprogress'} />
          <Boards type={'done'} />
        </div>
        <Controller />
      </main>
      <footer className="w-full h-[60px] bg-slate-800 flex items-center text-stone-100 justify-center">
        <p>&copy; OZ-CodingSchool</p>
      </footer>
    </div>
  );
}

export default App;
