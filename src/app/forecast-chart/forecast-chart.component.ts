import { HerokuDataModelService } from './../heroku-data-model.service';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ForecastService } from './../forecast.service';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { ShareDataService } from '../share-data.service';

@Component({
	selector: 'app-forecast-chart',
	templateUrl: './forecast-chart.component.html',
	styleUrls: ['./forecast-chart.component.css']
})
export class ForecastChartComponent implements OnInit {

	forecastData;
	headline;
	dailyForecastList: [any];
	threeHourForecastList: [any];
	@Input() currentLocation;
	private chart: AmChart;
	index = [-0.2658319726, 0.785972211, -1.0518041836]
	colour = {
		"Low": "#9bae7d",
		"Medium": "#fb8b40",
		"High": "#f9201e"
	}

	constructor(private forecast: ForecastService,
		private AmCharts: AmChartsService,
		private heroku: HerokuDataModelService,
		private shareData: ShareDataService) { }

	ngOnInit() {
		// this.forecastData = this.forecast.getForecastData().subscribe(
		// 	fd => {
		// 		this.forecastData = fd;
		// 		this.headline = this.forecastData.headline;
		// 		this.dailyForecastList = this.forecastData.DailyForecasts;
		// 		this.makeAmChart(this.dailyForecastList);
		// 	}
		// );
		// this.shareData.currentLocationMessage.subscribe(location => {
		// 	this.currentLocation = location.toString()
		// })
	}

	makeAmChart(forcastArray: [any]) {
		var weather: string = forcastArray[0].Day.IconPhrase
		this.chart = this.AmCharts.makeChart("chartdiv", {
			"type": "serial",
			"categoryField": "category",
			"fontSize": 21,
			"startDuration": 1,
			"theme": "dark",
			"categoryAxis": {
				"gridPosition": "start",
				"autoWrap": true
			},
			"chartCursor": {
				"enabled": true
			},
			"trendLines": [],
			"graphs": [
				{
					"balloonText": "min:[[open]]°C max:[[close]]°C",
					"closeField": "close",
					"customMarker": "aspronto",
					"columnWidth": 0.7,
					"cornerRadiusTop": 4,
					"dashLength": 4,
					"showHandOnHover": false,
					"legendAlpha": 0.9,
					"fillAlphas": 1,
					valueField: "",
					"labelText": "[[label]]",
					"showAllValueLabels": true,
					colorField: "color",
					// "labelFunction": function(data) {},
					"id": "AmGraph-1",
					"openField": "open",
					"title": "graph 1",
					"type": "column"
				}
			],
			"guides": [],
			"valueAxes": [
				{
					"id": "ValueAxis-1",
					"stackType": "regular",
					"title": "Temperature °C"
				}
			],
			"allLabels": [],
			"balloon": {},
			"legend": {
				"enabled": true,
				"useGraphSettings": false,
				"markerSize": 25,
				"data": [{ title: "Risk Level Low", color: this.colour.Low },
				{ title: "Risk Level Medium", color: this.colour.Medium },
				{ title: "Risk Level High", color: this.colour.High },
				{ title: "Bar Chart - Range of Temperature", color: "#FFFFFF", "markerType": "circle" }
				]
			},
			"titles": [
				{
					"id": "Title-1",
					"size": 25,
					"text": "Asthma Risk Level Forecast"
				}
			],
			"dataProvider": [
				{
					"category": this.AmCharts.stringToDate(forcastArray[0].Date.slice(0, 10), 'YYYY-MM-DD').toLocaleDateString(),
					"open": forcastArray[0].Temperature.Minimum.Value,
					"close": forcastArray[0].Temperature.Maximum.Value,
					"label": this.calculateAsthmeRiskLevel(
						forcastArray[0].Temperature.Minimum.Value,
						forcastArray[0].Temperature.Maximum.Value),
					"color": this.calculateAsthmeRiskLevelColour(
						forcastArray[0].Temperature.Minimum.Value,
						forcastArray[0].Temperature.Maximum.Value)
				},
				{
					"category": this.AmCharts.stringToDate(forcastArray[1].Date.slice(0, 10), 'YYYY-MM-DD').toLocaleDateString(),
					"open": forcastArray[1].Temperature.Minimum.Value,
					"close": forcastArray[1].Temperature.Maximum.Value,
					"label": this.calculateAsthmeRiskLevel(
						forcastArray[1].Temperature.Minimum.Value,
						forcastArray[1].Temperature.Maximum.Value),
					"color": this.calculateAsthmeRiskLevelColour(
						forcastArray[1].Temperature.Minimum.Value,
						forcastArray[1].Temperature.Maximum.Value)
				},
				{
					"category": this.AmCharts.stringToDate(forcastArray[2].Date.slice(0, 10), 'YYYY-MM-DD').toLocaleDateString(),
					"open": forcastArray[2].Temperature.Minimum.Value,
					"close": forcastArray[2].Temperature.Maximum.Value,
					"label": this.calculateAsthmeRiskLevel(
						forcastArray[2].Temperature.Minimum.Value,
						forcastArray[2].Temperature.Maximum.Value),
					"color": this.calculateAsthmeRiskLevelColour(
						forcastArray[2].Temperature.Minimum.Value,
						forcastArray[2].Temperature.Maximum.Value)
				},
				{
					"category": this.AmCharts.stringToDate(forcastArray[3].Date.slice(0, 10), 'YYYY-MM-DD').toLocaleDateString(),
					"open": forcastArray[3].Temperature.Minimum.Value,
					"close": forcastArray[3].Temperature.Maximum.Value,
					"label": this.calculateAsthmeRiskLevel(
						forcastArray[3].Temperature.Minimum.Value,
						forcastArray[3].Temperature.Maximum.Value),
					"color": this.calculateAsthmeRiskLevelColour(
						forcastArray[3].Temperature.Minimum.Value,
						forcastArray[3].Temperature.Maximum.Value)
				},
				{
					"category": this.AmCharts.stringToDate(forcastArray[4].Date.slice(0, 10), 'YYYY-MM-DD').toLocaleDateString(),
					"open": forcastArray[4].Temperature.Minimum.Value,
					"close": forcastArray[4].Temperature.Maximum.Value,
					"label": this.calculateAsthmeRiskLevel(
						forcastArray[4].Temperature.Minimum.Value,
						forcastArray[4].Temperature.Maximum.Value),
					"color": this.calculateAsthmeRiskLevelColour(
						forcastArray[4].Temperature.Minimum.Value,
						forcastArray[4].Temperature.Maximum.Value)
				}
			]
		});
	}

