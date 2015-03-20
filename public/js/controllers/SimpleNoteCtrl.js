angular.module('SimpleNoteCtrl', []).controller('SimpleNoteController', ['$scope', 'NoteService', '$interval', function($scope, NoteService, $interval) {

    var formatDate = function (value) {
        for (var i = 0; i < value.length; i++) {
            var jsonDate = value[i].date;
            var jsDate = JSON.dateStringToDate(jsonDate);
            value[i].date = jsDate.toDateString();
        }
    };

    //$interval(function() { $scope.saveNote($scope.noteDisplayed);} , 300000);

    function query() {
        NoteService.query().$promise.then(function (value) {
            formatDate(value);
            $scope.notes = value;
            $scope.noteDisplayed = value[value.length-1];
        });
    }

    query();

    $scope.displayNote = function (note) {
        $scope.noteDisplayed = note;
    };

    $scope.createNewNote = function () {
        var newNote = {note: '', date: new Date().toDateString()};
        //FIXME C EST IMMONDE
        NoteService.save(newNote).$promise.then(function () {
            query();
        }, function (err) {

        });
    };

    $scope.saveNote = function(note) {
        console.log('save');
        note.date = new Date();
        NoteService.update({id: note._id}, note).$promise.then(function () {
            formatDate([$scope.noteDisplayed]);
        }, function(err) {

        });
    };

    $scope.deleteNote = function (note) {
        var idx = $scope.notes.indexOf(note);
        var noteToRemove = $scope.notes[idx];
        NoteService.delete({id: noteToRemove._id}).$promise.then(function () {
            $scope.notes.splice(idx, 1);
            $scope.noteDisplayed = $scope.notes[$scope.notes.length - 1];
        }, function (err) {

        });
    };

}]);