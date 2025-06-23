export interface Game {
  id: string;
  name: string;
  description: string;
  gameplay: string;
  iframeUrl: string;
  thumbnail: string;
  category: string;
  featured: boolean;
}

export const games: Game[] = [
  {
    id: "ragdoll-archers",
    name: "Ragdoll Archers",
    description: "Ragdoll Archers is an archery game featuring bow and arrow-equipped stickmen with ragdoll physics. Fire arrows at a range of opponents while earning points to upgrade your abilities and ammunition. Play two-player PvP against your friend or team up with them to defeat a range of foes!",
    gameplay: "How to Play: Line up your shots carefully, and fire! Starting with the basic arrows and baseline stats, you will be faced with various enemies. Some of these enemies are trickier than others to beat due to armor, position, and other factors. Every now and then, you will face a giant enemy. This is like a mini-boss level, and you will earn lots of skulls for defeating them. Survive for as long as possible: Your goal is to survive for as long as possible and earn as many skulls as you can. The best way to survive for a long time is to keep hitting the apples. Throughout the game you will notice flying apples. Shoot your arrow through the apples to replenish your health, stamina, or both. Here's how the apples work: Red apple = health, Green apple = stamina, Golden apple = Health and stamina. Customize your ammunition: There is an ever-increasing range of arrows to unlock the more you play the game. It's best to keep playing and switching the arrow types to learn which ones are more powerful and suit your playing style. There is everything from electric and poison to balloon and axe and you can increase your arrow slots to hold more of them at once. Use your skulls to upgrade your abilities: You earn skulls by killing enemies which rewards a certain amount based on the power of the foe you defeated. You can upgrade your health, stamina, damage, and more using this currency.",
    iframeUrl: "https://games.crazygames.com/en_US/ragdoll-archers/index.html?czyDynamicPriceFloorVariantsCZY_14537=portal&czyEPBPooling_CZY_14716=enabled&enableAdmiral=0&ssrDevice=desktop&skipPrerollFirstSession=true&v=1.333",
    thumbnail: "https://imgs.crazygames.com/ragdoll-archers_16x9/20240205020743/ragdoll-archers_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
    category: "Action",
    featured: true
  },
  {
    id: "playground-man-ragdoll-show",
    name: "Playground Man! Ragdoll Show!",
    description: "Playground Man! Ragdoll Show! is a casual action 3D game with ragdoll physics where you enter a world of destruction. Get ready to tear apart a wooden stickman! Immerse yourself in a physics-based playground, smash obstacles, and relax while solving engaging puzzles.",
    gameplay: "Ragdoll Break is a wild physics-based adventure where chaos is pretty much the goal. Press and hold objects to move them, then release to launch them into action. Your mission? Inflict maximum damage on the stickman using anything and everything at your disposal. Drop a car on its head, hurl a ball straight at it, or send it tumbling down a flight of stairs. Some levels feature multiple stickmen: double the targets, double the strategy! Position your ragdoll in the path of speeding traffic, beneath a falling barbell, or against an unforgiving wall. Every action triggers a reaction, so experiment with different ways to unleash destruction. With realistic ragdoll physics, unpredictable puzzles, and endless ways to cause mayhem, Ragdoll Break is the ultimate test of creativity and problem-solving skills. Your challenge is to find the most devastating solutions to your ragdoll's demise.",
    iframeUrl: "https://games.crazygames.com/en_US/ragdoll-break/index.html?czyDynamicPriceFloorVariantsCZY_14537=portal&czyEPBPooling_CZY_14716=enabled&enableAdmiral=0&ssrDevice=desktop&v=1.333",
    thumbnail: "https://imgs.crazygames.com/ragdoll-break_16x9/20250311102953/ragdoll-break_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
    category: "Sandbox",
    featured: true
  },
  {
    id: "stickman-destruction-3-heroes",
    name: "Stickman Destruction 3 Heroes",
    description: "Stickman Destruction 3 Heroes is a ragdoll physics action game. Crash the stickman into obstacles, send him tumbling down staircases and through walls into oblivious bystanders. Cause as much destruction as possible to earn the most gold!",
    gameplay: "Action",
    iframeUrl: "https://games.crazygames.com/en_US/stickman-destruction-3-heroes/index.html?czyDynamicPriceFloorVariantsCZY_14537=portal&czyEPBPooling_CZY_14716=enabled&enableAdmiral=0&ssrDevice=desktop&v=1.333",
    thumbnail: "https://imgs.crazygames.com/stickman-destruction-3-heroes/20210311140018/stickman-destruction-3-heroes-cover?metadata=none&quality=85&width=273&fit=crop",
    category: "Action",
    featured: false
  },
  {
    id: "uncle-hit-punch-the-dummy",
    name: "Uncle Hit: Punch the Dummy",
    description: "Uncle Hit: Punch the Dummy is a fast-paced action game where you take out your frustration on a relentless, annoying dummy. With quick reflexes and nonstop punches, you'll unleash a flurry of blows in simple, satisfying bursts. Stay sharp, keep hitting, and enjoy every moment of chaotic stress relief wrapped in hilarious impact.",
    gameplay: "Casual",
    iframeUrl: "https://games.crazygames.com/en_US/uncle-hit-punch-the-dummy/index.html?czyDynamicPriceFloorVariantsCZY_14537=portal&czyEPBPooling_CZY_14716=enabled&enableAdmiral=0&ssrDevice=desktop&v=1.333",
    thumbnail: "https://imgs.crazygames.com/uncle-hit-punch-the-dummy_16x9/20250609090835/uncle-hit-punch-the-dummy_16x9-cover?metadata=none&quality=85&width=273&fit=crop",
    category: "Fighting",
    featured: false
  }
];

export const categories = ["All", "Action", "Sandbox", "Fighting"];