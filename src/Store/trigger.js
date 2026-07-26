  let triggerfunction  = null;

  export function setTrigger(fn){
    triggerfunction = fn;
  }

  export function runTrigger(){
    if (triggerfunction){
        triggerfunction()
    }
  }