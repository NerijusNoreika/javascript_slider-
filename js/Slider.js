class Slider {
    
    constructor(id, time, controls) {
        time === null ? this.time = 300 : this.time = time;
        id === null ? this.id = 'javascript-slider' : this.id = id;
        controls === null ? this.controls = false : this.controls = controls;
        this.run();

    }

    run() {
        let mainContainer = document.getElementById(this.id);
        
        if (!mainContainer) {
            console.error(`There is no main container. Fetching by '${this.id}' id, got: ${mainContainer} `)
            throw 'Wrong container id';
        }

        let imageCount = mainContainer.children.length;        
        let images = mainContainer.children;
        let index = 0;  
        images[index].classList.add('active');
        setInterval(function() {
            for(let i = 0 ; i < imageCount; i++) {
                if (images[i] == images[index]) {
                    images[index].classList.add('active');
                } else {
                    images[i].classList.remove('active');
                }
            }
            index++;
            index = index % imageCount;
        }, this.time);
            
    }
}

