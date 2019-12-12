//% color=190 weight=100 icon="\uf1ec" block="Event Blocks"
namespace evt_test {
    let num = 0

    //% block
    export function helloWorld() {

    }

    /**
     * Events can have arguments before the handler
     */
    //% block="on loop"
    export function onLoop() {
        control.raiseEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_CLICK)
        basic.pause(1000)
    }

    /**
     * Events can have arguments before the handler
     */
    //% block="on Subscribe topic $topic"
    export function onSubscribe(topic: string, handler: () => void) {
        basic.showString(topic)

    }

    //% block="catch Event"
    export function catchEvent(handler: () => void) {
        control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
            handler()
        })
    }

    //% block="$myParam"
    //% myParam.shadow="myShadowBlockID"
    function myFunction(myParam: number): void {
        
    }


}