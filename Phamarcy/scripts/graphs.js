// Load the Google Charts library

google.charts.load('current', { packages: ['corechart'] });

google.charts.load('current', { packages: ['corechart'] });

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'x');
    data.addColumn('number', 'values');
    data.addColumn({ id:'i0', type:'number', role:'interval' });
    data.addColumn({ id:'i1', type:'number', role:'interval' });
    data.addColumn({ id:'i3', type:'number', role:'interval' });
    data.addColumn({ id:'i4', type:'number', role:'interval' });
    data.addColumn({ id:'i5', type:'number', role:'interval' });
    data.addColumn({ id:'i6', type:'number', role:'interval' });

    data.addRows([
        [1, 100, 90, 110, 85, 96, 104, 120],
        [2, 120, 95, 130, 90, 113, 124, 140],
        [3, 130, 105, 140, 100, 117, 133, 139],
        [4, 90, 85, 95, 85, 88, 92, 95],
        [5, 70, 74, 63, 67, 69, 70, 72],
        [6, 30, 39, 22, 21, 28, 34, 40],
        [7, 80, 77, 83, 70, 77, 85, 90],
        [8, 100, 90, 110, 85, 95, 102, 110]
    ]);

    var options_lines = {
        title: 'Line intervals, default',
        curveType: 'function',
        lineWidth: 4,
        intervals: { 'style': 'line' },
        legend: 'none'
    };

    var chart_lines = new google.visualization.LineChart(document.getElementById('chart_lines'));
    chart_lines.draw(data, options_lines);
}
   
    
// Set a callback function to draw the chart
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
        ['2004/05', 165, 938, 522, 998, 450, 614.6],
        ['2005/06', 135, 1120, 599, 1268, 288, 682],
        ['2006/07', 157, 1167, 587, 807, 397, 623],
        ['2007/08', 139, 1110, 615, 968, 215, 609.4],
        ['2008/09', 136, 691, 629, 1026, 366, 569.6]
    ]);

    // Define chart options
    var options = {
        title: 'Monthly Coffee Production by Country',
        vAxis: { title: 'Cups' },
        hAxis: { title: 'Month' },
        seriesType: 'bars',
        series: { 5: { type: 'line' } }
    };

    // Create and draw the chart in the specified div
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}