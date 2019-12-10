//% color=190 weight=100 icon="\uf1ec" block="Event Blocks"
namespace evt_test {
    //% block
    export function helloWorld() {

    }

    /**
     * Events can have arguments before the handler
     */
    //% block="on Subscribe topic $topic"
    export function onSubscribe(topic: string, handler: () => void) {

        control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
            basic.showString(topic)

        })

    }

}