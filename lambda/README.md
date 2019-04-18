#### Setup

for billing create a `env.yml` file with the following content:
```
production:
  stripeSecretKey: "<key>"

default:
  stripeSecretKey: "<key>"

```

#### Testing Services 

e.g testing billing service

`serverless invoke local --function billing --path mocks/billing-event.json`

#### Installing

```
npm install -g serverless
npm install -g yarn`
yarn install
```
#### Packaging 

`serverless package`


#### Deploying
`serverless deploy`