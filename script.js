const mockBoards = [
  { id: 1, title: 'Proyecto Final del Curso', color: 'bg-blue-500' },
  { id: 2, title: 'Lista de Compras Semanal', color: 'bg-green-500' },
  { id: 3, title: 'Plan de Viaje a la Playa', color: 'bg-yellow-500' },
  { id: 4, title: 'Ideas para Nuevo Emprendimiento', color: 'bg-purple-500' }
];

const fetchBoards = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockBoards);
    }, 1500);
  });
};

const renderBoards = async () => {
  const container = document.getElementById('boards-container');
  const boards = await fetchBoards();

  if (boards.length === 0) {
    container.innerHTML = '<p class="text-gray-500">No hay tableros para mostrar.</p>';
    return;
  }

  const boardsHTML = boards.map(board => `
    <div class="p-4 rounded-lg shadow-md text-white ${board.color}">
      <h3 class="font-bold text-lg">${board.title}</h3>
    </div>
  `).join('');

  container.innerHTML = boardsHTML;
};

renderBoards();