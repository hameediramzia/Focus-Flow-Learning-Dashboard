// Learning Data Array
const courses = [
    {
        title: "HTML Basics",
        category: "Frontend",
        level: "Beginner",
        completed: true,
        estimatedHours: 10,
        progress: 100
    },
    {
        title: "CSS Mastery",
        category: "Frontend",
        level: "Intermediate",
        completed: true,
        estimatedHours: 15,
        progress: 100
    },
    {
        title: "JavaScript Fundamentals",
        category: "Frontend",
        level: "Intermediate",
        completed: false,
        estimatedHours: 20,
        progress: 75
    },
    {
        title: "React Basics",
        category: "Frontend",
        level: "Advanced",
        completed: false,
        estimatedHours: 25,
        progress: 50
    },
    {
        title: "Git & GitHub",
        category: "Tools",
        level: "Beginner",
        completed: true,
        estimatedHours: 8,
        progress: 100
    },
    {
        title: "UI Design",
        category: "Design",
        level: "Intermediate",
        completed: false,
        estimatedHours: 12,
        progress: 65
    },
    {
        title: "Node.js",
        category: "Backend",
        level: "Intermediate",
        completed: false,
        estimatedHours: 18,
        progress: 40
    },
    {
        title: "Database Basics",
        category: "Backend",
        level: "Beginner",
        completed: false,
        estimatedHours: 14,
        progress: 55
    }
];


// 1 Personalized Greeting
function generateGreeting(name, focusArea, streak) {
    return `Hello ${name}, you are currently focusing on ${focusArea} with a ${streak}-day learning streak.`;
}

console.log(generateGreeting("Ramzia", "Frontend Development", 14));


// 2 Progress Evaluation
function evaluateProgress() {
    let completedCount = courses.filter(course => course.completed).length;

    if (completedCount <= 2) {
        return "Beginner Progress";
    } 
    else if (completedCount <= 5) {
        return "Consistent Learner";
    } 
    else {
        return "High Performer";
    }
}

console.log(evaluateProgress());


// 3 Total Learning Hours
function calculateTotalHours() {
    let total = 0;

    for (let course of courses) {
        total += course.estimatedHours;
    }

    return total;
}

console.log("Total Hours:", calculateTotalHours());


// 4 Filtering Functions
function filterBeginnerSkills() {
    return courses.filter(course => course.level === "Beginner");
}

function filterCompletedCourses() {
    return courses.filter(course => course.completed);
}

function filterActiveCourses() {
    return courses.filter(course => !course.completed);
}

console.log(filterBeginnerSkills());
console.log(filterCompletedCourses());
console.log(filterActiveCourses());


// 5 Achievement Badge Generator
function generateBadge() {
    let completedCount = filterCompletedCourses().length;

    if (completedCount <= 2) {
        return "Explorer";
    } 
    else if (completedCount <= 5) {
        return "Consistent Learner";
    } 
    else {
        return "Future Engineer";
    }
}

console.log(generateBadge());


// 6 Learning Analytics Summary
function analyticsSummary() {
    let completed = filterCompletedCourses().length;
    let pending = filterActiveCourses().length;

    let categoryCounter = {};

    courses.forEach(course => {
        categoryCounter[course.category] =
            (categoryCounter[course.category] || 0) + 1;
    });

    let strongestCategory = Object.keys(categoryCounter).reduce((a, b) =>
        categoryCounter[a] > categoryCounter[b] ? a : b
    );

    return {
        totalSkills: courses.length,
        completedCourses: completed,
        pendingCourses: pending,
        totalHours: calculateTotalHours(),
        strongestCategory: strongestCategory
    };
}

console.log(analyticsSummary());


// 7 Highest Progress Skill
function highestProgressSkill() {
    let highest = courses.reduce((max, course) =>
        course.progress > max.progress ? course : max
    );

    return `${highest.title} has the highest completion percentage. Keep improving!`;
}

console.log(highestProgressSkill());