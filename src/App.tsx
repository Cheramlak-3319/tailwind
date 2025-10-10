import UserFiles from "./componentes/UserFiles"

function App() {
  return (
    <div>
      <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Edit</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Duplicate</a>
    </div>
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Archive</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Move</a>
    </div>
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Share</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Add to favorites</a>
    </div>
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Delete</a>
    </div>
    <UserFiles />
    </div>
  )
}

export default App
