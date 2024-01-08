// Function to convert array to object
const convertToObject = (data, idFieldName = 'id') => {
    return data.reduce((acc, item) => {
        acc[item[idFieldName]] = item.value;
        return acc;
    }, {});
};

// Function to convert object to array
const convertToArray = (data, idFieldName = 'id') => {
    return Object.keys(data).map(key => ({
        [idFieldName]: key,
        value: data[key]
    }));
};

const formFields = [
    { id: 'login', value: 'john.doe' },
    { id: 'password', value: 'secret' }
]

const formData = convertToObject(formFields, 'id')

/**
 * {
 *   login: 'john.doe',
 *   password: 'secret'
 * }
 */
console.log(formData)

const backConverted = convertToArray(formData, 'name')

/**
  * [
  *   { name: 'login', value: 'john.doe' },
  *   { name: 'password', value: 'secret' }
  * ]
 */
console.log(backConverted)
