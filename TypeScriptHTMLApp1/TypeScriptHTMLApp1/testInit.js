function createAndRunUnitTests() {
    
    connectQUnit();
    createReportTable();
    runUnitTests();

}

function runUnitTests() {
    //Create <script src="test.ts"></script>
    var script1 = document.createElement("script");
    script1.setAttribute("src", "test.ts");
    script1.setAttribute("id", "scriptTest");
    document.body.appendChild(script1);
    $("#scriptTest").append(script1);
    
    console.log("unit tests file was added ");
}

function connectQUnit() {
    //Create <script src="Scripts/qunit-1.14.0.js"></script>
    var script0 = document.createElement("script");
    script0.setAttribute("src", "Scripts/qunit-1.14.0.js");
    script0.setAttribute("id", "scriptQunit");
    document.head.appendChild(script0);
    $("#scriptQunit").append(script0);

    //Create <link rel="stylesheet" href="Content/qunit-1.14.0.css">
    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "Content/qunit-1.14.0.css");
    link.setAttribute("id", "styleSheet");
    document.head.appendChild(link);
    $("#styleSheet").append(link);

    console.log("qunit-1.14.0.js and qunit-1.14.0.css was connected");
}

function createReportTable() {

    var h1 = document.createElement("h1");
    h1.setAttribute("id", "h1");
    var texth1 = document.createTextNode("TypeScript HTML App");
    h1.appendChild(texth1);
    document.body.appendChild(h1);
    $("#h1").append(h1);

    var content = document.createElement("div");
    content.setAttribute("id", "content");
    document.body.appendChild(content);
    $("#content").append(content);

    var qunit = document.createElement("div");
    qunit.setAttribute("id", "qunit");
    document.body.appendChild(qunit);
    $("#qunit").append(qunit);

    var qunitfixture = document.createElement("div");
    qunitfixture.setAttribute("id", "qunit-fixture");
    document.body.appendChild(qunitfixture);
    $("#qunit-fixture").append(qunitfixture);

    var style = document.createElement("div");
    style.setAttribute("id", "style1");
    style.setAttribute("style", "display: none;");
    document.body.appendChild(style);
    $("#style1").append(style);

        var table = document.createElement("table");
        table.setAttribute("id", "basic-sorting");
        document.getElementById("style1").appendChild(table);
        $("#basic-sorting").append(table);

            var thead = document.createElement("thead");
            thead.setAttribute("id", "thead");
            document.getElementById("basic-sorting").appendChild(thead);
            $("#thead").append(thead);

                var tr0 = document.createElement("tr");
                tr0.setAttribute("id", "tr0");
                document.getElementById("thead").appendChild(tr0);
                $("#tr0").append(tr0);

                    var th0 = document.createElement("th");
                    th0.setAttribute("id", "th0");
                    var textth0 = document.createTextNode("Col 1");
                    th0.appendChild(textth0);
                    document.getElementById("tr0").appendChild(th0);
                    $("#th0").append(th0);

                    var th1 = document.createElement("th");
                    th1.setAttribute("id", "th0");
                    var textth1 = document.createTextNode("Col 2");
                    th1.appendChild(textth1);
                    document.getElementById("tr0").appendChild(th1);
                    $("#th1").append(th1);

            var tbody = document.createElement("tbody");
            tbody.setAttribute("id", "tbody");
            document.getElementById("basic-sorting").appendChild(tbody);
            $("#tbody").append(tbody);

                var tr1 = document.createElement("tr");
                tr1.setAttribute("id", "tr1");
                document.getElementById("tbody").appendChild(tr1);
                $("#tr1").append(tr1);

                    var th2 = document.createElement("th");
                    th2.setAttribute("id", "th2");
                    var textth2 = document.createTextNode("1");
                    th2.appendChild(textth2);
                    document.getElementById("tr1").appendChild(th2);
                    $("#th2").append(th2);

                    var th3 = document.createElement("th");
                    th3.setAttribute("id", "th3");
                    var textth3 = document.createTextNode("3");
                    th3.appendChild(textth3);
                    document.getElementById("tr1").appendChild(th3);
                    $("#th3").append(th3);


                var tr2 = document.createElement("tr");
                tr2.setAttribute("id", "tr2");
                document.getElementById("tbody").appendChild(tr2);
                $("#tr2").append(tr2);

                    var th4 = document.createElement("th");
                    th4.setAttribute("id", "th4");
                    var textth4 = document.createTextNode("2");
                    th4.appendChild(textth4);
                    document.getElementById("tr2").appendChild(th4);
                    $("#th4").append(th4);

                    var th5 = document.createElement("th");
                    th5.setAttribute("id", "th5");
                    var textth5 = document.createTextNode("2");
                    th5.appendChild(textth5);
                    document.getElementById("tr2").appendChild(th5);
                    $("#th5").append(th5);

                var tr3 = document.createElement("tr");
                tr3.setAttribute("id", "tr3");
                document.getElementById("tbody").appendChild(tr3);
                $("#tr3").append(tr3);

                    var th6 = document.createElement("th");
                    th6.setAttribute("id", "th6");
                    var textth6 = document.createTextNode("3");
                    th6.appendChild(textth6);
                    document.getElementById("tr3").appendChild(th6);
                    $("#th6").append(th6);

                    var th7 = document.createElement("th");
                    th7.setAttribute("id", "th7");
                    var textth7 = document.createTextNode("1");
                    th7.appendChild(textth7);
                    document.getElementById("tr3").appendChild(th7);
                    $("#th7").append(th7);
}