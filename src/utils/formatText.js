/**
 * @function formatClassName
 * @description Removes spaces and replaces with dash line for use as class name
 * @returns {string} Formatted string
 */
const formatClassName = (text) => {
    return text.toLowerCase().replace(/\s/g, '-');
};

export { formatClassName };