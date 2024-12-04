import { Blockchain, SandboxContract, TreasuryContract } from "@ton/sandbox";
import { toNano } from "@ton/core";
import { TaskManager } from "../contracts/wrappers/TaskManager";
import "@ton/test-utils";

describe("TaskManager Contract", () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let taskManager: SandboxContract<TaskManager>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();
        taskManager = blockchain.openContract(await TaskManager.fromInit());
        deployer = await blockchain.treasury("deployer");

        await taskManager.send(deployer.getSender(), { value: toNano("0.05") }, { $$type: "Deploy" });
    });

    it("should add a project and tasks, and complete them", async () => {
        const sender = deployer.getSender();

        // Add Project
        await taskManager.send(sender, { value: toNano("0.01") }, { $$type: "AddProject", projectId: 1 });

        // Add Tasks
        await taskManager.send(sender, { value: toNano("0.01") }, { $$type: "AddTask", projectId: 1, taskId: 101 });
        await taskManager.send(sender, { value: toNano("0.01") }, { $$type: "AddTask", projectId: 1, taskId: 102 });

        // Complete Tasks
        await taskManager.send(sender, { value: toNano("0.01") }, { $$type: "CompleteTask", projectId: 1, taskId: 101 });
        await taskManager.send(sender, { value: toNano("0.01") }, { $$type: "CompleteTask", projectId: 1, taskId: 102 });

        // Complete Project
        const result = await taskManager.send(sender, { value: toNano("0.01") }, { $$type: "CompleteProject", projectId: 1 });
        expect(result.transactions).toHaveTransaction({ success: true });
    });
});
