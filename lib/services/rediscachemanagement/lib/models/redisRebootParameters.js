/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the RedisRebootParameters class.
 * @constructor
 * Specifies which redis node(s) to reboot.
 *
 * @member {string} rebootType Which redis node(s) to reboot. Depending on
 * this value data loss is possible. Possible values include: 'PrimaryNode',
 * 'SecondaryNode', 'AllNodes'
 * 
 * @member {number} [shardId] In case of cluster cache, this specifies shard
 * id which should be rebooted.
 * 
 */
function RedisRebootParameters() {
}

/**
 * Defines the metadata of RedisRebootParameters
 *
 * @returns {object} metadata of RedisRebootParameters
 *
 */
RedisRebootParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'RedisRebootParameters',
    type: {
      name: 'Composite',
      className: 'RedisRebootParameters',
      modelProperties: {
        rebootType: {
          required: true,
          serializedName: 'rebootType',
          type: {
            name: 'String'
          }
        },
        shardId: {
          required: false,
          serializedName: 'shardId',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = RedisRebootParameters;