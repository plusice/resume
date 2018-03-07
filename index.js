var myChart = echarts.init(document.getElementById('js_sidebar_skills'));

option = {
	color: ['#f4f4f4'],
    series: [{
		type: 'treemap',
		roam: false,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		silent: true,
		breadcrumb: {
			show: false
		},
		label: {
			color: '#ccc'
		},
        itemStyle: {
			normal: {
				borderWidth: 0,
				gapWidth: 1
			}
		},
        data: [{
			name: 'Javascript',
			value: 9
		},{
			name: 'Html5/CSS3',
			value: 7
		},{
			name: 'Vue',
			value: 7
		},{
			name: 'Node.js',
			value: 5
		},{
			name: 'Webpack',
			value: 5
		},{
			name: 'Http',
			value: 5
		},{
			name: 'ES6',
			value: 3
		},{
			name: 'Linux',
			value: 2
		},{
			name: 'Git',
			value: 2
		}]
    }]
};


myChart.setOption(option);