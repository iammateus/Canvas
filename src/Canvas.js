var Canvas = function(params)
{  
    this.params = params;
    this.canvasContainer = document.getElementById(params.canvasId);
    this.blocksState = this.buildBlocksState();
    this.canvasDom = new CanvasDom(this);
    this.addEventListeners();
    this.isMouseDown = false;
};

Canvas.prototype.buildBlocksState = function()
{
    var canvasSize = this.params.size;
    var state = [];
    
    for (let rowsCounter = 0; rowsCounter < canvasSize; rowsCounter++) {
        
        var row = [];
        
        for (let columnCounter = 0; columnCounter < canvasSize; columnCounter++) {
            
            row.push({});
            
        }
        
        state.push(row);
        
    }
    
    return state;
}

Canvas.prototype.addEventListeners = function()
{
    this.canvasContainer.addEventListener('mousedown', this.canvasMousedown.bind(this));

    window.addEventListener('mouseup', this.canvasMouseup.bind(this));

    this.canvasContainer.addEventListener('mousemove', this.canvasMousemove.bind(this));
}

Canvas.prototype.canvasMousedown = function(event)
{
    event.preventDefault();
    this.isMouseDown = true;
}

Canvas.prototype.canvasMouseup = function(event)
{
    this.isMouseDown = false;
}

Canvas.prototype.canvasMousemove = function(event)
{
    var target = event.target; 

    if(this.isMouseDown){
        var targetX = target.getAttribute('x')
        var targetY = target.getAttribute('y');

        if(targetX && targetY){
            this.blocksState[targetX][targetY].backgroundColor = 'black';
            this.canvasDom.update();
        }
    }
}