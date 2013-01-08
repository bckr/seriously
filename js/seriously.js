function drawTable(shows){
    for (var i = shows.length - 1; i >= 0; i--) {
        icon = iconForTrend(shows[i][4]);
        $('.table > tbody:last').prepend('<tr><td>' + (i + 1) + '</td><td>' + shows[i][3] + '</td><td>' + shows[i][1] + '</td><td>' + shows[i][2] + '</td><td><i class="'+ icon +'"></i></td></tr>');
    };
}

function iconForTrend (trend) {
    if (trend === 0) return 'icon-circle-arrow-right';
    else if (trend > 0) return 'icon-circle-arrow-up';
    else return 'icon-circle-arrow-down';
}

function plotGraph(shows) {
    var plot2 = $.jqplot("serieschart",[shows],{
        seriesDefaults:{
            renderer: $.jqplot.BubbleRenderer,
            rendererOptions: {
                autoscalePointsFactor: -0.10,
                autoscaleMultiplier: 1.0,
                bubbleAlpha: 0.4,
                highlightAlpha: 0.8
            },
            shadow: false,
            shadowAlpha: 0.05,
            showMark: false,
        },

        axesDefaults:{
            tickOptions: {
                showMark: false,
                showGridline: true,
                show: true,
                showLabel: false,
            },
            showTicks: false,
            showTickMarks: false
        },

        axes: {
            xaxis: {
             max: 120,
             min: -20
            },
            yaxis: {

            }
        },

        grid: {
            shadow: false,
            background: '#eee'
        }
    });
}
