
import Joi from 'joi';


export const basicSchema = async ( fieldSchema, schema, key ) => {


    switch ( fieldSchema ) {
        case 'string':
            schema[key] = Joi.string();
            break;
        case 'number':
            schema[key] = Joi.number();
            break;
        case 'boolean':
            schema[key] = Joi.boolean();
            break;
        case 'object':
            schema[key] = Joi.object();
            break;
        case 'array':
            schema[key] = Joi.array();
            break;
        default:
            throw new Error( `Unsupported type: ${fieldSchema}` );
    }

    return schema[key];

}