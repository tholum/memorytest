// Categories for filtering
export const imageCategories = [
  { id: 'all', label: 'All Images' },
  { id: 'painting', label: 'Classic Paintings' },
  { id: 'poster', label: 'Posters' },
  { id: 'photo', label: 'Historical Photos' }
];

export const memoryImages = [
{
  id: 'painting-1',
  src: '/images/memory-game/botticelli-birth-of-venus.jpg',
  title: 'The Birth of Venus',
  category: 'painting',
  attribution: 'Sandro Botticelli, c. 1485 - Public Domain',
  questions: [
    { question: "What is Venus standing on?", options: ["A rock", "A giant seashell", "A wave", "A cloud"], correctIndex: 1 },
    { question: "What color is Venus's hair?", options: ["Brown", "Black", "Golden/Blonde", "Red"], correctIndex: 2 },
    { question: "How many figures are blowing wind from the left side?", options: ["One", "Two", "Three", "Four"], correctIndex: 1 },
    { question: "What is the figure on the right holding out toward Venus?", options: ["A sword", "A flower", "A cloak/robe", "A mirror"], correctIndex: 2 },
    { question: "What is falling through the air around the wind figures?", options: ["Leaves", "Flowers/roses", "Feathers", "Snowflakes"], correctIndex: 1 },
    { question: "What color is the cloak being offered to Venus?", options: ["Blue", "White", "Pink/Red with floral pattern", "Green"], correctIndex: 2 }
  ]
},
{
  id: 'painting-2',
  src: '/images/memory-game/bruegel-hunters-in-snow.jpg',
  title: 'Hunters in the Snow',
  category: 'painting',
  attribution: 'Pieter Bruegel the Elder, 1565 - Public Domain',
  questions: [
    { question: "What animals are accompanying the hunters?", options: ["Horses", "Dogs", "Cats", "Deer"], correctIndex: 1 },
    { question: "What season is depicted in this painting?", options: ["Spring", "Summer", "Autumn", "Winter"], correctIndex: 3 },
    { question: "What are people doing on the frozen ponds in the background?", options: ["Fishing", "Ice skating", "Swimming", "Boating"], correctIndex: 1 },
    { question: "What color are most of the bare trees?", options: ["Green", "Brown", "Dark/Black silhouettes", "White"], correctIndex: 2 },
    { question: "What kind of birds can be seen in the sky?", options: ["Eagles", "A crow/magpie", "Doves", "Swans"], correctIndex: 1 },
    { question: "On which side of the painting are the hunters walking?", options: ["Right side going down", "Left side going down", "Center", "Bottom edge"], correctIndex: 1 }
  ]
},
{
  id: 'painting-3',
  src: '/images/memory-game/da-vinci-mona-lisa.jpg',
  title: 'Mona Lisa',
  category: 'painting',
  attribution: 'Leonardo da Vinci, c. 1503-1519 - Public Domain',
  questions: [
    { question: "How are the subject's hands positioned?", options: ["At her sides", "Folded/crossed in front", "Behind her back", "Raised up"], correctIndex: 1 },
    { question: "What is visible in the background landscape?", options: ["Mountains and a winding path", "A city skyline", "An ocean", "A forest only"], correctIndex: 0 },
    { question: "What color is the subject's clothing?", options: ["Bright red", "White", "Dark greenish-brown", "Blue"], correctIndex: 2 },
    { question: "Does the subject have visible eyebrows?", options: ["Yes, thick eyebrows", "Yes, thin eyebrows", "Very faint or no visible eyebrows", "Only one eyebrow"], correctIndex: 2 },
    { question: "What is the dominant color tone of the entire painting?", options: ["Cool blues", "Warm earth tones (browns, greens)", "Bright primary colors", "Black and white"], correctIndex: 1 },
    { question: "Which direction is the subject's body turned?", options: ["Facing directly forward", "Slightly turned to her left (viewer's right)", "Completely to the side", "Turned away"], correctIndex: 1 }
  ]
},
{
  id: 'painting-4',
  src: '/images/memory-game/delacroix-liberty-leading-people.jpg',
  title: 'Liberty Leading the People',
  category: 'painting',
  attribution: 'Eugene Delacroix, 1830 - Public Domain',
  questions: [
    { question: "What is the central female figure holding up high?", options: ["A sword", "A torch", "A French tricolor flag", "A spear"], correctIndex: 2 },
    { question: "What colors are on the flag?", options: ["Red and white", "Blue, white, and red", "Green, white, and red", "Black, red, and gold"], correctIndex: 1 },
    { question: "What is the female figure wearing on her head?", options: ["A crown", "A Phrygian cap (red cap)", "A hat with feathers", "Nothing"], correctIndex: 1 },
    { question: "What is visible in the smoky background on the right?", options: ["Mountains", "A forest", "Buildings/towers of a city", "Ships"], correctIndex: 2 },
    { question: "What does the young boy on the right side hold in each hand?", options: ["Two swords", "Two pistols", "A flag and a sword", "Nothing"], correctIndex: 1 },
    { question: "What is in the foreground at the bottom of the painting?", options: ["Flowers", "Fallen bodies", "Animals", "Water"], correctIndex: 1 }
  ]
},
{
  id: 'painting-5',
  src: '/images/memory-game/hokusai-great-wave.jpg',
  title: 'The Great Wave off Kanagawa',
  category: 'painting',
  attribution: 'Katsushika Hokusai, c. 1831 - Public Domain',
  questions: [
    { question: "What is visible in the background of the image?", options: ["The sun", "Mount Fuji", "A city", "More waves"], correctIndex: 1 },
    { question: "What are the main colors used in this print?", options: ["Red and orange", "Blue and white", "Green and yellow", "Purple and pink"], correctIndex: 1 },
    { question: "What is beneath the great wave?", options: ["Ships/boats", "Swimmers", "Fish", "Nothing"], correctIndex: 0 },
    { question: "What appears at the crest of the wave like fingers?", options: ["Birds", "Foam/spray that looks like claws", "Fish jumping", "Lightning"], correctIndex: 1 },
    { question: "How many boats are visible in the image?", options: ["One", "Two", "Three", "Four"], correctIndex: 2 },
    { question: "Where is Japanese text visible in the image?", options: ["Bottom right", "Top left corner", "Center", "There is no text"], correctIndex: 1 }
  ]
},
{
  id: 'painting-6',
  src: '/images/memory-game/klimt-the-kiss.jpg',
  title: 'The Kiss',
  category: 'painting',
  attribution: 'Gustav Klimt, 1907-1908 - Public Domain',
  questions: [
    { question: "What is the dominant color in this painting?", options: ["Blue", "Red", "Gold", "Green"], correctIndex: 2 },
    { question: "What pattern appears on the man's robe?", options: ["Circles", "Black and white rectangles", "Flowers", "Stripes"], correctIndex: 1 },
    { question: "What pattern appears on the woman's dress?", options: ["Geometric rectangles", "Colorful circles and flowers", "Plain solid color", "Stars"], correctIndex: 1 },
    { question: "What are the couple kneeling on?", options: ["A bed", "A flowery meadow/cliff edge", "A carpet", "Clouds"], correctIndex: 1 },
    { question: "What color are the flowers in the meadow at the bottom?", options: ["Only red", "Only white", "Purple, yellow, and other colors", "There are no flowers"], correctIndex: 2 },
    { question: "What is the background color behind the golden figures?", options: ["Bright blue", "Dark bronze/gold", "White", "Green"], correctIndex: 1 }
  ]
},
{
  id: 'painting-7',
  src: '/images/memory-game/manet-bar-folies-bergere.jpg',
  title: 'A Bar at the Folies-Bergere',
  category: 'painting',
  attribution: 'Edouard Manet, 1882 - Public Domain',
  questions: [
    { question: "What fruit is visible in a bowl on the bar counter?", options: ["Apples", "Oranges", "Grapes", "Bananas"], correctIndex: 1 },
    { question: "What is the barmaid wearing around her neck?", options: ["A scarf", "A black choker/ribbon", "A pearl necklace", "Nothing"], correctIndex: 1 },
    { question: "What types of bottles are prominently displayed on the bar?", options: ["Only wine bottles", "Beer, champagne, and liquor bottles", "Only water bottles", "Milk bottles"], correctIndex: 1 },
    { question: "What is reflected in the mirror behind the barmaid?", options: ["Nothing", "The crowded hall and chandeliers", "A garden", "Another barmaid"], correctIndex: 1 },
    { question: "What are the two circular white shapes in the upper background?", options: ["Moons", "Chandeliers/lights", "Balloons", "Clocks"], correctIndex: 1 },
    { question: "What is visible in the upper left corner of the reflection?", options: ["A window", "A trapeze artist's legs/feet", "A painting", "A clock"], correctIndex: 1 }
  ]
},
{
  id: 'painting-8',
  src: '/images/memory-game/michelangelo-creation-of-adam.jpg',
  title: 'The Creation of Adam',
  category: 'painting',
  attribution: 'Michelangelo, c. 1512 - Public Domain',
  questions: [
    { question: "What are Adam and God reaching out to do?", options: ["Shake hands", "Touch fingers", "Pass an object", "Wave"], correctIndex: 1 },
    { question: "On which side of the painting is Adam?", options: ["Left side", "Right side", "Center", "Bottom"], correctIndex: 0 },
    { question: "What shape surrounds God and the angels?", options: ["A cloud", "A billowing cloak/cape shape", "A circle", "A triangle"], correctIndex: 1 },
    { question: "What is Adam reclining on?", options: ["A cloud", "A rock/earth formation", "A bed", "Water"], correctIndex: 1 },
    { question: "What color is the flowing fabric around God?", options: ["Blue", "Red/pink", "White", "Gold"], correctIndex: 1 },
    { question: "How many other figures are shown with God?", options: ["None", "About 5-6", "About 10-12", "Over 20"], correctIndex: 2 }
  ]
},
{
  id: 'painting-9',
  src: '/images/memory-game/monet-impression-sunrise.jpg',
  title: 'Impression, Sunrise',
  category: 'painting',
  attribution: 'Claude Monet, 1872 - Public Domain',
  questions: [
    { question: "What color is the sun in this painting?", options: ["Yellow", "White", "Orange/Red", "Not visible"], correctIndex: 2 },
    { question: "What is reflected on the water below the sun?", options: ["Nothing", "Orange/red light reflections", "A boat", "The moon"], correctIndex: 1 },
    { question: "What type of vessels are visible in the water?", options: ["Sailboats only", "Small rowboats and larger ships", "Cruise ships", "No vessels"], correctIndex: 1 },
    { question: "What is the overall color tone of the sky and water?", options: ["Bright yellow", "Blue-grey and hazy", "Green", "Purple"], correctIndex: 1 },
    { question: "What industrial elements are visible in the background?", options: ["Factories with smokestacks", "Windmills", "Castles", "Nothing industrial"], correctIndex: 0 },
    { question: "Where is the artist's signature visible?", options: ["Top right", "Bottom left", "Center", "Not visible"], correctIndex: 1 }
  ]
},
{
  id: 'painting-10',
  src: '/images/memory-game/monet-water-lilies.jpg',
  title: 'Water Lilies',
  category: 'painting',
  attribution: 'Claude Monet, 1906 - Public Domain',
  questions: [
    { question: "What is the primary subject floating on the water?", options: ["Ducks", "Lily pads and water lilies", "Leaves", "Fish"], correctIndex: 1 },
    { question: "What colors are the water lily flowers?", options: ["Only white", "Only yellow", "Pink, white, and yellow", "Red"], correctIndex: 2 },
    { question: "What is reflected in the water?", options: ["Trees and sky", "Buildings", "Mountains", "Nothing"], correctIndex: 0 },
    { question: "What is the dominant color of the water?", options: ["Brown", "Blue and purple tones", "Green", "Clear/transparent"], correctIndex: 1 },
    { question: "What color are most of the lily pads?", options: ["Brown", "Yellow", "Green", "Red"], correctIndex: 2 },
    { question: "Is there any visible shoreline or horizon in this painting?", options: ["Yes, clearly visible", "No, only water surface", "Yes, with buildings", "Yes, with mountains"], correctIndex: 1 }
  ]
},
{
  id: 'painting-11',
  src: '/images/memory-game/raphael-school-of-athens.jpg',
  title: 'The School of Athens',
  category: 'painting',
  attribution: 'Raphael, 1509-1511 - Public Domain',
  questions: [
    { question: "What architectural feature frames the scene in the background?", options: ["Columns and arches", "A flat wall", "Windows", "A dome only"], correctIndex: 0 },
    { question: "Where are the two central figures located?", options: ["At the bottom of steps", "At the top center, framed by the arch", "On the left side", "On the right side"], correctIndex: 1 },
    { question: "What is visible through the central arch in the far background?", options: ["Mountains", "The sky with clouds", "A city", "Water"], correctIndex: 1 },
    { question: "What are statues of visible in the niches on the walls?", options: ["Animals", "Greek/Roman gods", "Kings", "Angels"], correctIndex: 1 },
    { question: "What is the reclining figure on the steps in the center doing?", options: ["Sleeping", "Writing", "Reading or thinking", "Eating"], correctIndex: 2 },
    { question: "What shape is the overall composition of the painting?", options: ["Circular", "Arched at the top", "Rectangular", "Triangular"], correctIndex: 1 }
  ]
},
{
  id: 'painting-12',
  src: '/images/memory-game/rembrandt-night-watch.jpg',
  title: 'The Night Watch',
  category: 'painting',
  attribution: 'Rembrandt van Rijn, 1642 - Public Domain',
  questions: [
    { question: "What is the dominant lighting effect in this painting?", options: ["Even lighting throughout", "Dramatic light on central figures against dark background", "Silhouettes against bright background", "No clear lighting"], correctIndex: 1 },
    { question: "What color sash is worn by the man in black in the center?", options: ["Blue", "Red", "White", "Green"], correctIndex: 1 },
    { question: "What is the brightly lit girl on the left carrying?", options: ["A basket", "A chicken/bird", "Flowers", "A lantern"], correctIndex: 1 },
    { question: "What type of headwear do many of the men wear?", options: ["Crowns", "Wide-brimmed hats", "Helmets only", "No headwear"], correctIndex: 1 },
    { question: "What weapons are many of the figures carrying?", options: ["Swords only", "Pikes, muskets, and other weapons", "Bows and arrows", "No weapons"], correctIndex: 1 },
    { question: "What color outfit does the lieutenant wear (man on the right of center)?", options: ["Black", "Yellow/gold", "Red", "Blue"], correctIndex: 1 }
  ]
},
{
  id: 'painting-13',
  src: '/images/memory-game/renoir-luncheon-boating-party.jpg',
  title: 'Luncheon of the Boating Party',
  category: 'painting',
  attribution: 'Pierre-Auguste Renoir, 1881 - Public Domain',
  questions: [
    { question: "What type of hats are several of the men wearing?", options: ["Top hats", "Straw boater hats", "Berets", "No hats"], correctIndex: 1 },
    { question: "What is on the table in the foreground?", options: ["Only plates", "Wine bottles, glasses, and fruit", "Nothing", "Books"], correctIndex: 1 },
    { question: "What is the woman in the lower left holding?", options: ["A glass", "A small dog", "A fan", "A book"], correctIndex: 1 },
    { question: "What is visible in the background through the awning?", options: ["Mountains", "A river/water and trees", "Buildings", "The ocean"], correctIndex: 1 },
    { question: "What color is the striped awning at the top?", options: ["Blue and white", "Red and white", "Orange/red and white", "Green and white"], correctIndex: 2 },
    { question: "What is the standing man on the left wearing on his upper body?", options: ["A suit jacket", "A white sleeveless shirt", "Nothing", "A striped shirt"], correctIndex: 1 }
  ]
},
{
  id: 'painting-14',
  src: '/images/memory-game/seurat-sunday-afternoon.jpg',
  title: 'A Sunday Afternoon on the Island of La Grande Jatte',
  category: 'painting',
  attribution: 'Georges Seurat, 1884-1886 - Public Domain',
  questions: [
    { question: "What animal is prominently featured in the lower right?", options: ["A cat", "A dog", "A monkey", "A bird"], correctIndex: 2 },
    { question: "What are several people holding to shade themselves?", options: ["Hats", "Parasols/umbrellas", "Fans", "Nothing"], correctIndex: 1 },
    { question: "What is visible on the water in the background?", options: ["Nothing", "Sailboats", "Swimmers", "A bridge"], correctIndex: 1 },
    { question: "What color is the dress of the prominent woman on the right?", options: ["Red", "Blue", "Dark blue/black with bustle", "White"], correctIndex: 2 },
    { question: "What type of dog is shown in the lower left of the painting?", options: ["A large dog", "A small black dog", "A white poodle", "No dog is visible"], correctIndex: 1 },
    { question: "What distinctive painting technique gives this work a dotted appearance?", options: ["Impressionism", "Pointillism", "Realism", "Cubism"], correctIndex: 1 }
  ]
},
{
  id: 'painting-15',
  src: '/images/memory-game/van-eyck-arnolfini-portrait.jpg',
  title: 'The Arnolfini Portrait',
  category: 'painting',
  attribution: 'Jan van Eyck, 1434 - Public Domain',
  questions: [
    { question: "What small animal is standing between the two figures?", options: ["A cat", "A dog", "A bird", "No animal"], correctIndex: 1 },
    { question: "What color is the woman's dress?", options: ["Red", "Blue", "Green", "White"], correctIndex: 2 },
    { question: "What object hangs on the back wall between the figures?", options: ["A painting", "A convex mirror", "A clock", "A cross"], correctIndex: 1 },
    { question: "What hangs from the ceiling?", options: ["A lamp", "A chandelier with candles", "A plant", "Nothing"], correctIndex: 1 },
    { question: "What is the man wearing on his head?", options: ["A crown", "A large black hat", "A turban", "Nothing"], correctIndex: 1 },
    { question: "What is visible on the floor near the man's feet?", options: ["A rug", "Wooden clogs/sandals", "A book", "Flowers"], correctIndex: 1 }
  ]
},
{
  id: 'painting-16',
  src: '/images/memory-game/van-gogh-cafe-terrace.jpg',
  title: 'Cafe Terrace at Night',
  category: 'painting',
  attribution: 'Vincent van Gogh, 1888 - Public Domain',
  questions: [
    { question: "What color is the awning of the cafe?", options: ["Red", "Blue", "Yellow/Orange", "Green"], correctIndex: 2 },
    { question: "What is visible in the dark blue sky?", options: ["The moon", "Stars", "Clouds", "Nothing"], correctIndex: 1 },
    { question: "What color are the cobblestones of the street?", options: ["Grey", "Yellow/orange tones", "Red", "Brown"], correctIndex: 1 },
    { question: "What is the setting of this painting?", options: ["Daytime in a park", "Nighttime on a street with an outdoor cafe", "Inside a building", "A beach"], correctIndex: 1 },
    { question: "What are people doing at the cafe tables?", options: ["Dancing", "Sitting and dining", "Standing in line", "No people visible"], correctIndex: 1 },
    { question: "What color dominates the buildings across the street from the cafe?", options: ["Yellow", "Dark blue/black silhouettes", "Red", "White"], correctIndex: 1 }
  ]
},
{
  id: 'painting-17',
  src: '/images/memory-game/van-gogh-starry-night.jpg',
  title: 'The Starry Night',
  category: 'painting',
  attribution: 'Vincent van Gogh, 1889 - Public Domain',
  questions: [
    { question: "What tall dark object rises on the left side of the painting?", options: ["A tower", "A cypress tree", "A person", "A mountain"], correctIndex: 1 },
    { question: "What is visible in the village below the sky?", options: ["Only houses", "A church with a tall spire", "A castle", "A bridge"], correctIndex: 1 },
    { question: "What shape are the stars and moon depicted as?", options: ["Realistic points of light", "Swirling halos of light", "Square shapes", "Not visible"], correctIndex: 1 },
    { question: "What is the dominant color of the sky?", options: ["Black", "Various shades of blue with yellow", "Red", "Purple"], correctIndex: 1 },
    { question: "What appears in the upper right of the sky?", options: ["The sun", "A bright crescent moon", "A comet", "An airplane"], correctIndex: 1 },
    { question: "What landscape feature is visible behind the village?", options: ["An ocean", "Rolling hills/mountains", "A flat plain", "A forest only"], correctIndex: 1 }
  ]
},
{
  id: 'painting-18',
  src: '/images/memory-game/van-gogh-sunflowers.jpg',
  title: 'Sunflowers',
  category: 'painting',
  attribution: 'Vincent van Gogh, 1888 - Public Domain',
  questions: [
    { question: "What is holding the sunflowers?", options: ["A basket", "A ceramic vase", "A glass jar", "They are lying on a table"], correctIndex: 1 },
    { question: "What is the dominant color of the background?", options: ["Blue", "Green", "Yellow", "White"], correctIndex: 2 },
    { question: "What is written on the vase?", options: ["Van Gogh", "Vincent", "Sunflowers", "Nothing"], correctIndex: 1 },
    { question: "What color is the surface the vase sits on?", options: ["White", "Brown", "Yellow/ochre", "Red"], correctIndex: 2 },
    { question: "What state are the sunflowers in?", options: ["All fresh and blooming", "Various stages - some wilting, some fresh", "All dead and dried", "Still buds"], correctIndex: 1 },
    { question: "Approximately how many sunflowers are in the vase?", options: ["About 5", "About 10", "About 15", "About 25"], correctIndex: 2 }
  ]
},
{
  id: 'painting-19',
  src: '/images/memory-game/velazquez-las-meninas.jpg',
  title: 'Las Meninas',
  category: 'painting',
  attribution: 'Diego Velazquez, 1656 - Public Domain',
  questions: [
    { question: "What animal is lying on the floor in the foreground?", options: ["A cat", "A large dog", "A horse", "No animal"], correctIndex: 1 },
    { question: "Who is the central figure in white?", options: ["The queen", "A young princess (Infanta)", "A servant", "The artist"], correctIndex: 1 },
    { question: "What is the painter on the left holding?", options: ["A book", "A paintbrush and palette", "A sword", "Nothing"], correctIndex: 1 },
    { question: "What is reflected in the mirror on the back wall?", options: ["The princess", "The king and queen", "The viewer", "Nothing"], correctIndex: 1 },
    { question: "What is the figure in the doorway at the back doing?", options: ["Entering the room", "Standing on stairs with light behind", "Painting", "Sleeping"], correctIndex: 1 },
    { question: "What is visible on the left side of the painting?", options: ["A window", "The back of a large canvas", "A door", "A mirror"], correctIndex: 1 }
  ]
},
{
  id: 'painting-20',
  src: '/images/memory-game/vermeer-girl-with-pearl-earring.jpg',
  title: 'Girl with a Pearl Earring',
  category: 'painting',
  attribution: 'Johannes Vermeer, c. 1665 - Public Domain',
  questions: [
    { question: "What is the girl wearing on her head?", options: ["A hat", "A blue and yellow turban", "A crown", "Nothing"], correctIndex: 1 },
    { question: "What type of earring is she wearing?", options: ["A gold hoop", "A large pearl earring", "A diamond stud", "No earring"], correctIndex: 1 },
    { question: "What is the background color of the painting?", options: ["White", "Dark/black", "Blue", "Red"], correctIndex: 1 },
    { question: "What color is the girl's jacket/top?", options: ["Blue", "Red", "Yellow/ochre/brown", "Green"], correctIndex: 2 },
    { question: "Which direction is the girl looking?", options: ["Directly at the viewer, over her shoulder", "Away from the viewer", "Downward", "Upward"], correctIndex: 0 },
    { question: "What is the color of the fabric trailing from her turban?", options: ["Red", "Blue", "Yellow/cream", "Green"], correctIndex: 2 }
  ]
},
{
  id: 'photo-1',
  src: '/images/memory-game/fifth-avenue-new-york-1900s.jpg',
  title: 'Fifth Avenue, New York 1900s',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of public transportation is visible on the left side of the street?", options: ["Electric trolley", "Double-decker bus", "Horse-drawn omnibus", "Steam tram"], correctIndex: 1 },
    { question: "What advertisement is visible on the side of the bus?", options: ["Coca-Cola", "Bull Durham", "Singer Sewing", "Ivory Soap"], correctIndex: 1 },
    { question: "What type of building is visible in the background with a spire?", options: ["Government building", "Church", "Bank", "Hotel"], correctIndex: 1 },
    { question: "What are the men in the foreground wearing on their heads?", options: ["Top hats", "Bowler hats", "Flat caps", "Fedoras"], correctIndex: 1 },
    { question: "What type of horse-drawn vehicle is visible in the center of the image?", options: ["Wagon", "Carriage", "Cart", "Hearse"], correctIndex: 1 },
    { question: "What is the weather condition in this photo?", options: ["Rainy", "Sunny with clear skies", "Snowy", "Foggy"], correctIndex: 1 }
  ]
},
{
  id: 'photo-2',
  src: '/images/memory-game/broadway-fulton-street-nyc.jpg',
  title: 'Broadway at Fulton Street, NYC',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What types of transportation are visible in this busy street scene?", options: ["Only automobiles", "Trolleys, horses, and early automobiles", "Only horse-drawn vehicles", "Bicycles and motorcycles"], correctIndex: 1 },
    { question: "What is visible on the buildings lining the street?", options: ["Neon signs", "Store signs and awnings", "Billboards only", "No signage"], correctIndex: 1 },
    { question: "From what vantage point was this photograph taken?", options: ["Street level", "Elevated position looking down", "From a moving vehicle", "From underground"], correctIndex: 1 },
    { question: "What type of buildings dominate this scene?", options: ["Residential homes", "Multi-story commercial buildings", "Government buildings", "Churches"], correctIndex: 1 },
    { question: "What is the condition of the street?", options: ["Cobblestone with trolley tracks", "Dirt road", "Concrete highway", "Wooden planks"], correctIndex: 0 },
    { question: "How would you describe the pedestrian activity?", options: ["Empty streets", "Very crowded with many people", "Only a few people", "People running"], correctIndex: 1 }
  ]
},
{
  id: 'photo-3',
  src: '/images/memory-game/manhattan-skyline-1900s.jpg',
  title: 'Manhattan Skyline 1900s',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is the tallest structure in this skyline view?", options: ["A church steeple", "A tall early skyscraper", "A water tower", "A factory chimney"], correctIndex: 1 },
    { question: "What architectural feature is visible on the building on the right?", options: ["A clock tower", "A dome", "A spire", "A flagpole"], correctIndex: 1 },
    { question: "What is visible in the foreground of the image?", options: ["A busy street", "A fenced area with trees", "A waterfront", "A railroad yard"], correctIndex: 1 },
    { question: "What type of buildings are shown on the left side?", options: ["Single-story shops", "Ornate multi-story buildings", "Modern glass towers", "Wooden houses"], correctIndex: 1 },
    { question: "What appears to be the approximate number of floors in the tallest building?", options: ["5 floors", "10 floors", "Over 15 floors", "3 floors"], correctIndex: 2 },
    { question: "What is the overall character of the buildings in this view?", options: ["All uniform height", "Mix of older ornate and newer tall buildings", "All modern skyscrapers", "All residential"], correctIndex: 1 }
  ]
},
{
  id: 'photo-4',
  src: '/images/memory-game/union-station-washington-dc.jpg',
  title: 'Union Station, Washington DC',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of architectural ceiling is visible in this interior?", options: ["Flat wooden ceiling", "Vaulted coffered ceiling with skylights", "Open steel rafters", "Domed ceiling"], correctIndex: 1 },
    { question: "What are the structures along the left side of the concourse?", options: ["Shops", "Ticket windows with ornate railings", "Restaurant seating", "Baggage claim"], correctIndex: 1 },
    { question: "How would you describe the floor of this space?", options: ["Carpeted", "Large smooth tiles or marble", "Wooden planks", "Concrete"], correctIndex: 1 },
    { question: "What type of lighting is hanging from the ceiling?", options: ["Chandeliers", "Electric pendant lights", "Gas lamps", "No lighting visible"], correctIndex: 1 },
    { question: "How crowded is this station interior?", options: ["Packed with people", "Nearly empty", "Moderate crowd", "Completely empty"], correctIndex: 1 },
    { question: "What is the shape of the ceiling design pattern?", options: ["Circular", "Rectangular grid with diagonal elements", "Hexagonal", "Random pattern"], correctIndex: 1 }
  ]
},
{
  id: 'photo-5',
  src: '/images/memory-game/chicago-railway-train-sheds.jpg',
  title: 'Chicago Railway Train Sheds',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What numbers are visible on the platform markers?", options: ["1 and 2", "2 and 3", "4 and 5", "A and B"], correctIndex: 1 },
    { question: "What type of roof structure covers the train platforms?", options: ["Open sky", "Arched metal and glass train sheds", "Flat concrete roof", "Wooden canopy"], correctIndex: 1 },
    { question: "What is visible on the left side of the image?", options: ["A steam locomotive", "A passenger train car", "A freight car", "An empty platform"], correctIndex: 1 },
    { question: "What text is visible at the top of the photograph?", options: ["Chicago Union Station", "Train Sheds, C & N.W. Ry, Chicago, Ill.", "Grand Central Terminal", "Pennsylvania Station"], correctIndex: 1 },
    { question: "How many people are visible on the platform?", options: ["None", "One or two", "Large crowd", "About ten"], correctIndex: 1 },
    { question: "What material appears to make up the platform surface?", options: ["Wooden planks", "Concrete or stone", "Dirt", "Metal grating"], correctIndex: 1 }
  ]
},
{
  id: 'photo-6',
  src: '/images/memory-game/train-station-concourse.jpg',
  title: 'Equestrian Statue in Park',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of statue is the centerpiece of this image?", options: ["Standing figure", "Equestrian statue (person on horseback)", "Abstract sculpture", "Fountain statue"], correctIndex: 1 },
    { question: "What surrounds the base of the monument?", options: ["Water fountain", "Manicured hedges and flower beds", "Iron fence only", "Cobblestone plaza"], correctIndex: 1 },
    { question: "What type of vegetation is visible around the statue?", options: ["Palm trees", "Ivy-covered hedges and planted flowers", "Bare ground", "Cactus garden"], correctIndex: 1 },
    { question: "What architectural element is visible in the background?", options: ["Skyscrapers", "A church steeple", "Industrial smokestacks", "Residential houses"], correctIndex: 1 },
    { question: "What decorative element is visible on the monument's pedestal?", options: ["Plain stone", "A wreath or medallion", "No decoration", "Painted murals"], correctIndex: 1 },
    { question: "What is the setting of this statue?", options: ["City plaza", "Park or garden setting", "Inside a building", "Cemetery"], correctIndex: 1 }
  ]
},
{
  id: 'photo-7',
  src: '/images/memory-game/sheriff-street-market-cleveland.jpg',
  title: 'Sheriff Street Market, Cleveland',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What text is visible on the tall building?", options: ["Department Store", "New Market and Cold Storage Co.", "City Hall", "Hotel Cleveland"], correctIndex: 1 },
    { question: "What architectural features are on top of the buildings?", options: ["Flat roofs", "Domed towers", "Church steeples", "Smokestacks"], correctIndex: 1 },
    { question: "What type of commerce is happening at street level?", options: ["Automobile sales", "Market stalls and vendors", "Banking", "Manufacturing"], correctIndex: 1 },
    { question: "What type of transportation is visible?", options: ["Automobiles only", "Horse-drawn wagons and carts", "Trolleys only", "Bicycles"], correctIndex: 1 },
    { question: "What covers the market stalls at street level?", options: ["Permanent roofs", "Canvas awnings", "Nothing", "Umbrellas"], correctIndex: 1 },
    { question: "What is written visible regarding the type of goods sold?", options: ["Clothing", "Fruits and Vegetables", "Hardware", "Furniture"], correctIndex: 1 }
  ]
},
{
  id: 'photo-8',
  src: '/images/memory-game/lexington-market-baltimore.jpg',
  title: 'Lexington Market, Baltimore',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "From what vantage point was this photograph taken?", options: ["Street level", "Elevated view from above", "From a moving vehicle", "Underground"], correctIndex: 1 },
    { question: "What is the prominent structure running down the center of the image?", options: ["A church", "A long market building with peaked roof", "A train station", "A bridge"], correctIndex: 1 },
    { question: "What type of activity is visible on both sides of the market building?", options: ["Residential life", "Market vendors and customers", "Industrial work", "Military parade"], correctIndex: 1 },
    { question: "What type of transportation lines the streets?", options: ["Automobiles", "Horse-drawn wagons and carts", "Trolleys", "Bicycles only"], correctIndex: 1 },
    { question: "What is visible in the background of the city?", options: ["Mountains", "Church steeples and smokestacks", "Ocean", "Tall skyscrapers"], correctIndex: 1 },
    { question: "What type of buildings surround the market?", options: ["Single-story homes", "Multi-story brick commercial buildings", "Modern glass towers", "Wooden shacks"], correctIndex: 1 }
  ]
},
{
  id: 'photo-9',
  src: '/images/memory-game/public-market-vendors.jpg',
  title: 'Eutaw Place Fountain, Baltimore',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is the central feature of this photograph?", options: ["A church", "An ornate multi-tiered fountain", "A monument", "A building"], correctIndex: 1 },
    { question: "What surrounds the fountain?", options: ["Desert sand", "Trees and grassy areas", "Cobblestone plaza", "Water"], correctIndex: 1 },
    { question: "What type of pathway is visible in the foreground?", options: ["Dirt path", "Paved sidewalk with grass", "Wooden boardwalk", "Gravel road"], correctIndex: 1 },
    { question: "What architectural style building is visible on the right?", options: ["Gothic cathedral", "Row houses with arched windows", "Industrial factory", "Log cabin"], correctIndex: 1 },
    { question: "What is visible in the background behind the fountain?", options: ["Mountains", "A domed building", "Skyscrapers", "Ocean"], correctIndex: 1 },
    { question: "What figures appear to be near the fountain?", options: ["No one", "Several people gathered", "A parade", "Animals"], correctIndex: 1 }
  ]
},
{
  id: 'photo-10',
  src: '/images/memory-game/harbor-waterfront-1900s.jpg',
  title: 'S.S. Lucania Ocean Liner',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "How many smokestacks does this ship have?", options: ["One", "Two", "Three", "Four"], correctIndex: 1 },
    { question: "What is coming from the smokestacks?", options: ["Nothing", "Dark smoke", "White steam", "Fire"], correctIndex: 1 },
    { question: "What type of vessel is this?", options: ["Sailing ship", "Large ocean steamship", "Small fishing boat", "Military warship"], correctIndex: 1 },
    { question: "What is visible along the upper deck of the ship?", options: ["Cannons", "Lifeboats", "Cargo containers", "Passengers waving"], correctIndex: 1 },
    { question: "What is the condition of the water?", options: ["Completely calm", "Choppy with waves", "Frozen", "Stormy"], correctIndex: 1 },
    { question: "What text is visible at the bottom of the image identifying the ship?", options: ["S.S. Titanic", "S.S. Lucania", "S.S. Olympic", "S.S. Mauretania"], correctIndex: 1 }
  ]
},
{
  id: 'photo-11',
  src: '/images/memory-game/steamship-dock-scene.jpg',
  title: 'S.S. Maasdam Steamship',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "How many smokestacks does this ship have?", options: ["None", "One", "Two", "Three"], correctIndex: 1 },
    { question: "What color pattern is visible on the smokestack?", options: ["Solid black", "Black with a white band", "Red and white", "All white"], correctIndex: 1 },
    { question: "How many masts are visible on this ship?", options: ["One", "Two", "Three or more", "None"], correctIndex: 2 },
    { question: "What is flying from the masts?", options: ["No flags", "Flags and pennants", "Sails", "Signal lights"], correctIndex: 1 },
    { question: "What type of ship is this?", options: ["Pure sailing vessel", "Steam and sail hybrid ship", "Modern cruise ship", "Tugboat"], correctIndex: 1 },
    { question: "What text identifies this vessel?", options: ["S.S. Rotterdam", "S.S. Maasdam", "S.S. Amsterdam", "S.S. Holland"], correctIndex: 1 }
  ]
},
{
  id: 'photo-12',
  src: '/images/memory-game/waterfront-loading-dock.jpg',
  title: 'S.S. Noordland Steamship',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What flag is visible flying from the forward mast?", options: ["British flag", "American flag", "Dutch flag", "French flag"], correctIndex: 1 },
    { question: "How many smokestacks does this ship have?", options: ["None", "One", "Two", "Three"], correctIndex: 1 },
    { question: "What can be seen in the far background of the image?", options: ["Open ocean", "A distant shoreline and other vessels", "Mountains", "Nothing"], correctIndex: 1 },
    { question: "What color pattern is on the smokestack?", options: ["Solid black", "Striped with bands", "Red", "White"], correctIndex: 1 },
    { question: "How many masts does this vessel have?", options: ["One", "Two", "Three or more", "None"], correctIndex: 2 },
    { question: "What text identifies this vessel at the bottom of the image?", options: ["S.S. Friesland", "S.S. Noordland", "S.S. Zeeland", "S.S. Finland"], correctIndex: 1 }
  ]
},
{
  id: 'photo-13',
  src: '/images/memory-game/grand-hotel-entrance.jpg',
  title: 'Racing Schooner Under Sail',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of vessel is shown in this photograph?", options: ["Steamship", "Sailing schooner", "Rowboat", "Canoe"], correctIndex: 1 },
    { question: "What is the condition of the sails?", options: ["Furled/down", "Fully deployed and catching wind", "Torn", "No sails visible"], correctIndex: 1 },
    { question: "How many masts does this sailing vessel have?", options: ["One", "Two", "Three", "Four"], correctIndex: 1 },
    { question: "What is mentioned in the caption about this vessel?", options: ["Cargo ship", "Winner of Lipton Cup/Fishermen's Race", "Navy vessel", "Passenger ferry"], correctIndex: 1 },
    { question: "What is the weather condition based on the sails?", options: ["No wind", "Good sailing wind", "Stormy", "Foggy"], correctIndex: 1 },
    { question: "What letter or marking is visible on one of the sails?", options: ["A", "M", "S", "No markings"], correctIndex: 1 }
  ]
},
{
  id: 'photo-14',
  src: '/images/memory-game/city-hall-plaza.jpg',
  title: 'Sailing Race - Lipton Cup',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "How many sailing vessels are prominently visible?", options: ["One", "Two", "Three", "None"], correctIndex: 1 },
    { question: "What type of race is mentioned in the image caption?", options: ["America's Cup", "Fishermen's Race for Lipton Cup", "Olympics", "Local regatta"], correctIndex: 1 },
    { question: "What is visible in the background between the two boats?", options: ["Nothing", "A steamship", "An island", "A lighthouse"], correctIndex: 1 },
    { question: "What position is the leading boat in?", options: ["Behind", "Ahead/Leading", "Tied", "Stopped"], correctIndex: 1 },
    { question: "What type of sailing vessels are these?", options: ["Small dinghies", "Fishing schooners", "Large clipper ships", "Catamarans"], correctIndex: 1 },
    { question: "What is the sea condition?", options: ["Completely flat", "Moderate waves", "Stormy seas", "Frozen"], correctIndex: 1 }
  ]
},
{
  id: 'photo-15',
  src: '/images/memory-game/downtown-buildings-1900s.jpg',
  title: 'Schooner Race - Broken Topmast',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "How many sailing vessels are visible in this image?", options: ["One", "Two", "Three or more", "None"], correctIndex: 1 },
    { question: "What notable damage is mentioned in the caption?", options: ["Torn sail", "Broken topmast", "Hull damage", "Lost anchor"], correctIndex: 1 },
    { question: "What type of race is this photograph documenting?", options: ["America's Cup", "Fishermen's Race for Lipton Cup", "Olympic sailing", "Pleasure cruise"], correctIndex: 1 },
    { question: "What are the people visible on the larger boat doing?", options: ["Sleeping", "Working the rigging and sailing", "Fishing", "Swimming"], correctIndex: 1 },
    { question: "What is the position of the smaller boat in the background?", options: ["Ahead", "Behind/Following", "Alongside", "Stopped"], correctIndex: 1 },
    { question: "What is the condition of the sails on the main vessel?", options: ["All furled", "Some deployed but damaged/asymmetric", "All perfectly set", "No sails"], correctIndex: 1 }
  ]
},
{
  id: 'photo-16',
  src: '/images/memory-game/trolley-streetcar-scene.jpg',
  title: 'Oyster Fishing Boats',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What activity are the workers engaged in?", options: ["Whale hunting", "Oyster or shellfish harvesting", "Lobster trapping", "Net fishing"], correctIndex: 1 },
    { question: "What is piled in the boats?", options: ["Fish", "Oysters or clams", "Seaweed", "Empty nets"], correctIndex: 1 },
    { question: "How many boats are visible in this scene?", options: ["One", "Two", "Three or more", "None"], correctIndex: 2 },
    { question: "What type of boats are these?", options: ["Large steamships", "Small sailing workboats", "Rowboats only", "Canoes"], correctIndex: 1 },
    { question: "What tools are the workers using?", options: ["Fishing rods", "Long poles/tongs", "Nets only", "Harpoons"], correctIndex: 1 },
    { question: "What is visible in the distant background?", options: ["City skyline", "Shoreline and more boats", "Mountains", "Nothing"], correctIndex: 1 }
  ]
},
{
  id: 'photo-17',
  src: '/images/memory-game/horse-drawn-carriages.jpg',
  title: 'Oyster Tonging Scene',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is the main activity being shown?", options: ["Pleasure sailing", "Oyster tonging/harvesting", "Racing", "Cargo transport"], correctIndex: 1 },
    { question: "How many workers are visible on the main boat?", options: ["One", "Two", "Three", "Four or more"], correctIndex: 2 },
    { question: "What is visible in the center of the boat?", options: ["Fishing nets", "A pile of harvested oysters", "Passengers", "Empty deck"], correctIndex: 1 },
    { question: "What type of sails does this workboat have?", options: ["No sails", "Gaff-rigged sails (partially lowered)", "Square sails", "Modern sails"], correctIndex: 1 },
    { question: "What can be seen in the background?", options: ["City buildings", "More oyster boats working", "Empty horizon", "Lighthouse"], correctIndex: 1 },
    { question: "What is the weather condition?", options: ["Stormy", "Overcast/hazy", "Clear and sunny", "Nighttime"], correctIndex: 1 }
  ]
},
{
  id: 'photo-18',
  src: '/images/memory-game/busy-street-intersection.jpg',
  title: 'Jefferson County Courthouse',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of building is shown?", options: ["Church", "Ornate government/courthouse building", "Hotel", "Factory"], correctIndex: 1 },
    { question: "What prominent architectural feature is on the right side of the building?", options: ["Dome", "Clock tower", "Smokestack", "Flagpole only"], correctIndex: 1 },
    { question: "What season does this appear to be based on the trees?", options: ["Summer with full leaves", "Winter with bare trees", "Spring with blossoms", "Fall with colored leaves"], correctIndex: 1 },
    { question: "What is visible at ground level in front of the building?", options: ["Busy crowd", "Empty street with a few posts", "Parked cars", "Market stalls"], correctIndex: 1 },
    { question: "What architectural style is this building?", options: ["Modern glass", "Romanesque/Renaissance Revival", "Gothic", "Art Deco"], correctIndex: 1 },
    { question: "What type of construction material appears on the lower portion of the building?", options: ["Brick only", "Rough-cut stone blocks", "Concrete", "Wood"], correctIndex: 1 }
  ]
},
{
  id: 'photo-19',
  src: '/images/memory-game/park-gathering-1900s.jpg',
  title: 'Burlington, Vermont Panorama',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What body of water is visible in this panoramic view?", options: ["Ocean", "A large lake", "A river", "No water visible"], correctIndex: 1 },
    { question: "What is visible in the distant background across the water?", options: ["Nothing", "Mountains", "City skyline", "Ships"], correctIndex: 1 },
    { question: "What type of buildings are in the foreground?", options: ["Skyscrapers", "Residential houses and church steeples", "Factories", "No buildings"], correctIndex: 1 },
    { question: "What dominates the landscape in the foreground?", options: ["Water", "Trees and vegetation", "Paved roads", "Desert"], correctIndex: 1 },
    { question: "What architectural features are visible in the town?", options: ["Only modern buildings", "Church steeples and traditional buildings", "Factories only", "No buildings visible"], correctIndex: 1 },
    { question: "From what vantage point was this photograph taken?", options: ["Street level", "Elevated hillside view", "From a boat", "From an airplane"], correctIndex: 1 }
  ]
},
{
  id: 'photo-20',
  src: '/images/memory-game/fairground-crowd-scene.jpg',
  title: 'Burlington Cityscape View',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What geographical feature is visible in the distance?", options: ["Ocean", "Mountains across a lake", "Desert", "Forest only"], correctIndex: 1 },
    { question: "What type of area is shown in the foreground?", options: ["Downtown commercial", "Residential neighborhood with trees", "Industrial zone", "Farmland"], correctIndex: 1 },
    { question: "What architectural elements are visible in the mid-ground?", options: ["Only houses", "Church spires and institutional buildings", "Factories", "No buildings"], correctIndex: 1 },
    { question: "What is the predominant vegetation?", options: ["Palm trees", "Deciduous trees", "Cactus", "No vegetation"], correctIndex: 1 },
    { question: "What appears to be the season based on the trees?", options: ["Winter (bare)", "Summer (full foliage)", "Fall (some color)", "Spring (budding)"], correctIndex: 1 },
    { question: "What is visible on the horizon beyond the lake?", options: ["Nothing", "A mountain range", "City buildings", "Ships"], correctIndex: 1 }
  ]
},
{
  id: 'photo-21',
  src: '/images/memory-game/boardwalk-beach-scene.jpg',
  title: 'Lake and Mountain View',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is visible in the distant background?", options: ["Ocean", "Mountains across a lake", "City skyline", "Nothing"], correctIndex: 1 },
    { question: "What type of buildings are visible in the scene?", options: ["Commercial buildings", "Victorian-style houses", "Factories", "No buildings"], correctIndex: 1 },
    { question: "What is the predominant feature in the foreground?", options: ["Water", "Trees and parkland", "Paved streets", "Desert"], correctIndex: 1 },
    { question: "What appears to be on the lake in the distance?", options: ["Nothing", "A boat or small island", "Bridge", "Lighthouse"], correctIndex: 1 },
    { question: "What type of vegetation is shown?", options: ["Palm trees", "Deciduous trees with full foliage", "Pine trees only", "No vegetation"], correctIndex: 1 },
    { question: "What is visible at the bottom left of the image?", options: ["Water", "A park or lawn area", "A road", "Buildings"], correctIndex: 1 }
  ]
},
{
  id: 'photo-22',
  src: '/images/memory-game/factory-industrial-scene.jpg',
  title: 'Lakeside Beach Scene',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is along the left side of the image?", options: ["Buildings", "Trees along a shoreline", "Boats", "People"], correctIndex: 1 },
    { question: "What type of trees are visible?", options: ["Palm trees", "Birch and deciduous trees", "Pine trees only", "No trees"], correctIndex: 1 },
    { question: "What is visible in the water on the right side?", options: ["Boats", "A dock or pier structure", "Swimmers", "Nothing"], correctIndex: 1 },
    { question: "What type of shoreline is shown?", options: ["Rocky cliffs", "Sandy beach", "Concrete seawall", "Marshy wetland"], correctIndex: 1 },
    { question: "What is visible in the distant background?", options: ["Mountains", "Forested shoreline", "City", "Nothing"], correctIndex: 1 },
    { question: "What is the condition of the water?", options: ["Rough waves", "Calm and smooth", "Frozen", "Muddy"], correctIndex: 1 }
  ]
},
{
  id: 'photo-23',
  src: '/images/memory-game/mill-factory-exterior.jpg',
  title: 'Forest Stream and Bridge',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What natural feature is the main subject of this photograph?", options: ["Mountain", "Forest stream with small waterfall", "Desert canyon", "Ocean beach"], correctIndex: 1 },
    { question: "What man-made structure is visible crossing the stream?", options: ["Stone bridge", "Rustic wooden footbridge", "Metal bridge", "No bridge"], correctIndex: 1 },
    { question: "What is visible in the foreground of the stream?", options: ["Sand", "Rocks and boulders", "Grass", "Nothing"], correctIndex: 1 },
    { question: "What type of trees surround the scene?", options: ["Palm trees", "Deciduous forest trees", "Cactus", "No trees"], correctIndex: 1 },
    { question: "What water feature is visible on the left side?", options: ["Large waterfall", "Small cascade/waterfall", "Still pond", "Nothing"], correctIndex: 1 },
    { question: "What is the overall character of this scene?", options: ["Urban park", "Natural woodland setting", "Desert oasis", "Coastal beach"], correctIndex: 1 }
  ]
},
{
  id: 'photo-24',
  src: '/images/memory-game/railroad-yard-tracks.jpg',
  title: 'Mountain Waterfall',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is the main natural feature in this photograph?", options: ["A river", "A tall waterfall", "A lake", "A cave"], correctIndex: 1 },
    { question: "What surrounds the waterfall?", options: ["Desert", "Rocky cliffs and forest", "Buildings", "Beach"], correctIndex: 1 },
    { question: "What type of rock formation is visible?", options: ["Sandstone", "Rocky granite cliff face", "Volcanic rock", "Limestone cave"], correctIndex: 1 },
    { question: "What is visible at the base of the waterfall?", options: ["Swimming pool", "Rocky pool/stream bed", "Sandy beach", "Nothing"], correctIndex: 1 },
    { question: "What type of vegetation is around the falls?", options: ["Tropical plants", "Temperate forest trees and bushes", "Cactus", "No vegetation"], correctIndex: 1 },
    { question: "How tall does this waterfall appear to be?", options: ["A few feet", "Moderate height (20-40 feet)", "Hundreds of feet", "Tiny trickle"], correctIndex: 1 }
  ]
},
{
  id: 'photo-25',
  src: '/images/memory-game/warehouse-district.jpg',
  title: 'U.S. Torpedo Boat Alarm at Navy Yard',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of vessel is shown in the foreground?", options: ["Battleship", "U.S. Navy torpedo boat", "Sailing ship", "Tugboat"], correctIndex: 1 },
    { question: "What is the name of this vessel according to the caption?", options: ["USS Maine", "Alarm", "Enterprise", "Constitution"], correctIndex: 1 },
    { question: "Where is this photograph taken according to the caption?", options: ["Boston Harbor", "Navy Yard, New York", "San Francisco Bay", "Norfolk"], correctIndex: 1 },
    { question: "What is visible in the foreground next to the boat?", options: ["Water only", "A wooden dock/dry dock structure", "Sandy beach", "Other ships"], correctIndex: 1 },
    { question: "What is visible in the background across the water?", options: ["Open ocean", "Industrial waterfront with buildings and piers", "Mountains", "Nothing"], correctIndex: 1 },
    { question: "How many smokestacks are visible on this vessel?", options: ["None", "One", "Two", "Three"], correctIndex: 1 }
  ]
},
{
  id: 'photo-26',
  src: '/images/memory-game/bridge-over-river.jpg',
  title: 'Bridge Over River',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of structure is the main subject?", options: ["A dam", "A bridge", "A building", "A dock"], correctIndex: 1 },
    { question: "What is the bridge spanning over?", options: ["A valley", "A road", "A river", "Railroad tracks"], correctIndex: 2 },
    { question: "What material appears to be used in the bridge construction?", options: ["Wood only", "Stone and/or metal", "Concrete only", "Brick only"], correctIndex: 1 },
    { question: "What is visible beneath the bridge?", options: ["A dry riverbed", "Flowing water", "Train tracks", "A road"], correctIndex: 1 },
    { question: "What is visible on the riverbanks?", options: ["Dense forest", "Buildings and vegetation", "Desert sand", "Snow and ice"], correctIndex: 1 },
    { question: "What era does the bridge architecture suggest?", options: ["Modern era", "Early 1900s/Victorian era", "Medieval period", "Ancient times"], correctIndex: 1 }
  ]
},
{
  id: 'poster-1',
  src: '/images/memory-game/wpa-zoo-whos-who.jpg',
  title: 'Zoo - Who\'s Who',
  category: 'poster',
  attribution: 'WPA Federal Art Project, 1936-1941 - Library of Congress, Public Domain',
  questions: [
    { question: "What attraction does this WPA poster promote?", options: ["A museum", "A zoo", "A circus", "A park"], correctIndex: 1 },
    { question: "What does 'Who's Who' likely refer to in a zoo context?", options: ["Zoo staff", "Animals and their characteristics", "Visitors", "Zoo history"], correctIndex: 1 },
    { question: "WPA zoo posters were designed to encourage what?", options: ["Animal adoption", "Public visits to zoos", "Zoo donations", "Animal research"], correctIndex: 1 },
    { question: "What era were WPA posters created?", options: ["1910s", "1930s-1940s", "1950s", "1970s"], correctIndex: 1 },
    { question: "What design style is typical of WPA posters?", options: ["Photorealistic", "Art Deco with bold colors", "Impressionist", "Abstract"], correctIndex: 1 },
    { question: "WPA posters were created as part of what initiative?", options: ["World War I effort", "The New Deal", "The Space Race", "The Civil Rights Movement"], correctIndex: 1 }
  ]
}
];
