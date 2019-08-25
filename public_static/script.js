$(function () {
    const inpName = $('#name')
    const inpAge = $('#age')
    const inpCity = $('#city')
    const submitbtn = $('#submit')
    const tablePerson = $('#persons')

    function refreshTable(persons) {
        tablePerson.empty()
        tablePerson.append(
            `<tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            </tr>`
        )
        for (person of persons) {
            tablePerson.append(
                `<tr>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.city}</td>
                </tr>`
            )
        }
    }

    $.get('/api/persons', function (data) {
        refreshTable(data)
    })

    submitbtn.click(() => {
        $.post('/api/persons', {
            name: inpName.val(),
            age: inpAge.val(),
            city: inpCity.val()
        },
            function (data) {
                refreshTable(data)
            })
    })

})