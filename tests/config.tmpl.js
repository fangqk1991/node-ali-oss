module.exports = {
  aliyunOSS: {
    visitor: {
      region: '<OSS region>',
      accessKeyId: '<OSS accessKeyId>',
      accessKeySecret: '<OSS accessKeySecret>',
      bucket: '<OSS bucket name>',
    },
    uploader: {
      region: '<OSS region>',
      accessKeyId: '<OSS accessKeyId>',
      accessKeySecret: '<OSS accessKeySecret>',
      bucket: '<OSS bucket name>',
    },
    signature: {
      accessKeyId: '<OSS accessKeyId>',
      accessKeySecret: '<OSS accessKeySecret>',
      bucketURL: '<OSS bucketURL>',
      timeout: 300,
    },
  },
}
