name_guest_length= [];
function submit() {
    var guest_array= [];

    for (var j = 1; j <= 4; j++) {
        var name_guest = document.getElementById("name_guest" + j).value;
        console.log(name_guest);
        name_of_the_student_array.push(name_guest);
    }

    console.log(name_guest);

    var name_guest_length = name_guest.length;
    console.log(name_guest_length);

    for (var k = 0; k < name_guest_length; k++) {
        guest_array.push("<h4>NAME - " + name_guest[k] + "</h4>");
        console.log(name_guest);
    }

    console.log(name_guest)
    document.getElementById("display_name_with_commas").innerHTML = name_guest;

    var remove_commas = name_guest.join("");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";

    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    name_guest.sort();

    console.log(name_guest);

    var guest_array_sorting = [];

    var name_guest_length_array = name_guest_array.length;

    console.log(name_guest_length_array);

    for (var k = 0; k < name_guest_length_array; k++) {
        guest_array_sorting.push("<h4>NAME - " + name_guest_array[k] + "</h4>");
        console.log(guest_array_sorting);
    }

    var remove_commas = guest_array_sorting.join("");

    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}