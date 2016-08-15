app.directive('viewTable', function () {
    return {
        link: function (scope, element, attributes) {
            scope.data = scope[attributes["viewTable"]];
        },

        restrict: "A",

        template: "<thead>" +
        "<tr>" +
        "<th class='text-center'>X</th>" +
        "<th class='text-center'>Y</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody>" +
        "<tr class='text-center' ng-repeat='item in data'>" +
        "<td>{{item.x}}</td>" +
        "<td>{{item.y}}</td>" +
        "</tr>" +
        "</tbody>"
    }
});

app.directive('viewGraphic', function () {
    return {
        restrict: "E",
        template: "<div id='graph_table'></div>"
    }
});