//% color=190 weight=100 icon="\uf1ec" block="Event Blocks"
namespace evt_test {
    let num = 0

    //% block
    export function helloWorld() {

    }

    /**
     * Events can have arguments before the handler
     */
    //% block="on loop $topic"
    export function onLoop(topic: string, handler: () => void)
    {
        while(true)
        {
            basic.showNumber(num)
            basic.pause(100)
            num++
        }
    }

    /**
     * Events can have arguments before the handler
     */
    //% block="on Subscribe topic $topic"
    export function onSubscribe(topic: string, handler: () => void) {
        basic.showString(topic)

    }

}