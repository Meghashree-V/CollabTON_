import "@stdlib/deploy";

struct Task {
    publisherName: slice;      // Using slice type for names
    projectTitle: slice;       // Using slice type for titles
    description: slice;        // Using slice type for descriptions
    reward: Int as uint32;     // Unsigned integer type for reward
    isCompleted: Bool;         // Boolean type
    solver: Address;           // Address type for solver
    completionProof: slice;    // Using slice type for completion proof
}

message(123) PublishTaskMessage {
    publisherName: slice;  // Using slice type for names
    projectTitle: slice;   // Using slice type for titles
    description: slice;    // Using slice type for descriptions
    reward: Int as uint32;
}

contract CollabTON {
    tasks: Map<Int as uint32, Task>;  // Mapping for tasks
    projectCounter: Int as uint32 = 0; // Task counter
    owner: Address;                    // Contract owner

    init() {
        self.owner = msg.sender();      // Set the contract deployer as the owner
    }

    receive("Deploy") {
        // Do nothing
    }

    receive(msg: PublishTaskMessage) {
        // Create a new task
        self.tasks[self.projectCounter] = Task({
            publisherName: msg.publisherName,
            projectTitle: msg.projectTitle,
            description: msg.description,
            reward: msg.reward,
            isCompleted: false,
            solver: null,  // No solver initially
            completionProof: ""  // Initialize as an empty slice
        });

        // Increment project counter
        self.projectCounter += 1;
    }

    receive(msg: Slice) {
        // Handle generic Slice messages
        // Increment project counter or perform other actions
    }

    receive() {
        // Handle default receive
    }

    receive("notify") {
        // Handle notify messages
    }

    receive("duplicate") {
        // Create a new contract instance
        let newWalletInit: StateInit = initOf CollabTON(self.owner);
    }

    bounced(msg: Slice) {
        // TODO: Handle bounced messages
    }

    get fun getTaskDetails(taskId: Int as uint32): Task {
        return self.tasks[taskId];
    }

    get fun getProjectCounter(): Int {
        return self.projectCounter;
    }

    get fun getOwner(): Address {
        return self.owner;
    }
}