import Joi from 'joi';
import { basicSchema } from './shema/basic.js';
import { optionsSchema } from './shema/options.js';

export const muralianSchema = async ( structure ) => {


    if ( typeof structure !== "object" || structure === null ) {
        throw new Error( 'Invalid JSON Structure - Muralian' );
    }

    const schema = {};

    for ( const key in structure ) {
        if ( structure.hasOwnProperty( key ) ) {
            const fieldSchema = structure[key];

            if ( typeof fieldSchema === 'object' && !Array.isArray( fieldSchema ) ) {
                schema[key] = await optionsSchema( fieldSchema, schema, key );
            } else {
                schema[key] = await basicSchema( fieldSchema, schema, key );
            }
        }
    }

    return Joi.object( schema );
}