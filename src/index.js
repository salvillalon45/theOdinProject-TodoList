import { projectControllerFactory } from "./controllers/projectController";
import { projectViewFactory } from "./pages/projectView";
import { taskViewFactory} from "./pages/taskView";
import { taskControllerFactory } from "./controllers/taskController";

console.log("Inside index.js");

let projectController = projectControllerFactory();
let projectView = projectViewFactory();
let taskView = taskViewFactory();
let taskController = taskControllerFactory();

let project1Task1 = {
    taskName: "Create A New Project",
    description: "To create a new Project, type its name in the field in the left pane, then press Enter button.",
    dueDate:"2020-06-29",
    priority: "high"
}

let project1Task2 = {
    taskName: "Take out trash",
    description: "Take out trash every sunday",
    dueDate:"2020-06-29",
    priority: "high"
}

let project1 = {
    name: "Project 1",
    tasks: [project1Task1, project1Task2]
}

let project2Task1 = {
    taskName: "PROJECT TWO TASK 1",
    description: "To create a new Project, type its name in the field in the left pane, then press Enter button.",
    dueDate:"2020-06-29",
    priority: "high"
}

let project2Task2 = {
    taskName: "PROJECT TWO TASK 2",
    description: "Take out trash every sunday",
    dueDate:"2020-06-29",
    priority: "high"
}

let project2 = {
    name: "Project 2",
    tasks: [project2Task1, project2Task2]
}

window.localStorage.setItem(project1.name, JSON.stringify(project1));
window.localStorage.setItem(project2.name, JSON.stringify(project2));

projectView.render();
taskView.render();
// document.getElementById("input-project").addEventListener("change", function(event) {
//     let projectTitle = document.getElementById("input-project").value;
//     console.log(projectTitle);
//     projectController.createProject(projectTitle);
//     projectView.createUserProject(projectTitle);
//     document.getElementById("input-project").value = "";
// });

function createEventListenersForUserProject() {
    console.log("inside createEventListenersForUserProject");

    let userProjectArray = Array.from(document.querySelectorAll(".user-project"));

    for (let i = 0; i < userProjectArray.length; i++) {
        let userProject = userProjectArray[i];

        userProject.addEventListener("click", function () {
            let projectName = this.innerHTML;

            projectView.removeActiveForAllUserProject();
            projectView.insertActiveInUserProject(i);
            taskView.renderUserTaskDetails(projectName);
            createEventListenerForTrashIcon(projectName);
        });
    }
}

function createEventListenerForTrashIcon(projectName) {
    let trashIconArray = Array.from(document.querySelectorAll(".trash-icon"));
    let userTaskDetailContainerArray = Array.from(document.querySelectorAll(".user-tasks-details-container"));

    for (let i = 0; i < userTaskDetailContainerArray.length; i++) {
        let trashIcon = trashIconArray[i];
        let userTaskDetailContainer = userTaskDetailContainerArray[i];

        trashIcon.addEventListener("click", function() {
            let index = userTaskDetailContainer.id;
            taskView.deleteTaskFromView(index);
            taskController.deleteTask(index);
            taskView.renderUserTaskDetails(projectName);
        });
    }
}

function createEventListenerForAddTaskButton() {
    document.querySelector(".add-task-btn").addEventListener("click", function() {
        const openFormCheck = executeSubmitButtonForTaskForm();
        if (openFormCheck !== null) {
            taskView.openForm();
        }
    });
}

function executeSubmitButtonForTaskForm() {
    console.log("Inside executeSubmitButtonForTaskForm");
    const projectName1 = document.querySelector(".active");
    console.log(projectName1);
    console.log(document.readyState);
    if (projectName1 === null) {
        alert("You need to select a project first");
        return null;
    }
    else {
        document.querySelector(".submit-btn").addEventListener("click", function() {
            console.log("Clicked on submit button");

            let newTitle = document.forms["TaskForm"]["title"];
            let newDescription = document.forms["TaskForm"]["description"];
            let newDueDate = document.forms["TaskForm"]["date"];
            let newPriority = document.forms["TaskForm"]["priority"];

            taskController.createTask(newTitle.value, newDescription.value, newDueDate.value, newPriority.value);
            const projectName = document.querySelector(".active").innerHTML;
            taskView.renderUserTaskDetails(projectName);
            taskView.closeForm();
        });
    }
}

function closeTaskForm() {
    document.querySelector(".cancel-btn").addEventListener("click", function() {
        taskView.closeForm();
    });
}

createEventListenersForUserProject();
createEventListenerForAddTaskButton();
closeTaskForm();