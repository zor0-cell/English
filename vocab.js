// Vocabulary organized by categories
    const categories = [
      { id: 'fruits', name: 'Фрукты', emoji: '🍎', gradient: 'linear-gradient(135deg, #16a34a, #065f46)' },
      { id: 'Essential', name: 'Словар', emoji: '📗', gradient: 'linear-gradient(135deg, #16a34a, #065f46)' },
      { id: 'clothes', name: 'Одежда', emoji: '👕', gradient: 'linear-gradient(135deg, #2563eb, #1e3a5f)' },
      { id: 'animals', name: 'Животные', emoji: '🦁', gradient: 'linear-gradient(135deg, #d97706, #78350f)' },
      { id: 'ielts', name: 'IELTS Academic', emoji: '🎓', gradient: 'linear-gradient(135deg, #8b5cf6, #4c1d95)' },
      { id: 'travel', name: 'Путешествия', emoji: '✈️', gradient: 'linear-gradient(135deg, #0891b2, #164e63)' },
      { id: 'food', name: 'Еда', emoji: '🍔', gradient: 'linear-gradient(135deg, #dc2626, #7f1d1d)' },
      { id: 'body', name: 'Тело', emoji: '🦴', gradient: 'linear-gradient(135deg, #ec4899, #831843)' },
      { id: 'house', name: 'Дом', emoji: '🏠', gradient: 'linear-gradient(135deg, #f59e0b, #713f12)' },
    ];

    let vocabulary = [
      // Фрукты
      { id: 1, category: 'fruits', word: 'Apple', translation: 'Яблоко', pos: 'Noun', definition: 'A round fruit with red or green skin.', example: 'I eat an apple every day.' },
      { id: 2, category: 'fruits', word: 'Banana', translation: 'Банан', pos: 'Noun', definition: 'A long curved fruit with yellow skin.', example: 'Bananas are rich in potassium.' },
      { id: 3, category: 'fruits', word: 'Strawberry', translation: 'Клубника', pos: 'Noun', definition: 'A small red fruit with seeds on the surface.', example: 'Strawberry ice cream is delicious.' },
      { id: 4, category: 'fruits', word: 'Watermelon', translation: 'Арбуз', pos: 'Noun', definition: 'A large green fruit with red flesh.', example: 'We ate watermelon at the picnic.' },
      { id: 5, category: 'fruits', word: 'Grape', translation: 'Виноград', pos: 'Noun', definition: 'A small round fruit growing in clusters.', example: 'Wine is made from grapes.' },
      { id: 6, category: 'fruits', word: 'Pineapple', translation: 'Ананас', pos: 'Noun', definition: 'A tropical fruit with spiky skin.', example: 'Pineapple pizza is controversial.' },
      // Одежда
      { id: 7, category: 'clothes', word: 'Shirt', translation: 'Рубашка', pos: 'Noun', definition: 'A piece of clothing for the upper body.', example: 'He wore a white shirt.' },
      { id: 8, category: 'clothes', word: 'Trousers', translation: 'Брюки', pos: 'Noun', definition: 'An outer garment covering legs.', example: 'These trousers are too tight.' },
      { id: 9, category: 'clothes', word: 'Dress', translation: 'Платье', pos: 'Noun', definition: 'A one-piece garment for women.', example: 'She bought a beautiful dress.' },
      { id: 10, category: 'clothes', word: 'Jacket', translation: 'Куртка', pos: 'Noun', definition: 'A short coat.', example: 'Put on your jacket, it\'s cold.' },
      { id: 11, category: 'clothes', word: 'Scarf', translation: 'Шарф', pos: 'Noun', definition: 'A piece of cloth worn around the neck.', example: 'She wrapped a scarf around her neck.' },
      // Животные
      { id: 12, category: 'animals', word: 'Lion', translation: 'Лев', pos: 'Noun', definition: 'A large wild cat, the king of beasts.', example: 'The lion roared loudly.' },
      { id: 13, category: 'animals', word: 'Elephant', translation: 'Слон', pos: 'Noun', definition: 'The largest land animal with a trunk.', example: 'Elephants have excellent memory.' },
      { id: 14, category: 'animals', word: 'Dolphin', translation: 'Дельфин', pos: 'Noun', definition: 'A highly intelligent marine mammal.', example: 'Dolphins can communicate with each other.' },
      { id: 15, category: 'animals', word: 'Butterfly', translation: 'Бабочка', pos: 'Noun', definition: 'An insect with colorful wings.', example: 'A butterfly landed on the flower.' },
      // IELTS Academic
      { id: 16, category: 'ielts', word: 'Ubiquitous', translation: 'Повсеместный', pos: 'Adjective', definition: 'Present everywhere simultaneously.', example: 'Smartphones are ubiquitous in modern society.' },
      { id: 17, category: 'ielts', word: 'Exacerbate', translation: 'Усугублять', pos: 'Verb', definition: 'Make worse or more severe.', example: 'Pollution exacerbates climate change.' },
      { id: 18, category: 'ielts', word: 'Ephemeral', translation: 'Мимолётный', pos: 'Adjective', definition: 'Lasting for a very short time.', example: 'Social media trends are ephemeral.' },
      { id: 19, category: 'ielts', word: 'Mitigate', translation: 'Смягчать', pos: 'Verb', definition: 'Reduce severity or impact.', example: 'Trees mitigate urban heat.' },
      { id: 20, category: 'ielts', word: 'Pragmatic', translation: 'Прагматичный', pos: 'Adjective', definition: 'Dealing with things in a practical way.', example: 'She took a pragmatic approach.' },
      // Путешествия
      { id: 21, category: 'travel', word: 'Passport', translation: 'Паспорт', pos: 'Noun', definition: 'An official travel document.', example: 'Don\'t forget your passport!' },
      { id: 22, category: 'travel', word: 'Luggage', translation: 'Багаж', pos: 'Noun', definition: 'Suitcases and bags for traveling.', example: 'My luggage was lost at the airport.' },
      { id: 23, category: 'travel', word: 'Departure', translation: 'Отправление', pos: 'Noun', definition: 'The act of leaving.', example: 'Our departure is at 8 AM.' },
      { id: 24, category: 'travel', word: 'Destination', translation: 'Назначение', pos: 'Noun', definition: 'The place to which someone is going.', example: 'Paris is a popular tourist destination.' },
      // Еда
      { id: 25, category: 'food', word: 'Bread', translation: 'Хлеб', pos: 'Noun', definition: 'Food made from flour and water.', example: 'Fresh bread smells amazing.' },
      { id: 26, category: 'food', word: 'Cheese', translation: 'Сыр', pos: 'Noun', definition: 'A dairy product.', example: 'I like cheese on my sandwich.' },
      { id: 27, category: 'food', word: 'Soup', translation: 'Суп', pos: 'Noun', definition: 'A liquid food made by boiling.', example: 'Chicken soup is good when you\'re sick.' },
      // Тело
      { id: 28, category: 'body', word: 'Elbow', translation: 'Локоть', pos: 'Noun', definition: 'The joint between upper and lower arm.', example: 'He bumped his elbow on the table.' },
      { id: 29, category: 'body', word: 'Knee', translation: 'Колено', pos: 'Noun', definition: 'The joint in the middle of the leg.', example: 'She fell and scraped her knee.' },
      { id: 30, category: 'body', word: 'Shoulder', translation: 'Плечо', pos: 'Noun', definition: 'The joint connecting arm and body.', example: 'He put his hand on my shoulder.' },
      // Дом
      { id: 31, category: 'house', word: 'Kitchen', translation: 'Кухня', pos: 'Noun', definition: 'A room for cooking food.', example: 'The kitchen smells wonderful.' },
      { id: 32, category: 'house', word: 'Ceiling', translation: 'Потолок', pos: 'Noun', definition: 'The upper surface of a room.', example: 'The ceiling is very high.' },
      { id: 33, category: 'house', word: 'Furniture', translation: 'Мебель', pos: 'Noun', definition: 'Movable objects in a room.', example: 'We need new furniture for the living room.' },
      // Словар
      { id: 34, category: 'Essential', word: 'Afraid', translation: 'испуганный', pos: 'Adjective', definition: 'Feeling fear or anxiety.', example: 'She was afraid of the dark.' },
      { id: 35, category: 'Essential', word: 'Agree', translation: 'соглашаться', pos: 'Verb', definition: 'To have the same opinion or accept something.', example: 'I agree with your suggestion.' },
      { id: 36, category: 'Essential', word: 'Angry', translation: 'злой', pos: 'Adjective', definition: 'Feeling strong displeasure or hostility.', example: 'He was angry about the delay.' },
      { id: 37, category: 'Essential', word: 'Arrive', translation: 'прибывать', pos: 'Verb', definition: 'To reach a destination.', example: 'We will arrive at the airport by noon.' },
    ];

    let nextVocabId = 38;
    const INITIAL_VOCABULARY = JSON.parse(JSON.stringify(vocabulary));
