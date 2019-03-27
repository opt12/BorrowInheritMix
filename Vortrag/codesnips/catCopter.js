const createDrone = ({ capacity = '3000mAh', rotors=4, pet='' }) => pipe(
    withBattery({ capacity }),
    withFlying,
    withRotors({ rotors }),
    withRemote,
    withBelovedPet({ pet }),
)({});

const catCopter = createDrone({ pet = 'cat' });