document.addEventListener('DOMContentLoaded', () => {
  const reviews = [
    { name: "Alex", text: "Буст сделали очень быстро, рекомендую!", rating: 5 },
    { name: "Katya", text: "Цены приятно удивили, качество отличное.", rating: 4 },
    { name: "Dmitry", text: "Профессиональный сервис, спасибо!", rating: 5 },
    { name: "Ivan", text: "Удобно и быстро, буду заказывать снова.", rating: 5 },
    { name: "Nastya", text: "Получила то, что хотела, всем советую.", rating: 4 }
  ];

  const reviewsList = document.getElementById('reviewsList');

  function createStarRating(rating) {
    let stars = '';
    for(let i = 0; i < 5; i++) {
      stars += i < rating ? '★' : '☆';
    }
    return `<span style="color: #6f74f2;">${stars}</span>`;
  }

  reviews.forEach(({name, text, rating}) => {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    reviewCard.innerHTML = `
      <p>"${text}"</p>
      <h4>${name}</h4>
      ${createStarRating(rating)}
    `;
    reviewsList.appendChild(reviewCard);
  });

  // Обработка формы заказа
  const orderForm = document.getElementById('orderForm');
  const orderMessage = document.getElementById('orderMessage');

  orderForm.addEventListener('submit', event => {
    event.preventDefault();
    // Простая валидация уже сделана html required

    const username = orderForm.username.value.trim();
    const service = orderForm.service.value;
    const contact = orderForm.contact.value.trim();

    if (!username || !service || !contact) {
      orderMessage.style.color = 'red';
      orderMessage.textContent = 'Пожалуйста, заполните все поля.';
      return;
    }

    // Тут можно добавить логику отправки формы, например fetch на сервер (пока просто имитация)
    orderMessage.style.color = '#6f74f2';
    orderMessage.textContent = `Спасибо, ${username}! Ваш заказ на услугу "${service}" принят. Мы свяжемся с вами: ${contact}`;

    orderForm.reset();
  });
});

// FAQ раскрытие
const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    // Закрываем все вопросы
    faqItems.forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      btn.nextElementSibling.hidden = true;
    });
    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      button.nextElementSibling.hidden = false;
    }
  });
});