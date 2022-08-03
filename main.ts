namespace loops {
    /**
     *  breaks a loop
     */
    //% block
    //% group=" On break"
    export function breakLoop(body: () => void): void {
        while (true) {
           if (randint(0, 10) < 5) {
               break; 
            }
        } 
    }
}
