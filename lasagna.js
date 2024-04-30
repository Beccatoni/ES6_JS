// Lasagna preparation

const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(time){
    return `The lasagna still have: ${EXPECTED_MINUTES_IN_OVEN - time} in the oven.`;
    
}

function preparationTimeInMinutes(layers){
    return layers * 2;
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven){
    return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
};



