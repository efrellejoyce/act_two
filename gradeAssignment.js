function gradeAssignment() {
    let score = prompt("Input your score:");

    if (score >=90) {
    alert("Excellent");
    } else if (score >= 80 && score <= 89) {
    alert("Good");
    } else if (score >= 70 && score <= 79) {
    alert("Fair");
    } else {
        alert("Needs Improvement");
    }
}
    