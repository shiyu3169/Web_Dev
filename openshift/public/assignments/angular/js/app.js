var app = angular.module("OnlineUniversity", []);

var editingExistingCourse;
var editingIndex;
var deleteIndex;


app.controller("OnlineUniversityController", function ($scope, $http) {

    //get courses
    $http.get("/rest/course").success(function (response) {
        $scope.courses = response;
    });

    //delete modal
    $scope.deleteModal = function (index) {
        deleteIndex = index

        $('#delete-modal').modal('show');
    }

    //add modal
    $scope.addModal = function () {
        editingExistingCourse = false;

        $("#form").trigger('reset');
        $('#add-modal').modal('show');
    }

    //edit modal
    $scope.editModel = function (index) {
        editingExistingCourse = true;

        editingIndex = index;

        course = $scope.courses[index];

        var newCourse = {
            name: course.name,
            category: course.category,
            dateCreated: new Date(slashDateToDashDate(course.dateCreated)),
            description: course.description
        }

        $scope.course = newCourse;

        $("#form").trigger('reset');
        $('#add-modal').modal('show');
    }
    //delete function
    $scope.remove = function () {
        $http.delete("/rest/course/" + deleteIndex).success(function (response) {
            $scope.courses = response;
        });
        $('#delete-modal').modal('hide');
 
    }
    //add/edit function
    $scope.add = function (course) {
        if (editingExistingCourse) {
            course.dateCreated = dateToSlashDate(course.dateCreated)

            $http.put("/rest/course/" + editingIndex, course).success(function(response) {
                $scope.courses = response;
            });
        }
        else {
            course.dateCreated = dateToSlashDate(course.dateCreated)

            $http.post("/rest/course", course).success(function(response) {
                $scope.courses = response;
            });
        }

        $scope.course = null;

        $('#create-new-course-modal').modal('hide');
    }
});
//transfer date 
function dateToSlashDate(date) {
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
}
//transfer date
function slashDateToDashDate(slashDate) {
    var split = slashDate.split("/");

    var month = split[2];
    var day = split[0].length == 1 ? "0".concat(split[0]) : split[0];
    var year = split[1].length == 1 ? "0".concat(split[1]) : split[1];

    return month + "-" + day + "-" + year;
}
