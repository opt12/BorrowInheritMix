const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

// Set up some functional mixins
const withFlying = o => {
  let isFlying = false;
  return {
    ...o,
    fly() {
      isFlying = true;
      return this;
    },
    land() {
      isFlying = false;
      return this;
    },
    isFlying: () => isFlying
  };
};

const withBattery = ({ capacity }) => o => {
  let percentCharged = 100;
  return {
    ...o,
    draw(percent) {
      const remaining = percentCharged - percent;
      percentCharged = remaining > 0 ? remaining : 0;
      return this;
    },
    getCharge: () => percentCharged,
    getCapacity() {
      return capacity;
    }
  };
};

const withID = ({ idNumber }) => o => {
  let _idNumber = idNumber;
  let superIdentify = o.identify || (() => {});
  return {
    ...o,
    identify: () => ({ idNumber: _idNumber, ...superIdentify() }),
    setLabel(label) {
      _label = label;
    }
  };
};

const withLabel = ({ label }) => o => {
  let _label = label;
  let superIdentify = o.identify || (() => {});
  return {
    ...o,
    identify: () => ({ label: _label, ...superIdentify() }),
    setLabel(label) {
      _label = label;
    }
  };
};

// define the drone factory by composing the functional mixins
const createDrone = ({ capacity = "3000mAh", label = "genericDrone", idNumber = "00-00" }) =>
  pipe(
    withFlying,
    withBattery({ capacity }),
    withLabel({ label }),
    withID({ idNumber }),
  )({});

// use factory to create a new drone object
const myDrone = createDrone({
  capacity: "5500mAh",
  label: "My 1st Drone",
  idNumber: "18-19"
});

// check the drones functionality
console.log(`identity: ${JSON.stringify(myDrone.identify())}
can fly:  ${myDrone.fly().isFlying() === true}
can land: ${myDrone.land().isFlying() === false}
battery capacity: ${myDrone.getCapacity()}
battery status: ${myDrone.draw(50).getCharge()}%
battery drained: ${myDrone.draw(75).getCharge()}%
`);

// identity: {"idNumber":"18-19","label":"My 1st Drone"}
// can fly:  true
// can land: true
// battery capacity: 5500mAh
// battery status: 50%
// battery drained: 0%