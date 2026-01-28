// Categories for filtering
export const imageCategories = [
  { id: 'all', label: 'All Images' },
  { id: 'painting', label: 'Classic Paintings' },
  { id: 'poster', label: 'Posters' },
  { id: 'photo', label: 'Historical Photos' }
];

export const memoryImages = [
{
  id: 'painting-2',
  src: '/images/memory-game/bruegel-hunters-in-snow.jpg',
  title: 'Hunters in the Snow',
  category: 'painting',
  attribution: 'Pieter Bruegel the Elder, 1565 - Public Domain',
  questions: [
    { question: "What animals are accompanying the hunters?", options: ["Heavy draft horses", "Dogs", "Gray barn cats", "Wild deer"], correctIndex: 1 },
    { question: "What season is depicted in this painting?", options: ["Spring", "Summer", "Autumn", "Winter"], correctIndex: 3 },
    { question: "What are people doing on the frozen ponds in the background?", options: ["Ice fishing with poles", "Ice skating", "Winter swimming", "Rowing small boats"], correctIndex: 1 },
    { question: "What color are most of the bare trees?", options: ["Bright green", "Warm brown", "Dark/Black silhouettes", "Snow white"], correctIndex: 2 },
    { question: "What kind of birds can be seen in the sky?", options: ["Golden eagles", "A crow/magpie", "White doves", "Graceful swans"], correctIndex: 1 },
    { question: "On which side of the painting are the hunters walking?", options: ["Right side going down", "Left side going down", "Through the center", "Along the bottom edge"], correctIndex: 1 }
  ]
},
{
  id: 'painting-3',
  src: '/images/memory-game/da-vinci-mona-lisa.jpg',
  title: 'Mona Lisa',
  category: 'painting',
  attribution: 'Leonardo da Vinci, c. 1503-1519 - Public Domain',
  questions: [
    { question: "How are the subject's hands positioned?", options: ["Resting at her sides", "Folded/crossed in front", "Clasped behind her back", "Raised up to her face"], correctIndex: 1 },
    { question: "What is visible in the background landscape?", options: ["Mountains and a winding path", "A distant city skyline", "A vast open ocean", "A dense forest only"], correctIndex: 0 },
    { question: "What color is the subject's clothing?", options: ["Bright red velvet", "Cream white silk", "Dark greenish-brown", "Royal blue satin"], correctIndex: 2 },
    { question: "Does the subject have visible eyebrows?", options: ["Yes, thick dark eyebrows", "Yes, thin arched eyebrows", "Very faint or no visible eyebrows", "Only one visible eyebrow"], correctIndex: 2 },
    { question: "What is the dominant color tone of the entire painting?", options: ["Cool blues and grays", "Warm earth tones (browns, greens)", "Bright primary colors", "Stark black and white"], correctIndex: 1 },
    { question: "Which direction is the subject's body turned?", options: ["Facing directly forward at viewer", "Slightly turned to her left (viewer's right)", "Completely turned to the side", "Turned mostly away from viewer"], correctIndex: 1 }
  ]
},
{
  id: 'painting-5',
  src: '/images/memory-game/hokusai-great-wave.jpg',
  title: 'The Great Wave off Kanagawa',
  category: 'painting',
  attribution: 'Katsushika Hokusai, c. 1831 - Public Domain',
  questions: [
    { question: "What is visible in the background of the image?", options: ["The rising sun", "Mount Fuji", "A coastal city", "More crashing waves"], correctIndex: 1 },
    { question: "What are the main colors used in this print?", options: ["Red and orange", "Blue and white", "Green and yellow", "Purple and pink"], correctIndex: 1 },
    { question: "What is beneath the great wave?", options: ["Ships/boats", "Desperate swimmers", "Schools of fish", "Nothing at all"], correctIndex: 0 },
    { question: "What appears at the crest of the wave like fingers?", options: ["Flying seabirds", "Foam/spray that looks like claws", "Fish jumping out", "Crackling lightning"], correctIndex: 1 },
    { question: "How many boats are visible in the image?", options: ["One", "Two", "Three", "Four"], correctIndex: 2 },
    { question: "Where is Japanese text visible in the image?", options: ["Bottom right corner", "Top left corner", "Center of image", "There is no text"], correctIndex: 1 }
  ]
},
{
  id: 'painting-6',
  src: '/images/memory-game/klimt-the-kiss.jpg',
  title: 'The Kiss',
  category: 'painting',
  attribution: 'Gustav Klimt, 1907-1908 - Public Domain',
  questions: [
    { question: "What is the dominant color in this painting?", options: ["Deep blue", "Vibrant red", "Gold", "Emerald green"], correctIndex: 2 },
    { question: "What pattern appears on the man's robe?", options: ["Concentric circles", "Black and white rectangles", "Delicate flowers", "Vertical stripes"], correctIndex: 1 },
    { question: "What pattern appears on the woman's dress?", options: ["Geometric rectangles", "Colorful circles and flowers", "Plain solid color", "Scattered stars"], correctIndex: 1 },
    { question: "What are the couple kneeling on?", options: ["A ornate bed", "A flowery meadow/cliff edge", "A Persian carpet", "Billowing clouds"], correctIndex: 1 },
    { question: "What color are the flowers in the meadow at the bottom?", options: ["Only bright red", "Only pure white", "Purple, yellow, and other colors", "There are no flowers"], correctIndex: 2 },
    { question: "What is the background color behind the golden figures?", options: ["Bright sky blue", "Dark bronze/gold", "Pure white", "Forest green"], correctIndex: 1 }
  ]
},
{
  id: 'painting-7',
  src: '/images/memory-game/manet-bar-folies-bergere.jpg',
  title: 'A Bar at the Folies-Bergere',
  category: 'painting',
  attribution: 'Edouard Manet, 1882 - Public Domain',
  questions: [
    { question: "What fruit is visible in a bowl on the bar counter?", options: ["Green apples with stems", "Oranges", "Purple grapes in clusters", "Yellow bananas"], correctIndex: 1 },
    { question: "What is the barmaid wearing around her neck?", options: ["A silk floral scarf", "A black choker/ribbon", "A strand of white pearls", "A delicate gold chain"], correctIndex: 1 },
    { question: "What types of bottles are prominently displayed on the bar?", options: ["Red and white wine bottles only", "Beer, champagne, and liquor bottles", "Clear glass water carafes", "Ceramic milk and cream bottles"], correctIndex: 1 },
    { question: "What is reflected in the mirror behind the barmaid?", options: ["An empty dark room", "The crowded hall and chandeliers", "A garden with trees visible", "The barmaid from behind only"], correctIndex: 1 },
    { question: "What are the two circular white shapes in the upper background?", options: ["Full moons in a night sky", "Chandeliers/lights", "Decorative white balloons", "Large ornate wall clocks"], correctIndex: 1 },
    { question: "What is visible in the upper left corner of the reflection?", options: ["A tall arched window", "A trapeze artist's legs/feet", "A framed landscape painting", "A large decorative clock"], correctIndex: 1 }
  ]
},
{
  id: 'painting-8',
  src: '/images/memory-game/michelangelo-creation-of-adam.jpg',
  title: 'The Creation of Adam',
  category: 'painting',
  attribution: 'Michelangelo, c. 1512 - Public Domain',
  questions: [
    { question: "What are Adam and God reaching out to do?", options: ["Clasp hands in greeting", "Touch fingers", "Pass a golden apple", "Wave in acknowledgment"], correctIndex: 1 },
    { question: "On which side of the painting is Adam?", options: ["Left side", "Right side", "Center between figures", "Lower bottom section"], correctIndex: 0 },
    { question: "What shape surrounds God and the angels?", options: ["A soft white cloud mass", "A billowing cloak/cape shape", "A perfect golden circle", "A geometric triangle form"], correctIndex: 1 },
    { question: "What is Adam reclining on?", options: ["A fluffy white cloud", "A rock/earth formation", "A wooden platform bed", "Shallow blue water"], correctIndex: 1 },
    { question: "What color is the flowing fabric around God?", options: ["Deep royal blue", "Red/pink", "Pure bright white", "Shimmering gold"], correctIndex: 1 },
    { question: "How many other figures are shown with God?", options: ["None, God is alone", "About 5-6", "About 10-12", "Over 20 figures"], correctIndex: 2 }
  ]
},
{
  id: 'painting-9',
  src: '/images/memory-game/monet-impression-sunrise.jpg',
  title: 'Impression, Sunrise',
  category: 'painting',
  attribution: 'Claude Monet, 1872 - Public Domain',
  questions: [
    { question: "What color is the sun in this painting?", options: ["Bright pale yellow", "Glowing soft white", "Orange/Red", "Hidden behind clouds"], correctIndex: 2 },
    { question: "What is reflected on the water below the sun?", options: ["Only dark rippling water", "Orange/red light reflections", "The silhouette of a boat", "A second moon reflection"], correctIndex: 1 },
    { question: "What type of vessels are visible in the water?", options: ["Tall white sailboats only", "Small rowboats and larger ships", "Modern passenger cruise ships", "Empty water with no vessels"], correctIndex: 1 },
    { question: "What is the overall color tone of the sky and water?", options: ["Warm bright yellows", "Blue-grey and hazy", "Soft muted greens", "Deep rich purples"], correctIndex: 1 },
    { question: "What industrial elements are visible in the background?", options: ["Factories with smokestacks", "Traditional Dutch windmills", "Medieval stone castles", "Clean natural landscape"], correctIndex: 0 },
    { question: "Where is the artist's signature visible?", options: ["Upper right corner", "Bottom left", "Center of painting", "Signature not visible"], correctIndex: 1 }
  ]
},
{
  id: 'painting-10',
  src: '/images/memory-game/monet-water-lilies.jpg',
  title: 'Water Lilies',
  category: 'painting',
  attribution: 'Claude Monet, 1906 - Public Domain',
  questions: [
    { question: "What is the primary subject floating on the water?", options: ["White and brown ducks", "Lily pads and water lilies", "Fallen autumn leaves", "Orange and white fish"], correctIndex: 1 },
    { question: "What colors are the water lily flowers?", options: ["Pure white only", "Bright yellow only", "Pink, white, and yellow", "Deep crimson red"], correctIndex: 2 },
    { question: "What is reflected in the water?", options: ["Trees and sky", "Stone buildings nearby", "Distant mountain peaks", "Clear with no reflections"], correctIndex: 0 },
    { question: "What is the dominant color of the water?", options: ["Warm earthy browns", "Blue and purple tones", "Bright emerald green", "Crystal clear transparent"], correctIndex: 1 },
    { question: "What color are most of the lily pads?", options: ["Dried autumn brown", "Pale golden yellow", "Green", "Deep burgundy red"], correctIndex: 2 },
    { question: "Is there any visible shoreline or horizon in this painting?", options: ["Yes, clearly visible shore", "No, only water surface", "Yes, with stone buildings", "Yes, with mountain peaks"], correctIndex: 1 }
  ]
},
{
  id: 'painting-11',
  src: '/images/memory-game/raphael-school-of-athens.jpg',
  title: 'The School of Athens',
  category: 'painting',
  attribution: 'Raphael, 1509-1511 - Public Domain',
  questions: [
    { question: "What architectural feature frames the scene in the background?", options: ["Columns and arches", "A plain flat stone wall", "Large glass windows", "A single central dome"], correctIndex: 0 },
    { question: "Where are the two central figures located?", options: ["At the bottom of the steps", "At the top center, framed by the arch", "Standing on the far left", "Seated on the far right"], correctIndex: 1 },
    { question: "What is visible through the central arch in the far background?", options: ["Snow-capped mountain peaks", "The sky with clouds", "A bustling ancient city", "A calm body of water"], correctIndex: 1 },
    { question: "What are statues of visible in the niches on the walls?", options: ["Mythological animals", "Greek/Roman gods", "Historical Roman kings", "Winged celestial angels"], correctIndex: 1 },
    { question: "What is the reclining figure on the steps in the center doing?", options: ["Sleeping peacefully alone", "Writing on a tablet", "Reading or thinking", "Eating grapes from bowl"], correctIndex: 2 },
    { question: "What shape is the overall composition of the painting?", options: ["Perfectly circular frame", "Arched at the top", "Standard rectangular shape", "Triangular pointed form"], correctIndex: 1 }
  ]
},
{
  id: 'painting-12',
  src: '/images/memory-game/rembrandt-night-watch.jpg',
  title: 'The Night Watch',
  category: 'painting',
  attribution: 'Rembrandt van Rijn, 1642 - Public Domain',
  questions: [
    { question: "What is the dominant lighting effect in this painting?", options: ["Even lighting throughout the scene", "Dramatic light on central figures against dark background", "Dark silhouettes against bright sky background", "Soft diffused lighting with no shadows"], correctIndex: 1 },
    { question: "What color sash is worn by the man in black in the center?", options: ["Deep royal blue", "Red", "Bright pure white", "Forest dark green"], correctIndex: 1 },
    { question: "What is the brightly lit girl on the left carrying?", options: ["A woven wicker basket", "A chicken/bird", "A bouquet of flowers", "A glowing oil lantern"], correctIndex: 1 },
    { question: "What type of headwear do many of the men wear?", options: ["Golden royal crowns", "Wide-brimmed hats", "Metal military helmets", "Bare heads with no covering"], correctIndex: 1 },
    { question: "What weapons are many of the figures carrying?", options: ["Long curved swords only", "Pikes, muskets, and other weapons", "Wooden bows and arrows", "No visible weapons shown"], correctIndex: 1 },
    { question: "What color outfit does the lieutenant wear (man on the right of center)?", options: ["Dark formal black", "Yellow/gold", "Bright military red", "Deep navy blue"], correctIndex: 1 }
  ]
},
{
  id: 'painting-13',
  src: '/images/memory-game/renoir-luncheon-boating-party.jpg',
  title: 'Luncheon of the Boating Party',
  category: 'painting',
  attribution: 'Pierre-Auguste Renoir, 1881 - Public Domain',
  questions: [
    { question: "What type of hats are several of the men wearing?", options: ["Black silk top hats with wide brims", "Straw boater hats", "Dark wool berets tilted to the side", "Bare-headed with slicked hair"], correctIndex: 1 },
    { question: "What is on the table in the foreground?", options: ["White porcelain plates stacked neatly", "Wine bottles, glasses, and fruit", "A bare wooden table surface", "Leather-bound books and papers"], correctIndex: 1 },
    { question: "What is the woman in the lower left holding?", options: ["A tall crystal wine glass", "A small dog", "An ornate folding fan", "A small leather-bound book"], correctIndex: 1 },
    { question: "What is visible in the background through the awning?", options: ["Snow-capped mountain peaks", "A river/water and trees", "Parisian apartment buildings", "The open ocean with waves"], correctIndex: 1 },
    { question: "What color is the striped awning at the top?", options: ["Blue and white striped canvas", "Bright red and white stripes", "Orange/red and white", "Forest green and white stripes"], correctIndex: 2 },
    { question: "What is the standing man on the left wearing on his upper body?", options: ["A dark formal suit jacket", "A white sleeveless shirt", "Bare-chested with suspenders", "A blue and white striped shirt"], correctIndex: 1 }
  ]
},
{
  id: 'painting-14',
  src: '/images/memory-game/seurat-sunday-afternoon.jpg',
  title: 'A Sunday Afternoon on the Island of La Grande Jatte',
  category: 'painting',
  attribution: 'Georges Seurat, 1884-1886 - Public Domain',
  questions: [
    { question: "What animal is prominently featured in the lower right?", options: ["A grey striped tabby cat", "A brown spotted hunting dog", "A monkey", "A colorful exotic bird"], correctIndex: 2 },
    { question: "What are several people holding to shade themselves?", options: ["Wide-brimmed straw hats", "Parasols/umbrellas", "Decorative paper fans", "Nothing visible for shade"], correctIndex: 1 },
    { question: "What is visible on the water in the background?", options: ["Empty calm water surface", "Sailboats", "People swimming in groups", "A stone arched bridge"], correctIndex: 1 },
    { question: "What color is the dress of the prominent woman on the right?", options: ["Bright crimson red with ruffles", "Light powder blue with lace trim", "Dark blue/black with bustle", "Pristine white with embroidery"], correctIndex: 2 },
    { question: "What type of dog is shown in the lower left of the painting?", options: ["A large golden retriever type", "A small black dog", "A fluffy white poodle", "No dog is visible there"], correctIndex: 1 },
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
    { question: "What small animal is standing between the two figures?", options: ["A grey tabby cat curled up", "A dog", "A songbird in a cage", "No animal is present"], correctIndex: 1 },
    { question: "What color is the woman's dress?", options: ["Deep crimson red velvet", "Rich royal blue silk", "Green", "Cream white with gold trim"], correctIndex: 2 },
    { question: "What object hangs on the back wall between the figures?", options: ["A small religious painting", "A convex mirror", "An ornate brass clock", "A wooden crucifix"], correctIndex: 1 },
    { question: "What hangs from the ceiling?", options: ["An oil lamp with glass shade", "A chandelier with candles", "A potted hanging plant", "The ceiling is bare"], correctIndex: 1 },
    { question: "What is the man wearing on his head?", options: ["A jeweled golden crown", "A large black hat", "A wrapped silk turban", "His head is uncovered"], correctIndex: 1 },
    { question: "What is visible on the floor near the man's feet?", options: ["An ornate patterned rug", "Wooden clogs/sandals", "An open prayer book", "Scattered flower petals"], correctIndex: 1 }
  ]
},
{
  id: 'painting-16',
  src: '/images/memory-game/van-gogh-cafe-terrace.jpg',
  title: 'Cafe Terrace at Night',
  category: 'painting',
  attribution: 'Vincent van Gogh, 1888 - Public Domain',
  questions: [
    { question: "What color is the awning of the cafe?", options: ["Deep burgundy red fabric", "Dark navy blue canvas", "Yellow/Orange", "Olive green striped cloth"], correctIndex: 2 },
    { question: "What is visible in the dark blue sky?", options: ["A bright full moon", "Stars", "Wispy grey clouds", "A completely empty sky"], correctIndex: 1 },
    { question: "What color are the cobblestones of the street?", options: ["Neutral grey stone tones", "Yellow/orange tones", "Reddish brown brick color", "Dark brown earth tones"], correctIndex: 1 },
    { question: "What is the setting of this painting?", options: ["A sunny afternoon in a park", "Nighttime on a street with an outdoor cafe", "The interior of a grand building", "A moonlit beach scene"], correctIndex: 1 },
    { question: "What are people doing at the cafe tables?", options: ["Dancing in pairs nearby", "Sitting and dining", "Standing in a queue at the door", "The cafe area is completely empty"], correctIndex: 1 },
    { question: "What color dominates the buildings across the street from the cafe?", options: ["Bright golden yellow facades", "Dark blue/black silhouettes", "Warm terracotta red walls", "Clean whitewashed surfaces"], correctIndex: 1 }
  ]
},
{
  id: 'painting-17',
  src: '/images/memory-game/van-gogh-starry-night.jpg',
  title: 'The Starry Night',
  category: 'painting',
  attribution: 'Vincent van Gogh, 1889 - Public Domain',
  questions: [
    { question: "What tall dark object rises on the left side of the painting?", options: ["A stone church tower", "A cypress tree", "A solitary human figure", "A rocky mountain peak"], correctIndex: 1 },
    { question: "What is visible in the village below the sky?", options: ["Only scattered small houses", "A church with a tall spire", "A medieval stone castle", "A bridge over a river"], correctIndex: 1 },
    { question: "What shape are the stars and moon depicted as?", options: ["Realistic points of light", "Swirling halos of light", "Geometric square shapes", "Barely visible faint dots"], correctIndex: 1 },
    { question: "What is the dominant color of the sky?", options: ["Deep black with grey clouds", "Various shades of blue with yellow", "Fiery orange and red tones", "Deep violet and purple hues"], correctIndex: 1 },
    { question: "What appears in the upper right of the sky?", options: ["A blazing golden sun", "A bright crescent moon", "A streaking comet tail", "A distant flying object"], correctIndex: 1 },
    { question: "What landscape feature is visible behind the village?", options: ["A vast blue ocean", "Rolling hills/mountains", "An endless flat plain", "Dense forest trees only"], correctIndex: 1 }
  ]
},
{
  id: 'painting-18',
  src: '/images/memory-game/van-gogh-sunflowers.jpg',
  title: 'Sunflowers',
  category: 'painting',
  attribution: 'Vincent van Gogh, 1888 - Public Domain',
  questions: [
    { question: "What is holding the sunflowers?", options: ["A woven wicker basket", "A ceramic vase", "A clear glass jar", "They are lying flat on a table"], correctIndex: 1 },
    { question: "What is the dominant color of the background?", options: ["Soft powder blue", "Sage green", "Yellow", "Bright white"], correctIndex: 2 },
    { question: "What is written on the vase?", options: ["Van Gogh in script", "Vincent", "Sunflowers in French", "Nothing is written on it"], correctIndex: 1 },
    { question: "What color is the surface the vase sits on?", options: ["Pure white tablecloth", "Dark brown wood grain", "Yellow/ochre", "Deep burgundy red"], correctIndex: 2 },
    { question: "What state are the sunflowers in?", options: ["All fresh and perfectly blooming", "Various stages - some wilting, some fresh", "All completely dead and dried out", "Still tightly closed buds"], correctIndex: 1 },
    { question: "Approximately how many sunflowers are in the vase?", options: ["About 5 flowers total", "About 10 flowers total", "About 15", "About 25 flowers total"], correctIndex: 2 }
  ]
},
{
  id: 'painting-19',
  src: '/images/memory-game/velazquez-las-meninas.jpg',
  title: 'Las Meninas',
  category: 'painting',
  attribution: 'Diego Velazquez, 1656 - Public Domain',
  questions: [
    { question: "What animal is lying on the floor in the foreground?", options: ["A small tabby cat curled up", "A large dog", "A white spaniel sitting up", "A grey hunting hound"], correctIndex: 1 },
    { question: "Who is the central figure in white?", options: ["The queen in royal attire", "A young princess (Infanta)", "A lady-in-waiting in court dress", "The artist's young daughter"], correctIndex: 1 },
    { question: "What is the painter on the left holding?", options: ["A leather-bound sketchbook", "A paintbrush and palette", "A long wooden measuring rod", "A rolled-up canvas"], correctIndex: 1 },
    { question: "What is reflected in the mirror on the back wall?", options: ["The young princess in white", "The king and queen", "A distant window with light", "The artist at his easel"], correctIndex: 1 },
    { question: "What is the figure in the doorway at the back doing?", options: ["Carrying a tray into the room", "Standing on stairs with light behind", "Closing the heavy wooden door", "Bowing to the royal family"], correctIndex: 1 },
    { question: "What is visible on the left side of the painting?", options: ["A tall arched window with curtains", "The back of a large canvas", "An ornate gilded doorframe", "A decorative tapestry hanging"], correctIndex: 1 }
  ]
},
{
  id: 'painting-20',
  src: '/images/memory-game/vermeer-girl-with-pearl-earring.jpg',
  title: 'Girl with a Pearl Earring',
  category: 'painting',
  attribution: 'Johannes Vermeer, c. 1665 - Public Domain',
  questions: [
    { question: "What is the girl wearing on her head?", options: ["A wide-brimmed straw hat", "A blue and yellow turban", "A simple white lace cap", "A dark velvet headband"], correctIndex: 1 },
    { question: "What type of earring is she wearing?", options: ["A delicate gold hoop earring", "A large pearl earring", "A small diamond stud earring", "A dangling ruby gemstone"], correctIndex: 1 },
    { question: "What is the background color of the painting?", options: ["Soft muted white", "Dark/black", "Deep navy blue", "Warm ochre brown"], correctIndex: 1 },
    { question: "What color is the girl's jacket/top?", options: ["Bright cobalt blue fabric", "Deep crimson red velvet", "Yellow/ochre/brown", "Forest green with trim"], correctIndex: 2 },
    { question: "Which direction is the girl looking?", options: ["Directly at the viewer, over her shoulder", "Away from the viewer to the right", "Downward at her folded hands", "Upward toward a light source"], correctIndex: 0 },
    { question: "What is the color of the fabric trailing from her turban?", options: ["Deep burgundy red", "Bright cobalt blue", "Yellow/cream", "Emerald green silk"], correctIndex: 2 }
  ]
},
{
  id: 'photo-1',
  src: '/images/memory-game/fifth-avenue-new-york-1900s.jpg',
  title: 'Fifth Avenue, New York 1900s',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of public transportation is visible on the left side of the street?", options: ["Electric trolley on rails", "Double-decker bus", "Horse-drawn omnibus carriage", "Steam-powered tram car"], correctIndex: 1 },
    { question: "What advertisement is visible on the side of the bus?", options: ["Coca-Cola beverage", "Bull Durham", "Singer Sewing Machines", "Ivory Soap bar"], correctIndex: 1 },
    { question: "What type of building is visible in the background with a spire?", options: ["Government courthouse building", "Church", "Commercial bank tower", "Grand hotel building"], correctIndex: 1 },
    { question: "What are the men in the foreground wearing on their heads?", options: ["Tall black top hats", "Bowler hats", "Flat newsboy caps", "Wide-brimmed fedoras"], correctIndex: 1 },
    { question: "What type of horse-drawn vehicle is visible in the center of the image?", options: ["Heavy freight wagon", "Carriage", "Small delivery cart", "Enclosed hansom cab"], correctIndex: 1 },
    { question: "What is the weather condition in this photo?", options: ["Rainy with wet streets", "Sunny with clear skies", "Snowy winter scene", "Foggy with low visibility"], correctIndex: 1 }
  ]
},
{
  id: 'photo-2',
  src: '/images/memory-game/broadway-fulton-street-nyc.jpg',
  title: 'Broadway at Fulton Street, NYC',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What types of transportation are visible in this busy street scene?", options: ["Only automobiles and trucks", "Trolleys, horses, and early automobiles", "Only horse-drawn vehicles and carts", "Bicycles and motorcycles primarily"], correctIndex: 1 },
    { question: "What is visible on the buildings lining the street?", options: ["Bright neon electric signs", "Store signs and awnings", "Large painted billboards only", "Plain facades with no signage"], correctIndex: 1 },
    { question: "From what vantage point was this photograph taken?", options: ["Street level near the curb", "Elevated position looking down", "From inside a moving vehicle", "From a basement window below"], correctIndex: 1 },
    { question: "What type of buildings dominate this scene?", options: ["Small residential rowhouses", "Multi-story commercial buildings", "Grand government buildings", "Churches and religious structures"], correctIndex: 1 },
    { question: "What is the condition of the street?", options: ["Cobblestone with trolley tracks", "Unpaved dirt road surface", "Smooth concrete highway lanes", "Wooden plank boardwalk"], correctIndex: 0 },
    { question: "How would you describe the pedestrian activity?", options: ["Empty streets with no people", "Very crowded with many people", "Only a few scattered pedestrians", "People running in all directions"], correctIndex: 1 }
  ]
},
{
  id: 'photo-3',
  src: '/images/memory-game/manhattan-skyline-1900s.jpg',
  title: 'Manhattan Skyline 1900s',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is the tallest structure in this skyline view?", options: ["A tall pointed church steeple", "A tall early skyscraper", "A large industrial water tower", "A brick factory chimney stack"], correctIndex: 1 },
    { question: "What architectural feature is visible on the building on the right?", options: ["A large ornate clock tower", "A dome", "A tall pointed spire", "An American flag on a pole"], correctIndex: 1 },
    { question: "What is visible in the foreground of the image?", options: ["A busy cobblestone street", "A fenced area with trees", "A waterfront with piers", "A railroad yard with tracks"], correctIndex: 1 },
    { question: "What type of buildings are shown on the left side?", options: ["Low single-story retail shops", "Ornate multi-story buildings", "Modern glass tower structures", "Wooden residential houses"], correctIndex: 1 },
    { question: "What appears to be the approximate number of floors in the tallest building?", options: ["5 floors", "10 floors", "Over 15 floors", "3 floors"], correctIndex: 2 },
    { question: "What is the overall character of the buildings in this view?", options: ["All buildings of uniform height", "Mix of older ornate and newer tall buildings", "All modern glass skyscrapers", "All low residential structures"], correctIndex: 1 }
  ]
},
{
  id: 'photo-4',
  src: '/images/memory-game/union-station-washington-dc.jpg',
  title: 'Union Station, Washington DC',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of architectural ceiling is visible in this interior?", options: ["Flat wooden plank ceiling", "Vaulted coffered ceiling with skylights", "Open industrial steel rafters", "Large central domed ceiling"], correctIndex: 1 },
    { question: "What are the structures along the left side of the concourse?", options: ["Small retail shop fronts", "Ticket windows with ornate railings", "Restaurant tables and seating", "Baggage claim counters"], correctIndex: 1 },
    { question: "How would you describe the floor of this space?", options: ["Thick wall-to-wall carpeting", "Large smooth tiles or marble", "Worn wooden plank flooring", "Poured gray concrete surface"], correctIndex: 1 },
    { question: "What type of lighting is hanging from the ceiling?", options: ["Crystal chandeliers with candles", "Electric pendant lights", "Cast iron gas lamp fixtures", "Recessed ceiling spotlights"], correctIndex: 1 },
    { question: "How crowded is this station interior?", options: ["Packed shoulder to shoulder", "Nearly empty", "Moderate crowd of travelers", "Completely empty and abandoned"], correctIndex: 1 },
    { question: "What is the shape of the ceiling design pattern?", options: ["Large circular medallions", "Rectangular grid with diagonal elements", "Hexagonal honeycomb pattern", "Random irregular pattern"], correctIndex: 1 }
  ]
},
{
  id: 'photo-5',
  src: '/images/memory-game/chicago-railway-train-sheds.jpg',
  title: 'Chicago Railway Train Sheds',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What numbers are visible on the platform markers?", options: ["1 and 2", "2 and 3", "4 and 5", "7 and 8"], correctIndex: 1 },
    { question: "What type of roof structure covers the train platforms?", options: ["Open sky with no covering", "Arched metal and glass train sheds", "Flat concrete roof with skylights", "Wooden canopy with lanterns"], correctIndex: 1 },
    { question: "What is visible on the left side of the image?", options: ["A steam locomotive with smoke", "A passenger train car", "A freight car with cargo", "An empty platform with benches"], correctIndex: 1 },
    { question: "What text is visible at the top of the photograph?", options: ["Chicago Union Station, Illinois", "Train Sheds, C & N.W. Ry, Chicago, Ill.", "Grand Central Terminal, New York", "Pennsylvania Station, Philadelphia"], correctIndex: 1 },
    { question: "How many people are visible on the platform?", options: ["None at all", "One or two", "A large crowd gathering", "About ten scattered around"], correctIndex: 1 },
    { question: "What material appears to make up the platform surface?", options: ["Wooden planks with gaps", "Concrete or stone", "Packed dirt and gravel", "Metal grating panels"], correctIndex: 1 }
  ]
},
{
  id: 'photo-6',
  src: '/images/memory-game/train-station-concourse.jpg',
  title: 'Equestrian Statue in Park',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of statue is the centerpiece of this image?", options: ["Standing figure holding a sword", "Equestrian statue (person on horseback)", "Abstract modern sculpture", "Fountain statue with figures"], correctIndex: 1 },
    { question: "What surrounds the base of the monument?", options: ["A circular water fountain", "Manicured hedges and flower beds", "A decorative iron fence only", "A cobblestone plaza with benches"], correctIndex: 1 },
    { question: "What type of vegetation is visible around the statue?", options: ["Tall palm trees and tropical plants", "Ivy-covered hedges and planted flowers", "Bare ground with sparse grass", "Ornamental cactus garden"], correctIndex: 1 },
    { question: "What architectural element is visible in the background?", options: ["Modern glass skyscrapers", "A church steeple", "Industrial smokestacks and factories", "Victorian residential houses"], correctIndex: 1 },
    { question: "What decorative element is visible on the monument's pedestal?", options: ["Unadorned plain stone surface", "A wreath or medallion", "No decoration whatsoever", "Colorful painted murals"], correctIndex: 1 },
    { question: "What is the setting of this statue?", options: ["Busy city plaza with crowds", "Park or garden setting", "Inside a museum building", "Formal cemetery grounds"], correctIndex: 1 }
  ]
},
{
  id: 'photo-7',
  src: '/images/memory-game/sheriff-street-market-cleveland.jpg',
  title: 'Sheriff Street Market, Cleveland',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What text is visible on the tall building?", options: ["Cleveland Department Store", "New Market and Cold Storage Co.", "Cleveland City Hall Building", "Grand Hotel Cleveland"], correctIndex: 1 },
    { question: "What architectural features are on top of the buildings?", options: ["Flat roofs with chimneys", "Domed towers", "Gothic church steeples", "Industrial smokestacks"], correctIndex: 1 },
    { question: "What type of commerce is happening at street level?", options: ["Automobile sales and repair", "Market stalls and vendors", "Banking and financial services", "Manufacturing operations"], correctIndex: 1 },
    { question: "What type of transportation is visible?", options: ["Early automobiles parked", "Horse-drawn wagons and carts", "Electric trolleys on tracks", "Bicycles and pedestrians"], correctIndex: 1 },
    { question: "What covers the market stalls at street level?", options: ["Permanent wooden roofs", "Canvas awnings", "No coverings at all", "Large fabric umbrellas"], correctIndex: 1 },
    { question: "What is written visible regarding the type of goods sold?", options: ["Fine Clothing and Apparel", "Fruits and Vegetables", "Hardware and Tools", "Furniture and Home Goods"], correctIndex: 1 }
  ]
},
{
  id: 'photo-8',
  src: '/images/memory-game/lexington-market-baltimore.jpg',
  title: 'Lexington Market, Baltimore',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "From what vantage point was this photograph taken?", options: ["Ground level street view", "Elevated view from above", "From a moving horse cart", "Underground cellar level"], correctIndex: 1 },
    { question: "What is the prominent structure running down the center of the image?", options: ["A tall stone church", "A long market building with peaked roof", "A covered train station", "A pedestrian bridge"], correctIndex: 1 },
    { question: "What type of activity is visible on both sides of the market building?", options: ["Everyday residential life", "Market vendors and customers", "Industrial factory work", "A military parade procession"], correctIndex: 1 },
    { question: "What type of transportation lines the streets?", options: ["Early motor automobiles", "Horse-drawn wagons and carts", "Electric streetcar trolleys", "Bicycles and pushcarts only"], correctIndex: 1 },
    { question: "What is visible in the background of the city?", options: ["Rolling mountain ranges", "Church steeples and smokestacks", "An ocean harbor view", "Tall modern skyscrapers"], correctIndex: 1 },
    { question: "What type of buildings surround the market?", options: ["Small single-story homes", "Multi-story brick commercial buildings", "Modern glass office towers", "Rustic wooden shacks"], correctIndex: 1 }
  ]
},
{
  id: 'photo-9',
  src: '/images/memory-game/public-market-vendors.jpg',
  title: 'Eutaw Place Fountain, Baltimore',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is the central feature of this photograph?", options: ["A large gothic church", "An ornate multi-tiered fountain", "A bronze war monument", "A municipal building"], correctIndex: 1 },
    { question: "What surrounds the fountain?", options: ["Open desert sand area", "Trees and grassy areas", "A wide cobblestone plaza", "A reflecting water pool"], correctIndex: 1 },
    { question: "What type of pathway is visible in the foreground?", options: ["An unpaved dirt path", "Paved sidewalk with grass", "A raised wooden boardwalk", "A wide gravel road"], correctIndex: 1 },
    { question: "What architectural style building is visible on the right?", options: ["Gothic cathedral with spires", "Row houses with arched windows", "Industrial brick factory", "Rustic wooden log cabin"], correctIndex: 1 },
    { question: "What is visible in the background behind the fountain?", options: ["Distant mountain ranges", "A domed building", "Modern tall skyscrapers", "An ocean harbor view"], correctIndex: 1 },
    { question: "What figures appear to be near the fountain?", options: ["No one is present", "Several people gathered", "A marching parade group", "Various farm animals"], correctIndex: 1 }
  ]
},
{
  id: 'photo-10',
  src: '/images/memory-game/harbor-waterfront-1900s.jpg',
  title: 'S.S. Lucania Ocean Liner',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "How many smokestacks does this ship have?", options: ["One large smokestack", "Two", "Three in a row", "Four prominent stacks"], correctIndex: 1 },
    { question: "What is coming from the smokestacks?", options: ["Nothing visible", "Dark smoke", "White steam billowing", "Flames and sparks"], correctIndex: 1 },
    { question: "What type of vessel is this?", options: ["Tall sailing ship with masts", "Large ocean steamship", "Small wooden fishing boat", "Armored military warship"], correctIndex: 1 },
    { question: "What is visible along the upper deck of the ship?", options: ["Mounted naval cannons", "Lifeboats", "Stacked cargo containers", "Crowds of passengers waving"], correctIndex: 1 },
    { question: "What is the condition of the water?", options: ["Completely calm and flat", "Choppy with waves", "Frozen with ice floes", "Rough and stormy"], correctIndex: 1 },
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
    { question: "How many smokestacks does this ship have?", options: ["None visible", "One", "Two side by side", "Three in sequence"], correctIndex: 1 },
    { question: "What color pattern is visible on the smokestack?", options: ["Solid black throughout", "Black with a white band", "Red and white stripes", "All white painted"], correctIndex: 1 },
    { question: "How many masts are visible on this ship?", options: ["One tall mast", "Two prominent masts", "Three or more", "None at all"], correctIndex: 2 },
    { question: "What is flying from the masts?", options: ["No flags visible", "Flags and pennants", "Full canvas sails", "Bright signal lights"], correctIndex: 1 },
    { question: "What type of ship is this?", options: ["Pure sailing vessel only", "Steam and sail hybrid ship", "Modern luxury cruise ship", "Small harbor tugboat"], correctIndex: 1 },
    { question: "What text identifies this vessel?", options: ["S.S. Rotterdam", "S.S. Maasdam", "S.S. Amsterdam", "S.S. Holland America"], correctIndex: 1 }
  ]
},
{
  id: 'photo-12',
  src: '/images/memory-game/waterfront-loading-dock.jpg',
  title: 'S.S. Noordland Steamship',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What flag is visible flying from the forward mast?", options: ["British Union Jack flag", "American flag", "Dutch tricolor flag", "French tricolor flag"], correctIndex: 1 },
    { question: "How many smokestacks does this ship have?", options: ["None visible", "One", "Two side by side", "Three in a row"], correctIndex: 1 },
    { question: "What can be seen in the far background of the image?", options: ["Open empty ocean", "A distant shoreline and other vessels", "Mountain ranges", "Nothing but clouds"], correctIndex: 1 },
    { question: "What color pattern is on the smokestack?", options: ["Solid black throughout", "Striped with bands", "Bright red painted", "Plain white painted"], correctIndex: 1 },
    { question: "How many masts does this vessel have?", options: ["One single mast", "Two tall masts", "Three or more", "None at all"], correctIndex: 2 },
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
    { question: "What type of vessel is shown in this photograph?", options: ["Steam-powered passenger ship", "Sailing schooner", "Small wooden rowboat", "Native birch canoe"], correctIndex: 1 },
    { question: "What is the condition of the sails?", options: ["Furled and secured down", "Fully deployed and catching wind", "Torn and damaged", "No sails visible on masts"], correctIndex: 1 },
    { question: "How many masts does this sailing vessel have?", options: ["One tall mast", "Two", "Three or more", "Four full masts"], correctIndex: 1 },
    { question: "What is mentioned in the caption about this vessel?", options: ["Commercial cargo ship", "Winner of Lipton Cup/Fishermen's Race", "United States Navy vessel", "Harbor passenger ferry"], correctIndex: 1 },
    { question: "What is the weather condition based on the sails?", options: ["Dead calm no wind", "Good sailing wind", "Heavy storm conditions", "Dense fog bank"], correctIndex: 1 },
    { question: "What letter or marking is visible on one of the sails?", options: ["Letter A in red", "M", "Letter S in blue", "No markings visible"], correctIndex: 1 }
  ]
},
{
  id: 'photo-14',
  src: '/images/memory-game/city-hall-plaza.jpg',
  title: 'Sailing Race - Lipton Cup',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "How many sailing vessels are prominently visible?", options: ["One large vessel", "Two", "Three or more", "None in frame"], correctIndex: 1 },
    { question: "What type of race is mentioned in the image caption?", options: ["International America's Cup", "Fishermen's Race for Lipton Cup", "Olympic sailing competition", "Local harbor regatta"], correctIndex: 1 },
    { question: "What is visible in the background between the two boats?", options: ["Nothing but empty sky", "A steamship", "A small rocky island", "A tall lighthouse"], correctIndex: 1 },
    { question: "What position is the leading boat in?", options: ["Falling behind the other", "Ahead/Leading", "Running even and tied", "Stopped and anchored"], correctIndex: 1 },
    { question: "What type of sailing vessels are these?", options: ["Small racing dinghies", "Fishing schooners", "Large three-masted clipper ships", "Modern racing catamarans"], correctIndex: 1 },
    { question: "What is the sea condition?", options: ["Completely flat calm", "Moderate waves", "Heavy stormy seas", "Frozen with ice"], correctIndex: 1 }
  ]
},
{
  id: 'photo-15',
  src: '/images/memory-game/downtown-buildings-1900s.jpg',
  title: 'Schooner Race - Broken Topmast',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "How many sailing vessels are visible in this image?", options: ["One large schooner only", "Two sailing vessels", "Three or more boats in formation", "No vessels visible"], correctIndex: 1 },
    { question: "What notable damage is mentioned in the caption?", options: ["Torn mainsail along the boom", "Broken topmast", "Hull damage below waterline", "Lost anchor and chain"], correctIndex: 1 },
    { question: "What type of race is this photograph documenting?", options: ["America's Cup yacht race", "Fishermen's Race for Lipton Cup", "Olympic sailing competition", "Recreational pleasure cruise"], correctIndex: 1 },
    { question: "What are the people visible on the larger boat doing?", options: ["Resting below deck", "Working the rigging and sailing", "Fishing with nets and lines", "Swimming alongside the vessel"], correctIndex: 1 },
    { question: "What is the position of the smaller boat in the background?", options: ["Pulling ahead in the lead", "Behind/Following", "Alongside at equal position", "Stopped and anchored"], correctIndex: 1 },
    { question: "What is the condition of the sails on the main vessel?", options: ["All sails furled and secured", "Some deployed but damaged/asymmetric", "All sails perfectly set and full", "No sails visible on masts"], correctIndex: 1 }
  ]
},
{
  id: 'photo-16',
  src: '/images/memory-game/trolley-streetcar-scene.jpg',
  title: 'Oyster Fishing Boats',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What activity are the workers engaged in?", options: ["Deep-sea whale hunting", "Oyster or shellfish harvesting", "Commercial lobster trapping", "Large-scale net fishing"], correctIndex: 1 },
    { question: "What is piled in the boats?", options: ["Freshly caught fish", "Oysters or clams", "Harvested seaweed", "Empty fishing nets"], correctIndex: 1 },
    { question: "How many boats are visible in this scene?", options: ["One boat working alone", "Two boats side by side", "Three or more", "No boats in the frame"], correctIndex: 2 },
    { question: "What type of boats are these?", options: ["Large commercial steamships", "Small sailing workboats", "Simple wooden rowboats only", "Native-style canoes"], correctIndex: 1 },
    { question: "What tools are the workers using?", options: ["Fishing rods and reels", "Long poles/tongs", "Cast nets and seines only", "Harpoons and gaffs"], correctIndex: 1 },
    { question: "What is visible in the distant background?", options: ["Tall city skyline buildings", "Shoreline and more boats", "Mountain range silhouette", "Nothing but open water"], correctIndex: 1 }
  ]
},
{
  id: 'photo-17',
  src: '/images/memory-game/horse-drawn-carriages.jpg',
  title: 'Oyster Tonging Scene',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is the main activity being shown?", options: ["Recreational pleasure sailing", "Oyster tonging/harvesting", "Competitive boat racing", "Commercial cargo transport"], correctIndex: 1 },
    { question: "How many workers are visible on the main boat?", options: ["One worker alone", "Two workers together", "Three", "Four or more workers"], correctIndex: 2 },
    { question: "What is visible in the center of the boat?", options: ["Coiled fishing nets", "A pile of harvested oysters", "Seated passengers", "Empty wooden deck"], correctIndex: 1 },
    { question: "What type of sails does this workboat have?", options: ["No sails on the vessel", "Gaff-rigged sails (partially lowered)", "Traditional square-rigged sails", "Modern triangular sails"], correctIndex: 1 },
    { question: "What can be seen in the background?", options: ["Urban city buildings", "More oyster boats working", "Empty flat horizon", "Lighthouse on a point"], correctIndex: 1 },
    { question: "What is the weather condition?", options: ["Dark and stormy skies", "Overcast/hazy", "Bright clear and sunny", "Nighttime with moonlight"], correctIndex: 1 }
  ]
},
{
  id: 'photo-18',
  src: '/images/memory-game/busy-street-intersection.jpg',
  title: 'Jefferson County Courthouse',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of building is shown?", options: ["Gothic-style church", "Ornate government/courthouse building", "Grand Victorian hotel", "Industrial brick factory"], correctIndex: 1 },
    { question: "What prominent architectural feature is on the right side of the building?", options: ["Large copper dome", "Clock tower", "Tall brick smokestack", "Simple flagpole only"], correctIndex: 1 },
    { question: "What season does this appear to be based on the trees?", options: ["Summer with full leaves", "Winter with bare trees", "Spring with pink blossoms", "Fall with colored leaves"], correctIndex: 1 },
    { question: "What is visible at ground level in front of the building?", options: ["Crowded busy marketplace", "Empty street with a few posts", "Rows of parked automobiles", "Vendors with market stalls"], correctIndex: 1 },
    { question: "What architectural style is this building?", options: ["Modern glass and steel", "Romanesque/Renaissance Revival", "Pointed Gothic Revival", "Streamlined Art Deco"], correctIndex: 1 },
    { question: "What type of construction material appears on the lower portion of the building?", options: ["Red brick masonry only", "Rough-cut stone blocks", "Poured concrete panels", "Painted wooden siding"], correctIndex: 1 }
  ]
},
{
  id: 'photo-19',
  src: '/images/memory-game/park-gathering-1900s.jpg',
  title: 'Burlington, Vermont Panorama',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What body of water is visible in this panoramic view?", options: ["Atlantic Ocean coastline", "A large lake", "A wide flowing river", "No water visible in view"], correctIndex: 1 },
    { question: "What is visible in the distant background across the water?", options: ["Nothing but horizon", "Mountains", "Urban city skyline", "Fleet of sailing ships"], correctIndex: 1 },
    { question: "What type of buildings are in the foreground?", options: ["Tall modern skyscrapers", "Residential houses and church steeples", "Industrial factory buildings", "No buildings visible"], correctIndex: 1 },
    { question: "What dominates the landscape in the foreground?", options: ["Open body of water", "Trees and vegetation", "Paved roads and streets", "Desert and sand dunes"], correctIndex: 1 },
    { question: "What architectural features are visible in the town?", options: ["Only modern glass buildings", "Church steeples and traditional buildings", "Factory smokestacks only", "No buildings visible"], correctIndex: 1 },
    { question: "From what vantage point was this photograph taken?", options: ["Ground-level street view", "Elevated hillside view", "From a boat on water", "From an airplane above"], correctIndex: 1 }
  ]
},
{
  id: 'photo-20',
  src: '/images/memory-game/fairground-crowd-scene.jpg',
  title: 'Burlington Cityscape View',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What geographical feature is visible in the distance?", options: ["Open ocean horizon", "Mountains across a lake", "Sandy desert landscape", "Dense forest only"], correctIndex: 1 },
    { question: "What type of area is shown in the foreground?", options: ["Busy downtown commercial district", "Residential neighborhood with trees", "Industrial factory zone", "Rural agricultural farmland"], correctIndex: 1 },
    { question: "What architectural elements are visible in the mid-ground?", options: ["Only small private houses", "Church spires and institutional buildings", "Factory smokestacks and warehouses", "No buildings at all"], correctIndex: 1 },
    { question: "What is the predominant vegetation?", options: ["Tall tropical palm trees", "Deciduous trees", "Desert cactus plants", "No vegetation visible"], correctIndex: 1 },
    { question: "What appears to be the season based on the trees?", options: ["Winter with bare branches", "Summer (full foliage)", "Fall with changing color", "Spring with early budding"], correctIndex: 1 },
    { question: "What is visible on the horizon beyond the lake?", options: ["Nothing but empty sky", "A mountain range", "Distant city buildings", "Ships and sailing vessels"], correctIndex: 1 }
  ]
},
{
  id: 'photo-21',
  src: '/images/memory-game/boardwalk-beach-scene.jpg',
  title: 'Lake and Mountain View',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is visible in the distant background?", options: ["Open ocean waves", "Mountains across a lake", "City skyline buildings", "Nothing but empty sky"], correctIndex: 1 },
    { question: "What type of buildings are visible in the scene?", options: ["Modern commercial buildings", "Victorian-style houses", "Industrial factory structures", "No buildings visible"], correctIndex: 1 },
    { question: "What is the predominant feature in the foreground?", options: ["Open body of water", "Trees and parkland", "Paved streets and roads", "Dry desert landscape"], correctIndex: 1 },
    { question: "What appears to be on the lake in the distance?", options: ["Nothing visible on water", "A boat or small island", "Large iron bridge", "Stone lighthouse tower"], correctIndex: 1 },
    { question: "What type of vegetation is shown?", options: ["Tropical palm trees", "Deciduous trees with full foliage", "Tall evergreen pine trees only", "No vegetation visible"], correctIndex: 1 },
    { question: "What is visible at the bottom left of the image?", options: ["Lapping water at shore", "A park or lawn area", "A paved road surface", "Residential buildings"], correctIndex: 1 }
  ]
},
{
  id: 'photo-22',
  src: '/images/memory-game/factory-industrial-scene.jpg',
  title: 'Lakeside Beach Scene',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is along the left side of the image?", options: ["Row of waterfront buildings", "Trees along a shoreline", "Fishing boats at dock", "Crowds of beachgoers"], correctIndex: 1 },
    { question: "What type of trees are visible?", options: ["Tropical palm trees", "Birch and deciduous trees", "Tall evergreen pine trees only", "No trees in the scene"], correctIndex: 1 },
    { question: "What is visible in the water on the right side?", options: ["Sailboats and rowboats", "A dock or pier structure", "Swimmers in the water", "Nothing but open water"], correctIndex: 1 },
    { question: "What type of shoreline is shown?", options: ["Steep rocky cliffs", "Sandy beach", "Concrete seawall barrier", "Marshy wetland reeds"], correctIndex: 1 },
    { question: "What is visible in the distant background?", options: ["Snow-capped mountains", "Forested shoreline", "Urban city buildings", "Nothing but open sky"], correctIndex: 1 },
    { question: "What is the condition of the water?", options: ["Rough choppy waves", "Calm and smooth", "Frozen solid with ice", "Murky and muddy"], correctIndex: 1 }
  ]
},
{
  id: 'photo-23',
  src: '/images/memory-game/mill-factory-exterior.jpg',
  title: 'Forest Stream and Bridge',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What natural feature is the main subject of this photograph?", options: ["Snow-covered mountain peak", "Forest stream with small waterfall", "Red rock desert canyon", "Sandy ocean beach"], correctIndex: 1 },
    { question: "What man-made structure is visible crossing the stream?", options: ["Arched stone bridge", "Rustic wooden footbridge", "Iron truss metal bridge", "No bridge visible"], correctIndex: 1 },
    { question: "What is visible in the foreground of the stream?", options: ["Fine white sand", "Rocks and boulders", "Tall marsh grass", "Nothing but water"], correctIndex: 1 },
    { question: "What type of trees surround the scene?", options: ["Tropical palm trees", "Deciduous forest trees", "Desert cactus plants", "No trees visible"], correctIndex: 1 },
    { question: "What water feature is visible on the left side?", options: ["Tall thundering waterfall", "Small cascade/waterfall", "Still reflecting pond", "Nothing but dry rocks"], correctIndex: 1 },
    { question: "What is the overall character of this scene?", options: ["Manicured urban park", "Natural woodland setting", "Arid desert oasis", "Rocky coastal beach"], correctIndex: 1 }
  ]
},
{
  id: 'photo-24',
  src: '/images/memory-game/railroad-yard-tracks.jpg',
  title: 'Mountain Waterfall',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What is the main natural feature in this photograph?", options: ["A wide flowing river", "A tall waterfall", "A calm mountain lake", "A limestone cave"], correctIndex: 1 },
    { question: "What surrounds the waterfall?", options: ["Sandy desert landscape", "Rocky cliffs and forest", "Urban buildings and streets", "Tropical sandy beach"], correctIndex: 1 },
    { question: "What type of rock formation is visible?", options: ["Layered red sandstone", "Rocky granite cliff face", "Black volcanic rock", "Carved limestone cave"], correctIndex: 1 },
    { question: "What is visible at the base of the waterfall?", options: ["Concrete swimming pool", "Rocky pool/stream bed", "Flat sandy beach", "Nothing but mist"], correctIndex: 1 },
    { question: "What type of vegetation is around the falls?", options: ["Lush tropical plants", "Temperate forest trees and bushes", "Desert cactus and scrub", "No vegetation visible"], correctIndex: 1 },
    { question: "How tall does this waterfall appear to be?", options: ["Just a few feet tall", "Moderate height (20-40 feet)", "Hundreds of feet tall", "Tiny trickle of water"], correctIndex: 1 }
  ]
},
{
  id: 'photo-25',
  src: '/images/memory-game/warehouse-district.jpg',
  title: 'U.S. Torpedo Boat Alarm at Navy Yard',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of vessel is shown in the foreground?", options: ["Large armored battleship", "U.S. Navy torpedo boat", "Tall-masted sailing ship", "Harbor service tugboat"], correctIndex: 1 },
    { question: "What is the name of this vessel according to the caption?", options: ["USS Maine", "Alarm", "USS Enterprise", "USS Constitution"], correctIndex: 1 },
    { question: "Where is this photograph taken according to the caption?", options: ["Boston Harbor, Massachusetts", "Navy Yard, New York", "San Francisco Bay, California", "Norfolk Naval Station, Virginia"], correctIndex: 1 },
    { question: "What is visible in the foreground next to the boat?", options: ["Only open harbor water", "A wooden dock/dry dock structure", "Sandy shoreline beach", "Other moored naval ships"], correctIndex: 1 },
    { question: "What is visible in the background across the water?", options: ["Empty open ocean", "Industrial waterfront with buildings and piers", "Mountain range backdrop", "Nothing but sky and clouds"], correctIndex: 1 },
    { question: "How many smokestacks are visible on this vessel?", options: ["None on this vessel", "One", "Two smokestacks", "Three smokestacks"], correctIndex: 1 }
  ]
},
{
  id: 'photo-26',
  src: '/images/memory-game/bridge-over-river.jpg',
  title: 'Bridge Over River',
  category: 'photo',
  attribution: 'Detroit Publishing Co. - Library of Congress, Public Domain',
  questions: [
    { question: "What type of structure is the main subject?", options: ["A large concrete dam", "A bridge", "A multi-story building", "A wooden boat dock"], correctIndex: 1 },
    { question: "What is the bridge spanning over?", options: ["A deep rocky valley", "A busy paved road", "A river", "Multiple railroad tracks"], correctIndex: 2 },
    { question: "What material appears to be used in the bridge construction?", options: ["Rough-hewn wood only", "Stone and/or metal", "Poured concrete only", "Red brick masonry only"], correctIndex: 1 },
    { question: "What is visible beneath the bridge?", options: ["A dry empty riverbed", "Flowing water", "Railroad train tracks", "A busy road below"], correctIndex: 1 },
    { question: "What is visible on the riverbanks?", options: ["Dense forest trees", "Buildings and vegetation", "Sandy desert terrain", "Deep snow and ice"], correctIndex: 1 },
    { question: "What era does the bridge architecture suggest?", options: ["Contemporary modern era", "Early 1900s/Victorian era", "Medieval stone period", "Ancient Roman times"], correctIndex: 1 }
  ]
},
{
  id: 'poster-1',
  src: '/images/memory-game/wpa-zoo-whos-who.jpg',
  title: 'Zoo - Who\'s Who',
  category: 'poster',
  attribution: 'WPA Federal Art Project, 1936-1941 - Library of Congress, Public Domain',
  questions: [
    { question: "What attraction does this WPA poster promote?", options: ["A natural history museum", "A zoo", "A traveling circus", "A public park"], correctIndex: 1 },
    { question: "What does 'Who's Who' likely refer to in a zoo context?", options: ["Zoo staff and keepers", "Animals and their characteristics", "Visitors and patrons", "Zoo history and founders"], correctIndex: 1 },
    { question: "WPA zoo posters were designed to encourage what?", options: ["Animal adoption programs", "Public visits to zoos", "Monetary donations to zoos", "Scientific animal research"], correctIndex: 1 },
    { question: "What era were WPA posters created?", options: ["World War I era 1910s", "1930s-1940s", "Post-war 1950s", "Bicentennial era 1970s"], correctIndex: 1 },
    { question: "What design style is typical of WPA posters?", options: ["Photorealistic photography", "Art Deco with bold colors", "Soft impressionist painting", "Modern abstract expressionism"], correctIndex: 1 },
    { question: "WPA posters were created as part of what initiative?", options: ["World War I war effort", "The New Deal", "The Space Race program", "The Civil Rights Movement"], correctIndex: 1 }
  ]
}
];
