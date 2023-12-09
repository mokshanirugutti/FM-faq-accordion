document.querySelectorAll("#question-block").forEach((question) => question.addEventListener("click",() => {
    if(question.classList.contains("active")){
        question.classList.toggle("active");
    } else {
        document.querySelectorAll("#question-block").forEach((question) => question.classList.remove("active"))
        question.classList.add("active");
    }
}))