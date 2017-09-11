//hard code classes data 
var classes = [
        { name: "Java 101", category: "PROG", dateCreated: "1/1/2015", description: "Wow" },
        { name: "MongoDB 101", category: "DB", dateCreated: "2/1/2015", description: "Good" },
        { name: "Express 101", category: "PROG", dateCreated: "3/1/2015", description: "Better" },
        { name: "AngularJS 101", category: "WEB", dateCreated: "4/1/2015", description: "Best" },
        { name: "NodeJS 101", category: "PROG", dateCreated: "5/1/2015", description: "Awesome" }
]
//template
var template;
//main function
$(function () {
    template = $(".template");
    renderClasses(classes);
    $("#classes").on("click", ".remove", removeClass);
    $("#addClass").click(addClass);
    $("#classes").on("click", ".edit", editClass);
});

//click event when click the remove button
function removeClass(event) {
    var button = $(event.currentTarget);
    var id = button.attr('id');
    bootbox.confirm({
        title: "Remove Class",
        message: "Are you sure to remove this course?",
        callback: function (e) {
            if (e) {
                classes.splice(id, 1);
                renderClasses(classes);
            }
        }
    });  
}
// reder the classes again after it changes
function renderClasses(classes) {
    var container = $("#classes");
    container.empty();

    for (var i = 0; i < classes.length; i++) {
        var c = classes[i];
        var cloned = template.clone();
        cloned.find(".name").html(c.name);
        cloned.find(".category").html(c.category);
        cloned.find(".date").html(c.dateCreated);
        cloned.find(".remove").attr("id", i);
        cloned.find(".edit").attr("id", i);
        container.append(cloned);
    }
}
// click event when click add new class
function addClass() {
    $("#dateCreated").datepicker();
    $("#dateCreated").datepicker('setDate', new Date());
    var day = new Date();
    today = $.datepicker.formatDate("mm/dd/yy", day);
    $("#add").modal("show").one('click', '#ok', function (e) {
        var name = $("input#name").val();
        var category = $("select#category").val();
        var date = $("input#dateCreated").val();
        var description = $("textarea#description").val();
        var c = {
            name: name,
            category: category,
            dateCreated: date,
            description: description
        };
        classes.push(c);
        renderClasses(classes);       
    });
}
// edit an existed class in table  
function editClass(event) {
    var button = $(event.currentTarget);
    var id = button.attr('id');
    var current = classes[id];
    console.log(button);
    

    $("input#name").val(current.name);
    $("select#category").val(current.category);
    $("input#dateCreated").val(current.dateCreated);
    $("textarea#description").val(current.description);

    $("#add").modal("show").one('click', '#ok', function (e) {
        var name = $("input#name").val();
        var category = $("select#category").val();
        var date = $("input#dateCreated").val();
        var description = $("textarea#description").val();

        var c = {
            name: name,
            category: category,
            dateCreated: date,
            description: description
        };

        classes[id] = c;
        renderClasses(classes);
    });
}