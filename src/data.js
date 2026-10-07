const flashcards = [
  {
    front: 'What is the capital of France?',
    back: 'Paris',
    options: ['London', 'Paris', 'Rome', 'Madrid'],
  },
  {
    front: 'How many continents are there?',
    back: '7',
    options: ['5', '6', '7', '8'],
  },
  {
    front: 'What is the largest planet in our solar system?',
    back: 'Jupiter',
    options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
  },
  {
    front: 'What is the smallest prime number?',
    back: '2',
    options: ['0', '1', '2', '3'],
  },
  {
    front: 'What animal is known as the King of the Jungle?',
    back: 'Lion',
    options: ['Tiger', 'Lion', 'Elephant', 'Bear'],
  },
  {
    front: 'How many days are in a leap year?',
    back: '366',
    options: ['364', '365', '366', '367'],
  },
  {
    front: 'What is the chemical symbol for gold?',
    back: 'Au',
    options: ['Ag', 'Au', 'Go', 'Gd'],
  },
  {
    front: 'Which ocean is the largest?',
    back: 'Pacific Ocean',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
  },
  {
    front: 'What is the fastest land animal?',
    back: 'Cheetah',
    options: ['Lion', 'Cheetah', 'Horse', 'Leopard'],
  },
  {
    front: 'How many sides does a hexagon have?',
    back: '6',
    options: ['5', '6', '7', '8'],
  },
  {
    front: 'What planet is known as the Red Planet?',
    back: 'Mars',
    options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
  },
  {
    front: 'Who painted the Mona Lisa?',
    back: 'Leonardo da Vinci',
    options: ['Michelangelo', 'Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh'],
  },
  {
    front: 'What is the largest mammal?',
    back: 'Blue whale',
    options: ['Elephant', 'Giraffe', 'Blue whale', 'Hippopotamus'],
  },
  {
    front: 'How many players are on a soccer team on the field?',
    back: '11',
    options: ['9', '10', '11', '12'],
  },
  {
    front: 'What gas do humans need to breathe?',
    back: 'Oxygen',
    options: ['Carbon dioxide', 'Oxygen', 'Hydrogen', 'Helium'],
  },
  {
    front: 'Which country is famous for the pyramids of Giza?',
    back: 'Egypt',
    options: ['Greece', 'Egypt', 'Mexico', 'India'],
  },
  {
    front: 'What is the hardest natural substance?',
    back: 'Diamond',
    options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
  },
  {
    front: 'How many colors are traditionally in a rainbow?',
    back: '7',
    options: ['5', '6', '7', '8'],
  },
  {
    front: 'What is the capital of Japan?',
    back: 'Tokyo',
    options: ['Kyoto', 'Tokyo', 'Osaka', 'Seoul'],
  },
  {
    front: 'Which bird is often associated with peace?',
    back: 'Dove',
    options: ['Eagle', 'Dove', 'Crow', 'Owl'],
  },
  {
    front: 'What is H2O commonly known as?',
    back: 'Water',
    options: ['Salt', 'Water', 'Oxygen', 'Hydrogen'],
  },
  {
    front: 'Which planet is closest to the Sun?',
    back: 'Mercury',
    options: ['Venus', 'Earth', 'Mercury', 'Mars'],
  },
  {
    front: 'How many legs does a spider have?',
    back: '8',
    options: ['6', '8', '10', '12'],
  },
  {
    front: 'What is the largest country by land area?',
    back: 'Russia',
    options: ['Canada', 'China', 'Russia', 'United States'],
  },
  {
    front: 'Which instrument has black and white keys?',
    back: 'Piano',
    options: ['Guitar', 'Piano', 'Violin', 'Trumpet'],
  },
  {
    front: 'What is the freezing point of water in Celsius?',
    back: '0°C',
    options: ['0°C', '10°C', '32°C', '100°C'],
  },
  {
    front: 'Which fruit is traditionally used to make guacamole?',
    back: 'Avocado',
    options: ['Tomato', 'Avocado', 'Banana', 'Lemon'],
  },
  {
    front: 'How many hours are in a day?',
    back: '24',
    options: ['12', '20', '24', '48'],
  },
  {
    front: 'Which planet has the most famous ring system?',
    back: 'Saturn',
    options: ['Mars', 'Jupiter', 'Saturn', 'Uranus'],
  },
  {
    front: 'What is the capital of Italy?',
    back: 'Rome',
    options: ['Milan', 'Venice', 'Rome', 'Naples'],
  },
  {
    front: 'Which animal is known for having a long trunk?',
    back: 'Elephant',
    options: ['Giraffe', 'Elephant', 'Rhino', 'Hippo'],
  },
  {
    front: 'What is the largest organ of the human body?',
    back: 'Skin',
    options: ['Heart', 'Liver', 'Skin', 'Brain'],
  },
  {
    front: 'Which sport uses a racket and a shuttlecock?',
    back: 'Badminton',
    options: ['Tennis', 'Badminton', 'Squash', 'Table tennis'],
  },
  {
    front: 'How many months are in a year?',
    back: '12',
    options: ['10', '11', '12', '13'],
  },
  {
    front: 'What is the capital of Australia?',
    back: 'Canberra',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
  },
  {
    front: 'Which metal is liquid at room temperature?',
    back: 'Mercury',
    options: ['Iron', 'Mercury', 'Copper', 'Silver'],
  },
  {
    front: 'What do bees produce?',
    back: 'Honey',
    options: ['Milk', 'Honey', 'Silk', 'Wax'],
  },
  {
    front: 'Which country is shaped like a boot?',
    back: 'Italy',
    options: ['Spain', 'Italy', 'Portugal', 'Greece'],
  },
  {
    front: 'What is the tallest animal in the world?',
    back: 'Giraffe',
    options: ['Elephant', 'Giraffe', 'Camel', 'Horse'],
  },
  {
    front: 'Which vitamin is commonly produced when skin is exposed to sunlight?',
    back: 'Vitamin D',
    options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
  },
  {
    front: 'What is the main ingredient in traditional sushi rice?',
    back: 'Rice',
    options: ['Wheat', 'Rice', 'Corn', 'Potato'],
  },
  {
    front: 'Which country gifted the Statue of Liberty to the United States?',
    back: 'France',
    options: ['France', 'England', 'Spain', 'Italy'],
  },
  {
    front: 'How many teeth does a typical adult human have?',
    back: '32',
    options: ['28', '30', '32', '36'],
  },
  {
    front: 'Which animal is famous for changing its color?',
    back: 'Chameleon',
    options: ['Frog', 'Chameleon', 'Turtle', 'Snake'],
  },
  {
    front: 'What is the largest desert in the world?',
    back: 'Antarctic Desert',
    options: ['Sahara Desert', 'Gobi Desert', 'Antarctic Desert', 'Arabian Desert'],
  },
  {
    front: 'Which language has the most native speakers?',
    back: 'Mandarin Chinese',
    options: ['English', 'Spanish', 'Mandarin Chinese', 'French'],
  },
  {
    front: 'What is the capital of Canada?',
    back: 'Ottawa',
    options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
  },
  {
    front: 'Which animal is known for its black and white stripes?',
    back: 'Zebra',
    options: ['Tiger', 'Zebra', 'Panda', 'Skunk'],
  },
  {
    front: 'How many bones are in the adult human body?',
    back: '206',
    options: ['186', '196', '206', '216'],
  },
  {
    front: 'Which planet is famous for its Great Red Spot?',
    back: 'Jupiter',
    options: ['Mars', 'Jupiter', 'Saturn', 'Neptune'],
  },
  {
    front: 'What is the capital of Brazil?',
    back: 'Brasília',
    options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
  },
  {
    front: 'Which food is traditionally associated with Italy?',
    back: 'Pizza',
    options: ['Sushi', 'Pizza', 'Tacos', 'Curry'],
  },
  {
    front: 'What is the boiling point of water at sea level?',
    back: '100°C',
    options: ['50°C', '75°C', '100°C', '120°C'],
  },
  {
    front: 'Which animal can sleep while standing up?',
    back: 'Horse',
    options: ['Dog', 'Horse', 'Cat', 'Rabbit'],
  },
  {
    front: 'What is the capital of Spain?',
    back: 'Madrid',
    options: ['Barcelona', 'Madrid', 'Seville', 'Valencia'],
  },
  {
    front: 'Which famous scientist developed the theory of relativity?',
    back: 'Albert Einstein',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
  },
  {
    front: 'What is the largest internal organ in the human body?',
    back: 'Liver',
    options: ['Heart', 'Liver', 'Lung', 'Kidney'],
  },
  {
    front: 'Which sport is played at Wimbledon?',
    back: 'Tennis',
    options: ['Golf', 'Tennis', 'Cricket', 'Rugby'],
  },
  {
    front: 'How many sides does an octagon have?',
    back: '8',
    options: ['6', '7', '8', '10'],
  },
  {
    front: 'Which country is home to the kangaroo?',
    back: 'Australia',
    options: ['South Africa', 'Australia', 'Brazil', 'India'],
  },
  {
    front: 'What is the chemical symbol for oxygen?',
    back: 'O',
    options: ['O', 'Ox', 'C', 'H'],
  },
  {
    front: 'Which ocean lies between Africa and Australia?',
    back: 'Indian Ocean',
    options: ['Atlantic Ocean', 'Pacific Ocean', 'Indian Ocean', 'Arctic Ocean'],
  },
  {
    front: 'What is the name of Harry Potter’s owl?',
    back: 'Hedwig',
    options: ['Hedwig', 'Scabbers', 'Fawkes', 'Crookshanks'],
  },
  {
    front: 'Which superhero is also known as Bruce Wayne?',
    back: 'Batman',
    options: ['Superman', 'Batman', 'Iron Man', 'Spider-Man'],
  },
  {
    front: 'What color do you get by mixing red and blue?',
    back: 'Purple',
    options: ['Green', 'Orange', 'Purple', 'Yellow'],
  },
  {
    front: 'Which country invented paper?',
    back: 'China',
    options: ['Egypt', 'China', 'Greece', 'India'],
  },
  {
    front: 'How many wheels does a standard tricycle have?',
    back: '3',
    options: ['2', '3', '4', '6'],
  },
  {
    front: 'Which animal is the largest land animal?',
    back: 'African elephant',
    options: ['Giraffe', 'African elephant', 'Rhino', 'Hippo'],
  },
  {
    front: 'What is the capital of Nigeria?',
    back: 'Abuja',
    options: ['Lagos', 'Kano', 'Abuja', 'Ibadan'],
  },
  {
    front: 'Which Nigerian city is famous for being the country’s largest city by population?',
    back: 'Lagos',
    options: ['Abuja', 'Lagos', 'Kano', 'Benin City'],
  },
  {
    front: 'What is the currency of Nigeria?',
    back: 'Naira',
    options: ['Cedi', 'Naira', 'Shilling', 'Franc'],
  },
  {
    front: 'How many states are there in Nigeria?',
    back: '36',
    options: ['30', '32', '36', '37'],
  },
  {
    front: 'What is the longest river in Africa?',
    back: 'Nile',
    options: ['Niger', 'Congo', 'Nile', 'Zambezi'],
  },
  {
    front: 'Which African country has the pyramids of Giza?',
    back: 'Egypt',
    options: ['Sudan', 'Egypt', 'Morocco', 'Ethiopia'],
  },
  {
    front: 'What is the largest ocean on Earth?',
    back: 'Pacific Ocean',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Southern Ocean'],
  },
  {
    front: 'Which famous ship sank in 1912?',
    back: 'Titanic',
    options: ['Mayflower', 'Titanic', 'Santa Maria', 'Endeavour'],
  },
  {
    front: 'Who was the first person to walk on the Moon?',
    back: 'Neil Armstrong',
    options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'John Glenn'],
  },
  {
    front: 'What is the closest star to Earth?',
    back: 'The Sun',
    options: ['Sirius', 'The Sun', 'Polaris', 'Alpha Centauri'],
  },
  {
    front: 'Which animal is known for its ability to mimic human speech?',
    back: 'Parrot',
    options: ['Eagle', 'Parrot', 'Penguin', 'Swan'],
  },
  {
    front: 'What is the capital of the United Kingdom?',
    back: 'London',
    options: ['Manchester', 'London', 'Liverpool', 'Birmingham'],
  },
  {
    front: 'Which instrument typically has six strings?',
    back: 'Guitar',
    options: ['Piano', 'Guitar', 'Flute', 'Drum'],
  },
  {
    front: 'What is the square root of 64?',
    back: '8',
    options: ['6', '7', '8', '9'],
  },
  {
    front: 'Which month comes after September?',
    back: 'October',
    options: ['August', 'October', 'November', 'December'],
  },
  {
    front: 'What is the largest planet in the solar system?',
    back: 'Jupiter',
    options: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
  },
  {
    front: 'Which animal is famous for storing food in its cheeks?',
    back: 'Hamster',
    options: ['Hamster', 'Horse', 'Elephant', 'Penguin'],
  },
  {
    front: 'What is the opposite of nocturnal?',
    back: 'Diurnal',
    options: ['Annual', 'Diurnal', 'Seasonal', 'Marine'],
  },
  {
    front: 'Which country is famous for the Eiffel Tower?',
    back: 'France',
    options: ['France', 'Italy', 'Germany', 'Belgium'],
  },
  {
    front: 'How many minutes are in one hour?',
    back: '60',
    options: ['30', '45', '60', '90'],
  },
  {
    front: 'Which gas makes up most of Earth’s atmosphere?',
    back: 'Nitrogen',
    options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
  },
  {
    front: 'What is the name of the galaxy that contains our solar system?',
    back: 'Milky Way',
    options: ['Andromeda', 'Milky Way', 'Whirlpool', 'Sombrero'],
  },
  {
    front: 'Which animal is known as man’s best friend?',
    back: 'Dog',
    options: ['Cat', 'Horse', 'Dog', 'Wolf'],
  },
  {
    front: 'What is the capital of Germany?',
    back: 'Berlin',
    options: ['Munich', 'Hamburg', 'Berlin', 'Frankfurt'],
  },
  {
    front: 'Which shape has three sides?',
    back: 'Triangle',
    options: ['Square', 'Triangle', 'Pentagon', 'Circle'],
  },
  {
    front: 'What do caterpillars eventually become?',
    back: 'Butterflies or moths',
    options: ['Bees', 'Butterflies or moths', 'Spiders', 'Beetles'],
  },
  {
    front: 'Which famous detective lives at 221B Baker Street?',
    back: 'Sherlock Holmes',
    options: ['Hercule Poirot', 'Sherlock Holmes', 'James Bond', 'Dracula'],
  },
  {
    front: 'What is the largest continent?',
    back: 'Asia',
    options: ['Africa', 'Europe', 'Asia', 'North America'],
  },
  {
    front: 'Which fruit is known for having seeds on the outside?',
    back: 'Strawberry',
    options: ['Apple', 'Strawberry', 'Banana', 'Orange'],
  },
  {
    front: 'What is the name of the fairy in Peter Pan?',
    back: 'Tinker Bell',
    options: ['Cinderella', 'Tinker Bell', 'Wendy', 'Aurora'],
  },
  {
    front: 'How many days are in a standard year?',
    back: '365',
    options: ['360', '364', '365', '366'],
  },
  {
    front: 'Which planet is famous for its blue color?',
    back: 'Neptune',
    options: ['Mars', 'Venus', 'Neptune', 'Mercury'],
  },
  {
    front: 'What is the main ingredient in bread?',
    back: 'Flour',
    options: ['Sugar', 'Flour', 'Rice', 'Corn'],
  },
  {
    front: 'Which animal is the only mammal capable of true flight?',
    back: 'Bat',
    options: ['Flying squirrel', 'Bat', 'Eagle', 'Penguin'],
  },
  {
    front: 'What is the capital of Greece?',
    back: 'Athens',
    options: ['Athens', 'Rome', 'Istanbul', 'Sofia'],
  },
  {
    front: 'Which famous wizard has a lightning-shaped scar?',
    back: 'Harry Potter',
    options: ['Harry Potter', 'Gandalf', 'Merlin', 'Dumbledore'],
  },
  {
    front: 'What is the hottest planet in our solar system?',
    back: 'Venus',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
  },
  {
    front: 'Which sport uses a hoop and a basketball?',
    back: 'Basketball',
    options: ['Volleyball', 'Basketball', 'Handball', 'Netball'],
  },
  {
    front: 'What is the capital of Kenya?',
    back: 'Nairobi',
    options: ['Nairobi', 'Mombasa', 'Kampala', 'Accra'],
  },
  {
    front: 'Which animal is known for its black-and-white coloring and bamboo diet?',
    back: 'Panda',
    options: ['Koala', 'Panda', 'Zebra', 'Lemur'],
  },
  {
    front: 'What is the chemical symbol for silver?',
    back: 'Ag',
    options: ['Si', 'Ag', 'Au', 'Sr'],
  },
  {
    front: 'Which country is famous for the Great Wall?',
    back: 'China',
    options: ['Japan', 'China', 'India', 'Mongolia'],
  },
  {
    front: 'What is 10 × 10?',
    back: '100',
    options: ['10', '50', '100', '1000'],
  },
  {
    front: 'Which sea creature has eight arms?',
    back: 'Octopus',
    options: ['Squid', 'Octopus', 'Starfish', 'Jellyfish'],
  },
  {
    front: 'What is the capital of the United States?',
    back: 'Washington, D.C.',
    options: ['New York', 'Los Angeles', 'Washington, D.C.', 'Chicago'],
  },
];

export default flashcards;