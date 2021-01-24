const body = document.querySelector('body');
        body.addEventListener('mousemove', eventHandler);

        function eventHandler(event){
            console.log(`event type : ${event.type}`);
          var deger  = `Mouse X: ${event.offsetX} Mouse Y: ${event.offsetY}`;
          console.log(deger);
          
          const degis = document.querySelector("body");
          degis.style.backgroundPositionX = event.offsetX + "px";
          degis.style.backgroundPositionY = event.offsetY + "px";
        }