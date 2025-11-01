


const zodiacSigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
];
const compliments = [
    "You radiate positive energy wherever you go.",
    "Your presence makes everything better.",
    "People feel calm and happy around you.",
    "You have a heart made of pure gold.",
    "Your smile can light up the darkest day.",
    "You’re effortlessly charming and kind.",
    "You bring good vibes wherever you step.",
    "Your mind is sharp and full of ideas.",
    "You are intelligent",
    "You inspire others to be their best.",
    "You have an aura of grace and wisdom.",
    "Your laughter is contagious and warm.",
    "You always find beauty in little things.",
    "You spread peace like sunlight.",
    "You’re the calm in someone’s storm.",
    "Your kindness is your true superpower.",
    "You make people believe in goodness again.",
    "You have an inspiring way of handling things.",
    "You bring comfort without saying a word.",
    "You glow differently when you’re confident.",
    "Your creativity flows like a river.",
    "You’re the definition of inner peace.",
    "People feel lucky to know you.",
    "Your heart is your biggest strength.",
    "You bring clarity where others bring chaos.",
    "You make every space feel like home.",
    "Your ideas always spark brilliance.",
    "You have a timeless charm about you.",
    "You’re gentle yet unbreakable.",
    "You naturally attract good energy.",
    "You have a rare and powerful presence."
];
const victimCardCompliments = [
    "You always give your best, even when people don’t appreciate it.",
    "You care too deeply for those who barely notice.",
    "You always help others, yet few stand by you.",
    "You forgive faster than people deserve.",
    "You stay loyal even when others don’t.",
    "You love genuinely in a world that fakes emotions.",
    "You carry others’ pain like it’s your own.",
    "You bring light to people who live in shadows.",
    "You keep promises even when others break theirs.",
    "You never stop being kind, no matter the hurt.",
    "You see the best in people who don’t see you at all.",
    "You fight silently while others take credit.",
    "You stay honest even when lies win easily.",
    "You give more than you ever receive.",
    "You’re strong for people who never notice your struggles.",
    "You stay soft in a world that tried to harden you.",
    "You still wish well for people who wronged you.",
    "You understand others even when they misunderstand you.",
    "You heal others while still healing yourself.",
    "You choose peace even when chaos chases you.",
    "You love people who only remember you when they need help.",
    "You show up for everyone but yourself sometimes.",
    "You care in silence, expecting nothing back.",
    "You still believe in goodness after seeing so much pain.",
    "You do the right thing even when it hurts.",
    "You stay kind even when kindness isn’t returned.",
    "You listen to others though no one listens to you.",
    "You help others climb while you stay behind.",
    "You deserve the love you keep giving away.",
    "You’re the hero no one claps for — but everyone needs."
];

 const recommendations = [
     "You should feed a stray dog today.",
     "Plant a tree — nature will bless you back.",
     "Help an old person cross the road.",
     "Donate something you don’t use anymore.",
     "Start your morning with gratitude.",
     "Smile at a stranger — it costs nothing.",
     "Call someone you miss and surprise them.",
     "Write down three things you’re grateful for.",
     "Offer water or food to birds outside.",
     "Give compliments more often.",
     "Spend some time without your phone today.",
     "Meditate for at least ten minutes.",
     "Do something kind without expecting anything back.",
     "Buy food for someone in need.",
     "Clean your workspace — clarity will follow.",
     "Forgive someone silently and move on.",
     "Read something inspiring before sleeping.",
     "Listen to music that makes your soul happy.",
     "Feed a cow or any stray animal near you.",
     "Spend quality time with your family.",
     "Visit a temple or any peaceful place.",
     "Cook for your loved ones today.",
     "Journal your thoughts before bed.",
     "Offer help to a friend who looks tired.",
     "Start saving a little money today.",
     "Give your parents a tight hug.",
     "Speak kindly — words have power.",
     "Keep your surroundings clean.",
     "Say thank you more often.",
     "Pray for someone other than yourself."
    ];
    const predictions = [
        "You will become a crorepati one day!",
        "A big opportunity is about to knock on your door.",
        "Someone special will soon enter your life.",
        "Your talent will finally get the spotlight it deserves.",
        "Money is coming your way unexpectedly.",
        "You’ll achieve something you once thought was impossible.",
        "A surprise gift will make your day soon.",
        "Your hard work will turn into success this month.",
        "An old connection will bring good luck.",
        "Your dream project will start taking shape.",
        "A trip will change your outlook on life.",
        "You’ll soon hear news that makes you smile wide.",
        "Someone will confess something heartfelt to you.",
        "Your energy will attract abundance and love.",
        "You’ll receive a message that changes your plans.",
        "Your confidence will lead you to new heights.",
        "An unexpected source will bring happiness.",
        "The universe is aligning things in your favor.",
        "A new beginning will emerge from something ending.",
        "You’ll inspire more people than you realize.",
        "Your efforts will finally get recognized publicly.",
        "A sudden financial gain is written in your stars.",
        "Love will find you when you least expect it.",
        "You’re about to get clarity on something confusing.",
        "Someone is secretly admiring your strength.",
        "Good karma is circling back to you soon.",
        "You’ll overcome an obstacle that once scared you.",
        "A new skill you learn will open big doors.",
        "Your intuition will lead you to something golden.",
        "You’re destined for greatness — believe it."
    ];
    const luckyColors = {
  Aries: "Red",
  Taurus: "Green",
  Gemini: "Yellow",
  Cancer: "Silver",
  Leo: "Gold",
  Virgo: "Beige",
  Libra: "Pink",
  Scorpio: "Black",
  Sagittarius: "Purple",
  Capricorn: "Brown",
  Aquarius: "Blue",
  Pisces: "Sea Green"
};

const luckyNumbers = {
  Aries: 9,
  Taurus: 6,
  Gemini: 5,
  Cancer: 2,
  Leo: 1,
  Virgo: 3,
  Libra: 7,
  Scorpio: 4,
  Sagittarius: 8,
  Capricorn: 10,
  Aquarius: 11,
  Pisces: 12
};

    
    const form=document.getElementById('astroForm');
    form.addEventListener('submit',(event=>{
        event.preventDefault();
        const name=document.getElementById('firstName').value;
        const sname=document.getElementById('lastName').value;
        const day=Number(document.getElementById('day').value);
        const month=Number(document.getElementById('month').value);
        const year=Number(document.getElementById('year').value);
        
        const zodiacDates = [20, 19, 20, 20, 21, 21, 22, 22, 22, 23, 22, 21];
          let sign = zodiacSigns[month - 1];
          if (day > zodiacDates[month - 1]) {
            sign = zodiacSigns[month % 12];
          }
        
        const result=document.getElementById('result');
        const first_msg=`Hello ${name} ${sname}`;
        // const second_msg=`Your Zodiac Sign is: ${zodiacSigns[month-1]}`;
        const second_msg=`Your Zodiac Sign is:${sign}`
        const third_msg=compliments[day-1];
        
        index=(month*day**2)%30;
        const fourth_msg=victimCardCompliments[index];
        
        index=(name.length*sname.length*year)%30;
        const fifth_msg=recommendations[index];
        
        index=(day*month*year)%30;
        const sixth_msg=predictions[index];
        const color = luckyColors[sign];
        const number = luckyNumbers[sign];
        
        result.innerText=`${first_msg} 
        ${second_msg} 
        Lucky Color: ${color}
        Lucky Number: ${number}
        ${third_msg} 
        ${fourth_msg} 
        Recommendation:${fifth_msg} 
        Future prediction:${sixth_msg}`


}))