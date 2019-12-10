namespace evt_test {
    //% mutate=objectdestructuring
    //% mutateText="My Arguments"
    //% mutatePropertyEnum="argNames"
    // ...
    export function addSomeEventHandler(arg1: string) {
        control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
            basic.showString(arg1)
        })

    };
}