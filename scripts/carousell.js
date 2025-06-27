const container = document.querySelector('.imgs');
const pagination = document.querySelector('.pagination');

function updateZIndicesAndTransforms() {
  const cards = Array.from(container.querySelectorAll('img'));
  cards
    .sort((a, b) => parseInt(a.style.zIndex || 0) - parseInt(b.style.zIndex || 0))
    .forEach((card, i, arr) => {
      card.style.zIndex = i + 1;
  
      if (i === arr.length - 1) {
        card.style.transform = 'rotate(0deg)';
      } else {
        const rotation = (i - arr.length + 1) * 5; // e.g.: -10, -5, 0
        card.style.transform = `rotate(${rotation}deg)`;
      }
    });
}
updateZIndicesAndTransforms();
addPagination();

function getTopCard() {
  const cards = Array.from(container.querySelectorAll('img'));
  return cards.reduce((top, current) => {
    const zTop = parseInt(top.style.zIndex || 0);
    const zCur = parseInt(current.style.zIndex || 0);
    return zCur > zTop ? current : top;
  });
}

function shuffle(direction = 'right') {
  const cards = Array.from(container.querySelectorAll('img'));
  const topCard = getTopCard();

  topCard.style.transform =
    direction === 'right'
      ? 'translateX(100%) rotate(10deg)'
      : 'translateX(-100%) rotate(-10deg)';

 
  setTimeout(() => {
    // increase others z-index
    cards.forEach((card) => {
      const z = parseInt(card.style.zIndex || 0);
      if (card !== topCard) {
        card.style.zIndex = z + 1;
      }
    });

    // put topCard last
    topCard.style.zIndex = 1;

    // animate in
    const newRotation = (0 - cards.length + 1) * 5; 
    topCard.style.transform = `rotate(${newRotation}deg) translateX(0)`;
    
    setTimeout(() => {
      updateZIndicesAndTransforms();
      addPagination();
    }, 10);
  }, 300);
}

function addPagination() {
  const cards = Array.from(container.querySelectorAll('img'));
  pagination.innerHTML = ''; // clear
  
  const topCard = getTopCard();

  cards.forEach((card) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    if (card === topCard) {
      dot.classList.add('active');
    }

    pagination.appendChild(dot);
  });
}
