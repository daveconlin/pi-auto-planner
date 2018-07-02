var sprints = [
    {
        "id": 1,
        "name": "Sprint 1",
        "cap-fed": 8,
        "cap-dev": 6,
        "cap-qa": 5
    }, {
        "id": 2,
        "name": "Sprint 2",
        "cap-fed": 6,
        "cap-dev": 4,
        "cap-qa": 8
    }];
var stories = [
    {"id": 0, "name": "Form dev", "points": 5, "weight": 8, "depId": null, "devType": 1},
    {"id": 1, "name": "Tabs dev", "points": 2, "weight": 2, "depId": 2, "devType": 2},
    {"id": 2, "name": "Tracking dev", "points": 1, "weight": 10, "depId": null, "devType": 3},
    {"id": 2, "name": "UI dev", "points": 1, "weight": 9, "depId": null, "devType": 1},
    ];

var weightSort = stories.sort(function(a, b){
    // return array sorted by weight
    if(a.weight>b.weight){
        return -1;
    }else{
        return 1;
    }
});

var typeSort1 = stories.filter(function(story){
    return story.devType === 1;
});

var typeSort2 = stories.filter(function(story){
    return story.devType === 2;
});

var typeSort3 = stories.filter(function(story){
    return story.devType === 3;
});

console.log("weightSort:", weightSort);
console.log("typeSort1:", typeSort1);
console.log("typeSort2:", typeSort2);
console.log("typeSort3:", typeSort3);

    /*
    - iterate sprints
    - find each type in weighted array up until the fed limit
    - mark as used
     */
