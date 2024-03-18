// @todo: Темплейт карточки
const cardContainer = document.querySelector('.places__list');
const templateElement = document.querySelector('#card-template').content;

// @todo: DOM узлы

function addCard(item){
    cardContainer.append(item);
}

// @todo: Функция создания карточки

function createCard(item,deleteCard){
    const cardElement = templateElement.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = item.link;
    cardElement.querySelector('.card__title').textContent = item.name;

    const deleteCardButton = cardElement.querySelector('.card__delete-button');
    deleteCardButton.addEventListener('click',deleteCard);
    
    return cardElement;

}

// @todo: Функция удаления карточки

function deleteCard(event){
    const cardRemove = event.target.closest('.card');
    cardRemove.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function(item){
    const createdCard = createCard(item,deleteCard);
    addCard(createdCard);
