
export class PerIngredient {
    order: string;
    ingredient: string;
    carbonContent: string;
    recommendedIngredient: string;
    carbonContentOfRecommended: string;
    reductionAchieved: string;
}

export class PerTransport {
    'dish': string;
    'ingredient': string;
    'carbonContentWithCurrentSourceOfProcurement': string;
    'recommendedSourceToProcure': string;
    'carbonContentOfRecommended': string;
    'reductionAchieved': string;
}

export class PerPackaging {
    order: string;
    'packagingMaterial': string;
    carbonContentWithCurrentSourceOfProcurement: string;
    recommendedSourceToProcure: string;
    carbonContentOfRecommended: string;
    reductionAchieved: string;

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
        CarbonContentWithCurrentSourceOfProcurement: '5.6 (airfreight)',
        recommendedSourceToProcure: 'local nearby store',
        carbonContentOfRecommended: '0.255',
        reductionAchieved: '5.345'
    },
    {
        dish: 'Alfredo Chicken Pasta',
        ingredient: 'chicken',
        CarbonContentWithCurrentSourceOfProcurement: '3.325 (truck >32 metric)',
        'recommendedSourceToProcure': '(bean chunks) local nearby store',
        carbonContentOfRecommended: '0.255',
        reductionAchieved: '3.07'
    },
    {
        dish: 'Alfredo Chicken Pasta',
        ingredient: 'cheese',
        CarbonContentWithCurrentSourceOfProcurement: '5.6 (airfreight)',
        'recommendedSourceToProcure': '(mayonnaise) local nearby store',
        carbonContentOfRecommended: '0.255',
        reductionAchieved: '5.345'
    },
    {
        dish: 'Alfredo Chicken Pasta',
        ingredient: 'milk',
        CarbonContentWithCurrentSourceOfProcurement: '1.51 (truck 16-32 metric)',
        'recommendedSourceToProcure': 'null',
        carbonContentOfRecommended: '0',
        reductionAchieved: '0'
    },
    {
        dish: 'Alfredo Chicken Pasta',
        ingredient: 'bell pepper',
        CarbonContentWithCurrentSourceOfProcurement: '0.835 (truck 7.5-16 metric)',
        'recommendedSourceToProcure': 'null',
        carbonContentOfRecommended: '0',
        reductionAchieved: '0'
    },
    {
        dish: 'Chocolate Milkshake',
        ingredient: 'cocoa powder',
        CarbonContentWithCurrentSourceOfProcurement: '5.6 (airfreight)',
        'recommendedSourceToProcure': '(chocolate biscuits) local nearby store',
        carbonContentOfRecommended: '0.255',
        reductionAchieved: '5.345'
    },
    {
        dish: 'Chocolate Milkshake',
        ingredient: 'chocolate',
        'CarbonContentWithCurrentSourceOfProcurement': '5.6 (airfreight)',
        'recommendedSourceToProcure': 'local nearby store',
        carbonContentOfRecommended: '0.255',
        reductionAchieved: '5.345'
    },
    {
        dish: 'Chocolate Milkshake',
        ingredient: 'milk',
        'CarbonContentWithCurrentSourceOfProcurement': '1.51 (truck 16-32 metric)',
        'recommendedSourceToProcure': 'null',
        carbonContentOfRecommended: '0',
        reductionAchieved: '0'
    },
    {
        dish: 'Chocolate Milkshake',
        ingredient: 'sugar',
        'CarbonContentWithCurrentSourceOfProcurement': '0.255 (truck 3.5-7.5 metric)',
        'recommendedSourceToProcure': 'null',
        carbonContentOfRecommended: '0',
        reductionAchieved: '0'
    },
    {
        dish: 'Russian Salad',
        ingredient: 'Broccoli',
        'CarbonContentWithCurrentSourceOfProcurement': '5.6 (airfreight)',
        'recommendedSourceToProcure': '(cauliflower) local nearby store',
        carbonContentOfRecommended: '0.255',
        reductionAchieved: '5.345'
    },
    {
        dish: 'Russian Salad',
        ingredient: 'Carrot',
        'CarbonContentWithCurrentSourceOfProcurement': '0.835 (truck 7.5-16 metric)',
        'recommendedSourceToProcure': 'null',
        carbonContentOfRecommended: '0',
        reductionAchieved: '0'
    },
    {
        dish: 'Russian Salad',
        ingredient: 'Avocado',
        'CarbonContentWithCurrentSourceOfProcurement': '5.6 (airfreight)',
        'recommendedSourceToProcure': '(makhanphal) local nearby store',
        carbonContentOfRecommended: '0.255',
        reductionAchieved: '5.345'
    },
    {
        dish: 'Russian Salad',
        ingredient: 'Leek',
        'CarbonContentWithCurrentSourceOfProcurement': '5.6 (airfreight)',
        'recommendedSourceToProcure': '(Onion) local store nearby',
        carbonContentOfRecommended: '0.255',
        reductionAchieved: '5.345'
    },
    {
        dish: 'Russian Salad',
        ingredient: 'Icebur Lettuce',
        'CarbonContentWithCurrentSourceOfProcurement': '5.6 (airfreight)',
        'recommendedSourceToProcure': '(White Cabbage) local store nearby',
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
        'Packaging Material': 'plastic cutlery',
        'CarbonContentWithCurrentSourceOfProcurement': '0.174',
        'recommendedSourceToProcure': 'null',
        carbonContentOfRecommended: '0',
        reductionAchieved: '0'
    },
    {
        'Packaging Material': 'plastic boxes',
        'CarbonContentWithCurrentSourceOfProcurement': '6.75',
        'recommendedSourceToProcure': 'paper box',
        carbonContentOfRecommended: '2.375',
        reductionAchieved: '4.375'
    },
    {
        'Packaging Material': 'plastic wrappers',
        'CarbonContentWithCurrentSourceOfProcurement': '0.534',
        'recommendedSourceToProcure': 'paper carry bag',
        carbonContentOfRecommended: '0.33',
        reductionAchieved: '0.204'
    },
    {
        'Packaging Material': 'non-recyclable tissues',
        'CarbonContentWithCurrentSourceOfProcurement': '0.356',
        'recommendedSourceToProcure': 'null',
        carbonContentOfRecommended: '0',
        reductionAchieved: '0'
    },
    {
        carbonContentOfRecommended: 'Total',
        reductionAchieved: '4.579'
    }
],
    Order2: [
    {
        order: 'Mojito (for 10 people)',
        'Packaging Material': 'plastic cutlery',
        'CarbonContentWithCurrentSourceOfProcurement': '0.174',
        'recommendedSourceToProcure': 'null',
        carbonContentOfRecommended: '0',
        reductionAchieved: '0'
    },
    {
        'Packaging Material': 'plastic boxes',
        'CarbonContentWithCurrentSourceOfProcurement': '6.75',
        'recommendedSourceToProcure': 'paper box',
        carbonContentOfRecommended: '2.375',
        reductionAchieved: '4.375'
    },
    {
        'Packaging Material': 'plastic wrappers',
        'CarbonContentWithCurrentSourceOfProcurement': '0.534',
        'recommendedSourceToProcure': 'paper carry bag',
        carbonContentOfRecommended: '0.33',
        reductionAchieved: '0.204'
    },
    {
        'Packaging Material': 'non-recyclable tissues',
        'CarbonContentWithCurrentSourceOfProcurement': '0.356',
        'recommendedSourceToProcure': 'null',
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