	makeNewAmChart(forcastArray: [any]) {
		var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit' };

		this.chart = this.AmCharts.makeChart("chartdiv", {
			"type": "serial",
			"categoryField": "date",
			"fontSize": 21,
			"startDuration": 1,
			"theme": "dark",
			"categoryAxis": {
				"gridPosition": "start",
				"autoWrap": true
			},
			"chartCursor": {
				"enabled": true
			},
			"trendLines": [],
			"graphs": [
				{
					"balloonText": "Risk Level:[[label]]",
					"customMarker": "aspronto",
					"showHandOnHover": false,
					"legendAlpha": 0.9,
					valueField: "temp",
					"labelText": "[[label]]",
					"labelAnchor": "middle",
					"labelPosition": "top",
					"showAllValueLabels": true,
					"id": "AmGraph-1",
					"title": "graph 1",
					"bullet": "square",
					"bulletSize": 25,
					"colorField": "color"
				}
			],
			"guides": [],
			"valueAxes": [
				{
					"id": "ValueAxis-1",
					//"stackType": "regular",
					"title": "Temperature °C"
				}
			],
			"allLabels": [],
			"balloon": {},
			"legend": {
				"enabled": true,
				"useGraphSettings": false,
				"markerSize": 25,
				"data": [{ title: "Risk Level Low", color: this.colour.Low },
				{ title: "Risk Level Medium", color: this.colour.Medium },
				{ title: "Risk Level High", color: this.colour.High }
				]
			},
			"titles": [
				{
					"id": "Title-1",
					"size": 25,
					"text": "Asthma Risk Level Forecast"
				}
			],
			"dataProvider": [
				{
					//
					"date": new Date(forcastArray[0]['dt'] * 1000).toLocaleString('en-AU', options),
					"temp": Math.round((300 - forcastArray[0]['main']['temp']) * 100) / 100,
					"label": this.calculateAsthmeRiskLevel(
						300 - forcastArray[0]['main']['temp_min'],
						300 - forcastArray[0]['main']['temp_max']),
					"color": this.calculateAsthmeRiskLevelColour(
						300 - forcastArray[0]['main']['temp_min'],
						300 - forcastArray[0]['main']['temp_max'])
				},
				{
					//
					"date": new Date(forcastArray[1]['dt'] * 1000).toLocaleString('en-AU', options),
					"temp": Math.round((300 - forcastArray[1]['main']['temp']) * 100) / 100,
					"label": this.calculateAsthmeRiskLevel(
						300 - forcastArray[1]['main']['temp_min'],
						300 - forcastArray[1]['main']['temp_max']),
					"color": this.calculateAsthmeRiskLevelColour(
						300 - forcastArray[1]['main']['temp_min'],
						300 - forcastArray[1]['main']['temp_max'])
				},
				{
					//
					"date": new Date(forcastArray[2]['dt'] * 1000).toLocaleString('en-AU', options),
					"temp": Math.round((300 - forcastArray[2]['main']['temp']) * 100) / 100,
					"label": this.calculateAsthmeRiskLevel(
						300 - forcastArray[2]['main']['temp_min'],
						300 - forcastArray[2]['main']['temp_max']),
					"color": this.calculateAsthmeRiskLevelColour(
						300 - forcastArray[2]['main']['temp_min'],
						300 - forcastArray[2]['main']['temp_max'])
				},
				{
					//
					"date": new Date(forcastArray[3]['dt'] * 1000).toLocaleString('en-AU', options),
					"temp": Math.round((300 - forcastArray[3]['main']['temp']) * 100) / 100,
					"label": this.calculateAsthmeRiskLevel(
						300 - forcastArray[3]['main']['temp_min'],
						300 - forcastArray[3]['main']['temp_max']),
					"color": this.calculateAsthmeRiskLevelColour(
						300 - forcastArray[3]['main']['temp_min'],
						300 - forcastArray[3]['main']['temp_max'])
				},
				{
					//
					"date": new Date(forcastArray[4]['dt'] * 1000).toLocaleString('en-AU', options),
					"temp": Math.round((300 - forcastArray[4]['main']['temp']) * 100) / 100,
					"label": this.calculateAsthmeRiskLevel(
						300 - forcastArray[4]['main']['temp_min'],
						300 - forcastArray[4]['main']['temp_max']),
					"color": this.calculateAsthmeRiskLevelColour(
						300 - forcastArray[4]['main']['temp_min'],
						300 - forcastArray[4]['main']['temp_max'])
				},
				{
					//
					"date": new Date(forcastArray[5]['dt'] * 1000).toLocaleString('en-AU', options),
					"temp": Math.round((300 - forcastArray[5]['main']['temp']) * 100) / 100,
					"label": this.calculateAsthmeRiskLevel(
						300 - forcastArray[5]['main']['temp_min'],
						300 - forcastArray[5]['main']['temp_max']),
					"color": this.calculateAsthmeRiskLevelColour(
						300 - forcastArray[5]['main']['temp_min'],
						300 - forcastArray[5]['main']['temp_max'])
				},
				{
					//
					"date": new Date(forcastArray[6]['dt'] * 1000).toLocaleString('en-AU', options),
					"temp": Math.round((300 - forcastArray[3]['main']['temp']) * 100) / 100,
					"label": this.calculateAsthmeRiskLevel(
						300 - forcastArray[6]['main']['temp_min'],
						300 - forcastArray[6]['main']['temp_max']),
					"color": this.calculateAsthmeRiskLevelColour(
						300 - forcastArray[6]['main']['temp_min'],
						300 - forcastArray[6]['main']['temp_max'])
				}
			]
		});
	}

