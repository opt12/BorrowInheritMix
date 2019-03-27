const withFlying = o => {
    return {...o, fly() {/*...*/}, land() {/*...*/},isFlying: () => /*...*/}}

const withBattery = ({ capacity }) => o => {
    return {...o, draw(percent) {/*...*/}, getCapacity() {/*...*/}}}

const createDrone = ({ capacity = '3000mAh' }) => pipe(
    withFlying,
    withBattery({ capacity })
)({});
    
const myDrone = createDrone();  //Drone with default battery

const myDrone1 = createDrone({ capacity: '666mAh' });   //smaller battery
