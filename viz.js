document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart('kageyama', {
        chart: {
            polar: true,
            type: 'line',
        },
        title: {text: 'Tobio Kageyama'},
        xAxis: {
            categories: ['Power', 'Jumping', 'Stamina', 'Game Sense', 'Technique', 'Speed'],
            visible: false,
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        series: [{
            name: 'Skills',
            data: [4, 4, 5, 5, 5, 4],
            pointPlacement: 'on',
            showInLegend: false,
            color: '#ffa500',
        }],
        tooltip: {
            shared: true,
        },
    })
})

document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart('hinata', {
        chart: {
            polar: true,
            type: 'line',
        },
        title: {text: 'Shoyo Hinata'},
        xAxis: {
            categories: ['Power', 'Jumping', 'Stamina', 'Game Sense', 'Technique', 'Speed'],
            visible: false,
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        series: [{
            name: 'Skills',
            data: [1, 5, 5, 1, 1, 5],
            pointPlacement: 'on',
            showInLegend: false,
            color: '#ffa500',
        }],
        tooltip: {
            shared: true,
        },
    })
})

document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart('nishinoya', {
        chart: {
            polar: true,
            type: 'line',
        },
        title: {text: 'Yu Nishinoya'},
        xAxis: {
            categories: ['Power', 'Jumping', 'Stamina', 'Game Sense', 'Technique', 'Speed'],
            visible: false,
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        series: [{
            name: 'Skills',
            data: [2, 4, 5, 4, 3, 5],
            pointPlacement: 'on',
            showInLegend: false,
            color: '#ffa500',
        }],
        tooltip: {
            shared: true,
        },
    })
})

document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart('sugawara', {
        chart: {
            polar: true,
            type: 'line',
        },
        title: {text: 'Koshi Sugawara'},
        xAxis: {
            categories: ['Power', 'Jumping', 'Stamina', 'Game Sense', 'Technique', 'Speed'],
            visible: false,
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        series: [{
            name: 'Skills',
            data: [2, 2, 2, 5, 4, 2],
            pointPlacement: 'on',
            showInLegend: false,
            color: '#ffa500',
        }],
        tooltip: {
            shared: true,
        },
    })
})

document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart('oikawa', {
        chart: {
            polar: true,
            type: 'line',
        },
        title: {text: 'Toru Oikawa'},
        xAxis: {
            categories: ['Power', 'Jumping', 'Stamina', 'Game Sense', 'Technique', 'Speed'],
            visible: false,
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
        },
        series: [{
            name: 'Skills',
            data: [5, 3, 4, 4, 5, 3],
            pointPlacement: 'on',
            showInLegend: false,
            color: '#ffa500',
        }],
        tooltip: {
            shared: true,
        },
    })
})

document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart('positions', {
        chart: {type: 'pie'},
		title: {text: ''},
		tooltip: {enabled: false},
		plotOptions: {pie: {
			showInLegend: false,
			dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
		}},
        series: [{data: [
            {name: 'Wing Spiker (OH & RS)', y: 3468, color: '#000000'}, {name: 'Middle Blocker (MH)', y: 4443, color: '#32CD32'},
            {name: 'Setter (S)', y: 6982, color: '#ffa500'}, {name: 'Libero (L & DS)', y: 2396, color: '#A9A9A9'}]}],
    });
})

document.addEventListener('DOMContentLoaded', function() {
	Highcharts.chart('participation-m', {
		chart: {type: 'line'},
		title: {text: 'Participation Growth'},
        subtitle: {text: 'Number of Men Ages 10-70+ Playing Volleyball from 1996-2016'},
        tooltip: {
            enabled: true,
            pointFormat: '{point.name} : {point.y:.f}'
            },
		xAxis: {
            title: {text: 'Year'},
            categories: [1996, 2001, 2006, 2011, 2016],
		},
		yAxis: {
			title: {text: 'Number of Male Participants'},
        },
		series: [{
			data: [4781, 3002, 2470, {y: 1881, id: 'min'}, 6774],
            showInLegend: false,
            color: '#42C0FB',
        }],
        annotations: [{
            labels: [{
                point: 'min',
                shape: 'rect',
                text: '<span> Haikyuu manga serialization begins 2/20/2012 </span>',
            }]
        }],
    });
})

