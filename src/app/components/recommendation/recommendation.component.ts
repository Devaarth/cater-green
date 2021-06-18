import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {PerIngredient, PerPackaging, PerTransport} from './json-data';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol1'];
  tableColums1: string[]  = [ 'Order', 'Ingredient', 'Carbon Content', 'Recommended Ingredient', 'Carbon Content (of recommended)', 'Reduction Achieved'];
  // tableFileds: string[] = ['order', 'ingredient', 'carbonContent', 'recommendedIngredient'];
  tableFileds: string[] = ['order', 'ingredient', 'carbonContent', 'recommendedIngredient', 'carbonContentOfRecommended', 'reductionAchieved'];
  tabledata1: PerIngredient[] = finaltableData.PerIngredient;
  'dish': string;
  'ingredient': string;
  'CarbonContentWithCurrentSourceOfProcurement': string;
  'recommendedSourceToProcure': string;
  'carbonContentOfRecommended': string;
  'reductionAchieved': string;
  tableColums2: string[] = ['Dish', 'Ingredient', 'Carbon Content With Current Source Of Procurement', 'Recommended Source To Procure', 'Carbon Content Of Recommended', 'Reduction Achieved'];
  //tableColums4: string[] = [ 'order','Packaging Material','CarbonContentWithCurrentSourceOfProcurement','recommendedSourceToProcure','carbonContentOfRecommended','reductionAchieved'];
  tableColums3: string[] = [
  'order',
  'Packaging Material',
  'CarbonContent With Current Source Of Procurement',
  'Recommended Source To Procure: string',
  'CarbonContent Of Recommended: string',
  'Reduction Achieved'];
  tabledata2: PerTransport[] = finaltableData.PerTransport;
  tabledata3: PerPackaging[] = finaltableData.PerPackaging;

  dataSource = [];
  data: any;
  filterValue: any;
  mainData: any;
  mainData2: any;
  mainData3: any;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor(private fb: FormBuilder, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit() {
    this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          console.log(value);
          this.filterValue === this.tabledata1;
        })
    );
    this.mainData = this.tabledata1;
    this.mainData2 = this.tabledata2;
    this.mainData3 = this.tabledata3;
  }
  applyFilter(value: any) {
    console.log(value);
    this.filterValue = value;
    if (value) {
      this.tabledata1 = this.tabledata1.filter( v =>  v.order.toLowerCase().includes(value) );
      this.tabledata2 = this.tabledata2.filter( v =>  v.dish.toLowerCase().includes(value) );
      this.tabledata3 = this.tabledata3.filter( v =>  v.order.toLowerCase().includes(value) );
    } else {
      this.tabledata1 = this.mainData;
      this.tabledata2 = this.mainData2;
      this.tabledata3 = this.mainData3;
    }

  }

 /* ngOnChanges(changes: SimpleChanges): void {
    this.data;
  }*/
/*  applyFilter(value: string) {
    console.log('applyFilter......'+value);
    const filterValue = value.toLowerCase();

    return this.data.filter(option => option.(filterValue) === 0);
  }*/


}



