contract TaskManager {
    mapping(uint256 => bool) public projects; // Project ID -> isCompleted
    mapping(uint256 => mapping(uint256 => bool)) public tasks; // Project ID -> Task ID -> isCompleted

    public function addProject(uint256 projectId) {
        require(!projects.exists(projectId), "Project already exists.");
        projects.set(projectId, false);
    }

    public function addTask(uint256 projectId, uint256 taskId) {
        require(projects.exists(projectId), "Project does not exist.");
        tasks[projectId][taskId] = false;
    }

    public function completeTask(uint256 projectId, uint256 taskId) {
        require(projects.exists(projectId), "Project does not exist.");
        require(tasks[projectId].exists(taskId), "Task does not exist.");
        tasks[projectId].set(taskId, true);
    }

    public function completeProject(uint256 projectId) {
        require(projects.exists(projectId), "Project does not exist.");
        for (let taskId in tasks[projectId]) {
            require(tasks[projectId][taskId], "All tasks are not completed.");
        }
        projects.set(projectId, true);
    }
}
