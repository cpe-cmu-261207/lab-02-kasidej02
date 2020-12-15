let gpa_cal = 0
let credit_cal1 = 0
let credit_cal2 = 0
let credit_cal3 = 0
let sem1_cal = 0
let sem2_cal = 0
let major = 0
let gpacal1 = 0
let gpacal2 = 0
let gpacal3 = 0

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        event.preventDefault()
        const task = document.querySelector('#task')

        const list = document.createElement('tr')

        const subject = document.createElement('td')
        const sub = document.querySelector("#sub").value

        const semester = document.createElement('td')
        const sem = document.getElementById("sem").value

        const grade = document.createElement('td')
        const gpa = document.querySelector("#gpa").value

        const credit = document.createElement('td')
        let cre = document.querySelector("#cre").value

  
        console.log(gpa)

        if (sub === '' && sem === '' && gpa === '') {
            alert('Please input your data')
            var df = false
        }
        else if (sem.length != 1) {
            df = false
        }
    
        else if (sub.length == 0 || sub.length > 6 || sub.length < 6) {
            alert("Subject code 261xxx")
            df = false
        }
        else if (cre.length > 1 || cre > '9' || cre < '1') {
            alert("Credit is 1 to 9")
            df = false
        }
        else {
            df = true
        }

        console.log(df)


        if (gpa === 'A') {
            gpa_cal = 4
        }
        if (gpa === 'B+') {
            gpa_cal = 3.5
        }
        if (gpa === 'B') {
            gpa_cal = 3
        }
        if (gpa === 'C+') {
            gpa_cal = 2.5
        }
        if (gpa === 'C') {
            gpa_cal = 2
        }
        if (gpa === 'D+') {
            gpa_cal = 1.5
        }
        if (gpa === 'D') {
            gpa_cal = 1
        }
        if (gpa === 'F') {
            gpa_cal = 0
        }

        if(cre === '1'){
            cre = 1
        }
        if(cre === '2'){
            cre = 2
        }
        if(cre === '3'){
            cre = 3
        }
        if(cre === '4'){
            cre = 4
        }
        if(cre === '5'){
            cre = 5
        }
        if(cre === '6'){
            cre = 6
        }
        if(cre === '7'){
            cre = 7
        }
        if(cre === '8'){
            cre = 8
        }
        if(cre === '9'){
            cre = 9
        }

        if (sem === "1") {
            gpacal1 += gpa_cal * cre
            credit_cal1 += cre
            sem1_cal = gpacal1 / credit_cal1

        }
        else if (sem === "2") {
            gpacal2 += gpa_cal * cre
            credit_cal2 += cre
            sem2_cal = gpacal2 / credit_cal2
        }

        var check = sub.substring(0, 3);
        if( (check === "261") || (check === "269") ){
            gpacal3 += gpa_cal * cre
            credit_cal3 += cre
            major = gpacal3 / credit_cal3
        }
        console.log(gpa_cal)
        console.log(sem1_cal)
        console.log(sem2_cal)


        if (df) {
            const gpa1show = document.querySelector("#gpa_show1")
            gpa1show.innerHTML = sem1_cal.toFixed(2)
            const gpa2show = document.querySelector("#gpa_show2")
            gpa2show.innerHTML = sem2_cal.toFixed(2)
            const gpa3show = document.querySelector("#gpa_show3")
            gpa3show.innerHTML = major.toFixed(2)

            subject.innerHTML = sub
            semester.innerHTML = sem
            grade.innerHTML = gpa
            credit.innerHTML = cre
            const deleteButton = document.createElement('button')
            deleteButton.className = 'btn btn-danger m-2 h-2'
            deleteButton.innerHTML = 'x'
            deleteButton.onclick = function () {
                task.removeChild(list)
                console.log(list)
            }

            list.append(semester)
            list.append(subject)
            list.append(credit)
            list.append(grade)
            list.append(deleteButton)
            task.append(list)

            document.querySelector("#sub").value = ""
            document.querySelector("#sem").value = ""
            document.querySelector("#gpa").value = ""
            document.querySelector("#cre").value = ""
        }

        return false
    }
}, false)