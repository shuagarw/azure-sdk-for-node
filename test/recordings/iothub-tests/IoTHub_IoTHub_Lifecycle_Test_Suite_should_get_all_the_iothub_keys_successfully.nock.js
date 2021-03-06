// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = '91d12660-3dec-467a-be2a-213b5544ddc0';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"lzj8SrmAPyQZlb5DZK7yQQG7Xw2OKlrc34A3KsM7/4c=\",\"secondaryKey\":\"z84TBbqTqcrpVjExEvQSdWBj/G9NlLBBHOqx9RG4klU=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"CRrfbdty2wzF//y5SL1jIYGtWetpjIimKU2zKSUEfGw=\",\"secondaryKey\":\"fvA6Fa5V62O1oWFx+Ock7QXy511E3+aIAXSApkOJReI=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"DOF1Rl4twOXwO8gkMVU7C9e4OVGrHZKQUeOW6EVOLUA=\",\"secondaryKey\":\"UTfeL/TO915tSqBL5slcdrUggbilz4WJWvk88Ej3JFE=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"7p0YBeDabyHBfwfLd1qOYPaIleI4NUT8TwqzAgOBBiQ=\",\"secondaryKey\":\"nQxt8O9+O0xFdkVzY7nC0mXlnwJ5G/3iZF0JhknkOEY=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"VEosWMvlS6kM4En3jUtaxcdARAel3fSVKPF3YKTfWko=\",\"secondaryKey\":\"ImM2X04Rlr2jmD6o9y/tnRaNjl0wvtZwn4BzgIq3OYg=\",\"rights\":\"RegistryWrite\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '905',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'ded23ed6-cf9e-42e8-a7e1-d38d16e41b1d',
  'x-ms-correlation-request-id': 'ded23ed6-cf9e-42e8-a7e1-d38d16e41b1d',
  'x-ms-routing-request-id': 'WESTUS:20160718T192204Z:ded23ed6-cf9e-42e8-a7e1-d38d16e41b1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Jul 2016 19:22:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/91d12660-3dec-467a-be2a-213b5544ddc0/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub/listkeys?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"keyName\":\"iothubowner\",\"primaryKey\":\"lzj8SrmAPyQZlb5DZK7yQQG7Xw2OKlrc34A3KsM7/4c=\",\"secondaryKey\":\"z84TBbqTqcrpVjExEvQSdWBj/G9NlLBBHOqx9RG4klU=\",\"rights\":\"RegistryWrite, ServiceConnect, DeviceConnect\"},{\"keyName\":\"service\",\"primaryKey\":\"CRrfbdty2wzF//y5SL1jIYGtWetpjIimKU2zKSUEfGw=\",\"secondaryKey\":\"fvA6Fa5V62O1oWFx+Ock7QXy511E3+aIAXSApkOJReI=\",\"rights\":\"ServiceConnect\"},{\"keyName\":\"device\",\"primaryKey\":\"DOF1Rl4twOXwO8gkMVU7C9e4OVGrHZKQUeOW6EVOLUA=\",\"secondaryKey\":\"UTfeL/TO915tSqBL5slcdrUggbilz4WJWvk88Ej3JFE=\",\"rights\":\"DeviceConnect\"},{\"keyName\":\"registryRead\",\"primaryKey\":\"7p0YBeDabyHBfwfLd1qOYPaIleI4NUT8TwqzAgOBBiQ=\",\"secondaryKey\":\"nQxt8O9+O0xFdkVzY7nC0mXlnwJ5G/3iZF0JhknkOEY=\",\"rights\":\"RegistryRead\"},{\"keyName\":\"registryReadWrite\",\"primaryKey\":\"VEosWMvlS6kM4En3jUtaxcdARAel3fSVKPF3YKTfWko=\",\"secondaryKey\":\"ImM2X04Rlr2jmD6o9y/tnRaNjl0wvtZwn4BzgIq3OYg=\",\"rights\":\"RegistryWrite\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '905',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'ded23ed6-cf9e-42e8-a7e1-d38d16e41b1d',
  'x-ms-correlation-request-id': 'ded23ed6-cf9e-42e8-a7e1-d38d16e41b1d',
  'x-ms-routing-request-id': 'WESTUS:20160718T192204Z:ded23ed6-cf9e-42e8-a7e1-d38d16e41b1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 18 Jul 2016 19:22:04 GMT',
  connection: 'close' });
 return result; }]];