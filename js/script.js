// GLOBAL VARIABLES
let id                  // THE ID TEXT BOX
let emp_name            // THE NAME TEXT BOX
let ext                 // THE EXTENSION TEXT BOX
let email               // THE EMAIL TEXT BOX
let department          // THE DEPARTMENT SELECT BOX
let submit              // THE SUBMIT BUTTON
let frm_name            // THE FORM NAME

// HELPER FUNCTION TO RETURN ELEMENT OBJECT DESCRIBING THE DOM ELEMENT OBJECT
// h t t p s://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
const $ = (id) => document.getElementById(id)

// HELPER FUNCTION TO RETURN ELEMENT OBJECT
// h t t p s://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
const $$ = (id) => document.querySelector(id)

// HELPER FUNCTION TO SET FOCUS & SELECT AN ELEMENT
const focusAndSelect = selector => {
    const elem = $$(selector)

    elem.focus();
    elem.select();
}

// GET THE DOM ELEMENTS
id              = $('id')
emp_name        = $('emp_name')            // 'name' is deprecated... changed to 'emp_name'
ext             = $('ext')
email           = $('email')
department      = $('department')
submit          = $('submit')
frm_name        = $('empForm')



// VALIDATE THE FORM FIELDS AND RETURN THE RESULT
function validateFields(id, name, ext, email, dept) {
    if (id.toString() === "" || id.toString().length != 8 || isNaN(id) || parseInt(id.toString()) != id.toString() || parseInt(id.toString()) <= 0) {
        alert (`ERROR:  Employee ID must be 8-digit number`)
        focusAndSelect("#id")
        return false
    }

    if (name.toString() === "") {
        alert (`ERROR:  Employee Name cannot be blank`)
        focusAndSelect("#emp_name")
        return false
    }

    if (ext.toString() === "" || ext.toString().length != 4 || isNaN(ext) || parseInt(ext.toString()) != ext.toString()) {
        alert (`ERROR:  Employee Extension must be 4-digit number`)
        focusAndSelect("#ext")
        return false
    }

    if (email.toString() === "") {
        alert (`ERROR:  Employee Email cannot be blank`)
        focusAndSelect("#email")
        return false
    }

    if (dept.toString() === "") {
        alert (`ERROR:  Employee Department cannot be blank`)
        focusAndSelect("#department")
        return false
    }
    return true
}

// ADD EVENT LISTENER FOR THE SUBMIT BUTTON (TO ENSURE FIELDS ARE VALID BEFORE SUBMISSION)
submit.addEventListener('click', () => {
    let fieldsValid = false

    fieldsValid = validateFields(
        id.value, 
        emp_name.value, 
        ext.value,
        email.value,
        department.value
    )

    if (fieldsValid) {
        console.log(`ID: ${id.value}`)
        console.log(`Name: ${emp_name.value}`)
        console.log(`Extension: ${ext.value}`)
        console.log(`Email: ${email.value}`)
        console.log(`Department: ${department.value}`)
    }
})

// ADD EVENT LISTENER FOR THE FORM (TO PREVENT FORM SUBMISSION)
empForm.addEventListener('submit', (e) => {
    e.preventDefault()
})