## Install

´´´
npm install
´´´

## Config

Change values on .env file

### Usage

#### Routes

You can create routes on `src/routes/`. Create `index.ts` and `validators.ts` files.
On `index.ts` you will create the entrypoint of application, call validators and controller.
On `validators.ts` you will create a schema (with [joi](https://joi.dev/api/) lib) to validate the parameters, query and body
