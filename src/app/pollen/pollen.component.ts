import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { MatTabChangeEvent } from '@angular/material';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-pollen',
  templateUrl: './pollen.component.html',
  styleUrls: ['./pollen.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        // transform: "translateX(0)"
      })),
      state('hide', style({
        opacity: 0,
        // transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class PollenComponent implements OnInit {

  state = 'show'

  private chart: AmChart;

  private dataSource_2012 = [
    {
      "category": "01/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "02/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "03/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "04/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "05/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "06/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "07/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "08/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "09/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "10/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "11/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "12/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "13/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "14/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "15/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "16/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "17/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "18/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "19/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "20/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "21/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "22/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "23/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "24/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "25/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "26/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "27/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "28/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "29/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "30/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "31/01/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "01/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "02/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "03/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "04/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "05/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "06/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "07/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "08/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "09/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "10/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "11/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "12/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "13/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "14/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "15/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "16/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "17/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "18/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "19/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "20/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "21/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "22/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "23/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "24/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "25/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "26/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "27/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "28/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "29/02/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "01/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "02/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "03/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "04/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "05/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "06/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "07/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "08/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "09/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "10/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "11/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "12/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "13/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "14/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "15/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "16/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "17/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "18/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "19/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "20/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "21/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "22/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "23/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "24/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "25/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "26/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "27/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "28/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "29/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "30/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "31/03/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "01/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "02/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "03/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "04/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "05/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "06/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "07/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "08/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "09/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "10/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "11/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "12/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "13/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "14/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "15/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "16/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "17/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "18/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "19/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "20/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "21/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "22/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "23/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "24/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "25/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "26/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "27/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "28/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "29/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "30/04/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "01/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "02/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "03/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "04/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "05/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "06/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "07/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "08/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "09/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "10/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "11/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "12/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "13/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "14/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "15/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "16/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "17/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "18/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "19/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "20/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "21/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "22/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "23/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "24/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "25/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "26/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "27/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "28/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "29/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "30/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "31/05/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "01/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "02/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "03/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "04/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "05/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "06/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "07/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "08/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "09/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "10/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "11/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "12/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "13/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "14/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "15/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "16/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "17/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "18/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "19/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "20/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "21/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "22/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "23/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "24/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "25/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "26/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "27/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "28/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "29/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "30/06/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "01/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "02/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "03/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "04/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "05/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "06/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "07/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "08/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "09/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "10/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "11/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "12/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "13/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "14/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "15/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "16/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "17/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "18/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "19/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "20/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "21/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "22/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "23/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "24/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "25/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "26/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "27/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "28/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "29/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "30/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "31/07/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "01/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "02/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "03/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "04/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "05/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "06/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "07/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "08/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "09/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "10/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "11/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "12/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "13/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "14/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "15/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "16/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "17/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "18/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "19/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "20/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "21/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "22/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "23/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "24/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "25/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "26/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "27/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "28/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "29/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "30/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "31/08/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "01/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "02/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "03/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "04/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "05/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "06/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "07/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "08/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "09/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "10/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "11/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "12/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "13/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "14/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "15/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "16/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "17/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "18/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "19/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "20/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "21/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "22/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "23/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "24/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "25/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "26/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "27/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "28/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "29/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "30/09/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "01/10/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "02/10/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "03/10/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "04/10/2012",
      "station": "Melbourne",
      "column-1": "14"
    },
    {
      "category": "05/10/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "06/10/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "07/10/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "08/10/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "09/10/2012",
      "station": "Melbourne",
      "column-1": "2"
    },
    {
      "category": "10/10/2012",
      "station": "Melbourne",
      "column-1": "7"
    },
    {
      "category": "11/10/2012",
      "station": "Melbourne",
      "column-1": "10"
    },
    {
      "category": "12/10/2012",
      "station": "Melbourne",
      "column-1": "2"
    },
    {
      "category": "13/10/2012",
      "station": "Melbourne",
      "column-1": "7"
    },
    {
      "category": "14/10/2012",
      "station": "Melbourne",
      "column-1": "14"
    },
    {
      "category": "15/10/2012",
      "station": "Melbourne",
      "column-1": "19"
    },
    {
      "category": "16/10/2012",
      "station": "Melbourne",
      "column-1": "14"
    },
    {
      "category": "17/10/2012",
      "station": "Melbourne",
      "column-1": "5"
    },
    {
      "category": "18/10/2012",
      "station": "Melbourne",
      "column-1": "5"
    },
    {
      "category": "19/10/2012",
      "station": "Melbourne",
      "column-1": "10"
    },
    {
      "category": "20/10/2012",
      "station": "Melbourne",
      "column-1": "9"
    },
    {
      "category": "21/10/2012",
      "station": "Melbourne",
      "column-1": "5"
    },
    {
      "category": "22/10/2012",
      "station": "Melbourne",
      "column-1": "5"
    },
    {
      "category": "23/10/2012",
      "station": "Melbourne",
      "column-1": "17"
    },
    {
      "category": "24/10/2012",
      "station": "Melbourne",
      "column-1": "54"
    },
    {
      "category": "25/10/2012",
      "station": "Melbourne",
      "column-1": "56"
    },
    {
      "category": "26/10/2012",
      "station": "Melbourne",
      "column-1": "5"
    },
    {
      "category": "27/10/2012",
      "station": "Melbourne",
      "column-1": "5"
    },
    {
      "category": "28/10/2012",
      "station": "Melbourne",
      "column-1": "8"
    },
    {
      "category": "29/10/2012",
      "station": "Melbourne",
      "column-1": "39"
    },
    {
      "category": "30/10/2012",
      "station": "Melbourne",
      "column-1": "66"
    },
    {
      "category": "31/10/2012",
      "station": "Melbourne",
      "column-1": "75"
    },
    {
      "category": "01/11/2012",
      "station": "Melbourne",
      "column-1": "31"
    },
    {
      "category": "02/11/2012",
      "station": "Melbourne",
      "column-1": "2"
    },
    {
      "category": "03/11/2012",
      "station": "Melbourne",
      "column-1": "7"
    },
    {
      "category": "04/11/2012",
      "station": "Melbourne",
      "column-1": "92"
    },
    {
      "category": "05/11/2012",
      "station": "Melbourne",
      "column-1": "175"
    },
    {
      "category": "06/11/2012",
      "station": "Melbourne",
      "column-1": "119"
    },
    {
      "category": "07/11/2012",
      "station": "Melbourne",
      "column-1": "48"
    },
    {
      "category": "08/11/2012",
      "station": "Melbourne",
      "column-1": "41"
    },
    {
      "category": "09/11/2012",
      "station": "Melbourne",
      "column-1": "125"
    },
    {
      "category": "10/11/2012",
      "station": "Melbourne",
      "column-1": "7"
    },
    {
      "category": "11/11/2012",
      "station": "Melbourne",
      "column-1": "117"
    },
    {
      "category": "12/11/2012",
      "station": "Melbourne",
      "column-1": "180"
    },
    {
      "category": "13/11/2012",
      "station": "Melbourne",
      "column-1": "22"
    },
    {
      "category": "14/11/2012",
      "station": "Melbourne",
      "column-1": "24"
    },
    {
      "category": "15/11/2012",
      "station": "Melbourne",
      "column-1": "66"
    },
    {
      "category": "16/11/2012",
      "station": "Melbourne",
      "column-1": "12"
    },
    {
      "category": "17/11/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "18/11/2012",
      "station": "Melbourne",
      "column-1": "22"
    },
    {
      "category": "19/11/2012",
      "station": "Melbourne",
      "column-1": "22"
    },
    {
      "category": "20/11/2012",
      "station": "Melbourne",
      "column-1": "68"
    },
    {
      "category": "21/11/2012",
      "station": "Melbourne",
      "column-1": "46"
    },
    {
      "category": "22/11/2012",
      "station": "Melbourne",
      "column-1": "7"
    },
    {
      "category": "23/11/2012",
      "station": "Melbourne",
      "column-1": "15"
    },
    {
      "category": "24/11/2012",
      "station": "Melbourne",
      "column-1": "87"
    },
    {
      "category": "25/11/2012",
      "station": "Melbourne",
      "column-1": "73"
    },
    {
      "category": "26/11/2012",
      "station": "Melbourne",
      "column-1": "39"
    },
    {
      "category": "27/11/2012",
      "station": "Melbourne",
      "column-1": "44"
    },
    {
      "category": "28/11/2012",
      "station": "Melbourne",
      "column-1": "87"
    },
    {
      "category": "29/11/2012",
      "station": "Melbourne",
      "column-1": "129"
    },
    {
      "category": "30/11/2012",
      "station": "Melbourne",
      "column-1": "94"
    },
    {
      "category": "01/12/2012",
      "station": "Melbourne",
      "column-1": "70"
    },
    {
      "category": "02/12/2012",
      "station": "Melbourne",
      "column-1": "82"
    },
    {
      "category": "03/12/2012",
      "station": "Melbourne",
      "column-1": "41"
    },
    {
      "category": "04/12/2012",
      "station": "Melbourne",
      "column-1": "48"
    },
    {
      "category": "05/12/2012",
      "station": "Melbourne",
      "column-1": "13"
    },
    {
      "category": "06/12/2012",
      "station": "Melbourne",
      "column-1": "4"
    },
    {
      "category": "07/12/2012",
      "station": "Melbourne",
      "column-1": "57"
    },
    {
      "category": "08/12/2012",
      "station": "Melbourne",
      "column-1": "56"
    },
    {
      "category": "09/12/2012",
      "station": "Melbourne",
      "column-1": "26"
    },
    {
      "category": "10/12/2012",
      "station": "Melbourne",
      "column-1": "2"
    },
    {
      "category": "11/12/2012",
      "station": "Melbourne",
      "column-1": "27"
    },
    {
      "category": "12/12/2012",
      "station": "Melbourne",
      "column-1": "24"
    },
    {
      "category": "13/12/2012",
      "station": "Melbourne",
      "column-1": "25"
    },
    {
      "category": "14/12/2012",
      "station": "Melbourne",
      "column-1": "2"
    },
    {
      "category": "15/12/2012",
      "station": "Melbourne",
      "column-1": "5"
    },
    {
      "category": "16/12/2012",
      "station": "Melbourne",
      "column-1": "0"
    },
    {
      "category": "17/12/2012",
      "station": "Melbourne",
      "column-1": "15"
    },
    {
      "category": "18/12/2012",
      "station": "Melbourne",
      "column-1": "93"
    },
    {
      "category": "19/12/2012",
      "station": "Melbourne",
      "column-1": "115"
    },
    {
      "category": "20/12/2012",
      "station": "Melbourne",
      "column-1": "2"
    },
    {
      "category": "21/12/2012",
      "station": "Melbourne",
      "column-1": "2"
    },
    {
      "category": "22/12/2012",
      "station": "Melbourne",
      "column-1": "61"
    },
    {
      "category": "23/12/2012",
      "station": "Melbourne",
      "column-1": "107"
    },
    {
      "category": "24/12/2012",
      "station": "Melbourne",
      "column-1": "80"
    },
    {
      "category": "25/12/2012",
      "station": "Melbourne",
      "column-1": "12"
    },
    {
      "category": "26/12/2012",
      "station": "Melbourne",
      "column-1": "22"
    },
    {
      "category": "27/12/2012",
      "station": "Melbourne",
      "column-1": "73"
    },
    {
      "category": "28/12/2012",
      "station": "Melbourne",
      "column-1": "10"
    },
    {
      "category": "29/12/2012",
      "station": "Melbourne",
      "column-1": "6"
    },
    {
      "category": "30/12/2012",
      "station": "Melbourne",
      "column-1": "14"
    },
    {
      "category": "31/12/2012",
      "station": "Melbourne",
      "column-1": "9"
    }
  ]

  private dataSource_2013 = [
    { "category": "01/01/2013", "station": "Melbourne", "column-1": "5" },
    { "category": "02/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "03/01/2013", "station": "Melbourne", "column-1": "9" },
    { "category": "04/01/2013", "station": "Melbourne", "column-1": "10" },
    { "category": "05/01/2013", "station": "Melbourne", "column-1": "3" },
    { "category": "06/01/2013", "station": "Melbourne", "column-1": "3" },
    { "category": "07/01/2013", "station": "Melbourne", "column-1": "12" },
    { "category": "08/01/2013", "station": "Melbourne", "column-1": "9" },
    { "category": "09/01/2013", "station": "Melbourne", "column-1": "7" },
    { "category": "10/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "11/01/2013", "station": "Melbourne", "column-1": "42" },
    { "category": "12/01/2013", "station": "Melbourne", "column-1": "3" },
    { "category": "13/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "14/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "15/01/2013", "station": "Melbourne", "column-1": "3" },
    { "category": "16/01/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "17/01/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "18/01/2013", "station": "Melbourne", "column-1": "17" },
    { "category": "19/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "20/01/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "21/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "22/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "23/01/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "24/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "25/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "26/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "27/01/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "28/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "29/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "30/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "31/01/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "01/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "02/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "03/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "04/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "05/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "06/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "07/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "08/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "09/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "10/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "11/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "12/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "13/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "14/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "15/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "16/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "17/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "18/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "19/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "20/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "21/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "22/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "23/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "24/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "25/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "26/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "27/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "28/02/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "01/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "02/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "03/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "04/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "05/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "06/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "07/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "08/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "09/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "10/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "11/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "12/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "13/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "14/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "15/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "16/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "17/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "18/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "19/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "20/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "21/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "22/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "23/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "24/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "25/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "26/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "27/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "28/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "29/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "30/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "31/03/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "01/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "02/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "03/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "04/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "05/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "06/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "07/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "08/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "09/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "10/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "11/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "12/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "13/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "14/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "15/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "16/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "17/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "18/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "19/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "20/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "21/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "22/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "23/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "24/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "25/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "26/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "27/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "28/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "29/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "30/04/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "01/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "02/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "03/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "04/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "05/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "06/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "07/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "08/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "09/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "10/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "11/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "12/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "13/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "14/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "15/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "16/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "17/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "18/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "19/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "20/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "21/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "22/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "23/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "24/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "25/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "26/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "27/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "28/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "29/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "30/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "31/05/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "01/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "02/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "03/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "04/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "05/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "06/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "07/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "08/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "09/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "10/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "11/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "12/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "13/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "14/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "15/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "16/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "17/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "18/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "19/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "20/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "21/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "22/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "23/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "24/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "25/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "26/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "27/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "28/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "29/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "30/06/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "01/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "02/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "03/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "04/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "05/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "06/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "07/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "08/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "09/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "10/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "11/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "12/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "13/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "14/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "15/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "16/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "17/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "18/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "19/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "20/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "21/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "22/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "23/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "24/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "25/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "26/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "27/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "28/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "29/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "30/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "31/07/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "01/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "02/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "03/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "04/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "05/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "06/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "07/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "08/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "09/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "10/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "11/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "12/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "13/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "14/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "15/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "16/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "17/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "18/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "19/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "20/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "21/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "22/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "23/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "24/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "25/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "26/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "27/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "28/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "29/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "30/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "31/08/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "01/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "02/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "03/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "04/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "05/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "06/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "07/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "08/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "09/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "10/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "11/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "12/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "13/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "14/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "15/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "16/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "17/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "18/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "19/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "20/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "21/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "22/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "23/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "24/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "25/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "26/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "27/09/2013", "station": "Melbourne", "column-1": "10" },
    { "category": "28/09/2013", "station": "Melbourne", "column-1": "5" },
    { "category": "29/09/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "30/09/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "01/10/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "02/10/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "03/10/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "04/10/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "05/10/2013", "station": "Melbourne", "column-1": "15" },
    { "category": "06/10/2013", "station": "Melbourne", "column-1": "9" },
    { "category": "07/10/2013", "station": "Melbourne", "column-1": "10" },
    { "category": "08/10/2013", "station": "Melbourne", "column-1": "12" },
    { "category": "09/10/2013", "station": "Melbourne", "column-1": "25" },
    { "category": "10/10/2013", "station": "Melbourne", "column-1": "19" },
    { "category": "11/10/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "12/10/2013", "station": "Melbourne", "column-1": "23" },
    { "category": "13/10/2013", "station": "Melbourne", "column-1": "19" },
    { "category": "14/10/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "15/10/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "16/10/2013", "station": "Melbourne", "column-1": "12" },
    { "category": "17/10/2013", "station": "Melbourne", "column-1": "12" },
    { "category": "18/10/2013", "station": "Melbourne", "column-1": "9" },
    { "category": "19/10/2013", "station": "Melbourne", "column-1": "85" },
    { "category": "20/10/2013", "station": "Melbourne", "column-1": "58" },
    { "category": "21/10/2013", "station": "Melbourne", "column-1": "25" },
    { "category": "22/10/2013", "station": "Melbourne", "column-1": "1" },
    { "category": "23/10/2013", "station": "Melbourne", "column-1": "8" },
    { "category": "24/10/2013", "station": "Melbourne", "column-1": "5" },
    { "category": "25/10/2013", "station": "Melbourne", "column-1": "6" },
    { "category": "26/10/2013", "station": "Melbourne", "column-1": "10" },
    { "category": "27/10/2013", "station": "Melbourne", "column-1": "34" },
    { "category": "28/10/2013", "station": "Melbourne", "column-1": "7" },
    { "category": "29/10/2013", "station": "Melbourne", "column-1": "5" },
    { "category": "30/10/2013", "station": "Melbourne", "column-1": "3" },
    { "category": "31/10/2013", "station": "Melbourne", "column-1": "10" },
    { "category": "01/11/2013", "station": "Melbourne", "column-1": "7" },
    { "category": "02/11/2013", "station": "Melbourne", "column-1": "65" },
    { "category": "03/11/2013", "station": "Melbourne", "column-1": "17" },
    { "category": "04/11/2013", "station": "Melbourne", "column-1": "7" },
    { "category": "05/11/2013", "station": "Melbourne", "column-1": "31" },
    { "category": "06/11/2013", "station": "Melbourne", "column-1": "61" },
    { "category": "07/11/2013", "station": "Melbourne", "column-1": "85" },
    { "category": "08/11/2013", "station": "Melbourne", "column-1": "9" },
    { "category": "09/11/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "10/11/2013", "station": "Melbourne", "column-1": "4" },
    { "category": "11/11/2013", "station": "Melbourne", "column-1": "37" },
    { "category": "12/11/2013", "station": "Melbourne", "column-1": "7" },
    { "category": "13/11/2013", "station": "Melbourne", "column-1": "3" },
    { "category": "14/11/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "15/11/2013", "station": "Melbourne", "column-1": "10" },
    { "category": "16/11/2013", "station": "Melbourne", "column-1": "9" },
    { "category": "17/11/2013", "station": "Melbourne", "column-1": "19" },
    { "category": "18/11/2013", "station": "Melbourne", "column-1": "51" },
    { "category": "19/11/2013", "station": "Melbourne", "column-1": "95" },
    { "category": "20/11/2013", "station": "Melbourne", "column-1": "20" },
    { "category": "21/11/2013", "station": "Melbourne", "column-1": "24" },
    { "category": "22/11/2013", "station": "Melbourne", "column-1": "44" },
    { "category": "23/11/2013", "station": "Melbourne", "column-1": "22" },
    { "category": "24/11/2013", "station": "Melbourne", "column-1": "10" },
    { "category": "25/11/2013", "station": "Melbourne", "column-1": "12" },
    { "category": "26/11/2013", "station": "Melbourne", "column-1": "75" },
    { "category": "27/11/2013", "station": "Melbourne", "column-1": "58" },
    { "category": "28/11/2013", "station": "Melbourne", "column-1": "104" },
    { "category": "29/11/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "30/11/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "01/12/2013", "station": "Melbourne", "column-1": "88" },
    { "category": "02/12/2013", "station": "Melbourne", "column-1": "92" },
    { "category": "03/12/2013", "station": "Melbourne", "column-1": "51" },
    { "category": "04/12/2013", "station": "Melbourne", "column-1": "26" },
    { "category": "05/12/2013", "station": "Melbourne", "column-1": "7" },
    { "category": "06/12/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "07/12/2013", "station": "Melbourne", "column-1": "49" },
    { "category": "08/12/2013", "station": "Melbourne", "column-1": "83" },
    { "category": "09/12/2013", "station": "Melbourne", "column-1": "30" },
    { "category": "10/12/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "11/12/2013", "station": "Melbourne", "column-1": "8" },
    { "category": "12/12/2013", "station": "Melbourne", "column-1": "12" },
    { "category": "13/12/2013", "station": "Melbourne", "column-1": "10" },
    { "category": "14/12/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "15/12/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "16/12/2013", "station": "Melbourne", "column-1": "3" },
    { "category": "17/12/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "18/12/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "19/12/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "20/12/2013", "station": "Melbourne", "column-1": "4" },
    { "category": "21/12/2013", "station": "Melbourne", "column-1": "4" },
    { "category": "22/12/2013", "station": "Melbourne", "column-1": "4" },
    { "category": "23/12/2013", "station": "Melbourne", "column-1": "39" },
    { "category": "24/12/2013", "station": "Melbourne", "column-1": "2" },
    { "category": "25/12/2013", "station": "Melbourne", "column-1": "68" },
    { "category": "26/12/2013", "station": "Melbourne", "column-1": "10" },
    { "category": "27/12/2013", "station": "Melbourne", "column-1": "5" },
    { "category": "28/12/2013", "station": "Melbourne", "column-1": "9" },
    { "category": "29/12/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "30/12/2013", "station": "Melbourne", "column-1": "0" },
    { "category": "31/12/2013", "station": "Melbourne", "column-1": "3" }
  ]

  private dataSource_2014 = [
    { "category": "01/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "02/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "03/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "04/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "05/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "06/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "07/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "08/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "09/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "10/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "11/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "12/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "13/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "14/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "15/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "16/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "17/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "18/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "19/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "20/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "21/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "22/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "23/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "24/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "25/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "26/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "27/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "28/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "29/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "30/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "31/01/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "01/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "02/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "03/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "04/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "05/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "06/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "07/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "08/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "09/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "10/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "11/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "12/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "13/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "14/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "15/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "16/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "17/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "18/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "19/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "20/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "21/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "22/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "23/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "24/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "25/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "26/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "27/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "28/02/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "01/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "02/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "03/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "04/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "05/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "06/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "07/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "08/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "09/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "10/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "11/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "12/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "13/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "14/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "15/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "16/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "17/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "18/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "19/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "20/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "21/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "22/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "23/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "24/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "25/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "26/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "27/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "28/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "29/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "30/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "31/03/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "01/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "02/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "03/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "04/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "05/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "06/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "07/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "08/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "09/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "10/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "11/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "12/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "13/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "14/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "15/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "16/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "17/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "18/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "19/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "20/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "21/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "22/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "23/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "24/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "25/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "26/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "27/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "28/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "29/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "30/04/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "01/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "02/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "03/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "04/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "05/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "06/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "07/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "08/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "09/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "10/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "11/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "12/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "13/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "14/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "15/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "16/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "17/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "18/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "19/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "20/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "21/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "22/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "23/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "24/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "25/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "26/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "27/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "28/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "29/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "30/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "31/05/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "01/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "02/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "03/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "04/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "05/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "06/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "07/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "08/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "09/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "10/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "11/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "12/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "13/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "14/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "15/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "16/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "17/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "18/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "19/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "20/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "21/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "22/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "23/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "24/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "25/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "26/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "27/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "28/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "29/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "30/06/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "01/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "02/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "03/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "04/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "05/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "06/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "07/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "08/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "09/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "10/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "11/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "12/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "13/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "14/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "15/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "16/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "17/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "18/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "19/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "20/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "21/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "22/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "23/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "24/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "25/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "26/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "27/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "28/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "29/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "30/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "31/07/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "01/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "02/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "03/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "04/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "05/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "06/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "07/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "08/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "09/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "10/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "11/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "12/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "13/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "14/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "15/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "16/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "17/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "18/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "19/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "20/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "21/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "22/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "23/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "24/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "25/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "26/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "27/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "28/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "29/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "30/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "31/08/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "01/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "02/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "03/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "04/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "05/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "06/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "07/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "08/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "09/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "10/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "11/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "12/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "13/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "14/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "15/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "16/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "17/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "18/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "19/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "20/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "21/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "22/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "23/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "24/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "25/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "26/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "27/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "28/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "29/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "30/09/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "01/10/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "02/10/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "03/10/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "04/10/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "05/10/2014", "station": "Melbourne", "column-1": "3" },
    { "category": "06/10/2014", "station": "Melbourne", "column-1": "3" },
    { "category": "07/10/2014", "station": "Melbourne", "column-1": "3" },
    { "category": "08/10/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "09/10/2014", "station": "Melbourne", "column-1": "5" },
    { "category": "10/10/2014", "station": "Melbourne", "column-1": "36" },
    { "category": "11/10/2014", "station": "Melbourne", "column-1": "10" },
    { "category": "12/10/2014", "station": "Melbourne", "column-1": "9" },
    { "category": "13/10/2014", "station": "Melbourne", "column-1": "3" },
    { "category": "14/10/2014", "station": "Melbourne", "column-1": "1" },
    { "category": "15/10/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "16/10/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "17/10/2014", "station": "Melbourne", "column-1": "5" },
    { "category": "18/10/2014", "station": "Melbourne", "column-1": "9" },
    { "category": "19/10/2014", "station": "Melbourne", "column-1": "53" },
    { "category": "20/10/2014", "station": "Melbourne", "column-1": "14" },
    { "category": "21/10/2014", "station": "Melbourne", "column-1": "20" },
    { "category": "22/10/2014", "station": "Melbourne", "column-1": "54" },
    { "category": "23/10/2014", "station": "Melbourne", "column-1": "12" },
    { "category": "24/10/2014", "station": "Melbourne", "column-1": "13" },
    { "category": "25/10/2014", "station": "Melbourne", "column-1": "15" },
    { "category": "26/10/2014", "station": "Melbourne", "column-1": "3" },
    { "category": "27/10/2014", "station": "Melbourne", "column-1": "17" },
    { "category": "28/10/2014", "station": "Melbourne", "column-1": "2" },
    { "category": "29/10/2014", "station": "Melbourne", "column-1": "12" },
    { "category": "30/10/2014", "station": "Melbourne", "column-1": "22" },
    { "category": "31/10/2014", "station": "Melbourne", "column-1": "41" },
    { "category": "01/11/2014", "station": "Melbourne", "column-1": "5" },
    { "category": "02/11/2014", "station": "Melbourne", "column-1": "2" },
    { "category": "03/11/2014", "station": "Melbourne", "column-1": "2" },
    { "category": "04/11/2014", "station": "Melbourne", "column-1": "43" },
    { "category": "05/11/2014", "station": "Melbourne", "column-1": "9" },
    { "category": "06/11/2014", "station": "Melbourne", "column-1": "2" },
    { "category": "07/11/2014", "station": "Melbourne", "column-1": "39" },
    { "category": "08/11/2014", "station": "Melbourne", "column-1": "39" },
    { "category": "09/11/2014", "station": "Melbourne", "column-1": "2" },
    { "category": "10/11/2014", "station": "Melbourne", "column-1": "2" },
    { "category": "11/11/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "12/11/2014", "station": "Melbourne", "column-1": "3" },
    { "category": "13/11/2014", "station": "Melbourne", "column-1": "20" },
    { "category": "14/11/2014", "station": "Melbourne", "column-1": "29" },
    { "category": "15/11/2014", "station": "Melbourne", "column-1": "5" },
    { "category": "16/11/2014", "station": "Melbourne", "column-1": "14" },
    { "category": "17/11/2014", "station": "Melbourne", "column-1": "8" },
    { "category": "18/11/2014", "station": "Melbourne", "column-1": "11" },
    { "category": "19/11/2014", "station": "Melbourne", "column-1": "16" },
    { "category": "20/11/2014", "station": "Melbourne", "column-1": "31" },
    { "category": "21/11/2014", "station": "Melbourne", "column-1": "5" },
    { "category": "22/11/2014", "station": "Melbourne", "column-1": "22" },
    { "category": "23/11/2014", "station": "Melbourne", "column-1": "15" },
    { "category": "24/11/2014", "station": "Melbourne", "column-1": "31" },
    { "category": "25/11/2014", "station": "Melbourne", "column-1": "2" },
    { "category": "26/11/2014", "station": "Melbourne", "column-1": "9" },
    { "category": "27/11/2014", "station": "Melbourne", "column-1": "3" },
    { "category": "28/11/2014", "station": "Melbourne", "column-1": "9" },
    { "category": "29/11/2014", "station": "Melbourne", "column-1": "7" },
    { "category": "30/11/2014", "station": "Melbourne", "column-1": "25" },
    { "category": "01/12/2014", "station": "Melbourne", "column-1": "20" },
    { "category": "02/12/2014", "station": "Melbourne", "column-1": "10" },
    { "category": "03/12/2014", "station": "Melbourne", "column-1": "14" },
    { "category": "04/12/2014", "station": "Melbourne", "column-1": "9" },
    { "category": "05/12/2014", "station": "Melbourne", "column-1": "17" },
    { "category": "06/12/2014", "station": "Melbourne", "column-1": "14" },
    { "category": "07/12/2014", "station": "Melbourne", "column-1": "9" },
    { "category": "08/12/2014", "station": "Melbourne", "column-1": "3" },
    { "category": "09/12/2014", "station": "Melbourne", "column-1": "5" },
    { "category": "10/12/2014", "station": "Melbourne", "column-1": "47" },
    { "category": "11/12/2014", "station": "Melbourne", "column-1": "7" },
    { "category": "12/12/2014", "station": "Melbourne", "column-1": "12" },
    { "category": "13/12/2014", "station": "Melbourne", "column-1": "36" },
    { "category": "14/12/2014", "station": "Melbourne", "column-1": "12" },
    { "category": "15/12/2014", "station": "Melbourne", "column-1": "5" },
    { "category": "16/12/2014", "station": "Melbourne", "column-1": "36" },
    { "category": "17/12/2014", "station": "Melbourne", "column-1": "2" },
    { "category": "18/12/2014", "station": "Melbourne", "column-1": "3" },
    { "category": "19/12/2014", "station": "Melbourne", "column-1": "2" },
    { "category": "20/12/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "21/12/2014", "station": "Melbourne", "column-1": "20" },
    { "category": "22/12/2014", "station": "Melbourne", "column-1": "20" },
    { "category": "23/12/2014", "station": "Melbourne", "column-1": "17" },
    { "category": "24/12/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "25/12/2014", "station": "Melbourne", "column-1": "15" },
    { "category": "26/12/2014", "station": "Melbourne", "column-1": "5" },
    { "category": "27/12/2014", "station": "Melbourne", "column-1": "0" },
    { "category": "28/12/2014", "station": "Melbourne", "column-1": "22" },
    { "category": "29/12/2014", "station": "Melbourne", "column-1": "34" },
    { "category": "30/12/2014", "station": "Melbourne", "column-1": "2" },
    { "category": "31/12/2014", "station": "Melbourne", "column-1": "0" }
  ]

  private dataSource_2015 = [
    { "category": "01/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "02/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "03/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "04/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "05/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "06/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "07/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "08/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "09/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "10/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "11/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "12/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "13/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "14/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "15/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "16/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "17/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "18/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "19/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "20/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "21/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "22/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "23/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "24/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "25/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "26/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "27/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "28/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "29/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "30/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "31/01/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "01/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "02/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "03/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "04/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "05/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "06/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "07/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "08/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "09/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "10/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "11/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "12/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "13/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "14/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "15/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "16/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "17/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "18/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "19/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "20/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "21/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "22/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "23/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "24/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "25/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "26/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "27/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "28/02/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "01/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "02/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "03/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "04/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "05/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "06/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "07/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "08/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "09/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "10/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "11/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "12/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "13/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "14/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "15/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "16/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "17/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "18/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "19/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "20/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "21/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "22/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "23/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "24/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "25/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "26/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "27/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "28/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "29/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "30/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "31/03/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "01/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "02/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "03/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "04/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "05/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "06/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "07/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "08/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "09/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "10/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "11/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "12/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "13/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "14/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "15/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "16/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "17/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "18/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "19/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "20/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "21/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "22/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "23/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "24/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "25/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "26/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "27/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "28/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "29/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "30/04/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "01/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "02/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "03/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "04/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "05/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "06/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "07/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "08/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "09/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "10/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "11/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "12/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "13/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "14/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "15/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "16/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "17/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "18/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "19/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "20/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "21/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "22/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "23/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "24/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "25/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "26/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "27/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "28/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "29/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "30/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "31/05/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "01/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "02/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "03/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "04/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "05/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "06/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "07/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "08/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "09/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "10/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "11/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "12/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "13/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "14/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "15/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "16/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "17/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "18/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "19/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "20/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "21/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "22/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "23/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "24/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "25/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "26/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "27/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "28/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "29/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "30/06/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "01/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "02/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "03/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "04/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "05/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "06/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "07/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "08/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "09/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "10/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "11/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "12/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "13/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "14/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "15/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "16/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "17/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "18/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "19/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "20/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "21/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "22/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "23/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "24/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "25/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "26/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "27/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "28/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "29/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "30/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "31/07/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "01/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "02/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "03/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "04/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "05/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "06/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "07/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "08/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "09/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "10/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "11/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "12/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "13/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "14/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "15/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "16/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "17/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "18/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "19/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "20/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "21/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "22/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "23/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "24/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "25/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "26/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "27/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "28/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "29/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "30/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "31/08/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "01/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "02/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "03/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "04/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "05/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "06/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "07/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "08/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "09/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "10/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "11/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "12/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "13/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "14/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "15/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "16/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "17/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "18/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "19/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "20/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "21/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "22/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "23/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "24/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "25/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "26/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "27/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "28/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "29/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "30/09/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "01/10/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "02/10/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "03/10/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "04/10/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "05/10/2015", "station": "Melbourne", "column-1": "5" },
    { "category": "06/10/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "07/10/2015", "station": "Melbourne", "column-1": "7" },
    { "category": "08/10/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "09/10/2015", "station": "Melbourne", "column-1": "9" },
    { "category": "10/10/2015", "station": "Melbourne", "column-1": "3" },
    { "category": "11/10/2015", "station": "Melbourne", "column-1": "5" },
    { "category": "12/10/2015", "station": "Melbourne", "column-1": "7" },
    { "category": "13/10/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "14/10/2015", "station": "Melbourne", "column-1": "14" },
    { "category": "15/10/2015", "station": "Melbourne", "column-1": "39" },
    { "category": "16/10/2015", "station": "Melbourne", "column-1": "17" },
    { "category": "17/10/2015", "station": "Melbourne", "column-1": "8" },
    { "category": "18/10/2015", "station": "Melbourne", "column-1": "5" },
    { "category": "19/10/2015", "station": "Melbourne", "column-1": "12" },
    { "category": "20/10/2015", "station": "Melbourne", "column-1": "7" },
    { "category": "21/10/2015", "station": "Melbourne", "column-1": "9" },
    { "category": "22/10/2015", "station": "Melbourne", "column-1": "5" },
    { "category": "23/10/2015", "station": "Melbourne", "column-1": "2" },
    { "category": "24/10/2015", "station": "Melbourne", "column-1": "9" },
    { "category": "25/10/2015", "station": "Melbourne", "column-1": "22" },
    { "category": "26/10/2015", "station": "Melbourne", "column-1": "7" },
    { "category": "27/10/2015", "station": "Melbourne", "column-1": "3" },
    { "category": "28/10/2015", "station": "Melbourne", "column-1": "58" },
    { "category": "29/10/2015", "station": "Melbourne", "column-1": "34" },
    { "category": "30/10/2015", "station": "Melbourne", "column-1": "29" },
    { "category": "31/10/2015", "station": "Melbourne", "column-1": "23" },
    { "category": "01/11/2015", "station": "Melbourne", "column-1": "20" },
    { "category": "02/11/2015", "station": "Melbourne", "column-1": "10" },
    { "category": "03/11/2015", "station": "Melbourne", "column-1": "4" },
    { "category": "04/11/2015", "station": "Melbourne", "column-1": "23" },
    { "category": "05/11/2015", "station": "Melbourne", "column-1": "10" },
    { "category": "06/11/2015", "station": "Melbourne", "column-1": "14" },
    { "category": "07/11/2015", "station": "Melbourne", "column-1": "9" },
    { "category": "08/11/2015", "station": "Melbourne", "column-1": "5" },
    { "category": "09/11/2015", "station": "Melbourne", "column-1": "58" },
    { "category": "10/11/2015", "station": "Melbourne", "column-1": "26" },
    { "category": "11/11/2015", "station": "Melbourne", "column-1": "9" },
    { "category": "12/11/2015", "station": "Melbourne", "column-1": "37" },
    { "category": "13/11/2015", "station": "Melbourne", "column-1": "21" },
    { "category": "14/11/2015", "station": "Melbourne", "column-1": "7" },
    { "category": "15/11/2015", "station": "Melbourne", "column-1": "14" },
    { "category": "16/11/2015", "station": "Melbourne", "column-1": "22" },
    { "category": "17/11/2015", "station": "Melbourne", "column-1": "56" },
    { "category": "18/11/2015", "station": "Melbourne", "column-1": "44" },
    { "category": "19/11/2015", "station": "Melbourne", "column-1": "31" },
    { "category": "20/11/2015", "station": "Melbourne", "column-1": "5" },
    { "category": "21/11/2015", "station": "Melbourne", "column-1": "3" },
    { "category": "22/11/2015", "station": "Melbourne", "column-1": "2" },
    { "category": "23/11/2015", "station": "Melbourne", "column-1": "20" },
    { "category": "24/11/2015", "station": "Melbourne", "column-1": "27" },
    { "category": "25/11/2015", "station": "Melbourne", "column-1": "46" },
    { "category": "26/11/2015", "station": "Melbourne", "column-1": "24" },
    { "category": "27/11/2015", "station": "Melbourne", "column-1": "3" },
    { "category": "28/11/2015", "station": "Melbourne", "column-1": "2" },
    { "category": "29/11/2015", "station": "Melbourne", "column-1": "3" },
    { "category": "30/11/2015", "station": "Melbourne", "column-1": "4" },
    { "category": "01/12/2015", "station": "Melbourne", "column-1": "4" },
    { "category": "02/12/2015", "station": "Melbourne", "column-1": "3" },
    { "category": "03/12/2015", "station": "Melbourne", "column-1": "1" },
    { "category": "04/12/2015", "station": "Melbourne", "column-1": "8" },
    { "category": "05/12/2015", "station": "Melbourne", "column-1": "13" },
    { "category": "06/12/2015", "station": "Melbourne", "column-1": "15" },
    { "category": "07/12/2015", "station": "Melbourne", "column-1": "19" },
    { "category": "08/12/2015", "station": "Melbourne", "column-1": "3" },
    { "category": "09/12/2015", "station": "Melbourne", "column-1": "12" },
    { "category": "10/12/2015", "station": "Melbourne", "column-1": "5" },
    { "category": "11/12/2015", "station": "Melbourne", "column-1": "3" },
    { "category": "12/12/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "13/12/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "14/12/2015", "station": "Melbourne", "column-1": "7" },
    { "category": "15/12/2015", "station": "Melbourne", "column-1": "2" },
    { "category": "16/12/2015", "station": "Melbourne", "column-1": "2" },
    { "category": "17/12/2015", "station": "Melbourne", "column-1": "2" },
    { "category": "18/12/2015", "station": "Melbourne", "column-1": "4" },
    { "category": "19/12/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "20/12/2015", "station": "Melbourne", "column-1": "2" },
    { "category": "21/12/2015", "station": "Melbourne", "column-1": "2" },
    { "category": "22/12/2015", "station": "Melbourne", "column-1": "2" },
    { "category": "23/12/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "24/12/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "25/12/2015", "station": "Melbourne", "column-1": "2" },
    { "category": "26/12/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "27/12/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "28/12/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "29/12/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "30/12/2015", "station": "Melbourne", "column-1": "0" },
    { "category": "31/12/2015", "station": "Melbourne", "column-1": "0" }
  ]

  private dataSource_2016 = [
    { "category": "01/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "02/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "03/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "04/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "05/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "06/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "07/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "08/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "09/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "10/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "11/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "12/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "13/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "14/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "15/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "16/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "17/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "18/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "19/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "20/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "21/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "22/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "23/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "24/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "25/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "26/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "27/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "28/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "29/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "30/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "31/01/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "01/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "02/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "03/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "04/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "05/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "06/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "07/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "08/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "09/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "10/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "11/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "12/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "13/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "14/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "15/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "16/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "17/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "18/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "19/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "20/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "21/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "22/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "23/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "24/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "25/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "26/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "27/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "28/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "29/02/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "01/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "02/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "03/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "04/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "05/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "06/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "07/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "08/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "09/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "10/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "11/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "12/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "13/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "14/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "15/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "16/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "17/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "18/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "19/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "20/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "21/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "22/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "23/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "24/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "25/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "26/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "27/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "28/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "29/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "30/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "31/03/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "01/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "02/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "03/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "04/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "05/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "06/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "07/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "08/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "09/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "10/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "11/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "12/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "13/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "14/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "15/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "16/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "17/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "18/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "19/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "20/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "21/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "22/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "23/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "24/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "25/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "26/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "27/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "28/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "29/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "30/04/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "01/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "02/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "03/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "04/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "05/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "06/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "07/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "08/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "09/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "10/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "11/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "12/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "13/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "14/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "15/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "16/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "17/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "18/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "19/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "20/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "21/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "22/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "23/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "24/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "25/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "26/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "27/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "28/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "29/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "30/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "31/05/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "01/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "02/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "03/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "04/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "05/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "06/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "07/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "08/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "09/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "10/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "11/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "12/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "13/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "14/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "15/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "16/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "17/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "18/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "19/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "20/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "21/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "22/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "23/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "24/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "25/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "26/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "27/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "28/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "29/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "30/06/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "01/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "02/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "03/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "04/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "05/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "06/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "07/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "08/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "09/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "10/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "11/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "12/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "13/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "14/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "15/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "16/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "17/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "18/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "19/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "20/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "21/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "22/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "23/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "24/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "25/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "26/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "27/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "28/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "29/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "30/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "31/07/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "01/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "02/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "03/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "04/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "05/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "06/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "07/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "08/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "09/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "10/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "11/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "12/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "13/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "14/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "15/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "16/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "17/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "18/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "19/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "20/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "21/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "22/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "23/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "24/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "25/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "26/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "27/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "28/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "29/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "30/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "31/08/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "01/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "02/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "03/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "04/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "05/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "06/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "07/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "08/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "09/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "10/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "11/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "12/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "13/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "14/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "15/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "16/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "17/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "18/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "19/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "20/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "21/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "22/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "23/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "24/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "25/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "26/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "27/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "28/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "29/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "30/09/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "01/10/2016", "station": "Melbourne", "column-1": "12" },
    { "category": "02/10/2016", "station": "Melbourne", "column-1": "10" },
    { "category": "03/10/2016", "station": "Melbourne", "column-1": "2" },
    { "category": "04/10/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "05/10/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "06/10/2016", "station": "Melbourne", "column-1": "7" },
    { "category": "07/10/2016", "station": "Melbourne", "column-1": "22" },
    { "category": "08/10/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "09/10/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "10/10/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "11/10/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "12/10/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "13/10/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "14/10/2016", "station": "Melbourne", "column-1": "9" },
    { "category": "15/10/2016", "station": "Melbourne", "column-1": "73" },
    { "category": "16/10/2016", "station": "Melbourne", "column-1": "94" },
    { "category": "17/10/2016", "station": "Melbourne", "column-1": "14" },
    { "category": "18/10/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "19/10/2016", "station": "Melbourne", "column-1": "2" },
    { "category": "20/10/2016", "station": "Melbourne", "column-1": "20" },
    { "category": "21/10/2016", "station": "Melbourne", "column-1": "19" },
    { "category": "22/10/2016", "station": "Melbourne", "column-1": "2" },
    { "category": "23/10/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "24/10/2016", "station": "Melbourne", "column-1": "2" },
    { "category": "25/10/2016", "station": "Melbourne", "column-1": "22" },
    { "category": "26/10/2016", "station": "Melbourne", "column-1": "34" },
    { "category": "27/10/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "28/10/2016", "station": "Melbourne", "column-1": "2" },
    { "category": "29/10/2016", "station": "Melbourne", "column-1": "24" },
    { "category": "30/10/2016", "station": "Melbourne", "column-1": "53" },
    { "category": "31/10/2016", "station": "Melbourne", "column-1": "12" },
    { "category": "01/11/2016", "station": "Melbourne", "column-1": "9" },
    { "category": "02/11/2016", "station": "Melbourne", "column-1": "2" },
    { "category": "03/11/2016", "station": "Melbourne", "column-1": "7" },
    { "category": "04/11/2016", "station": "Melbourne", "column-1": "129" },
    { "category": "05/11/2016", "station": "Melbourne", "column-1": "31" },
    { "category": "06/11/2016", "station": "Melbourne", "column-1": "36" },
    { "category": "07/11/2016", "station": "Melbourne", "column-1": "154" },
    { "category": "08/11/2016", "station": "Melbourne", "column-1": "7" },
    { "category": "09/11/2016", "station": "Melbourne", "column-1": "5" },
    { "category": "10/11/2016", "station": "Melbourne", "column-1": "8" },
    { "category": "11/11/2016", "station": "Melbourne", "column-1": "44" },
    { "category": "12/11/2016", "station": "Melbourne", "column-1": "129" },
    { "category": "13/11/2016", "station": "Melbourne", "column-1": "17" },
    { "category": "14/11/2016", "station": "Melbourne", "column-1": "2" },
    { "category": "15/11/2016", "station": "Melbourne", "column-1": "0" },
    { "category": "16/11/2016", "station": "Melbourne", "column-1": "22" },
    { "category": "17/11/2016", "station": "Melbourne", "column-1": "68" },
    { "category": "18/11/2016", "station": "Melbourne", "column-1": "60" },
    { "category": "19/11/2016", "station": "Melbourne", "column-1": "22" },
    { "category": "20/11/2016", "station": "Melbourne", "column-1": "29" },
    { "category": "21/11/2016", "station": "Melbourne", "column-1": "102" },
    { "category": "22/11/2016", "station": "Melbourne", "column-1": "19" },
    { "category": "23/11/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "24/11/2016", "station": "Melbourne", "column-1": "9" },
    { "category": "25/11/2016", "station": "Melbourne", "column-1": "17" },
    { "category": "26/11/2016", "station": "Melbourne", "column-1": "12" },
    { "category": "27/11/2016", "station": "Melbourne", "column-1": "7" },
    { "category": "28/11/2016", "station": "Melbourne", "column-1": "5" },
    { "category": "29/11/2016", "station": "Melbourne", "column-1": "5" },
    { "category": "30/11/2016", "station": "Melbourne", "column-1": "32" },
    { "category": "01/12/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "02/12/2016", "station": "Melbourne", "column-1": "41" },
    { "category": "03/12/2016", "station": "Melbourne", "column-1": "25" },
    { "category": "04/12/2016", "station": "Melbourne", "column-1": "79" },
    { "category": "05/12/2016", "station": "Melbourne", "column-1": "48" },
    { "category": "06/12/2016", "station": "Melbourne", "column-1": "47" },
    { "category": "07/12/2016", "station": "Melbourne", "column-1": "77" },
    { "category": "08/12/2016", "station": "Melbourne", "column-1": "70" },
    { "category": "09/12/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "10/12/2016", "station": "Melbourne", "column-1": "2" },
    { "category": "11/12/2016", "station": "Melbourne", "column-1": "7" },
    { "category": "12/12/2016", "station": "Melbourne", "column-1": "61" },
    { "category": "13/12/2016", "station": "Melbourne", "column-1": "51" },
    { "category": "14/12/2016", "station": "Melbourne", "column-1": "46" },
    { "category": "15/12/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "16/12/2016", "station": "Melbourne", "column-1": "29" },
    { "category": "17/12/2016", "station": "Melbourne", "column-1": "19" },
    { "category": "18/12/2016", "station": "Melbourne", "column-1": "12" },
    { "category": "19/12/2016", "station": "Melbourne", "column-1": "117" },
    { "category": "20/12/2016", "station": "Melbourne", "column-1": "41" },
    { "category": "21/12/2016", "station": "Melbourne", "column-1": "24" },
    { "category": "22/12/2016", "station": "Melbourne", "column-1": "7" },
    { "category": "23/12/2016", "station": "Melbourne", "column-1": "58" },
    { "category": "24/12/2016", "station": "Melbourne", "column-1": "54" },
    { "category": "25/12/2016", "station": "Melbourne", "column-1": "51" },
    { "category": "26/12/2016", "station": "Melbourne", "column-1": "65" },
    { "category": "27/12/2016", "station": "Melbourne", "column-1": "3" },
    { "category": "28/12/2016", "station": "Melbourne", "column-1": "19" },
    { "category": "29/12/2016", "station": "Melbourne", "column-1": "105" },
    { "category": "30/12/2016", "station": "Melbourne", "column-1": "12" },
    { "category": "31/12/2016", "station": "Melbourne", "column-1": "29" }
  ]

  private dataSource_2017 = [
    { "category": "01/01/2017", "station": "Melbourne", "column-1": "10" },
    { "category": "02/01/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "03/01/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "04/01/2017", "station": "Melbourne", "column-1": "44" },
    { "category": "05/01/2017", "station": "Melbourne", "column-1": "15" },
    { "category": "06/01/2017", "station": "Melbourne", "column-1": "9" },
    { "category": "07/01/2017", "station": "Melbourne", "column-1": "19" },
    { "category": "08/01/2017", "station": "Melbourne", "column-1": "3" },
    { "category": "09/01/2017", "station": "Melbourne", "column-1": "3" },
    { "category": "10/01/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "11/01/2017", "station": "Melbourne", "column-1": "5" },
    { "category": "12/01/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "13/01/2017", "station": "Melbourne", "column-1": "9" },
    { "category": "14/01/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "15/01/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "16/01/2017", "station": "Melbourne", "column-1": "7" },
    { "category": "17/01/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "18/01/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "19/01/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "20/01/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "21/01/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "22/01/2017", "station": "Melbourne", "column-1": "3" },
    { "category": "23/01/2017", "station": "Melbourne", "column-1": "10" },
    { "category": "24/01/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "25/01/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "26/01/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "27/01/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "28/01/2017", "station": "Melbourne", "column-1": "3" },
    { "category": "29/01/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "30/01/2017", "station": "Melbourne", "column-1": "5" },
    { "category": "31/01/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "01/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "02/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "03/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "04/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "05/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "06/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "07/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "08/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "09/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "10/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "11/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "12/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "13/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "14/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "15/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "16/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "17/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "18/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "19/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "20/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "21/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "22/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "23/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "24/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "25/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "26/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "27/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "28/02/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "01/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "02/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "03/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "04/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "05/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "06/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "07/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "08/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "09/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "10/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "11/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "12/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "13/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "14/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "15/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "16/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "17/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "18/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "19/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "20/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "21/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "22/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "23/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "24/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "25/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "26/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "27/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "28/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "29/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "30/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "31/03/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "01/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "02/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "03/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "04/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "05/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "06/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "07/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "08/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "09/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "10/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "11/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "12/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "13/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "14/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "15/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "16/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "17/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "18/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "19/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "20/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "21/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "22/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "23/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "24/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "25/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "26/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "27/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "28/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "29/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "30/04/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "01/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "02/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "03/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "04/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "05/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "06/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "07/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "08/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "09/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "10/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "11/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "12/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "13/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "14/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "15/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "16/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "17/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "18/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "19/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "20/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "21/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "22/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "23/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "24/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "25/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "26/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "27/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "28/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "29/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "30/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "31/05/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "01/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "02/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "03/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "04/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "05/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "06/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "07/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "08/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "09/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "10/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "11/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "12/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "13/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "14/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "15/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "16/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "17/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "18/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "19/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "20/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "21/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "22/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "23/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "24/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "25/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "26/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "27/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "28/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "29/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "30/06/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "01/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "02/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "03/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "04/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "05/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "06/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "07/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "08/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "09/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "10/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "11/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "12/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "13/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "14/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "15/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "16/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "17/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "18/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "19/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "20/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "21/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "22/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "23/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "24/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "25/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "26/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "27/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "28/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "29/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "30/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "31/07/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "01/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "02/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "03/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "04/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "05/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "06/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "07/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "08/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "09/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "10/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "11/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "12/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "13/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "14/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "15/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "16/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "17/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "18/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "19/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "20/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "21/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "22/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "23/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "24/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "25/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "26/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "27/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "28/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "29/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "30/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "31/08/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "01/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "02/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "03/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "04/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "05/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "06/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "07/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "08/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "09/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "10/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "11/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "12/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "13/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "14/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "15/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "16/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "17/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "18/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "19/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "20/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "21/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "22/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "23/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "24/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "25/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "26/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "27/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "28/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "29/09/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "30/09/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "01/10/2017", "station": "Melbourne", "column-1": "11" },
    { "category": "02/10/2017", "station": "Melbourne", "column-1": "4" },
    { "category": "03/10/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "04/10/2017", "station": "Melbourne", "column-1": "4" },
    { "category": "05/10/2017", "station": "Melbourne", "column-1": "25" },
    { "category": "06/10/2017", "station": "Melbourne", "column-1": "3" },
    { "category": "07/10/2017", "station": "Melbourne", "column-1": "38" },
    { "category": "08/10/2017", "station": "Melbourne", "column-1": "7" },
    { "category": "09/10/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "10/10/2017", "station": "Melbourne", "column-1": "12" },
    { "category": "11/10/2017", "station": "Melbourne", "column-1": "3" },
    { "category": "12/10/2017", "station": "Melbourne", "column-1": "12" },
    { "category": "13/10/2017", "station": "Melbourne", "column-1": "1" },
    { "category": "14/10/2017", "station": "Melbourne", "column-1": "6" },
    { "category": "15/10/2017", "station": "Melbourne", "column-1": "6" },
    { "category": "16/10/2017", "station": "Melbourne", "column-1": "12" },
    { "category": "17/10/2017", "station": "Melbourne", "column-1": "87" },
    { "category": "18/10/2017", "station": "Melbourne", "column-1": "88" },
    { "category": "19/10/2017", "station": "Melbourne", "column-1": "1" },
    { "category": "20/10/2017", "station": "Melbourne", "column-1": "19" },
    { "category": "21/10/2017", "station": "Melbourne", "column-1": "12" },
    { "category": "22/10/2017", "station": "Melbourne", "column-1": "3" },
    { "category": "23/10/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "24/10/2017", "station": "Melbourne", "column-1": "18" },
    { "category": "25/10/2017", "station": "Melbourne", "column-1": "22" },
    { "category": "26/10/2017", "station": "Melbourne", "column-1": "5" },
    { "category": "27/10/2017", "station": "Melbourne", "column-1": "37" },
    { "category": "28/10/2017", "station": "Melbourne", "column-1": "88" },
    { "category": "29/10/2017", "station": "Melbourne", "column-1": "36" },
    { "category": "30/10/2017", "station": "Melbourne", "column-1": "48" },
    { "category": "31/10/2017", "station": "Melbourne", "column-1": "17" },
    { "category": "01/11/2017", "station": "Melbourne", "column-1": "5" },
    { "category": "02/11/2017", "station": "Melbourne", "column-1": "5" },
    { "category": "03/11/2017", "station": "Melbourne", "column-1": "4" },
    { "category": "04/11/2017", "station": "Melbourne", "column-1": "16" },
    { "category": "05/11/2017", "station": "Melbourne", "column-1": "33" },
    { "category": "06/11/2017", "station": "Melbourne", "column-1": "85" },
    { "category": "07/11/2017", "station": "Melbourne", "column-1": "31" },
    { "category": "08/11/2017", "station": "Melbourne", "column-1": "13" },
    { "category": "09/11/2017", "station": "Melbourne", "column-1": "47" },
    { "category": "10/11/2017", "station": "Melbourne", "column-1": "23" },
    { "category": "11/11/2017", "station": "Melbourne", "column-1": "1" },
    { "category": "12/11/2017", "station": "Melbourne", "column-1": "50" },
    { "category": "13/11/2017", "station": "Melbourne", "column-1": "156" },
    { "category": "14/11/2017", "station": "Melbourne", "column-1": "98" },
    { "category": "15/11/2017", "station": "Melbourne", "column-1": "113" },
    { "category": "16/11/2017", "station": "Melbourne", "column-1": "50" },
    { "category": "17/11/2017", "station": "Melbourne", "column-1": "8" },
    { "category": "18/11/2017", "station": "Melbourne", "column-1": "20" },
    { "category": "19/11/2017", "station": "Melbourne", "column-1": "20" },
    { "category": "20/11/2017", "station": "Melbourne", "column-1": "39" },
    { "category": "21/11/2017", "station": "Melbourne", "column-1": "92" },
    { "category": "22/11/2017", "station": "Melbourne", "column-1": "110" },
    { "category": "23/11/2017", "station": "Melbourne", "column-1": "88" },
    { "category": "24/11/2017", "station": "Melbourne", "column-1": "13" },
    { "category": "25/11/2017", "station": "Melbourne", "column-1": "18" },
    { "category": "26/11/2017", "station": "Melbourne", "column-1": "11" },
    { "category": "27/11/2017", "station": "Melbourne", "column-1": "4" },
    { "category": "28/11/2017", "station": "Melbourne", "column-1": "186" },
    { "category": "29/11/2017", "station": "Melbourne", "column-1": "43" },
    { "category": "30/11/2017", "station": "Melbourne", "column-1": "49" },
    { "category": "01/12/2017", "station": "Melbourne", "column-1": "3" },
    { "category": "02/12/2017", "station": "Melbourne", "column-1": "5" },
    { "category": "03/12/2017", "station": "Melbourne", "column-1": "31" },
    { "category": "04/12/2017", "station": "Melbourne", "column-1": "6" },
    { "category": "05/12/2017", "station": "Melbourne", "column-1": "6" },
    { "category": "06/12/2017", "station": "Melbourne", "column-1": "5" },
    { "category": "07/12/2017", "station": "Melbourne", "column-1": "14" },
    { "category": "08/12/2017", "station": "Melbourne", "column-1": "1" },
    { "category": "09/12/2017", "station": "Melbourne", "column-1": "2" },
    { "category": "10/12/2017", "station": "Melbourne", "column-1": "23" },
    { "category": "11/12/2017", "station": "Melbourne", "column-1": "27" },
    { "category": "12/12/2017", "station": "Melbourne", "column-1": "27" },
    { "category": "13/12/2017", "station": "Melbourne", "column-1": "23" },
    { "category": "14/12/2017", "station": "Melbourne", "column-1": "9" },
    { "category": "15/12/2017", "station": "Melbourne", "column-1": "7" },
    { "category": "16/12/2017", "station": "Melbourne", "column-1": "10" },
    { "category": "17/12/2017", "station": "Melbourne", "column-1": "62" },
    { "category": "18/12/2017", "station": "Melbourne", "column-1": "42" },
    { "category": "19/12/2017", "station": "Melbourne", "column-1": "5" },
    { "category": "20/12/2017", "station": "Melbourne", "column-1": "11" },
    { "category": "21/12/2017", "station": "Melbourne", "column-1": "0" },
    { "category": "22/12/2017", "station": "Melbourne", "column-1": "56" },
    { "category": "23/12/2017", "station": "Melbourne", "column-1": "5" },
    { "category": "24/12/2017", "station": "Melbourne", "column-1": "5" },
    { "category": "25/12/2017", "station": "Melbourne", "column-1": "6" },
    { "category": "26/12/2017", "station": "Melbourne", "column-1": "14" },
    { "category": "27/12/2017", "station": "Melbourne", "column-1": "16" },
    { "category": "28/12/2017", "station": "Melbourne", "column-1": "54" },
    { "category": "29/12/2017", "station": "Melbourne", "column-1": "1" },
    { "category": "30/12/2017", "station": "Melbourne", "column-1": "1" },
    { "category": "31/12/2017", "station": "Melbourne", "column-1": "6" }
  ]

  constructor(private AmCharts: AmChartsService,
              public el: ElementRef) { 
  }

  ngOnInit() {
    this.makeChart("2012", this.dataSource_2012);
  }

  makeChart(year: string, dataSource) {
    var chartId = year + "-chart";
    this.chart = this.AmCharts.makeChart(chartId,
      {
        "type": "serial",
        "categoryField": "category",
        "startDuration": 1,
        "theme": "dark",
        "categoryAxis": {
          "gridPosition": "start"
        },
        "guides":[
          {
           "above": false,
           "angle": 0,
           "balloonText": "Low",
           "dashLength": 3,
           "fillAlpha": 0.2,
           "fillColor": "#31FF9D",
           "id": "Guide-1",
           "inside": true,
           "lineAlpha": 0.33,
           "lineThickness": 2,
           "label": "Pollen Level Low",
           "fontSize" : 25,
           "position": "left",
           "tickLength": 0,
           "toAngle": 0,
           "toValue": 10,
           "value": 0
          },
          {
            "above": false,
           "angle": 0,
           "balloonText": "Medium",
           "dashLength": 3,
           "fillAlpha": 0.2,
           "fillColor": "#DE9A0F",
           "id": "Guide-2",
           "inside": true,
           "lineAlpha": 0.33,
           "lineThickness": 2,
           "label": "Pollen Level Medium",
           "fontSize" : 25,
           "position": "left",
           "tickLength": 0,
           "toAngle": 0,
           "toValue": 50,
           "value": 10
          },
          {
            "above": false,
           "angle": 0,
           "balloonText": "High",
           "dashLength": 3,
           "fillAlpha": 0.3,
           "fillColor": "#F41B1B",
           "id": "Guide-3",
           "inside": true,
           "lineAlpha": 0.33,
           "lineThickness": 2,
           "label": "Pollen Level High",
           "fontSize" : 25,
           "position": "left",
           "tickLength": 0,
           "toAngle": 0,
           "toValue": 200,
           "value": 50
          }
         ],
        "trendLines": [],
        "graphs": [
          {
            "balloonText": "[[title]] of [[category]]:[[value]]",
            "bullet": "round",
            "id": "AmGraph-1",
            "title": year + " Pollen Count",
            "type": "smoothedLine",
            "valueField": "column-1"
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1",
            "title": "Pollen Count"
          }
        ],
        "allLabels": [],
        "balloon": {},
        "legend": {
          "enabled": true,
          "useGraphSettings": true
        },
        "titles": [
          {
            "id": "Title-1",
            "size": 15,
            "text": year + " Pollen Count"
          }
        ],
        "dataProvider": dataSource
      }
    );
  }

  ngAfterViewInit() {
    this.makeChart("2012", this.dataSource_2012);
  }

  ngOnDestroy() {
    // if (this.chart) {
    //   this.AmCharts.destroyChart(this.chart);
    // }
  }

  makeThisChart() {
    console.log("clicked");
  }

  onLinkClick(event: MatTabChangeEvent) {
    switch (event.tab.textLabel) {
      case "2012":
        this.makeChart("2012", this.dataSource_2012)
        break;
      case "2013":
        this.makeChart("2013", this.dataSource_2013)
        break;
      case "2014":
        this.makeChart("2014", this.dataSource_2014)
        break;
      case "2015":
        this.makeChart("2015", this.dataSource_2015)
        break;
      case "2016":
        this.makeChart("2016", this.dataSource_2016)
        break;
      case "2017":
        this.makeChart("2017", this.dataSource_2017)
        break;

      default:
        break;
    }

  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      var componentPosition = this.el.nativeElement.offsetTop
      var scrollPosition = window.pageYOffset
      //console.log(scrollPosition)
      if (scrollPosition >= 400) {
        this.state = 'hide'
      }

      if (scrollPosition < 400) {
        this.state = 'show'
      }

    }

}
