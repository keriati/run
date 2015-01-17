(function() {


    google.load('visualization', '1.0', {'packages':['corechart']});

    google.setOnLoadCallback(function() {

        var deadline = new Date(Date.UTC(2015,11,31));

        var daysOfYear = [];

        var i = 0;

        for (var d = new Date(Date.UTC(2015, 0, 1)); d <= deadline; d.setDate(d.getDate() + 1)) {

            i++;

            daysOfYear.push([
                new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())),
                (d.getFullYear() / 365) * i
            ]);

            console.log(
                new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())),
                (d.getFullYear() / 365) * i
            )
        }

        var data = new google.visualization.DataTable();

        data.addColumn('date', 'Date');
        data.addColumn('number', 'KM');

        data.addRows(daysOfYear);

        var options = {
            title: '2015 KM in 2015',
            curveType: 'function',
            legend: { position: 'bottom' },
            width: 1800,
            height: 600

        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);

    });

})();
