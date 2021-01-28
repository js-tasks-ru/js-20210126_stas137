/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

    const copy_fields = [...fields]; 
    let res_obj = {};

        for (let [key, value] of Object.entries(obj)){
            if (copy_fields.includes(key)){
                res_obj[key] = value;
            }
        }

    return res_obj;
};