document.addEventListener('DOMContentLoaded', function() {
	Highcharts.chart('participation-f', {
		chart: {type: 'line'},
		title: {text: 'Participation Growth'},
        subtitle: {text: 'Number of Women Ages 10-70+ Playing Volleyball from 1996-2016'},
        tooltip: {
            enabled: true,
            pointFormat: '{point.name} : {point.y:.f}'
            },
		xAxis: {
            title: {text: 'Year'},
            categories: [1996, 2001, 2006, 2011, 2016],
		},
		yAxis: {
			title: {text: 'Number of Female Participants'},
        },
		series: [{
			data: [5936, 4230, 3572, {y: 2677, id: 'min'}, 8631],
            showInLegend: false,
            color: '#ffcccb',
        }],
        annotations: [{
            labels: [{
                point: 'min',
                shape: 'rect',
                text: '<span> Haikyuu manga serialization begins 2/20/2012 </span>',
            }]
        }],
    });
})

document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart('timeline-h', {
        chart: {
            zoomType: 'x',
            type: 'timeline'
        },
        xAxis: {
            type: 'datetime',
            visible: false
        },
        yAxis: {
            gridLineWidth: 1,
            title: null,
            labels: {
                enabled: false
            }
        },
        legend: {
            enabled: false
        },
        title: {
            text: ''
        },
        tooltip: {
            enabled: true,
            pointFormat: '<span style="font-weight: bold;">{point.x:%d %b %Y}</span><br/>{point.label} </span>'
        },
        series: [{
            dataLabels: {
                allowOverlap: false,
                format: '<span style="font-weight: bold;"> ' +
                    '{point.x:%d %b %Y}</span><br/>{point.label} </span>'
            },
            marker: {
                symbol: 'circle'
            },
            data: [{
                x: Date.UTC(2012, 5, 4),
                label: '1st Vol of Manga Released',
                color: '#ffa500',
            }, {
                x: Date.UTC(2014, 3, 6),
                label: '1st Season of Anime Start',
                color: '#ffa500',
            }, {
                x: Date.UTC(2014, 8, 21),
                label: '1st Season of Anime End',
                color: '#ffa500',
            }, {
                x: Date.UTC(2015, 9, 4),
                label: '2nd Season of Anime Start',
                color: '#ffa500',
            }, {
                x: Date.UTC(2016, 0, 21),
                label: 'Haikyuu!! wins best shonen manga in the 61st Shogakukan Manga Awards',
                color: '#ffa500',
            }, {
                x: Date.UTC(2016, 2, 26),
                label: '2nd Season of Anime End',
                color: '#ffa500',
            }, {
                x: Date.UTC(2016, 9, 7),
                label: '3rd Season of Anime Start',
                color: '#ffa500',
            }, {
                x: Date.UTC(2016, 11, 9),
                label: '3rd Season of Anime End',
                color: '#ffa500',
            }, {
                x: Date.UTC(2020, 0, 10),
                label: '4th Season of Anime Start',
                color: '#ffa500',
            }, {
                x: Date.UTC(2020, 10, 4),
                label: 'Last Vol of Manga Released',
                color: '#ffa500',
            }, {
                x: Date.UTC(2020, 11, 18),
                label: '4th Season of Anime End',
                color: '#ffa500',
            }]
        }]
    });
})

document.addEventListener('DOMContentLoaded', function() {
    let sale = [(2013, 2056211), (2014, 8283709), (2015, 6531508), (2016, 6474394), (2017, 5067939), (2018, 5030624), (2019, 4514838)];

	Highcharts.chart('sales', {
		chart: {type: 'area', height: 400,},
		title: {text: 'Number of Manga Copies Sold from 2013-2019'},
		tooltip: {
			formatter: function() {
				return  this.x + ": " + (this.y / 1e6).toFixed(2) + 'M';
			},
	},
		xAxis: {
            title: {text: 'Year'},
            categories: [2013, 2014, 2015, 2016, 2017, 2018, 2019]
		},
		yAxis: {
			title: {text: 'Number of Copies'},
		},
		series: [{
			data: sale,
            showInLegend: false,
            color: '#ffa500'
			}]
	});
})

document.addEventListener('DOMContentLoaded', function() {
    Highcharts.chart('bar-container', {
        chart: {type: 'column'},
		title: {text: 'Number of Volleyball Players in 2011 vs. 2016'},
		xAxis: {
			categories: [2011, 2016],
			title: {text: 'Year'}
		},
		yAxis: {
			min: 0,
			title: {text: 'Number of Players'}
		},
		tooltip: {enabled: false},
		plotOptions: {column: {
			dataLabels: {
                enabled: true,
                format: '{point.y:.1f}'
			},
			showInLegend: true,
		}},
        series: [{data: [4558, 15405], showInLegend: false, color: '#ffa500'}],
	});
})