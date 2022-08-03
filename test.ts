loops.breakLoop(function() {
    loop()
})
function loop() {
    
    for (let i = 0; i < 4; i++) {
        
        basic.showIcon(IconNames.Heart)
    }

    basic.showIcon(IconNames.Yes)
}