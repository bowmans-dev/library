### Protocol Buffers Crash Course https://www.youtube.com/watch?v=46O73On0gyI
Hussein Nasser [ https://github.com/hnasr ]

### Protocol Buffers (Protobuf) is a method of serializing structured data, 
### useful for storing it on disk or sending over the wire. 

##### Benefits of ProtoBuf
##### * Schema 
##### * Binary compact size
##### * Language neutral 

##### Cons
##### * Have to have structured data (barrier to entry)
##### * More involved processed for small applications.
##### * Have to make sure to update compiled boilerplate code (bugs, security vulnerability, etc.)
##### * hard to use with JSON based application (Javascript/browser)

### To test:

### use either:
- `npm start` 
#### or 
- `node demoJson`
- will create a JSON file

### To test protocol buffer implementation:
`npm install google-protobuf`
 
### ProtoC compiler download **[select the latest compiler for your operating system]**
- https://github.com/protocolbuffers/pr...

### Optional:
### vscode-proto3 (Protobuf 3 support if your running in Visual Studio Code)

### Pre-fix following terminal command with locaion of your protoc download:
- `/protoc-3.19.1-osx-x86_64/bin/protoc --js_out=import_style=commonjs,binary:. employees.proto`

### To run protocol buffer implementation:
`node demoProtobuf`
- will create a binary file

### run `ls -lh` in your directory - compare file sizes

### Resources 

### protocol buffer javascript doc 
https://github.com/protocolbuffers/pr...

### Source Code
https://github.com/hnasr/javascript_p...
