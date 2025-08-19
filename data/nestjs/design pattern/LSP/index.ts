export class Bird {
    fly(): void {
        console.log('Bird can fly...');
    }
}


export class Penguin extends Bird {
    fly(): void {
       throw new Error("Penguins can't fly!");
    }
}

// Function expecting any bird
function letBirdFly(bird: Bird) {
  bird.fly(); // LSP assumption: any Bird can fly
}


const pigeon = new Bird();
const penguin = new Penguin();

letBirdFly(pigeon);   // ✅ Works
letBirdFly(penguin);  // ❌ Throws error — violates LSP