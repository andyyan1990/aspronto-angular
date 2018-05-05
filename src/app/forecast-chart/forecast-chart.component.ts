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

	constructor(private forecast: ForecastService, private AmCharts: AmChartsService) { }

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
		this.chart = this.AmCharts.makeChart("chartdiv", {
			"type": "serial",
			"categoryField": "category",
			"fontSize": 21,
			"startDuration": 1,
			"theme": "chalk",
			"categoryAxis": {
				"gridPosition": "start"
			},
			"chartCursor": {
				"enabled": true
			},
			"trendLines": [],
			"graphs": [
				{
					"balloonText": "min:[[open]] max:[[close]]",
					"closeField": "close",
					"customMarker": "aspronto",
					"columnWidth": 0.7,
					"cornerRadiusTop": 4,
					"dashLength": 4,
					"showHandOnHover": true,
					"legendAlpha": 0.7,
					"fillAlphas": 0.8,
					valueField: "",
					"labelText": "[[label]]",
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
					"category": forcastArray[0].Date.slice(0, 10),
					"open": forcastArray[0].Temperature.Minimum.Value,
					"close": forcastArray[0].Temperature.Maximum.Value,
					"label": this.calculateAsthmeRiskLevel(
						forcastArray[0].Temperature.Minimum.Value,
						forcastArray[0].Temperature.Maximum.Value)
						},
				{
					"category": forcastArray[1].Date.slice(0, 10),
					"open": forcastArray[1].Temperature.Minimum.Value,
					"close": forcastArray[1].Temperature.Maximum.Value,
					"label": this.calculateAsthmeRiskLevel(
						forcastArray[1].Temperature.Minimum.Value,
						forcastArray[1].Temperature.Maximum.Value)
				},
				{
					"category": forcastArray[2].Date.slice(0, 10),
					"open": forcastArray[2].Temperature.Minimum.Value,
					"close": forcastArray[2].Temperature.Maximum.Value,
					"label": this.calculateAsthmeRiskLevel(
						forcastArray[2].Temperature.Minimum.Value,
						forcastArray[2].Temperature.Maximum.Value)
				},
				{
					"category": forcastArray[3].Date.slice(0, 10),
					"open": forcastArray[3].Temperature.Minimum.Value,
					"close": forcastArray[3].Temperature.Maximum.Value,
					"label": this.calculateAsthmeRiskLevel(
						forcastArray[3].Temperature.Minimum.Value,
						forcastArray[3].Temperature.Maximum.Value)
				},
				{
					"category": forcastArray[4].Date.slice(0, 10),
					"open": forcastArray[4].Temperature.Minimum.Value,
					"close": forcastArray[4].Temperature.Maximum.Value,
					"label": this.calculateAsthmeRiskLevel(
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

	calculateAsthmeRiskLevel(min: number, max: number) {
		var index = 
		 (this.index[0] * max) 
		 + (this.index[1] * min) 
		 + (max - min) * this.index[2];
		 if(index < 14.2){
			 return "Low"
		 }else{
			 if(index <29){
				 return "high"
			 }else{
				 return "critical"
			 }
		 }
	}

}
