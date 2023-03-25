/**
 * @function throttle
 * @description Function that prevents triggering of the same event within a specified period of time
 * @param {*} callback Function to return after waiting period
 * @param {*} limit Amount of time to wait
 * @returns 
 */
const throttle  = (callback, limit) => {
    var waiting = false;                      // Initially, we're not waiting
    return function () {                      // We return a throttled function
        if (!waiting) {                       // If we're not waiting
            callback.apply(this, arguments);  // Execute users function
            waiting = true;                   // Prevent future invocations
            setTimeout(function () {          // After a period of time
                waiting = false;              // And allow future invocations
            }, limit);
        }
    }
};

export {
    throttle
};
