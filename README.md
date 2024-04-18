# Muralian Schema Generation

## Introduction

When working with data validation in JavaScript, it's common to use libraries like joi to define schemas and validate data against those schemas. However, manually creating schemas can be tedious and repetitive, especially when dealing with complex data structures.

To simplify the process, we have created a utility function called `Muralian` that dynamically generates Joi schemas based on a provided structure object. This allows us to define the structure of our data in a more concise and readable manner.

## Usage

To use the `muralianSchema` function, follow these steps:

1. Install the Joi library by running `npm install muralian` in your project directory.

2. Import the Joi library and the `muralianSchema` function in your JavaScript file:

      ```javascript
      import {muralianSchema} from "muralian";
      ```

3. Define the structure of your data using a JavaScript object. The structure object should follow these guidelines:

      - Each key in the structure object represents a field in your data.
      - The value of each key can be either a simple type string (`'string'`, `'number'`, `'boolean'`, `'object'`, `'array'`) or a detailed type definition object.
      - For detailed type definitions, use the following format:
           ```javascript
           {
             type: 'string', // or 'number', 'boolean', 'object', 'array'
             required: true, // optional, indicates if the field is required
             options: {
               min: 2, // optional, minimum length for strings or minimum value for numbers
               max: 50, // optional, maximum length for strings or maximum value for numbers
               email: true, // optional, indicates if the field should be a valid email
             },
           }
           ```

      Example structure:

      ```javascript
      const structure = {
              name: {
                      type: "string",
                      required: true,
                      options: {min: 2, max: 50},
              },
              age: {type: "number", required: true},
              email: {type: "string", required: true, options: {email: true}},
              isStudent: "boolean",
              address: {type: "object", required: true},
              hobbies: "array",
      };
      ```

4. Call the `muralianSchema` function, passing the structure object as an argument:

      ```javascript
      const schema = muralianSchema(structure);
      ```

5. Use the generated muralian schema to validate your data:
      ```javascript
      const {error, value} = schema.validate(data);
      if (error) {
              console.log("Validation failed:", error.details[0].message);
      } else {
              console.log("Validation passed:", value);
      }
      ```

## Supported Types and Options

The `muralianSchema` function supports the following types and options:

- `string`: Represents a string field.

     - `min`: Optional, specifies the minimum length of the string.
     - `max`: Optional, specifies the maximum length of the string.
     - `email`: Optional, indicates if the string should be a valid email.

- `number`: Represents a number field.

- `boolean`: Represents a boolean field.

- `object`: Represents an object field.

     - The value should be another structure object defining the nested fields.

- `array`: Represents an array field.
     - The value should be a structure object defining the items of the array.

## Conclusion

By using the `muralianSchema` function, you can easily generate Joi schemas based on a provided structure object. This approach reduces the amount of boilerplate code required and makes your data validation logic more maintainable.

Remember to handle any validation errors appropriately in your application and provide meaningful error messages to the users.

Happy validating!
