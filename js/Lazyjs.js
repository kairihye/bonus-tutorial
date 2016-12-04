/* Cat array*/

var cats = [{
        name: 'Nidalee',
        breed: 'Ragdoll',
        age: 1
    }, {
        name: 'Nyampee',
        breed: 'Scottish Fold',
        age: 2
    },

    {
        name: 'Rupee',
        breed: 'Russian Blue',
        age: 5
    }, {
        name: 'Cosmo',
        breed: 'Calico',
        age: 3
    },
];

/*pluck() function practice -- output only breeds*/
Lazy(cats).pluck("breed");
