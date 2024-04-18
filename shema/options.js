import Joi from 'joi';



export const optionsSchema = ( fieldSchema, schema, key ) => {
    const type = fieldSchema.type;
    const options = fieldSchema.options || {};

    switch ( type ) {
        case 'string':
            schema[key] = Joi.string();
            if ( options.length ) {
                schema[key] = schema[key].length( options.length );
            }
            if ( options.email ) {
                schema[key] = schema[key].email();
            }
            break;
        case 'number':
            schema[key] = Joi.number();
            if ( options.min !== undefined ) {
                schema[key] = schema[key].min( options.min );
            }
            if ( options.max !== undefined ) {
                schema[key] = schema[key].max( options.max );
            }
            break;
        case 'boolean':
            schema[key] = Joi.boolean();
            break;
        case 'object':
            schema[key] = convertToJoiSchema( fieldSchema.fields );
            break;
        case 'array':
            schema[key] = Joi.array().items( convertToJoiSchema( fieldSchema.items ) );
            break;
        default:
            throw new Error( `Unsupported type: ${type}` );
    }

    if ( options.required ) {
        schema[key] = schema[key].required();
    }

    return schema[key];
}