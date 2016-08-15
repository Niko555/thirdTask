// Draw first graphic (dots)
function DrawGraphicOfTable1(obj) {
    var w = 450;
    var h = 400;
    var padding = 30;
    var dataset = [];
    obj.forEach(function (item) {
        dataset.push(ObjectToArray(item));
    });

    d3.select("#graph_table > *").remove();
    var svg = d3.select("#graph_table")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    var xScale = d3.scale.linear()
        .domain([0, 11])
        .range([padding, w - padding * 2]);

    var yScale = d3.scale.linear()
        .domain([0, 11])
        .range([h - padding, padding]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(10);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(10);

    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return xScale(d[0]);
        })
        .attr("cy", function (d) {
            return yScale(d[1]);
        })
        .attr("r", "4px")
        .attr("fill", "gray");

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);

    function ObjectToArray(obj) {
        var arr = [];
        for (prop in obj) {
            arr.push(parseInt(obj[prop]));
        }
        return arr;
    };
};


// Draw second graphic (diagram)
function DrawGraphicOfTable2(obj) {
    var w = 400;
    var h = 400;
    var padding = 30;
    var dataset = [];
    obj.forEach(function (item) {
        dataset.push(ObjectToArray(item));
    });

    d3.select("#graph_table > *").remove();
    var svg = d3.select("#graph_table")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    var xScale = d3.scale.linear()
        .domain([0, 11])
        .range([padding, w - 2 * padding]);

    var yScale = d3.scale.linear()
        .domain([0, 11])
        .range([h - padding, padding]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(10);

    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(10);

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function (d) {
            return xScale(d[0]) - 2 * padding + 2.5;
        })
        .attr("y", function (d) {
            return yScale(d[1]);
        })
        .attr("width", 2 * padding)
        .attr("height", function (d) {
            return w - padding - yScale(d[1]);
        })
        .attr("fill", "lightgray");

    svg.selectAll("xLine1")
        .data(dataset)
        .enter()
        .append("line")
        .attr("x1", function (d) {
            return xScale(d[0]);
        })
        .attr("y1", function (d) {
            return yScale(d[1]);
        })
        .attr("x2", function (d) {
            return xScale(d[0]);
        })
        .attr("y2", w - padding)
        .style("stroke-width", "2")
        .style("stroke", "black");

    svg.selectAll("xLine2")
        .data(dataset)
        .enter()
        .append("line")
        .attr("x1", function (d) {
            return xScale(d[0]) - 2 * padding + 2.5;
        })
        .attr("y1", function (d) {
            return yScale(d[1]);
        })
        .attr("x2", function (d) {
            return xScale(d[0]) - 2 * padding + 2.5;
        })
        .attr("y2", w - padding)
        .style("stroke-width", "2")
        .style("stroke", "black");

    svg.selectAll("yLine")
        .data(dataset)
        .enter()
        .append("line")
        .attr("x1", function (d) {
            return xScale(d[0]) - 2 * padding + 2.5;
        })
        .attr("y1", function (d) {
            return yScale(d[1]);
        })
        .attr("x2", function (d) {
            return xScale(d[0]);
        })
        .attr("y2", function (d) {
            return yScale(d[1]);
        })
        .style("stroke-width", "2")
        .style("stroke", "black");

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);

    function ObjectToArray(obj) {
        var arr = [];
        for (prop in obj) {
            arr.push(parseInt(obj[prop]));
        }
        return arr;
    };
};
