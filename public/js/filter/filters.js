angular.module('searchFilter', []).filter('search', function() {
    return function(npcs, searchText) {
        var filtered = [];
        searchText = searchText || '';

        searchText.toLowerCase();
        angular.forEach(npcs, function(npc) {
            if (npc.name.toLowerCase().indexOf(searchText) >= 0 || npc.note.toLowerCase().indexOf(searchText) >= 0)
                        filtered.push(npc);
        });
      return filtered;
    };
});