document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');

    loadSavedRating();

    //clique às estrelas
    stars.forEach(star => {
      star.addEventListener('click', function() {
        const value = parseInt(this.getAttribute('data-value'));

        localStorage.setItem('rating', value);

        updateStars(value);
      });
    });

    function loadSavedRating() {
      const savedRating = localStorage.getItem('rating');
      if (savedRating) {
        updateStars(parseInt(savedRating));
      }
    }

    // Função para atualizar visualmente as estrelas preenchidas
    function updateStars(value) {
      stars.forEach((star, index) => {
        if (index < value) {
          star.innerHTML = '<i class="fas fa-star"></i>';
        } else {
          star.innerHTML = '<i class="far fa-star"></i>';
        }
      });
    }
  });

  ///

  document.addEventListener('DOMContentLoaded', function() {
    const favoriteButton = document.getElementById('favoriteButton');

    loadFavoriteState();

    favoriteButton.addEventListener('click', function() {
      toggleFavoriteState();
    });

    function loadFavoriteState() {
      const isFavorited = localStorage.getItem('favorited');
      if (isFavorited === 'true') {
        favoriteButton.classList.add('favorited');
        favoriteButton.innerHTML = '<i class="fas fa-heart"></i>';
      }
    }

    function toggleFavoriteState() {
      const isFavorited = localStorage.getItem('favorited') === 'true';
      if (isFavorited) {
        localStorage.setItem('favorited', 'false');
        favoriteButton.classList.remove('favorited');
        favoriteButton.innerHTML = '<i class="far fa-heart"></i>';
      } else {
        localStorage.setItem('favorited', 'true');
        favoriteButton.classList.add('favorited');
        favoriteButton.innerHTML = '<i class="fas fa-heart"></i>';
      }
    }
  });

// validar senhas register.html

document.querySelector('form').addEventListener('submit', function(e) {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    e.preventDefault();
    alert('As senhas não coincidem!');
  }
});