	ngAfterViewInit() { 
		this.forecast.getOpenWeatherForecastData(this.currentLocation).subscribe(
			fd => {
				this.forecastData = fd
				this.threeHourForecastList = this.forecastData['list']
				this.makeNewAmChart(this.threeHourForecastList);
			}
		)
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('change detected')
		if (changes['currentLocation']) {
			this.forecast.getOpenWeatherForecastData(this.currentLocation).subscribe(
				fd => {
					this.forecastData = fd
					this.threeHourForecastList = this.forecastData['list']
					this.makeNewAmChart(this.threeHourForecastList);
				}
			)
		}

	}

	ngOnDestroy() {
		if (this.chart) {
			this.AmCharts.destroyChart(this.chart);
		}
	}

	calculateAsthmeRiskLevelColour(min: number, max: number) {
		var index =
			(this.index[0] * min)
			+ (this.index[1] * max)
			+ (max - min) * this.index[2];
		if (index < 10) {
			return this.colour.Low
		} else {
			if (index < 29) {
				return this.colour.Medium
			} else {
				return this.colour.High
			}
		}
	}

	calculateAsthmeRiskLevel(min: number, max: number) {
		var index =
			(this.index[0] * min)
			+ (this.index[1] * max)
			+ (max - min) * this.index[2];
		if (index < 10) {
			return "Low"
		} else {
			if (index < 29) {
				return "Medium"
			} else {
				return "High"
			}
		}


	}

	getWeekday(dayNumber: number) {
		switch (dayNumber) {
			case 0: return 'Sunday';
			case 1: return 'Monday';
			case 2: return 'Tuesday';
			case 3: return 'Wednesday';
			case 4: return 'Thursday';
			case 5: return 'Friday';
			case 6: return 'Saturday';
			default:
				break;
		}
	}

}
