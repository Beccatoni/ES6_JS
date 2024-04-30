// getting a glimpse of this keyword

const video = {
    title: 'a',
    play(){
        console.log(this)
    }
};

// in the above code this refers to the object video

function playVideo(){
    console.log(this);
}
playVideo();