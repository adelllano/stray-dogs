    var version = "4.13.0";

    var category = ["Pet Account Update", "Stray Dog-at-large", "Dead Animal Pickup", "Injured Animal", "Animal Services Dog Tag Check", "Animal Cruelty Investigation", "ASU Police Assistance", "Stray Dog Pickup", "Animal Bite To a Person", "Animal Services Dog Tag", "Lost Pet", "Tethered Dog", "Animal Cruelty FollowUp", "PitBull Investigation", "Dangerous Dog Investigation", "Breeder/PetStore Complaints Inspections", "Field Retention FollowUp", "License Application Request", "Dog Trap Request", "PitBull FollowUp Investigation", "Found Pet", "Cat Trap Request", "Breeder/Pet StoreFollow-Up"]

    var number = [9370,5800,4904,3632,2972,2530,2262,1955,1917,897,825,714,656,527,446,175,164,102,73,57,46,32,18]

    var height = 600;
    var width = 960;
    var xOffset = 230;

    var max = d3.max(number)

    var y1 = d3.scale.ordinal()
              .domain(category)
              .range([0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440]);

    var x1 = d3.scale.linear()
              .domain([0, max])
              .range([0, max/15]);

    var yAxis1 = d3.svg.axis()
                   .scale(y1)
                   .orient("left");

    var xAxis1 = d3.svg.axis()
                   .scale(x1)
                   .orient("bottom");

    var svg5 = d3.select("#categoryChart").append("svg")
                .attr("height",height)
                .attr("width",width);

    var barGroup = svg5.append("g")

    barGroup.selectAll("rect")
            .data(number)
            .enter().append("rect")
                    .attr("height", "12")
                    .attr("width", function(d){ return d/15;})
                    .attr("x", xOffset)
                    .attr("y", function(d, i){ return 20*i;})
                    .attr("fill", " #669933")

    barGroup.append("g").attr("class", "axis y")
                   .attr("transform", "translate(" + xOffset + ", 6)")
                   .call(yAxis1);


    barGroup.append("g")
              .attr("class","axis x")
              .attr("transform", "translate(" + xOffset + "," + (height-120) +" )")
              .call(xAxis1)
