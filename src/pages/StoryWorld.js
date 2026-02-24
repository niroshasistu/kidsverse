import React, { useState } from "react";
import "./StoryWorld.css";

// ---- IMPORT STORY IMAGES ----
import lion from "../assets/stories/lion.jpg";
import tortoise from "../assets/stories/tortoise.jpg";
import wolf from "../assets/stories/wolf.jpg";
import cinderella from "../assets/stories/cinderella.jpg";
import snowwhite from "../assets/stories/snowwhite.jpg";
import duckling from "../assets/stories/duckling.jpg";
import jack from "../assets/stories/jack.jpg";
import bears from "../assets/stories/bears.jpg";
import pigs from "../assets/stories/pigs.jpg";
import red from "../assets/stories/red.jpg";

// ---- IMPORT RHYME IMAGES ----
import twinkle from "../assets/rhymes/twinkle.jpg";
import baa from "../assets/rhymes/baa.jpg";
import bus from "../assets/rhymes/bus.jpg";
import farm from "../assets/rhymes/farm.jpg";
import humpty from "../assets/rhymes/humpty.jpg";
import johny from "../assets/rhymes/johny.jpg";
import abc from "../assets/rhymes/abc.jpg";
import monkeys from "../assets/rhymes/monkeys.jpg";
import lamb from "../assets/rhymes/lamb.jpg";
import boat from "../assets/rhymes/boat.jpg";

const StoryWorld = () => {
    const [activeTab, setActiveTab] = useState("stories");
    const [selectedItem, setSelectedItem] = useState(null);

    const stories = [
        {
            id: 1,
            title: "The Lion and the Mouse",
            image: lion,
            content:
                "A mighty lion once caught a tiny mouse. The mouse begged for mercy and promised to help someday. Later, the lion was trapped in a hunter’s net. The little mouse chewed the ropes and freed him.Moral: Even small friends can make a big difference"
        },
        {
            id: 2,
            title: "The Tortoise and the Hare",
            image: tortoise,
            content:
                "A fast hare laughed at a slow tortoise and challenged him to a race. The hare ran fast but stopped to rest. The tortoise kept going slowly and steadily and won the race. Moral: Slow and steady wins the race."
        },
        {
            id: 3,
            title: "The Boy Who Cried Wolf",
            image: wolf,
            content:
                "A shepherd boy lied about seeing a wolf. Villagers came to help but found no wolf. When a real wolf appeared, no one believed him. Moral: Always tell the truth"
        },
        {
            id: 4,
            title: "Cinderella",
            image: cinderella,
            content:
                "Cinderella was treated badly by her stepmother. With her fairy godmother’s magic, she went to a royal ball and met the prince. She left behind a glass slipper. The prince searched for her and they lived happily ever after."
        },
        {
            id: 5,
            title: "Snow White",
            image: snowwhite,
            content:
                "Snow White escaped her jealous stepmother and found shelter with seven dwarfs. The queen tricked her with a poisoned apple, but a prince broke the spell. Goodness won in the end."
        },
        {
            id: 6,
            title: "The Ugly Duckling",
            image: duckling,
            content:
                "A little duckling was teased for looking different. As he grew older, he became a beautiful swan. Moral: It’s okay to be different."
        },
        {
            id: 7,
            title: "Jack and the Beanstalk",
            image: jack,
            content:
                "Jack planted magic beans that grew into a giant beanstalk. He climbed up and found a giant’s treasure. He escaped safely and lived happily with his mother."
        },
        {
            id: 8,
            title: "Goldilocks and the Three Bears",
            image: bears,
            content:
                "Goldilocks entered the bears’ house, tasted their food, and slept in their bed. When the bears returned, she ran away. Lesson: Respect others' belongings."
        },
        {
            id: 9,
            title: "The Three Little Pigs",
            image: pigs,
            content:
                "Three pigs built houses of straw, sticks, and bricks. The wolf blew down the weak houses but failed against the brick house. Moral: Hard work pays off."
        },
        {
            id: 10,
            title: "Little Red Riding Hood",
            image: red,
            content:
                "Little Red Riding Hood met a wolf on her way to Grandma’s house. The wolf tricked her, but a woodcutter saved them. Moral: Be careful with strangers."
        }
    ];

   const rhymes = [
  
    {
        id: 1,
        title: "Twinkle Twinkle Little Star",
        image: twinkle,
        content: `
Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.
Twinkle, twinkle, little star,
How I wonder what you are!
        `
    },
    {
        id: 2,
        title: "Baa Baa Black Sheep",
        image: baa,
        content: `
Baa, baa, black sheep,
Have you any wool?
Yes sir, yes sir,
Three bags full!
One for the master,
One for the dame,
And one for the little boy
Who lives down the lane.
        `
    },
    {
        id: 3,
        title: "Wheels on the Bus",
        image: bus,
        content: `
The wheels on the bus go round and round,
Round and round, round and round,
The wheels on the bus go round and round,
All through the town.
        `
    },
    {
        id: 4,
        title: "Old MacDonald Had a Farm",
        image: farm,
        content: `
Old MacDonald had a farm,
E-I-E-I-O!
And on his farm he had a cow,
E-I-E-I-O!
With a moo moo here,
And a moo moo there,
Here a moo, there a moo,
Everywhere a moo moo!
        `
    },
    {
        id: 5,
        title: "Humpty Dumpty",
        image: humpty,
        content: `Humpty Dumpty sat on a wall; Humpty had a great fall.`
    },
    {
        id: 6,
        title: "Johny Johny Yes Papa",
        image: johny,
        content: `
Johny Johny?
Yes Papa?
Eating sugar?
No Papa!
Telling lies?
No Papa!
Open your mouth!
Ha Ha Ha!
        `
    },
    {
        id: 7,
        title: "ABC Song",
        image: abc,
        content: `
A B C D E F G,
H I J K L M N O P,
Q R S,
T U V,
W X Y and Z,
Now I know my ABCs,
Next time won’t you sing with me?
        `
    },
    
];
    const dataToShow = activeTab === "stories" ? stories : rhymes;

    return (
        <div className="story-world">
            <h2 className="heading">📚 Story World</h2>

            <div className="tabs">
                <button
                    className={activeTab === "stories" ? "active" : ""}
                    onClick={() => setActiveTab("stories")}
                >
                    Stories
                </button>
                <button
                    className={activeTab === "rhymes" ? "active" : ""}
                    onClick={() => setActiveTab("rhymes")}
                >
                    Rhymes
                </button>
            </div>

            <div className="card-container">
                {selectedItem && (
                    <div className="story-popup">
                        <div className="popup-content">
                            <h2>{selectedItem.title}</h2>
                            <img src={selectedItem.image} alt={selectedItem.title} />
                            <p>{selectedItem.content}</p>
                            <button onClick={() => setSelectedItem(null)}>Close</button>
                        </div>
                    </div>
                )}

                {dataToShow.map((item) => (
                    <div key={item.id} className="card">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <button
                            className="read-btn"
                            onClick={() => setSelectedItem(item)}
                        >
                            Explore
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoryWorld;