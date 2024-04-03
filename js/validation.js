function validate() {
    var name = form1.name.value;
    var designation = form1.designation.value;
    var email = form1.email.value;
    var location = form1.location.value;
    var course = form1.course.value;
    if (name == "" || designation == "" || email == "" || location == "" || course == "") {
        alert("Enter required field!!!")
        form1.name.focus();
        return false;
    }
    alert("Name: " + name + "\nDesignation: " + designation + "\nEmail: " + email + "\nLocation: " + location + "\nCourse: " + course);
}

function calculateResult() {

    var maths = Number(result.maths.value);
    var english = Number(result.english.value);
    var science = Number(result.science.value);
    var total = Number(result.total.value);
    var percentage = Number(result.percentage.value);

    total = maths + english + science;
    percentage = (total / 3);

    result.total.value = total;
    result.percentage.value = percentage;

}
function sal() {
    var sal = Number(empSal.salary.value);
    var perform = empSal.perform.value;

    if (perform === 'a') {
        var b = 0.3 * sal;
        empSal.bonus.value = b;
        empSal.total.value = sal + b;
    } else if (perform === 'b') {
        var b = 0.1 * sal;
        empSal.bonus.value = b;
        empSal.total.value = sal + b;
    } else {
        var b = 0 * sal;
        empSal.bonus.value = b;
        empSal.total.value = sal + b;
    }
}

function test() {
    var marks = 0;

    if (document.getElementById('html2').checked == true) {
        marks += 1;
    }
    if (document.getElementById('js1').checked == true) {
        marks += 1;
    }
    alert(marks);
}