export const finaltableData = {
  PerIngredient: [
    {
      order: 'Alfredo Chicken Pasta',
      ingredient: 'pasta',
      carbonContent: '8.8285966',
      recommendedIngredient: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Alfredo Chicken Pasta',
      ingredient: 'chicken',
      carbonContent: '16.31149016',
      recommendedIngredient: 'beans(chunk)',
      carbonContentOfRecommended: '5.799452',
      reductionAchieved: '10.51203816'
    },
    {
      order: 'Alfredo Chicken Pasta',
      ingredient: 'cheese',
      carbonContent: '61.75',
      recommendedIngredient: 'mayonnaise',
      carbonContentOfRecommended: '9.75',
      reductionAchieved: '52'
    },
    {
      order: 'Alfredo Chicken Pasta',
      ingredient: 'milk',
      carbonContent: '6.84677275',
      recommendedIngredient: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Alfredo Chicken Pasta',
      ingredient: 'bell pepper',
      carbonContent: '11.65',
      recommendedIngredient: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Chocolate Milkshake',
      ingredient: 'cocoa powder',
      carbonContent: '22.2',
      recommendedIngredient: 'biscuits',
      carbonContentOfRecommended: '5.521375',
      reductionAchieved: '16.678625'
    },
    {
      order: 'Chocolate Milkshake',
      ingredient: 'milk',
      carbonContent: '6.84677275',
      recommendedIngredient: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Chocolate Milkshake',
      ingredient: 'chocolate',
      carbonContent: '34.28439552',
      recommendedIngredient: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Chocolate Milkshake',
      ingredient: 'sugar',
      carbonContent: '7.615827305',
      recommendedIngredient: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Russian Salad',
      ingredient: 'Broccoli',
      carbonContent: '3.15',
      recommendedIngredient: 'Cauliflower',
      carbonContentOfRecommended: '2.65',
      reductionAchieved: '0.5'
    },
    {
      order: 'Russian Salad',
      ingredient: 'Carrot',
      carbonContent: '1.5',
      recommendedIngredient: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Russian Salad',
      ingredient: 'Avocado',
      carbonContent: '5.45',
      recommendedIngredient: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Russian Salad',
      ingredient: 'Leek',
      carbonContent: '2',
      recommendedIngredient: 'Onion',
      carbonContentOfRecommended: '1.905',
      reductionAchieved: '0.095'
    },
    {
      order: 'Russian Salad',
      ingredient: 'Icebur Lettuce',
      carbonContent: '1.61323829',
      recommendedIngredient: 'White Cabbage',
      carbonContentOfRecommended: '1.45',
      reductionAchieved: '0.16323829'
    }
    /*    {
            "Carbon Content (of recommended)": "Total",
            "Reduction Achieved": "79.94890145"
        }*/
  ],
  PerTransport: [
    {
      dish: 'Alfredo Chicken Pasta',
      ingredient: 'pasta',
      carbonContentWithCurrentSourceOfProcurement: '5.6 (airfreight)',
      recommendedSourceToProcure: 'local nearby store',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '5.345'
    },
    {
      dish: 'Alfredo Chicken Pasta',
      ingredient: 'chicken',
      carbonContentWithCurrentSourceOfProcurement: '3.325 (truck >32 metric)',
      recommendedSourceToProcure: '(bean chunks) local nearby store',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '3.07'
    },
    {
      dish: 'Alfredo Chicken Pasta',
      ingredient: 'cheese',
      carbonContentWithCurrentSourceOfProcurement: '5.6 (airfreight)',
      recommendedSourceToProcure: '(mayonnaise) local nearby store',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '5.345'
    },
    {
      dish: 'Alfredo Chicken Pasta',
      ingredient: 'milk',
      carbonContentWithCurrentSourceOfProcurement: '1.51 (truck 16-32 metric)',
      recommendedSourceToProcure: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      dish: 'Alfredo Chicken Pasta',
      ingredient: 'bell pepper',
      carbonContentWithCurrentSourceOfProcurement: '0.835 (truck 7.5-16 metric)',
      recommendedSourceToProcure: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      dish: 'Chocolate Milkshake',
      ingredient: 'cocoa powder',
      carbonContentWithCurrentSourceOfProcurement: '5.6 (airfreight)',
      recommendedSourceToProcure: '(chocolate biscuits) local nearby store',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '5.345'
    },
    {
      dish: 'Chocolate Milkshake',
      ingredient: 'chocolate',
      carbonContentWithCurrentSourceOfProcurement: '5.6 (airfreight)',
      recommendedSourceToProcure: 'local nearby store',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '5.345'
    },
    {
      dish: 'Chocolate Milkshake',
      ingredient: 'milk',
      carbonContentWithCurrentSourceOfProcurement: '1.51 (truck 16-32 metric)',
      recommendedSourceToProcure: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      dish: 'Chocolate Milkshake',
      ingredient: 'sugar',
      carbonContentWithCurrentSourceOfProcurement: '0.255 (truck 3.5-7.5 metric)',
      recommendedSourceToProcure: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      dish: 'Russian Salad',
      ingredient: 'Broccoli',
      carbonContentWithCurrentSourceOfProcurement: '5.6 (airfreight)',
      recommendedSourceToProcure: '(cauliflower) local nearby store',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '5.345'
    },
    {
      dish: 'Russian Salad',
      ingredient: 'Carrot',
      carbonContentWithCurrentSourceOfProcurement: '0.835 (truck 7.5-16 metric)',
      recommendedSourceToProcure: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      dish: 'Russian Salad',
      ingredient: 'Avocado',
      carbonContentWithCurrentSourceOfProcurement: '5.6 (airfreight)',
      recommendedSourceToProcure: '(makhanphal) local nearby store',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '5.345'
    },
    {
      dish: 'Russian Salad',
      ingredient: 'Leek',
      carbonContentWithCurrentSourceOfProcurement: '5.6 (airfreight)',
      recommendedSourceToProcure: '(Onion) local store nearby',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '5.345'
    },
    {
      dish: 'Russian Salad',
      ingredient: 'Icebur Lettuce',
      carbonContentWithCurrentSourceOfProcurement: '5.6 (airfreight)',
      recommendedSourceToProcure: '(White Cabbage) local store nearby',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '5.345'
    }
    /*  {
          "Carbon Content (of recommended)": "Total",
          "Reduction Achieved": "45.83"
      }*/
  ],
  PerPackaging: [
    {
      order: 'Alfredo Chicken Pasta',
      'packagingMaterial': 'plastic cutlery',
      carbonContentWithCurrentSourceOfProcurement: '0.174',
      recommendedSourceToProcure: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Russian Salad',
      'packagingMaterial': 'plastic boxes',
      carbonContentWithCurrentSourceOfProcurement: '6.75',
      recommendedSourceToProcure: 'paper box',
      carbonContentOfRecommended: '2.375',
      reductionAchieved: '4.375'
    },
    {
      order: 'Chocolate Milkshake',
      'packagingMaterial': 'plastic wrappers',
      carbonContentWithCurrentSourceOfProcurement: '0.534',
      recommendedSourceToProcure: 'paper carry bag',
      carbonContentOfRecommended: '0.33',
      reductionAchieved: '0.204'
    },
    {
      order: 'Chocolate Milkshake',
      'packagingMaterial': 'non-recyclable tissues',
      carbonContentWithCurrentSourceOfProcurement: '0.356',
      recommendedSourceToProcure: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    }
/*    {
      carbonContentOfRecommended: 'Total',
      reductionAchieved: '4.579'
    }*/
  ],
  Order2: [
    {
      order: 'Mojito (for 10 people)',
      'packagingMaterial': 'plastic cutlery',
      carbonContentWithCurrentSourceOfProcurement: '0.174',
      recommendedSourceToProcure: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      'packagingMaterial': 'plastic boxes',
      carbonContentWithCurrentSourceOfProcurement: '6.75',
      recommendedSourceToProcure: 'paper box',
      carbonContentOfRecommended: '2.375',
      reductionAchieved: '4.375'
    },
    {
      'packagingMaterial': 'plastic wrappers',
      carbonContentWithCurrentSourceOfProcurement: '0.534',
      recommendedSourceToProcure: 'paper carry bag',
      carbonContentOfRecommended: '0.33',
      reductionAchieved: '0.204'
    },
    {
      'packagingMaterial': 'non-recyclable tissues',
      carbonContentWithCurrentSourceOfProcurement: '0.356',
      recommendedSourceToProcure: 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    }
    /*    {
            "Carbon Content (of recommended)": "Total",
            "Reduction Achieved": "4.579"
        }*/
  ],
  Order1: [
    {
      order: 'Alfredo Chicken Pasta (for 5 people)',
      ingredient: 'pasta',
      carbonContent: '8.8285966',
      'Alternative Recommendation': 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Alfredo Chicken Pasta (for 5 people)',
      ingredient: 'chicken',
      carbonContent: '16.31149016',
      'Alternative Recommendation': 'beans(chunk)',
      carbonContentOfRecommended: '5.799452',
      reductionAchieved: '10.51203816'
    },
    {
      order: 'Alfredo Chicken Pasta (for 5 people)',
      ingredient: 'cheese',
      carbonContent: '61.75',
      'Alternative Recommendation': 'mayonnaise',
      carbonContentOfRecommended: '9.75',
      reductionAchieved: '52'
    },
    {
      order: 'Alfredo Chicken Pasta (for 5 people)',
      ingredient: 'milk',
      carbonContent: '6.84677275',
      'Alternative Recommendation': 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Alfredo Chicken Pasta (for 5 people)',
      ingredient: 'bell pepper',
      carbonContent: '11.65',
      'Alternative Recommendation': 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {

      order: 'Alfredo Chicken Pasta (for 5 people)',
      ingredient: 'pasta',
      carbonContent: '5.6 (airfreight)',
      'Alternative Recommendation': 'local nearby store',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '5.345'
    },
    {
      order: 'Alfredo Chicken Pasta (for 5 people)',
      ingredient: 'chicken',
      carbonContent: '3.325 (truck >32 metric)',
      'Alternative Recommendation': '(bean chunks) local nearby store',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '3.07'
    },
    {
      order: 'Alfredo Chicken Pasta (for 5 people)',
      ingredient: 'cheese',
      carbonContent: '5.6 (airfreight)',
      'Alternative Recommendation': '(mayonnaise) local nearby store',
      carbonContentOfRecommended: '0.255',
      reductionAchieved: '5.345'
    },
    {
      order: 'Alfredo Chicken Pasta (for 5 people)',
      ingredient: 'milk',
      carbonContent: '1.51 (truck 16-32 metric)',
      'Alternative Recommendation': 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    },
    {
      order: 'Alfredo Chicken Pasta (for 5 people)',
      ingredient: 'bell pepper',
      carbonContent: '0.835 (truck 7.5-16 metric)',
      'Alternative Recommendation': 'null',
      carbonContentOfRecommended: '0',
      reductionAchieved: '0'
    }
    /*  {
          "Carbon Content (of recommended)": "Total",
          "Reduction Achieved": "76.27203816"
      }*/
  ]
};

