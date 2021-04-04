
function wakeDog(dogName, dogBreed) {
    const text = `Wake ${dogName} the ${dogBreed}`;
    console.log (text);
    return text;
}

function leashDog(dogName, dogBreed) {
    const text = `Leash ${dogName} the ${dogBreed}`;
    console.log (text);
    return text;
}

function walkToPark(dogName, dogBreed) {
    const text = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log (text);
    return text;
}

function throwFrisbee(dogName, dogBreed) {
    const text = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log (text);
    return text;
}

function walkHome(dogName, dogBreed) {
    const text = `Walk home with ${dogName} the ${dogBreed}`;
    console.log (text);
    return text;
}

function unleashDog(dogName, dogBreed) {
    const text = `Unleash ${dogName} the ${dogBreed}`;
    console.log (text);
    return text;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    const activities = [];
    for(let activity of routine) {
        const capturedVal = activity(dogName, dogBreed);
        activities.push(capturedVal);
    }
    return activities;
}

exerciseDog("name", "breed");