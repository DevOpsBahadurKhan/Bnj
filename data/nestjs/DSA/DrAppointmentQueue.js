class Appointment {
    constructor() {
        this.queue = [];
    }

    addPatient(patient) {
        this.queue.push(patient);
    }

    callNextPatient(patient) {
        if (this.isEmpty) {
            console.log(`Koi ${patient} queue mein nahi hai.`);
            return;
        }
        let pt = this.queue.shift(); // FIFO
        console.log(`${pt} ko doctor ke room mein bhej diya gaya.`);
    }

    nextPatient() {
        if (this.isEmpty()) {
            return "Koi patient nahi hai.";
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }


    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        console.log("Current queue:", this.queue.join(" → "));
        
    }
}

let q = new Appointment();
q.addPatient("Bahadur");
q.addPatient("Nida");
q.addPatient("Arif");

q.printQueue();

