console.log("Welcome to Brandify console")
const cursorCircle = document.getElementById('dbdcf329-7d66-7c77-f4a5-edb1a145648e')
const dot = document.getElementById('dot')

//corsur
document.addEventListener('mousemove', (e) => {
  let x = e.clientX
  let y = e.clientY
  cursorCircle.style['left'] = x + 'px';
  cursorCircle.style.top = y + 'px'
})

document.body.onpointermove = e => {
  dot.style.backgroundPositionX = e.clientX - 900 + 'px'
  dot.style.backgroundPositionY = e.clientY - 900 + 'px'
}

//workFlow

const workflow_marks = workflow.querySelectorAll(".body .mark");
const workflow_line = workflow.querySelector(".left-bar .line");
function getTop(elem) {
    let top = 0;
    while (elem) {
        top += elem.offsetTop;
        elem = elem.offsetParent;
    }
    return top;
}

function setup() {
    const top_space = workflow_marks[0].offsetTop + 20;
    workflow_line.style.marginTop = top_space + "px";
    workflow_line.maxHeight = workflow_marks[workflow_marks.length - 1].offsetTop + 20 - top_space;
}

function updateWorkflow() {
    let pageTop = document.scrollingElement.scrollTop;
    let top = pageTop + innerHeight * 0.7;
    workflow_line.style.height = Math.min(Math.max(0, top - getTop(workflow_line)), workflow_line.maxHeight) + "px";
    for (let mark of workflow_marks) {
        if (getTop(mark) < top) mark.parentElement.classList.add("visible");
        else mark.parentElement.classList.remove("visible");
    }
}

//updateWorkflowLine();
window.onscroll = updateWorkflow;
setup();
window.onresize = setup;

//navbar
const fc9d2d1819b1 = document.getElementById('edb0e1d1-b03d-a89a-ee13-fc9d2d1819b1')
const b7a7386db381 = document.getElementById('c31134c1-ad3c-ee29-0180-b7a7386db381')

window.addEventListener('scroll', () => {
    const sceoll = window.pageYOffset
    fc9d2d1819b1.style.transform = 'translate3d(0vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
    fc9d2d1819b1.style.width = '100%';
    fc9d2d1819b1.style.height = `${100 - sceoll}%`;
    fc9d2d1819b1.style.opacity = '1';
    if (`${100 - sceoll}` < 50) {
        fc9d2d1819b1.style.opacity = '0';
    }

    //other part
    b7a7386db381.style.opacity = '1';
    b7a7386db381.style.transformStyle = 'preserve-3d';
    b7a7386db381.style.width = '100%';
    b7a7386db381.style.height = `${100 - sceoll}%`;
    b7a7386db381.style.transform = `translate3d(0vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;

    if (`${100 - sceoll}` < 20) {
        b7a7386db381.style.width = `${200 - sceoll}%`;
    }

    if (`${200 - sceoll}` < 20) {
        b7a7386db381.style.opacity = '0';
    }
})