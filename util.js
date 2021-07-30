const Promise = require('bluebird');
Promise.config({longStackTraces: true, warnings: true})
const _ = require('lodash');
const FormData = require('form-data');


let serializeAsFormData = function (object, formData, path) {
    if (_.isNil(formData)) {
        formData = new FormData();
    }
    if (_.isNil(path)) {
        path = '';
    }

    if (_.isUndefined(object)) {
        return formData;
    } else if (_.isBoolean(object)) {
        formData.append(path, object === true ? "true" : "false")
    } else if (_.isArray(object)) {

        if (_.isEmpty(object)) {
            let key = `${path}[]`;
            formData.append(key, '');
        } else {
            _.each(object, function (value) {
                let key = `${path}[]`;
                serializeAsFormData(value, formData, key);
            })
        }
    } else if (_.isDate(object)) {
        formData.append(path, object.toISOString());
    } else if (_.isPlainObject(object)) {
        _.each(object, function (value, property) {
            let key = _.isEmpty(path) ? property : `${path}['${property}']`;
            serializeAsFormData(value, formData, key);
        })
    } else {
        formData.append(path, object);
    }

    return formData;
}

let deepResolve = function (object) {
    if (_.isPlainObject(object)) {
        return Promise.props(_.mapValues(object, deepResolve));
    } else if (_.isArray(object)) {
        return Promise.map(object, deepResolve);
    } else {
        return Promise.resolve(object);
    }
}


module.exports = {
    deepResolve:deepResolve,
    serializeAsFormData: serializeAsFormData
}