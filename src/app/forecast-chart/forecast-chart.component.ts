import { HerokuDataModelService } from './../heroku-data-model.service';
import { Component, OnInit } from '@angular/core';
import { ForecastService } from './../forecast.service';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
	selector: 'app-forecast-chart',
	templateUrl: './forecast-chart.component.html',
	styleUrls: ['./forecast-chart.component.css']
})
export class ForecastChartComponent implements OnInit {

	forecastData;
	headline;
	dailyForecastList: [any];
	private chart: AmChart;
	index = [-0.2658319726, 0.785972211, -1.0518041836]
	colour = {
		"Low": "#9bae7d",
		"Medium": "#fb8b40",
		"High": "#f9201e"
	}

	constructor(private forecast: ForecastService, 
				private AmCharts: AmChartsService,
				private heroku: HerokuDataModelService) { }

	ngOnInit() {
		this.forecastData = this.forecast.getForecastData().subscribe(
			fd => {
				this.forecastData = fd;
				this.headline = this.forecastData.headline;
				this.dailyForecastList = this.forecastData.DailyForecasts;
				this.makeAmChart(this.dailyForecastList);
			}
		);

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
					"showHandOnHover": true,
					"legendAlpha": 0.7,
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
			"titles": [
				{
					"id": "Title-1",
					"size": 25,
					"text": "Asthma Risk Level Forecast"
				}
			],
			"dataProvider": [
				{
					"category": this.getWeekday(this.AmCharts.stringToDate(forcastArray[0].Date.slice(0, 10), 'YYYY-MM-DD').getDay()),
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
					"category": this.getWeekday(this.AmCharts.stringToDate(forcastArray[1].Date.slice(0, 10), 'YYYY-MM-DD').getDay()),
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
					"category": this.getWeekday(this.AmCharts.stringToDate(forcastArray[2].Date.slice(0, 10), 'YYYY-MM-DD').getDay()),
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
					"category": this.getWeekday(this.AmCharts.stringToDate(forcastArray[3].Date.slice(0, 10), 'YYYY-MM-DD').getDay()),
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
					"category": this.getWeekday(this.AmCharts.stringToDate(forcastArray[4].Date.slice(0, 10), 'YYYY-MM-DD').getDay()),
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
	ngAfterViewInit() {

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
		if (index < 6) {
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
		if (index < 6) {
			return "Low"
		} else {
			if (index < 29) {
				return "Medium"
			} else {
				return "High"
			}
		}


	}

	getWeekday(dayNumber:number){
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
